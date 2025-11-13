import { motion } from 'framer-motion';
import Section from '../components/Section';
import { education } from '../data/portfolio';

const Education = () => {
  return (
    <Section id="education">
      <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
              <div>
                <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                <p className="text-gray-400 text-sm mb-2">{edu.institution}</p>
              </div>
              <div className="text-right sm:text-left sm:ml-4">
                {edu.period && (
                  <p className="text-accent-primary text-sm mb-1">{edu.period}</p>
                )}
                <p className="text-gray-300 text-sm font-medium">{edu.details}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Education;

