'use client';

import { motion } from 'framer-motion';

export default function AgendaPage() {
  return (
    <div className="space-y-4 p-6 md:p-12 bg-gradient-to-b from-green-50 to-white min-h-screen">
      <h1 className="text-4xl font-bold text-green-800 text-center mb-16">
        Environmental Protection Agenda 
      </h1>

      {/* Section: Issues */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg rounded-xl p-8 border-l-4 border-green-600"
      >
        <h2 className="text-3xl font-bold text-green-700 mb-2">🧩 Issues</h2>
      </motion.section>

      {/* Section: Solutions */}
      <motion.section
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg rounded-xl p-8 border-l-4 border-green-600"
      >
        <h2 className="text-3xl font-bold text-green-700 mb-2">🛠️ Solutions</h2>
      </motion.section>

      {/* Section: Conclusion */}
      <motion.section
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg rounded-xl p-8 border-l-4 border-green-600"
      >
        <h2 className="text-3xl font-bold text-green-700 mb-2">📌 Conclusion</h2>
      </motion.section>

      {/* Section: Q&A */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg rounded-xl p-8 border-l-4 border-green-600"
      >
        <h2 className="text-3xl font-bold text-green-700 mb-2">❓ Q & A</h2>
      </motion.section>
    </div>
  );
}
