'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{ background: 'var(--dark)' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ fontFamily: 'var(--font-syne)', fontWeight: 800 }}
            className="text-4xl tracking-tight text-white md:text-6xl"
          >
            <motion.span
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 1.05, ease: 'easeOut' }}
              className="inline-block whitespace-nowrap"
            >
              Azynar<span style={{ color: 'var(--accent)' }}>.</span>
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}