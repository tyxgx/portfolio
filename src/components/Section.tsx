import { type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, children, className = '' }: SectionProps) => {
  const reduce = useReducedMotion();
  return (
    <motion.section
      id={id}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`py-20 sm:py-24 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-content mx-auto">{children}</div>
    </motion.section>
  );
};

export default Section;
