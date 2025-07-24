'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThankPage() {
  const [closed, setClosed] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-green-300 to-green-400 px-6 text-center py-20">
      <AnimatePresence>
        {!closed ? (
          <motion.div
            key="thank-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
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
              className="px-8 py-4 cursor-pointer bg-white text-green-700 font-semibold rounded-full shadow-lg hover:bg-green-100 transition-colors"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              onClick={() => setClosed(true)}
            >
              Close
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="support-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white drop-shadow-md">
              Thank you for your support! 💚
            </h2>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
