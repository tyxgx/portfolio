import Section from '../components/Section';
import { aboutContent } from '../data/portfolio';

const About = () => {
  return (
    <Section id="about" className="border-t border-line">
      <div className="max-w-[70ch]">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mb-6">{aboutContent.heading}</h2>
        <div className="space-y-4">
          {aboutContent.paragraphs.map((p, i) => (
            <p key={i} className="text-ink-muted leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
