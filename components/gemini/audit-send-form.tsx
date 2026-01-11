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

  const htmlPreview = React.useMemo(() => marked.parse(markdownPreview), [markdownPreview]);
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-4 p-6 bg-white/5 rounded-2xl shadow mt-8">
      <h2 className="font-semibold text-2xl text-extralightblue text-center mb-2">Recevoir l'audit par email</h2>
        <div className="text-center text-extralightblue/90 mb-4">Veuillez remplir le formulaire ci-dessous pour recevoir l'audit complet de votre site web ({url}) à l'adresse email indiquée.</div>
      <div className="bg-slate-100 rounded p-4 text-sm text-extralightblue/80 mb-4 prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: htmlPreview }} />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nom et prénom"
          className="w-full bg-white/80 border rounded-2xl p-2 -mt-2.5 focus-visible:bg-white"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Entreprise"
          className="w-full bg-white/80 border rounded-2xl p-2 -mt-2.5 focus-visible:bg-white"
          value={company}
          onChange={e => setCompany(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-white/80 border rounded-2xl p-2 -mt-2.5 focus-visible:bg-white"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Button
          type="submit"
          className="mt-4 shadow-md shadow-white/20"
          disabled={loading}
        >
          Accéder l'audit complet
        </Button>
        {error && <div className="text-red-500 text-center">{error}</div>}
        {success && <div className="text-green-600 text-center">Audit envoyé avec succès !</div>}
      </form>
    </div>
  );
}
