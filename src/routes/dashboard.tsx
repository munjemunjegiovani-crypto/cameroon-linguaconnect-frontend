import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Trophy, Flame, BookOpen, Star, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useDashboard } from "@/hooks/use-api";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Your Dashboard — Cameroon Culture Tongues" },
      { name: "description", content: "Track your XP, streaks, lessons completed and badges earned." },
    ],
  }),
  component: DashboardPage,
});

const statStyles = {
  streak: { icon: Flame, color: "from-[var(--terracotta)] to-[var(--gold)]" },
  xp: { icon: Star, color: "from-[var(--gold)] to-yellow-500" },
  lessons: { icon: BookOpen, color: "from-[var(--forest)] to-[var(--primary)]" },
  rank: { icon: Trophy, color: "from-[var(--terracotta)] to-red-500" },
};

function DashboardPage() {
  const { user, stats: statData, lessons, badges } = useDashboard();
  const stats = statData.map(s => ({ ...s, ...statStyles[s.key] }));
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap justify-between items-end gap-4 mb-10">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Welcome back</div>
              <h1 className="font-display text-5xl md:text-6xl">Akiba, <span className="text-gradient-gold">{user.name}</span></h1>
              <p className="text-muted-foreground mt-2">You're closer to your roots than you were yesterday.</p>
            </div>
            <div className="glass rounded-2xl px-5 py-3 text-sm">Today's goal: <span className="text-gold font-medium">{`${user.dailyGoalXp} XP`}</span></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glass rounded-2xl p-6">
                <div className={`size-11 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4`}>
                  <s.icon className="size-5 text-background" />
                </div>
                <div className="font-display text-3xl">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-10">
            <div className="lg:col-span-2 glass rounded-2xl p-7">
              <div className="font-display text-2xl mb-5">Continue learning</div>
              <div className="space-y-4">
                {lessons.map(l => (
                  <div key={l.title} className="p-4 rounded-xl hover:bg-white/[0.03] transition">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-gold">{l.lang}</div>
                        <div className="text-sm">{l.title}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">{l.progress}%</div>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[var(--gold)] to-[var(--terracotta)]" style={{ width: `${l.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-7">
              <div className="font-display text-2xl mb-5">Badges</div>
              <div className="grid grid-cols-2 gap-3">
                {badges.map(b => (
                  <div key={b.name} className="rounded-xl glass p-4 text-center">
                    <Award className="size-7 mx-auto text-gold mb-2" />
                    <div className="text-sm font-medium">{b.name}</div>
                    <div className="text-[10px] text-muted-foreground mt-1">{b.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
