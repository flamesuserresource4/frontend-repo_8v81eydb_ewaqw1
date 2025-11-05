import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />

        <section id="contact" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/60 backdrop-blur p-8">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">Talk to our team</h3>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300 max-w-prose">
                  Tell us about your product and we’ll help you design a launch plan, migrate payments, and boost acceptance rates globally.
                </p>
                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />24/7 support</li>
                  <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />Enterprise SLAs</li>
                  <li className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />White-glove onboarding</li>
                </ul>
              </div>
              <form className="grid grid-cols-1 gap-4">
                <input className="w-full rounded-md border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="Your name" />
                <input type="email" className="w-full rounded-md border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="Work email" />
                <textarea rows={4} className="w-full rounded-md border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="What are you building?" />
                <button type="button" className="inline-flex items-center justify-center rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-5 py-3 font-medium">Request demo</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600 dark:text-zinc-300">
          <p>© {new Date().getFullYear()} FlarePay Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Security</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Terms</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
