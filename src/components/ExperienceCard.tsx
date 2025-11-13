import { motion } from 'framer-motion';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

const ExperienceCard = ({ title, company, period, bullets }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="glass rounded-2xl p-6 sm:p-8"
    >
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-gray-400 text-sm mb-2">{company}</p>
      <p className="text-accent-primary text-sm mb-4">{period}</p>
      <ul className="space-y-2">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start text-gray-300 text-sm">
            <span className="text-accent-primary mr-2">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;

