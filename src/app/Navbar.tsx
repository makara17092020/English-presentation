'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Agenda', href: '/agenda' }, 
  { label: 'Issues', href: '/issues' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Conclusion', href: '/conclusion' },
  { label: 'Thank', href: '/thank' },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-green-700/95 backdrop-blur-md text-white shadow-lg border-b border-green-600 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center gap-2 select-none">
          <div className="bg-white text-green-700 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg shadow">
            🌿
          </div>
          <h1 className="text-2xl font-semibold tracking-wide">EnviroSite</h1>
        </div>

        {/* Hamburger Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`
                  relative px-3 py-1 font-medium transition-colors
                  ${isActive ? 'text-green-300 font-semibold' : 'text-white hover:text-green-200'}
                `}
              >
                {label}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 right-0 bottom-0 h-1 bg-green-300 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      exit={{ width: 0 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-green-700/95 px-6 pb-4"
          >
            <ul className="space-y-4 text-lg font-medium">
              {navItems.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={`
                        block py-1 transition
                        ${isActive ? 'text-green-300 font-semibold' : 'text-white hover:text-green-200'}
                      `}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
