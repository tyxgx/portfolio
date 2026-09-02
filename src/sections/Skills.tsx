import { motion, useReducedMotion } from 'framer-motion';
import { Database, CloudArrowUp, Brain, Terminal, type IconWeight } from '@phosphor-icons/react';
import Section from '../components/Section';
import { skills } from '../data/portfolio';

const icons: Record<string, React.ComponentType<{ size?: number; weight?: IconWeight; className?: string }>> = {
  database: Database,
  cloud: CloudArrowUp,
  brain: Brain,
  terminal: Terminal,
};

const Skills = () => {
  const reduce = useReducedMotion();
  return (
    <Section id="skills" className="border-t border-line">
      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mb-10">What I work with</h2>
      <div className="grid md:grid-cols-2 gap-5">
        {skills.map((group, index) => {
          const Icon = icons[group.icon];
          return (
            <motion.div
              key={group.category}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="panel p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon size={18} weight="regular" />
                </span>
                <h3 className="font-display text-base font-semibold text-ink">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
