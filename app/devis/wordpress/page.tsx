"use client";

import { useState, useEffect } from 'react';

export default function EstimationForm() {
  const [formData, setFormData] = useState({
    structure: '',
    objectifs: [],
    autonomie: '',
    contenu: '',
    pages: [],
    contact: {
      email: '',
      phone: '',
    },
    estimation: null,
    sent: false,
  });

  // Ajout : recalcul dynamique de l'estimation
  useEffect(() => {
    const estimation = estimatePrice(formData);
    setFormData(prev => ({ ...prev, estimation }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    formData.structure,
    formData.objectifs,
    formData.autonomie,
    formData.contenu,
    formData.pages,
  ]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value, sent: false }));
  };

  const handleContactChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      contact: { ...prev.contact, [field]: value },
      sent: false,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/send-estimation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        calendlyLink: 'https://calendly.com/next-impact-digital/30min',
      }),
    });

    if (response.ok) {
      setFormData(prev => ({ ...prev, sent: true }));
    }
  };

  // Déplace estimatePrice ici pour qu'il soit accessible dans useEffect
  function estimatePrice(data) {
    let price = 800;
    if (data.objectifs.includes('dons')) price += 200;
    if (data.objectifs.includes('blog')) price += 150;
    if (data.objectifs.includes('portfolio')) price += 100;
    if (data.contenu === 'partiel') price += 150;
    if (data.contenu === 'aucun') price += 300;
    const pageCount = data.pages.length;
    if (pageCount > 5) price += (pageCount - 5) * 50;
    return price;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 space-y-6">
      <div>
        <label className="font-semibold">1. Quel est votre type de structure ?</label>
        <select
          value={formData.structure}
          onChange={(e) => handleChange('structure', e.target.value)}
          className="w-full border p-2 rounded"
          required
        >
          <option value="">Sélectionnez</option>
          <option value="association">Association</option>
          <option value="entreprise">Entreprise (TPE/PME)</option>
          <option value="independant">Indépendant / Artisan</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div>
        <label className="font-semibold">2. Objectif principal du site</label>
        <div className="space-y-1">
          {[
            { label: 'Présenter mon activité', value: 'vitrine' },
            { label: 'Être contacté facilement', value: 'contact' },
            { label: 'Publier des actualités', value: 'blog' },
            { label: 'Valoriser des projets / réalisations', value: 'portfolio' },
            { label: 'Collecter des dons ou adhésions', value: 'dons' },
          ].map(opt => (
            <div key={opt.value}>
              <label>
                <input
                  type="checkbox"
                  value={opt.value}
                  checked={formData.objectifs.includes(opt.value)}
                  onChange={(e) => {
                    const newList = e.target.checked
                      ? [...formData.objectifs, opt.value]
                      : formData.objectifs.filter(val => val !== opt.value);
                    handleChange('objectifs', newList);
                  }}
                  className="mr-2"
                />
                {opt.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className="font-semibold">3. Souhaitez-vous pouvoir modifier le site vous-même ?</label>
        <div className="space-y-1">
          {[
            { label: 'Oui', value: 'oui' },
            { label: 'Non', value: 'non' },
            { label: 'Peu importe', value: 'indifférent' },
          ].map(opt => (
            <div key={opt.value}>
              <label>
                <input
                  type="radio"
                  name="autonomie"
                  value={opt.value}
                  checked={formData.autonomie === opt.value}
                  onChange={(e) => handleChange('autonomie', e.target.value)}
                  className="mr-2"
                />
                {opt.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className="font-semibold">4. Quel est l'état de votre contenu ?</label>
        <div className="space-y-1">
          {[
            { label: 'Tout est prêt (textes + images)', value: 'complet' },
            { label: 'Une partie est prête', value: 'partiel' },
            { label: 'Tout est à créer', value: 'aucun' },
            { label: 'Je ne sais pas encore', value: 'inconnu' },
          ].map(opt => (
            <div key={opt.value}>
              <label>
                <input
                  type="radio"
                  name="contenu"
                  value={opt.value}
                  checked={formData.contenu === opt.value}
                  onChange={(e) => handleChange('contenu', e.target.value)}
                  className="mr-2"
                />
                {opt.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className="font-semibold">5. Quelles pages souhaitez-vous inclure ?</label>
        <div className="space-y-1">
          {[
            'Accueil',
            'À propos / Notre histoire',
            'Prestations / Services',
            'Actualités / Blog',
            'Projets / Galerie',
            'Contact avec formulaire',
            'Autre page spécifique',
          ].map(page => (
            <div key={page}>
              <label>
                <input
                  type="checkbox"
                  value={page}
                  checked={formData.pages.includes(page)}
                  onChange={(e) => {
                    const newList = e.target.checked
                      ? [...formData.pages, page]
                      : formData.pages.filter(p => p !== page);
                    handleChange('pages', newList);
                  }}
                  className="mr-2"
                />
                {page}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className="font-semibold">6. Vos coordonnées</label>
        <input
          type="email"
          placeholder="Votre adresse email"
          value={formData.contact.email}
          onChange={(e) => handleContactChange('email', e.target.value)}
          required
          className="w-full border p-2 rounded my-2"
        />
        <input
          type="text"
          placeholder="Votre téléphone (facultatif)"
          value={formData.contact.phone}
          onChange={(e) => handleContactChange('phone', e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Affichage dynamique de l'estimation */}
      {formData.estimation && (
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300 rounded">
          <p className="font-semibold">
            💡 Estimation de votre projet : à partir de {formData.estimation} € TTC
          </p>
          {!formData.sent && (
            <p className="text-sm mt-2 text-yellow-700">
              Cette estimation est indicative et s’ajuste selon vos choix ci-dessus.
            </p>
          )}
        </div>
      )}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Recevoir mon estimation
      </button>

      {formData.sent && (
        <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded">
          <p className="text-green-700 font-semibold">
            Votre estimation vous a été envoyée par e-mail. Merci !
          </p>
          <p className="mt-2">
            👉 <a
              href="https://calendly.com/next-impact-digital/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Planifier un appel gratuit de 30 min avec notre équipe
            </a>
          </p>
        </div>
      )}
    </form>
  );
}
