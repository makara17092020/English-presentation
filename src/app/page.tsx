'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="relative text-white h-screen overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <Image
          src="/forest.jpg"
          alt="Green forest"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
          priority
        />
      </motion.div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4  bg-black/30">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide"
        >
          THE ENVIRONMENT ISSUES
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-4 text-green-400 tracking-widest text-sm md:text-lg font-semibold"
        >
          PRESENTATION BY RITH SOPHEA AND MAKARA
        </motion.p>
      </div>
    </div>
  );
}
