'use client';

import { motion } from 'framer-motion';

export default function ThankPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-green-300 to-blue-400 px-6 text-center py-20">
      <motion.h1
        className="text-6xl font-extrabold text-white mb-6 drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Thank You! 🙏
      </motion.h1>

      <motion.p
        className="max-w-3xl text-xl text-white/90 leading-relaxed mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        We appreciate your time and attention. Let’s work together to protect our planet
        and ensure a sustainable future for all.
      </motion.p>

      <motion.button
        className="px-8 py-4 bg-white text-green-700 font-semibold rounded-full shadow-lg hover:bg-green-100 transition-colors"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        onClick={() => alert('Thank you for your support!')}
      >
        Close
      </motion.button>
    </div>
  );
}
