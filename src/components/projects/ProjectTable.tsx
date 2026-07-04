import { motion } from 'framer-motion';
import type { ProjectDashboardItem } from '../../data/projects/types';
import TechBadge from './TechBadge';

interface ProjectTableProps {
  projects: ProjectDashboardItem[];
}

const statusStyles: Record<string, string> = {
  'In Progress': 'bg-green-400/80',
  'EDA Phase': 'bg-emerald-400/80',
  'On Hold': 'bg-amber-400/80',
  Planning: 'bg-accent-primary/80',
  Completed: 'bg-accent-secondary/80',
};

const ProjectTable = ({ projects }: ProjectTableProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.12, ease: 'easeOut' }}
      className="glass rounded-xl border border-accent-primary/20 overflow-hidden transform-gpu will-change-transform will-change-opacity"
    >
      <div className="max-sm:overflow-x-auto">
        <table className="w-full max-sm:min-w-[720px] table-fixed text-left">
          <colgroup>
            <col className="w-[22%]" />
            <col className="w-[14%]" />
            <col className="w-[40%]" />
            <col className="w-[24%]" />
          </colgroup>
          <thead className="border-b border-white/10 bg-white/[0.03]">
            <tr>
              <th className="px-4 lg:px-5 py-4 text-xs font-medium uppercase tracking-wide text-gray-400">
                Project
              </th>
              <th className="px-3 lg:px-4 py-4 text-xs font-medium uppercase tracking-wide text-gray-400">
                Status
              </th>
              <th className="px-4 lg:px-5 py-4 text-xs font-medium uppercase tracking-wide text-gray-400">
                Last Feature Added
              </th>
              <th className="px-4 lg:px-5 py-4 text-xs font-medium uppercase tracking-wide text-gray-400">
                Tech Stack
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {projects.map((project) => (
              <tr key={project.id} className="align-top transition-colors hover:bg-white/[0.03]">
                <td className="px-4 lg:px-5 py-6 align-top">
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-white transition-colors hover:text-accent-primary"
                  >
                    {project.name}
                  </a>
                </td>
                <td className="px-3 lg:px-4 py-6 align-middle">
                  <span className="inline-flex max-w-full items-center gap-2 rounded border border-white/10 bg-white/5 px-2 py-1 text-xs leading-5 text-gray-300">
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${
                        statusStyles[project.status] ?? 'bg-gray-400/70'
                      }`}
                    />
                    <span className="min-w-0 whitespace-normal">{project.status}</span>
                  </span>
                </td>
                <td className="px-4 lg:px-5 py-6 align-top">
                  <p className="text-sm font-medium leading-6 text-gray-200 break-words">
                    {project.latestCommit.message}
                  </p>
                  {project.latestCommit.date && project.latestCommit.time && (
                    <p className="mt-1 text-xs text-gray-500">
                      {project.latestCommit.date} · {project.latestCommit.time}
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
