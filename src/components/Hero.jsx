import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16 lg:py-24">
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur px-3 py-1 text-xs text-zinc-600 dark:text-zinc-300">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              New: Real-time risk scoring is here
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              The modern fintech engine for growing SaaS
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 max-w-prose">
              Accept payments globally, fight fraud with AI, and launch new revenue streams fast. A glassmorphic design system that feels futuristic yet familiar.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-5 py-3 font-medium">
                Get started free
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800 px-5 py-3 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800">
                Explore features
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
              <Stat label="Global cards" value="190+" />
              <Stat label="Uptime" value="99.99%" />
              <Stat label="Avg. approval" value="96%" />
            </div>
          </div>

          <div className="relative h-[460px] sm:h-[520px] lg:h-[600px]">
            <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent dark:from-zinc-950/60" />
            </div>
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute -z-0 left-1/2 top-0 -translate-x-1/2 h-[600px] w-[1200px] bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-emerald-500/0 blur-3xl" />
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur p-3">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-xs text-zinc-500 dark:text-zinc-400">{label}</div>
    </div>
  );
}
