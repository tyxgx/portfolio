import { motion } from 'framer-motion';
import Section from '../components/Section';
import { skills } from '../data/portfolio';

const Skills = () => {
  return (
    <Section id="skills">
      <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-accent-primary">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10 hover:border-accent-primary/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;

