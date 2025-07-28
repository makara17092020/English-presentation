'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const qaData = [
  {
    question: 'Why is climate change a serious issue?',
    answer: 'Climate change makes the Earth hotter, causes floods, and bad weather. This can hurt animals, plants, and people.',
  },
  {
    question: 'What can we do to reduce pollution?',
    answer: 'We can help by recycling, using products that don’t harm nature, and using clean energy like solar or wind power.',
  },
  {
    question: 'Why is biodiversity important?',
    answer: 'Biodiversity means many different plants and animals. It keeps nature balanced and gives us food, medicine, and clean air.',
  },
];

export default function QAPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-6 md:p-12">
      <h1 className="text-5xl font-bold text-green-800 text-center mb-8 drop-shadow-md">
        Question & Answer
      </h1>

      <div className="text-center mb-12">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition cursor-pointer"
        >
          {showAll ? 'Hide All Questions' : 'Show All Questions'}
        </button>
      </div>

      <AnimatePresence>
        {showAll && (
          <div className="space-y-6 max-w-3xl mx-auto">
            {qaData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white border border-green-300 rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
                onClick={() => toggle(index)}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                layout
              >
                <div className="px-6 py-4">
                  <h2 className="text-xl font-semibold text-green-700">
                    {item.question}
                  </h2>
                  {openIndex === index && (
                    <motion.p
                      className="mt-3 text-gray-700"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.answer}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
