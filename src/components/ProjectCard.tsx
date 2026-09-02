import { motion, useReducedMotion } from 'framer-motion';
import { GithubLogo, ArrowUpRight } from '@phosphor-icons/react';
import type { Project } from '../data/portfolio';

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

const ProjectCard = ({ project, delay = 0 }: ProjectCardProps) => {
  const reduce = useReducedMotion();
  const { title, shortDescription, technologies, roleTags, codeLink, demoLink, images } = project;

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="panel flex flex-col overflow-hidden h-full"
    >
      {images.length > 0 ? (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
          <img src={images[0]} alt={`${title} screenshot`} className="w-full h-full object-cover" loading="lazy" />
        </div>
      ) : (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-gradient-to-br from-accent/15 via-surface-raised to-surface-raised flex items-center justify-center">
          <span className="font-display text-3xl font-semibold text-accent/40">{title.slice(0, 2).toUpperCase()}</span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-3">
          {roleTags.slice(0, 2).map((role) => (
            <span key={role} className="tag">
              {role}
            </span>
          ))}
        </div>
        <h3 className="font-display text-xl font-semibold text-ink mb-2">{title}</h3>
        <p className="text-sm text-ink-muted leading-relaxed mb-4">{shortDescription}</p>
        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-5">
          {technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="font-mono text-xs text-ink-faint">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-4 pt-2">
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent transition-colors"
          >
            <GithubLogo size={16} /> Code
          </a>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent transition-colors"
            >
              Live <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
