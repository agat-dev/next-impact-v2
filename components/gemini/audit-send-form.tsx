import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { marked } from "marked";
import { Button } from "../ui/button";

interface AuditSendFormProps {
  markdownPreview: string;
  markdownFull: string;
  url: string;
}

export default function AuditSendForm({ markdownPreview, markdownFull, url }: AuditSendFormProps) {
    // Pour la démo, seules les sections de l'étape 1 sont visibles
    const [showFormPopup, setShowFormPopup] = useState(false);
    const visibleSections = [
      "etape1", "secteur", "valeur", "preuve", "cibles"
    ];

    // Scroll dans la preview (à améliorer selon structure réelle)
    const handleScrollTo = (id: string) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    const handleRequestUnlock = () => setShowFormPopup(true);

    // Import du sommaire teasing
    const TeasingSummary = React.useMemo(() => require("./teasing-summary").default, []);
  const router = useRouter();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const res = await fetch("/api/send-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          company,
          email,
          url,
          markdown: markdownFull,
        }),
      });
      if (!res.ok) throw new Error("Erreur lors de l'envoi du mail");
      setSuccess(true);
      // Stocke l'audit dans sessionStorage et redirige
      sessionStorage.setItem('audit-result', markdownFull);
      router.push('/etudes-de-cas/audit-envoye');
    } catch (err: any) {
      setError(err.message || "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  };

  // Extraction robuste des réponses pour l'étape 1
  // Extraction fiabilisée pour le prompt fourni : récupère les réponses de la liste numérotée de l'étape 1
  const answers = React.useMemo(() => {
    const step1Match = markdownPreview.match(/\*\*Étape 1[^]*?(?=\*\*Étape 2|$)/i);
    const step1Text = step1Match ? step1Match[0] : markdownPreview;
    // Cherche les items de la liste numérotée
    const regex = /\d+\.\s*\*\*(.*?)\*\*\s*:?\s*(.*)/g;
    const result: Record<string, string> = {};
    let m;
    while ((m = regex.exec(step1Text)) !== null) {
      // m[1] = label, m[2] = réponse
      const key = m[1].toLowerCase().replace(/[^a-zàâçéèêëîïôûùüÿñæœ]/gi, "").replace(/['’]/g, "");
      result[key] = m[2].replace(/\*\*/g, "").trim();
    }
    // Pour compatibilité avec le sommaire
    return {
      secteur: result["secteurdactivite"] || "",
      valeur: result["propositiondevaleur"] || "",
      preuve: result["preuvetextuelle"] || "",
      cibles: result["ciblesprioritaires"] || "",
    };
  }, [markdownPreview]);
  // Extraction du contenu de l'étape 1 (tout le texte avant Étape 2)
  const step1Content = React.useMemo(() => {
    const match = markdownPreview.match(/([\s\S]*?)(^\s*\*\*Étape 2|^Étape 2)/m);
    return match ? match[1] : markdownPreview;
  }, [markdownPreview]);
  // Extraction du contenu de l'étape 2 (tout le texte à partir de Étape 2)
  const step2Content = React.useMemo(() => {
    const match = markdownPreview.match(/(^\s*\*\*Étape 2|^Étape 2)([\s\S]*)/m);
    return match ? match[2] : "";
  }, [markdownPreview]);
  // Conversion markdown -> HTML pour l'étape 1
  const htmlStep1 = React.useMemo(() => marked.parse(step1Content), [step1Content]);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-4 p-6 bg-slate-100 rounded-2xl shadow mt-8">
      <span className="w-max px-4 py-1 bg-coral rounded-full text-white font-googletitre text-xl">{url}</span>
      {/* Étape 1 complète, sans liens */}
      <div className="prose prose-lg dark:prose-invert" dangerouslySetInnerHTML={{ __html: typeof htmlStep1 === 'string' ? htmlStep1 : '' }} />
      <h2 className="font-googletitre text-3xl text-coral mb-2"><span className="font-semibold font-googletitre border-b-[3px] border-coral pb-2">Opportunité de migration</span></h2>
      {/* Sommaire interactif teasing pour Étape 2 */}
      <TeasingSummary
        onRequestUnlock={handleRequestUnlock}
        onScrollTo={handleScrollTo}
        visibleSections={visibleSections}
        answers={answers}
        markdownStep2={step2Content}
      />
      {/* Popup formulaire si besoin */}
      {showFormPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full relative">
            <button className="absolute top-2 right-2 text-coral text-2xl" onClick={() => setShowFormPopup(false)}>&times;</button>
            <div className="font-googletitre text-xl text-mediumblue mb-2">Débloquez l'audit complet</div>
            <div className="text-mediumblue mb-4">Remplissez le formulaire pour accéder à l'intégralité de l'audit et recevoir le PDF détaillé.</div>
            {/* Formulaire réutilisé */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input type="text" placeholder="Nom et prénom" className="w-full bg-white/70 border rounded-2xl p-2 focus-visible:bg-white" value={name} onChange={e => setName(e.target.value)} required />
              <input type="text" placeholder="Entreprise" className="w-full bg-white/70 border rounded-2xl p-2 focus-visible:bg-white" value={company} onChange={e => setCompany(e.target.value)} required />
              <input type="email" placeholder="Email" className="w-full bg-white/70 border rounded-2xl p-2 focus-visible:bg-white" value={email} onChange={e => setEmail(e.target.value)} required />
              <Button type="submit" className="bg-coral text-white font-googletitre font-semibold px-8 py-2 mt-2">DÉBLOQUER MON AUDIT COMPLET →</Button>
              {error && <div className="text-red-500 text-center">{error}</div>}
              {success && <div className="text-green-600 text-center">Audit envoyé avec succès !</div>}
            </form>
          </div>
        </div>
      )}
      <div className="w-full max-w-xl mx-auto bg-white rounded-2xl shadow-lg border-2 border-coral/70 p-6 flex flex-col gap-4 items-center mt-4 mb-2 relative">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white rounded-full shadow px-4 py-2 flex items-center gap-2 border border-coral/70">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" fill="#F87171"/><rect x="7" y="9" width="10" height="2" rx="1" fill="#fff"/><rect x="7" y="13" width="6" height="2" rx="1" fill="#fff"/></svg>
          <span className="text-coral font-googletitre text-base">Rapport de 12 pages inclus</span>
        </div>
        <div className="font-googletitre text-2xl text-coral text-center mt-6 mb-1">Débloquez l'accès complet à votre audit personnalisé</div>
        <div className="text-mediumblue text-center mb-2">Accédez aux scores techniques de <span className="font-semibold">{url}</span> et recevez votre rapport stratégique complet au format PDF par email.</div>
        <Button
          type="button"
          className="bg-coral text-white font-googletitre font-semibold px-8 py-3 mt-2 text-lg rounded-xl shadow-coral/20 shadow-lg hover:bg-coral/90 transition"
          onClick={() => setShowFormPopup(true)}
        >
          DÉBLOQUER MON AUDIT COMPLET →
        </Button>
      </div>
    </div>
  );
}
