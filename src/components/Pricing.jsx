export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">Start free. Scale when you’re ready. No setup fees or hidden charges.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Plan
            name="Starter"
            price="$0"
            period="/mo"
            highlight={false}
            bullets={[
              'Up to 1k transactions/mo',
              'Basic analytics',
              'Standard support',
              'Developer sandbox'
            ]}
            cta="Start free"
          />

          <Plan
            name="Scale"
            price="$199"
            period="/mo"
            highlight
            bullets={[
              'Unlimited transactions',
              'Advanced insights',
              'Priority support',
              'Dedicated success manager'
            ]}
            cta="Get started"
          />
        </div>
      </div>
    </section>
  );
}

function Plan({ name, price, period, bullets, cta, highlight }) {
  return (
    <div className={`relative rounded-2xl border ${highlight ? 'border-indigo-400/50' : 'border-zinc-200 dark:border-zinc-800'} bg-white/60 dark:bg-zinc-900/60 backdrop-blur p-6`}>      
      {highlight && (
        <div className="absolute -top-3 right-4 px-2 py-1 text-xs rounded-full bg-gradient-to-r from-indigo-500 to-emerald-500 text-white shadow">
          Most popular
        </div>
      )}
      <div className="flex items-end gap-2">
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-zinc-500 dark:text-zinc-400">{period}</span>
      </div>
      <ul className="mt-6 space-y-2 text-sm">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {b}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <a href="#" className={`inline-flex w-full items-center justify-center rounded-md px-4 py-2 font-medium transition-colors ${highlight ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900' : 'border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800'}`}>
          {cta}
        </a>
      </div>
    </div>
  );
}
