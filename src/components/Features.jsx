import { CreditCard, Shield, Rocket, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: CreditCard,
    title: 'Global payments',
    desc: 'Accept cards and wallets in 190+ countries with automatic currency conversion.'
  },
  {
    icon: Shield,
    title: 'Glass-secure',
    desc: 'AI fraud prevention and risk scoring built into every transaction in real-time.'
  },
  {
    icon: BarChart3,
    title: 'Actionable insights',
    desc: 'Revenue analytics, cohort trends, and churn forecasting at a glance.'
  },
  {
    icon: Rocket,
    title: 'Scale fast',
    desc: 'Robust APIs and webhooks to launch new products without breaking a sweat.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything you need to run fintech at scale</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">Designed with a glassmorphic aesthetic and built for serious performance.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} Icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ Icon, title, desc }) {
  return (
    <div className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur p-6 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-emerald-500 text-white shadow-md">
        <Icon size={20} />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{desc}</p>
      <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
    </div>
  );
}
