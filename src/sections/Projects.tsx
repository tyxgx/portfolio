import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolio';

const Projects = () => {
  return (
    <Section id="projects" className="pt-8">
      <div className="mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">Shipped, not slides</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Five production systems, five different stacks. Each one links straight to the code and a live deployment — judge the work directly.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.shortDescription}
            technologies={project.technologies}
            roleTags={project.roleTags}
            bullets={project.highlights}
            codeLink={project.codeLink}
            demoLink={project.demoLink}
            featured={project.featured}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
