import { motion } from "framer-motion";
import React from 'react'

type AnimationProps = {
  children: React.ReactNode;
  className?: string;
};

export const Animation = ({ children, className }: AnimationProps) => {
  return (
    <motion.div
      viewport={{ once: true }}
      transition={{ delayChildren: 1, duration: 1 }}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
