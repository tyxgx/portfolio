import { motion, useReducedMotion } from 'framer-motion';
import Section from '../components/Section';
import { education } from '../data/portfolio';

const Education = () => {
  const reduce = useReducedMotion();
  return (
    <Section id="education" className="border-t border-line">
      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mb-8">Education</h2>
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
        {education.map((edu, i) => (
          <motion.div
            key={edu.id}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-baseline justify-between gap-4 border-b border-line pb-4"
          >
            <div>
              <p className="font-semibold text-ink">{edu.degree}</p>
              <p className="text-sm text-ink-muted">{edu.institution}</p>
            </div>
            <div className="text-right shrink-0">
              {edu.period && <p className="text-xs font-mono text-accent mb-0.5">{edu.period}</p>}
              <p className="text-sm text-ink-muted">{edu.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
