import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import danceImg from "@/assets/culture-dance.jpg";
import textileImg from "@/assets/culture-textile.jpg";
import foodImg from "@/assets/culture-food.jpg";
import { motion } from "framer-motion";
import { useCulture } from "@/hooks/use-api";

export const Route = createFileRoute("/culture")({
  head: () => ({
    meta: [
      { title: "Cultural Hub — Cameroon Culture Tongues" },
      { name: "description", content: "Explore Cameroon's foods, dances, textiles, festivals, proverbs, and folktales." },
    ],
  }),
  component: CulturePage,
});

const images = { dance: danceImg, food: foodImg, textile: textileImg };

function CulturePage() {
  const { items, proverbs } = useCulture();
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-36 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Cultural Hub</div>
          <h1 className="font-display text-5xl md:text-6xl mb-4">The <span className="text-gradient-gold">soul</span> behind the words</h1>
          <p className="text-muted-foreground max-w-2xl">Foods, dances, textiles, festivals and folktales — every lesson lives inside a culture. Wander here.</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.article key={it.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img src={images[it.image]} alt={it.title} loading="lazy" width={1200} height={900} className="size-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] glass rounded-full px-3 py-1 text-gold">{it.tag}</div>
              </div>
              <div className="p-6">
                <div className="font-display text-2xl mb-2">{it.title}</div>
                <div className="text-sm text-muted-foreground">{it.description}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-3 text-center">Wisdom of the elders</div>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-12">Proverbs that <span className="text-gradient-gold">outlive empires</span>.</h2>
          <div className="space-y-4">
            {proverbs.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-7">
                <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-2">{p.lang}</div>
                <div className="font-display text-2xl md:text-3xl mb-2">"{p.text}"</div>
                <div className="text-sm text-muted-foreground italic">— {p.meaning}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
