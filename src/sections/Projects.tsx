import Section from '../components/Section';
import FeaturedProject from '../components/FeaturedProject';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolio';

const Projects = () => {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" className="border-t border-line">
      <div className="mb-10">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mb-3">Some things I've built</h2>
        <p className="text-ink-muted max-w-[60ch]">
          Five projects, five different stacks. Each links to the code, and most have a live demo.
        </p>
      </div>

      {featured && <FeaturedProject project={featured} />}

      <div className="grid sm:grid-cols-2 gap-6">
        {rest.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={i * 0.06} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
