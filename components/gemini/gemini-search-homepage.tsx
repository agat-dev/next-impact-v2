import React, { useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function GeminiSearchHomepage() {
  const [url, setUrl] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      router.push(`/audit-site-ia?url=${encodeURIComponent(url)}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex flex-col gap-6 mx-auto"
    >
      <div className="flex items-end">
        <label
          htmlFor="gemini_url"
          className="font-googletexte text-white/80 "
        >
          URL WordPress à analyser
        </label>
      </div>
      <input
        id="gemini_url"
        className="w-2xl bg-white/80 border rounded-2xl p-2 -mt-4 mb-2 focus-visible:bg-white"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://test.com"
        required
        type="url"
        pattern="https?://.+"
      />
      <Button
        type="submit"
        variant="default"
        className="bg-lightyellow hover:bg-lightyellow/90 text-darkblue px-6 py-2 text-xl font-googletitre font-medium flex items-center justify-center"
        disabled={!url.trim()}
      >
        Lancer l'analyse
        <span className="ml-2 flex items-center text-darkblue">
          <ArrowRight className="size-5" />
        </span>
      </Button>
    </form>
  );
}