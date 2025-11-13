import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies?: string[];
  bullets: string[];
  codeLink: string;
  demoLink: string | null;
  featured?: boolean;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  bullets,
  codeLink,
  demoLink,
  featured = false,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`glass rounded-2xl p-6 sm:p-8 ${
        featured ? 'md:col-span-2 border-2 border-accent-primary/30' : ''
      }`}
    >
      {featured && (
        <span className="inline-block px-3 py-1 bg-accent-primary/20 text-accent-primary rounded-full text-xs font-medium mb-4">
          Featured
        </span>
      )}
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300 mb-3">{description}</p>
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs text-gray-400 font-medium">Technologies:</span>
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-accent-primary/10 text-accent-primary rounded text-xs border border-accent-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      <ul className="space-y-2 mb-6">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start text-gray-400 text-sm">
            <span className="text-accent-primary mr-2">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-3">
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-accent-primary text-white rounded-lg hover:bg-accent-primary/90 transition-all hover:scale-105 text-sm font-medium"
        >
          Github
        </a>
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 glass text-white rounded-lg hover:bg-white/10 transition-all hover:scale-105 text-sm font-medium border border-white/20"
          >
            Live Link
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;

