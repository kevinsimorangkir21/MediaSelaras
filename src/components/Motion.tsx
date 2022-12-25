import { motion } from "framer-motion";

export default function Motion({ children }: { children: React.ReactNode }) {
  return <motion.div
    viewport={{ once: true }}
    transition={{ delayChildren: 1.25, duration: 1.25 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    {children}
  </motion.div>;
}
