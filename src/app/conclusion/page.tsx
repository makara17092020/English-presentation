'use client';

import { motion } from 'framer-motion';

export default function ConclusionPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-white px-6 text-center py-20">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-green-900 mb-8"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Conclusion 🌿
      </motion.h1>

      <motion.p
        className="max-w-4xl text-lg md:text-xl text-green-800 leading-relaxed"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Protecting our environment is essential for the health of our planet and future generations.
        By understanding the issues and embracing sustainable solutions, each of us can make a
        positive impact. Together, we can create a cleaner, greener, and healthier world.
      </motion.p>

    </div>
  );
}
