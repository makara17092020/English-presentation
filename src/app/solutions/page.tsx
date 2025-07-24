'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const solutions = [
  {
    title: 'Renewable Energy',
    description:
      'Using energy from the sun, wind, and water to reduce pollution and fight climate change.',
    image: '/solar-panel.jpg',
  },
  {
    title: 'Reforestation',
    description:
      'Planting trees to restore forests, protect wildlife, and capture carbon dioxide.',
    image: '/reforestation.jpg',
  },
  {
    title: 'Waste Reduction',
    description:
      'Reducing, reusing, and recycling materials to minimize waste and pollution.',
    image: '/recycling.jpg',
  },
  {
    title: 'Clean Transportation',
    description:
      'Using electric vehicles, bikes, and public transit to cut emissions and improve air quality.',
    image: '/electric-car.jpg',
  },
];

export default function SolutionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-6 md:px-16">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-center text-green-800 mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Environmental Solutions 🌿
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden border border-green-200 cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="relative w-full h-48 md:h-56">
              <Image
                src={solution.image}
                alt={solution.title}
                fill
                className="object-cover rounded-t-3xl"
                priority={index === 0}
              />
            </div>
            <div className="p-6 space-y-3">
              <h2 className="text-xl font-semibold text-green-700">
                {solution.title}
              </h2>
              <p className="text-gray-700 text-sm">{solution.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
