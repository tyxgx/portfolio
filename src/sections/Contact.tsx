import Section from '../components/Section';
import { ctaContent, personalInfo } from '../data/portfolio';

const Contact = () => {
  return (
    <Section id="contact" className="pb-16">
      <div className="glass rounded-2xl p-8 sm:p-12 border border-accent-primary/20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{ctaContent.heading}</h2>
        <p className="text-gray-400 whitespace-pre-line mb-8 leading-relaxed">
          {ctaContent.description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="px-6 py-3 bg-accent-primary text-white rounded-lg hover:bg-accent-primary/90 transition-all font-medium"
          >
            {personalInfo.email}
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 glass text-white rounded-lg hover:bg-white/10 transition-all font-medium border border-white/20"
          >
            LinkedIn
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 glass text-white rounded-lg hover:bg-white/10 transition-all font-medium border border-white/20"
          >
            GitHub
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
