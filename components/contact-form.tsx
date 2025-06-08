"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input} from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    if (res.ok) setStatus("sent");
    else setStatus("error");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full mx-auto p-6"
    >

      {status === "sent" ? (
        <p className="text-pink-600">Merci, votre message a bien été envoyé.</p>
      ) : (
        
        <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-regularblue mb-2">M'envoyer un message</h2>
            <p className="mb-4">Vous préférez m'écrire&nbsp;? Remplissez le formulaire ci-dessous.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            required
            placeholder="Votre nom"
            className="w-full border px-4 py-2 rounded"
          />
          <Input
            type="email"
            name="email"
            required
            placeholder="Votre email"
            className="w-full border px-4 py-2 rounded"
          />
          <Textarea
            name="message"
            required
            placeholder="Votre message"
            rows={5}
            className="w-full border px-4 py-2 rounded"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="w-max gap-1 rounded-full px-6 py-2 text-white bg-regularblue hover:text-white hover:bg-regularblue/80 transition-all duration-900 ease-in-out"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Envoi en cours..." : "Envoyer"}
          </motion.button>
          {status === "error" && (
            <p className="text-pink-600 mt-2">Une erreur est survenue.</p>
          )}
        </form>
        </div>
      )}
    </motion.div>
  );
}
