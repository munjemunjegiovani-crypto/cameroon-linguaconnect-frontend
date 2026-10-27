import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguages } from "@/hooks/use-api";
import { Search, Volume2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/languages")({
  head: () => ({
    meta: [
      { title: "Languages — Cameroon Culture Tongues" },
      { name: "description", content: "Browse and choose from Ewondo, Duala, Fulfulde, Basaa, Bamiléké, Kom, Bakweri, Hausa, Medumba and Lamnso'." },
    ],
  }),
  component: LanguagesPage,
});

function LanguagesPage() {
  const languages = useLanguages();
  const [q, setQ] = useState("");
  const [region, setRegion] = useState<string>("All");
  const regions = ["All", ...Array.from(new Set(languages.map(l => l.region)))];
  const filtered = languages.filter(l =>
    (region === "All" || l.region === region) &&
    (l.name.toLowerCase().includes(q.toLowerCase()) || l.greeting.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-36 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Library</div>
          <h1 className="font-display text-5xl md:text-6xl mb-4">Choose your <span className="text-gradient-gold">tongue</span></h1>
          <p className="text-muted-foreground max-w-2xl">Ten indigenous languages of Cameroon — each a doorway to a people, a region, a way of seeing the world.</p>

          <div className="mt-10 flex flex-wrap gap-3 items-center">
            <div className="glass rounded-full px-4 py-2 flex items-center gap-2 flex-1 min-w-[260px]">
              <Search className="size-4 text-muted-foreground" />
              <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search languages or greetings..." className="bg-transparent outline-none text-sm flex-1" />
            </div>
            <div className="flex flex-wrap gap-2">
              {regions.map(r => (
                <button key={r} onClick={() => setRegion(r)} className={`text-xs px-4 py-2 rounded-full transition ${region === r ? "bg-gold text-background" : "glass hover:bg-white/5"}`}>{r}</button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((l, i) => (
              <motion.div key={l.slug} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }} className="glass rounded-2xl p-7 hover:border-gold/50 transition group">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{l.region}</div>
                    <div className="font-display text-3xl mt-1">{l.name}</div>
                  </div>
                  <button className="size-10 rounded-full glass flex items-center justify-center hover:bg-gold hover:text-background transition" aria-label="play">
                    <Volume2 className="size-4" />
                  </button>
                </div>
                <div className="mt-5 pt-5 border-t border-border/50">
                  <div className="font-display text-4xl text-gradient-gold">{l.greeting}</div>
                  <div className="text-xs text-muted-foreground mt-1">"{l.meaning}"</div>
                </div>
                <p className="text-sm text-muted-foreground mt-4 line-clamp-3">{l.description}</p>
                <div className="flex justify-between items-center mt-5 text-xs">
                  <span className="text-muted-foreground">{l.speakers} speakers</span>
                  <span className="px-2 py-0.5 rounded-full glass text-gold">{l.difficulty}</span>
                </div>
                <Link to="/tutor" className="mt-5 block text-center text-sm rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--terracotta)] text-background font-medium py-2.5 hover:opacity-90">Start Learning</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
