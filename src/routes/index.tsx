import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Mic, Globe2, Trophy, BookOpen, Users, ArrowRight, Play } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import patternImg from "@/assets/pattern.jpg";
import danceImg from "@/assets/culture-dance.jpg";
import textileImg from "@/assets/culture-textile.jpg";
import foodImg from "@/assets/culture-food.jpg";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguages } from "@/hooks/use-api";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cameroon Culture Tongues — Learn Indigenous Cameroonian Languages with AI" },
      { name: "description", content: "An AI-powered platform to learn Ewondo, Duala, Fulfulde, Basaa, Bamiléké and more. Reconnect with your roots, preserve heritage, master pronunciation." },
      { property: "og:title", content: "Cameroon Culture Tongues" },
      { property: "og:description", content: "Learn the indigenous languages and cultures of Cameroon with AI." },
    ],
  }),
  component: Index,
});

const stats = [
  { v: "10+", l: "Languages" },
  { v: "250+", l: "Lessons" },
  { v: "12K", l: "Learners" },
  { v: "98%", l: "Loved it" },
];

const features = [
  { icon: Sparkles, t: "AI Tutor, anytime", d: "Conversational AI that teaches vocabulary, corrects you, and answers cultural questions." },
  { icon: Mic, t: "Pronunciation scoring", d: "Record your voice and compare with native speakers. Real waveform feedback." },
  { icon: Trophy, t: "Gamified lessons", d: "XP, streaks, leagues and badges. Learning that feels like a game." },
  { icon: Globe2, t: "Cultural Hub", d: "Folktales, foods, dances, proverbs — context that makes language come alive." },
  { icon: BookOpen, t: "Structured paths", d: "Beginner to advanced. Vocabulary, grammar, expressions, and oral tradition." },
  { icon: Users, t: "Living community", d: "Share recordings, ask elders, climb leaderboards, preserve together." },
];

function Index() {
  const languages = useLanguages();
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-[0.07]" style={{ backgroundImage: `url(${patternImg})`, backgroundSize: "320px" }} />
        <div className="absolute -top-40 -right-40 size-[600px] rounded-full bg-[var(--terracotta)]/20 blur-3xl -z-10" />
        <div className="absolute -bottom-40 -left-40 size-[600px] rounded-full bg-[var(--forest)]/30 blur-3xl -z-10" />

        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold mb-6">
              <span className="size-1.5 rounded-full bg-gold" /> Heritage meets AI
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-6">
              Speak the soul of <span className="text-gradient-gold">Cameroon</span>.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Learn Ewondo, Duala, Fulfulde, Basaa, Bamiléké and more — guided by an AI tutor, native voices, and a living cultural archive.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/languages" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--terracotta)] text-background font-medium px-6 py-3 shadow-glow hover:opacity-90 transition">
                Start Learning <ArrowRight className="size-4" />
              </Link>
              <Link to="/tutor" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 hover:bg-white/5 transition">
                <Play className="size-4 text-gold" /> Talk to AI Tutor
              </Link>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-12 max-w-md">
              {stats.map(s => (
                <div key={s.l}>
                  <div className="font-display text-2xl text-gold">{s.v}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img src={heroImg} alt="Cameroonian elder in traditional attire" width={1600} height={1280} className="w-full h-[560px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-gold mb-1">Today's word · Ewondo</div>
                <div className="font-display text-3xl">Mbolo</div>
                <div className="text-sm text-muted-foreground">Hello — a greeting that carries respect for elders.</div>
              </div>
            </div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-6 -left-6 glass rounded-2xl p-4 shadow-glow hidden md:block">
              <div className="text-xs text-muted-foreground">Streak</div>
              <div className="font-display text-2xl text-gold">🔥 12 days</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-14">
            <div className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Why we exist</div>
            <h2 className="font-display text-4xl md:text-5xl">A new way to <span className="text-gradient-gold">remember</span> who we are.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div key={f.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass rounded-2xl p-7 hover:border-gold/40 transition group">
                <div className="size-11 rounded-xl bg-gradient-to-br from-[var(--gold)] to-[var(--terracotta)] flex items-center justify-center mb-5 group-hover:scale-110 transition">
                  <f.icon className="size-5 text-background" />
                </div>
                <div className="font-display text-xl mb-2">{f.t}</div>
                <div className="text-sm text-muted-foreground">{f.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LANGUAGES PREVIEW */}
      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Choose your tongue</div>
              <h2 className="font-display text-4xl md:text-5xl">Ten languages. <span className="text-gradient-gold">One heritage.</span></h2>
            </div>
            <Link to="/languages" className="text-sm text-gold inline-flex items-center gap-1 hover:gap-2 transition-all">View all <ArrowRight className="size-4" /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {languages.slice(0, 8).map((l, i) => (
              <motion.div key={l.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                <Link to="/languages" className="block glass rounded-2xl p-6 hover:border-gold/50 hover:-translate-y-1 transition-all">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{l.region}</div>
                  <div className="font-display text-2xl mt-1">{l.name}</div>
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <div className="font-display text-3xl text-gradient-gold">{l.greeting}</div>
                    <div className="text-xs text-muted-foreground mt-1">"{l.meaning}"</div>
                  </div>
                  <div className="flex justify-between items-center mt-4 text-xs text-muted-foreground">
                    <span>{l.speakers} speakers</span>
                    <span className="text-gold">{l.difficulty}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE STRIP */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Culture is the soil</div>
            <h2 className="font-display text-4xl md:text-5xl">Language lives where <span className="text-gradient-gold">stories breathe</span>.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { img: danceImg, t: "Dances & Festivals", d: "From Bikutsi to the Ngondo, movement that tells history." },
              { img: foodImg, t: "Foods & Rituals", d: "Ndolé, eru, achu — flavors that bind generations." },
              { img: textileImg, t: "Textiles & Symbols", d: "Toghu, ndop, kente — patterns that speak before words." },
            ].map((c, i) => (
              <motion.div key={c.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative rounded-2xl overflow-hidden h-96">
                <img src={c.img} alt={c.t} loading="lazy" width={1200} height={900} className="absolute inset-0 size-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <div className="font-display text-2xl">{c.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{c.d}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="font-display text-3xl md:text-4xl leading-snug">
            "I grew up in Paris and never spoke my grandmother's Bamiléké. After three months here, I called her — and we cried."
          </div>
          <div className="mt-6 text-sm text-muted-foreground">— Aïcha N., diaspora learner</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative rounded-3xl overflow-hidden bg-hero p-12 md:p-16 text-center shadow-elegant">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${patternImg})`, backgroundSize: "240px" }} />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-5xl text-background mb-4">Your roots are calling.</h2>
              <p className="text-background/80 max-w-xl mx-auto mb-8">Start with a single word today. Carry a culture forward tomorrow.</p>
              <Link to="/languages" className="inline-flex items-center gap-2 rounded-full bg-background text-foreground font-medium px-7 py-3.5 hover:scale-105 transition">
                Choose your language <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
