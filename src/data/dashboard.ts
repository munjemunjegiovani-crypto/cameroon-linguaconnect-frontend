// Built-in fallback content. The live version is served by the backend (GET /api/dashboard).
export type DashboardStat = {
  key: "streak" | "xp" | "lessons" | "rank";
  label: string;
  value: string;
};

export type DashboardLesson = {
  lang: string;
  title: string;
  progress: number;
};

export type DashboardBadge = {
  name: string;
  desc: string;
};

export type Dashboard = {
  user: { name: string; dailyGoalXp: number };
  stats: DashboardStat[];
  lessons: DashboardLesson[];
  badges: DashboardBadge[];
};

export const dashboard: Dashboard = {
  user: { name: "Aminatou", dailyGoalXp: 20 },
  stats: [
    { key: "streak", label: "Day streak", value: "12" },
    { key: "xp", label: "XP this week", value: "1,240" },
    { key: "lessons", label: "Lessons done", value: "38" },
    { key: "rank", label: "Rank", value: "#142" },
  ],
  lessons: [
    { lang: "Ewondo", title: "Greetings & introductions", progress: 100 },
    { lang: "Ewondo", title: "Family vocabulary", progress: 70 },
    { lang: "Duala", title: "At the market", progress: 45 },
    { lang: "Fulfulde", title: "Numbers 1–20", progress: 20 },
  ],
  badges: [
    { name: "First Word", desc: "Spoke your first phrase" },
    { name: "Elder Listener", desc: "Heard 50 native recordings" },
    { name: "Storyteller", desc: "Completed your first folktale" },
    { name: "Streak Keeper", desc: "10-day learning streak" },
  ],
};
