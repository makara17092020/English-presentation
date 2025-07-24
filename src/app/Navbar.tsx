'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Issues', href: '/issues' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Conclusion', href: '/conclusion' },
  { label: 'Thank', href: '/thank' },
];

export default function NavBar() {
  const pathname = usePathname();

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

        {/* Navigation */}
        <nav className="flex space-x-8 relative">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={`
                  relative px-3 py-1 font-medium text-white
                  hover:text-green-200 transition-colors duration-200
                  ${isActive ? 'text-green-300 font-semibold' : ''}
                `}
              >
                {label}

                {/* Active underline */}
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
    </header>
  );
}
