'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const environmentalIssues = [
  {
    title: 'Climate Change',
    shortInfo: 'The Earth is getting hotter and weather is changing.',
    moreDetail:
      'Hotter temperatures can cause stronger storms, melting ice, floods, and droughts. It affects people, animals, and the planet.',
    image: '/climate.jpg',
  },
  {
    title: 'Deforestation',
    shortInfo: 'Too many trees are being cut down.',
    moreDetail:
      'When forests are destroyed, animals lose their homes and there is more carbon in the air. This can make global warming worse.',
    image: '/deforestation.jpg',
  },
  {
    title: 'Ocean Pollution',
    shortInfo: 'The ocean is full of plastic and waste.',
    moreDetail:
      'Trash and chemicals harm sea animals. Some of it even gets into the food we eat from the ocean.',
    image: '/ocean.jpg',
  },
  {
    title: 'Air Pollution',
    shortInfo: 'Dirty air makes it hard to breathe.',
    moreDetail:
      'Pollution from cars and factories can make people sick and damage the environment.',
    image: '/air.jpg',
  },
];

export default function IssuesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 py-10 px-4 md:px-10">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-12"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Major Environmental Issues 🌍
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {environmentalIssues.map((issue, index) => (
          <Card key={index} {...issue} delay={index * 0.15} />
        ))}
      </div>
    </div>
  );
}

function Card({
  title,
  shortInfo,
  moreDetail,
  image,
  delay,
}: {
  title: string;
  shortInfo: string;
  moreDetail: string;
  image: string;
  delay: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-green-300 cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.03, boxShadow: '0 0 25px 4px rgba(34,197,94,0.4)' }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      onClick={() => setExpanded(!expanded)}
    >
      <Image
        src={image}
        alt={title}
        width={800}
        height={500}
        className="w-full h-64 object-cover"
      />
      <div className="p-5 space-y-3">
        <h2 className="text-3xl font-semibold text-green-700">{title}</h2>
        <p className="text-xl text-gray-700">{shortInfo}</p>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.p
              className="text-xl text-gray-600"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
            >
              {moreDetail}
            </motion.p>
          )}
        </AnimatePresence>

        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
          className="flex items-center space-x-1 text-sm font-medium text-green-700 hover:text-green-900 cursor-pointer select-none"
          aria-expanded={expanded}
        >
          <span>{expanded ? 'Show Less' : 'Read More'}</span>
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="inline-block"
          >
            ⬇️
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
}
