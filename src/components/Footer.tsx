export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="size-9 rounded-xl bg-hero flex items-center justify-center font-display text-lg">C</div>
            <div>
              <div className="font-display text-lg">Cameroon Culture Tongues</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Preserving voices, awakening roots</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">A modern AI-powered platform devoted to teaching the indigenous languages and rich cultural heritage of Cameroon.</p>
        </div>
        <div>
          <div className="font-display mb-3">Learn</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Languages</li><li>AI Tutor</li><li>Lessons</li><li>Pronunciation</li>
          </ul>
        </div>
        <div>
          <div className="font-display mb-3">Community</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Culture Hub</li><li>Stories</li><li>Leaderboard</li><li>Donate</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Cameroon Culture Tongues. Made with love for Africa.</div>
    </footer>
  );
}
