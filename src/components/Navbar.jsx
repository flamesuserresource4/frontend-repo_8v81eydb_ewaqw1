import { useState } from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-zinc-900/70 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-emerald-500 text-white">
              <Rocket size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight">FlarePay</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600 dark:text-zinc-300">
            <a href="#features" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium rounded-md border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">Sign in</button>
            <a href="#pricing" className="px-4 py-2 text-sm font-medium rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:opacity-90 transition-opacity">Get started</a>
          </div>

          <button aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-zinc-200 dark:border-zinc-800" onClick={() => setOpen(!open)}>
            <span className="sr-only">Toggle Menu</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-sm">
              <a href="#features" className="px-3 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800">Features</a>
              <a href="#pricing" className="px-3 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800">Pricing</a>
              <a href="#contact" className="px-3 py-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800">Contact</a>
              <div className="flex gap-2 pt-2">
                <button className="flex-1 px-4 py-2 text-sm font-medium rounded-md border border-zinc-200 dark:border-zinc-800">Sign in</button>
                <a href="#pricing" className="flex-1 px-4 py-2 text-sm font-medium rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-center">Get started</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
