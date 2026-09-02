import { motion, useReducedMotion } from 'framer-motion';
import { GithubLogo, ArrowUpRight } from '@phosphor-icons/react';
import type { Project } from '../data/portfolio';

const FeaturedProject = ({ project }: { project: Project }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="panel overflow-hidden mb-6"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden border-b lg:border-b-0 lg:border-r border-line">
          <img
            src={project.images[0]}
            alt={`${project.title} dashboard screenshot`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.roleTags.map((role) => (
              <span key={role} className="tag">
                {role}
              </span>
            ))}
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink mb-3">{project.title}</h3>
          <p className="text-ink-muted leading-relaxed mb-5">{project.description}</p>
          <ul className="space-y-2 mb-6">
            {project.highlights.slice(0, 3).map((h, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-ink-muted">
                <span className="text-accent mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-line text-sm font-medium text-ink hover:border-accent/50 hover:text-accent transition-colors"
            >
              <GithubLogo size={16} /> Code
            </a>
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent text-surface text-sm font-semibold hover:bg-accent-soft transition-colors"
              >
                Live demo <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;
