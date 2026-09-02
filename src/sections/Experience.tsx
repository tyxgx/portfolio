import { motion, useReducedMotion } from 'framer-motion';
import Section from '../components/Section';
import { experience } from '../data/portfolio';

const Experience = () => {
  const reduce = useReducedMotion();
  return (
    <Section id="experience" className="border-t border-line">
      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mb-8">Experience</h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="panel p-6"
          >
            <p className="font-mono text-xs text-accent mb-3">{exp.period}</p>
            <h3 className="font-semibold text-ink mb-1">{exp.title}</h3>
            <p className="text-sm text-ink-muted mb-3">{exp.company}</p>
            <p className="text-sm text-ink-muted leading-relaxed">{exp.summary}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
