import { useEffect, useState } from 'react';
import ProjectTable from '../components/projects/ProjectTable';
import {
  getProjectDashboardItems,
  getProjectDashboardItemsWithUnavailableMetadata,
} from '../data/projects/projectDashboard';
import type { ProjectDashboardItem } from '../data/projects/types';

const SkeletonCell = ({ className = '' }: { className?: string }) => (
  <div className={`h-3 rounded bg-surface-overlay ${className}`} />
);

const ProjectTableSkeleton = () => (
  <div className="panel overflow-hidden">
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
            <th className="px-4 lg:px-5 py-4 text-xs font-mono uppercase tracking-wide text-ink-faint">Tech Stack</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {[0, 1, 2, 3].map((row) => (
            <tr key={row} className="align-top">
              <td className="px-4 lg:px-5 py-6 align-top">
                <SkeletonCell className="w-28" />
              </td>
              <td className="px-3 lg:px-4 py-6 align-middle">
                <SkeletonCell className="w-20" />
              </td>
              <td className="px-4 lg:px-5 py-6 align-top">
                <SkeletonCell className="w-48 mb-2" />
                <SkeletonCell className="w-24 h-2" />
              </td>
              <td className="px-4 lg:px-5 py-6 align-top">
                <div className="flex min-w-0 max-w-full flex-wrap gap-1.5">
                  <SkeletonCell className="w-16" />
                  <SkeletonCell className="w-20" />
                  <SkeletonCell className="w-14" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ProjectsPage = () => {
  const [projects, setProjects] = useState<ProjectDashboardItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getProjectDashboardItems()
      .then((items) => {
        if (isMounted) {
          setProjects(items);
        }
      })
      .catch(() => {
        if (isMounted) {
          setProjects(getProjectDashboardItemsWithUnavailableMetadata());
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="relative min-h-[100dvh] pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        <div className="mb-8">
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-ink mb-2">Project activity</h1>
          <p className="text-ink-muted text-sm">Live commit metadata, pulled straight from GitHub.</p>
        </div>
        {isLoading ? <ProjectTableSkeleton /> : <ProjectTable projects={projects} />}
      </div>
    </section>
  );
};

export default ProjectsPage;
