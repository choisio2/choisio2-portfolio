"use client";

import { motion } from 'framer-motion';

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="py-16 sm:py-20"
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
