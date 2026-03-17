'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{background: 'var(--bg)'}}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{fontFamily: 'var(--font-syne)', fontWeight: 800}}
            className="text-4xl md:text-6xl text-[#f0f4ff] tracking-tight"
          >
            Azynar<span style={{color: 'var(--accent)'}}>.</span>
          </motion.h1>

          <div className="w-48 md:w-64 h-px bg-[#1a2a4a] relative overflow-hidden">
            <motion.div
              style={{background: 'var(--accent)', width: `${progress}%`}}
              className="absolute top-0 left-0 h-full transition-all duration-100"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8899aa] text-xs uppercase tracking-widest"
          >
            {progress}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}