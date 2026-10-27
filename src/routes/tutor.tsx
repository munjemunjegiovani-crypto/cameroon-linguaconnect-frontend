import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mic, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguages, askTutor } from "@/hooks/use-api";

export const Route = createFileRoute("/tutor")({
  head: () => ({
    meta: [
      { title: "AI Tutor — Cameroon Culture Tongues" },
      { name: "description", content: "Chat with an AI tutor that teaches Cameroonian languages, corrects pronunciation, and answers cultural questions." },
    ],
  }),
  component: TutorPage,
});

type Msg = { role: "user" | "ai"; text: string };

const seed: Msg[] = [
  { role: "ai", text: "Mbolo! I'm Nyanga, your AI culture tutor. Which language would you like to start with today?" },
];

function TutorPage() {
  const languages = useLanguages();
  const [messages, setMessages] = useState<Msg[]>(seed);
  const [input, setInput] = useState("");
  const [lang, setLang] = useState("Ewondo");

  async function send() {
    if (!input.trim()) return;
    const userText = input.trim();
    setMessages(m => [...m, { role: "user", text: userText }]);
    setInput("");
    const reply = await askTutor(userText, lang);
    setMessages(m => [...m, { role: "ai", text: reply }]);
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[280px_1fr] gap-6">
          <aside className="glass rounded-2xl p-5 h-fit">
            <div className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Tutor mode</div>
            <div className="font-display text-xl mb-4">Choose a language</div>
            <div className="space-y-1 max-h-[420px] overflow-auto pr-1">
              {languages.map(l => (
                <button key={l.slug} onClick={() => setLang(l.name)} className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${lang === l.name ? "bg-gold text-background" : "hover:bg-white/5"}`}>
                  {l.name} <span className="opacity-60 text-xs">· {l.region}</span>
                </button>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-border/50">
              <div className="text-xs text-muted-foreground mb-2">Difficulty</div>
              <div className="flex gap-1">
                {["Beginner", "Intermediate", "Advanced"].map(d => (
                  <button key={d} className="text-xs px-3 py-1.5 rounded-full glass hover:bg-white/5">{d}</button>
                ))}
              </div>
            </div>
          </aside>

          <div className="glass rounded-2xl flex flex-col h-[640px]">
            <div className="p-5 border-b border-border/50 flex items-center gap-3">
              <div className="size-10 rounded-xl bg-hero flex items-center justify-center"><Sparkles className="size-5" /></div>
              <div>
                <div className="font-display">Nyanga · AI Tutor</div>
                <div className="text-xs text-gold">Speaking {lang}</div>
              </div>
            </div>
            <div className="flex-1 overflow-auto p-5 space-y-4">
              {messages.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  {m.role === "ai" ? (
                    <div className="max-w-[75%] text-foreground">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-1">Nyanga</div>
                      <div className="text-sm leading-relaxed">{m.text}</div>
                    </div>
                  ) : (
                    <div className="max-w-[75%] rounded-2xl bg-gradient-to-br from-[var(--gold)] to-[var(--terracotta)] text-background px-4 py-2.5 text-sm">{m.text}</div>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="p-4 border-t border-border/50 flex items-center gap-2">
              <button className="size-11 rounded-full glass flex items-center justify-center hover:bg-white/5" aria-label="record"><Mic className="size-4 text-gold" /></button>
              <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && send()} placeholder={`Ask anything in ${lang}...`} className="flex-1 bg-transparent outline-none text-sm px-3" />
              <button onClick={send} className="size-11 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--terracotta)] text-background flex items-center justify-center hover:opacity-90"><Send className="size-4" /></button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
