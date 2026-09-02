import { motion, useReducedMotion } from 'framer-motion';
import type { ProjectDashboardItem } from '../../data/projects/types';
import TechBadge from './TechBadge';

interface ProjectTableProps {
  projects: ProjectDashboardItem[];
}

const statusStyles: Record<string, string> = {
  'In Progress': 'bg-emerald-400',
  'EDA Phase': 'bg-emerald-400',
  'On Hold': 'bg-amber-400',
  Planning: 'bg-sky-400',
  Completed: 'bg-accent',
};

const ProjectTable = ({ projects }: ProjectTableProps) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="panel overflow-hidden"
    >
      <div className="max-sm:overflow-x-auto">
        <table className="w-full max-sm:min-w-[720px] table-fixed text-left">
          <colgroup>
            <col className="w-[22%]" />
            <col className="w-[14%]" />
            <col className="w-[40%]" />
            <col className="w-[24%]" />
          </colgroup>
          <thead className="border-b border-line bg-surface-overlay/40">
            <tr>
              <th className="px-4 lg:px-5 py-4 text-xs font-mono uppercase tracking-wide text-ink-faint">Project</th>
              <th className="px-3 lg:px-4 py-4 text-xs font-mono uppercase tracking-wide text-ink-faint">Status</th>
              <th className="px-4 lg:px-5 py-4 text-xs font-mono uppercase tracking-wide text-ink-faint">
                Last Feature Added
              </th>
              <th className="px-4 lg:px-5 py-4 text-xs font-mono uppercase tracking-wide text-ink-faint">
                Tech Stack
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {projects.map((project) => (
              <tr key={project.id} className="align-top transition-colors hover:bg-surface-overlay/40">
                <td className="px-4 lg:px-5 py-6 align-top">
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-ink transition-colors hover:text-accent"
                  >
                    {project.name}
                  </a>
                </td>
                <td className="px-3 lg:px-4 py-6 align-middle">
                  <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-line px-2.5 py-1 text-xs leading-5 text-ink-muted">
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${statusStyles[project.status] ?? 'bg-ink-faint'}`} />
                    <span className="min-w-0 whitespace-normal">{project.status}</span>
                  </span>
                </td>
                <td className="px-4 lg:px-5 py-6 align-top">
                  <p className="text-sm font-medium leading-6 text-ink break-words">{project.latestCommit.message}</p>
                  {project.latestCommit.date && project.latestCommit.time && (
                    <p className="mt-1 text-xs font-mono text-ink-faint">
                      {project.latestCommit.date} at {project.latestCommit.time}
                    </p>
                  )}
                </td>
                <td className="px-4 lg:px-5 py-6 align-top">
                  <div className="flex min-w-0 max-w-full flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <TechBadge key={tech} label={tech} />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProjectTable;
