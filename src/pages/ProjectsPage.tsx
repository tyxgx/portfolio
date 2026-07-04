import { useEffect, useState } from 'react';
import ProjectTable from '../components/projects/ProjectTable';
import {
  getProjectDashboardItems,
  getProjectDashboardItemsWithUnavailableMetadata,
} from '../data/projects/projectDashboard';
import type { ProjectDashboardItem } from '../data/projects/types';

const SkeletonCell = ({ className = '' }: { className?: string }) => (
  <div className={`h-3 rounded bg-white/10 ${className}`} />
);

const ProjectTableSkeleton = () => (
  <div className="glass rounded-xl border border-accent-primary/20 overflow-hidden transform-gpu will-change-transform will-change-opacity">
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
    <section className="relative min-h-screen overflow-hidden pt-28 pb-12">
      <div className="absolute inset-0 overflow-hidden contain-paint">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-xl" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <ProjectTableSkeleton />
        ) : (
          <ProjectTable projects={projects} />
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
