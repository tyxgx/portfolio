import { GithubLogo, LinkedinLogo, EnvelopeSimple } from '@phosphor-icons/react';
import Section from '../components/Section';
import { ctaContent, personalInfo } from '../data/portfolio';

const Contact = () => {
  return (
    <Section id="contact" className="border-t border-line pb-24">
      <div className="panel p-8 sm:p-14 text-center max-w-3xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-4">{ctaContent.heading}</h2>
        <p className="text-ink-muted mb-8 max-w-[52ch] mx-auto leading-relaxed">{ctaContent.description}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-surface font-semibold hover:bg-accent-soft transition-colors"
          >
            <EnvelopeSimple size={18} /> {personalInfo.email}
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 rounded-full border border-line text-ink hover:border-accent/50 hover:text-accent transition-colors"
          >
            <LinkedinLogo size={20} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 rounded-full border border-line text-ink hover:border-accent/50 hover:text-accent transition-colors"
          >
            <GithubLogo size={20} />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
