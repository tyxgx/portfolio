import { useEffect, useState } from 'react';
import {
  personalInfo,
  projects,
  experience,
  education,
  ctaContent,
} from './data/portfolio';

type Theme = 'light' | 'dark';

const GH_USER = 'tyxgx';
const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

const readTheme = (): Theme => {
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    /* storage blocked */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const principles = [
  {
    title: 'design for the failure.',
    text: 'a pipeline that survives a mid-write kill without losing or duplicating data beats one that only works on a clean run.',
  },
  {
    title: 'say "i don’t know".',
    text: 'a chatbot that refuses to answer when retrieval finds nothing is more useful than one that confidently guesses.',
  },
  {
    title: 'chase the real cause.',
    text: 'a surprise cloud bill is a debugging problem: trace it to the service, fix the design, verify the number dropped.',
  },
];

function App() {
  const [theme, setTheme] = useState<Theme>(readTheme);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* storage blocked */
    }
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const featured = projects.slice(0, 3);
  const more = projects.slice(3);
  const chart = `https://ghchart.xqsit94.in/${theme}:${theme === 'dark' ? '34d399' : '10b981'}/${GH_USER}`;

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <progress className="scroll-progress" max={100} value={progress} aria-label="Reading progress" />

      <header className="site-header">
        <nav className="nav" aria-label="Primary navigation">
          <a href="#home" aria-current="page">home</a>
          <a href="#work">work</a>
          <a href="#experience">experience</a>
          <a href="#contact">contact</a>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? 'light' : 'dark'}
          </button>
        </nav>
      </header>

      <main className="page" id="main-content">
        <section id="home" className="hero" aria-label="Introduction">
          <p className="eyebrow">data · cloud · ml engineer</p>
          <h1>hi i&apos;m uttkarsh.</h1>
          <p className="lede">
            i build data pipelines, cloud infrastructure, and ML systems that keep running after the demo ends.
          </p>
          <p>
            i just finished C-DAC&apos;s PG Certificate in Big Data Analytics, on top of a B.Tech in Information
            Technology. i work across streaming, serverless AWS, retrieval, and the ordinary engineering that makes
            those systems trustworthy.
          </p>
          <p>
            lately: a live streaming lakehouse (<a href="#work">liveflights</a>), a RAG chatbot that says when it
            doesn&apos;t know (<a href="#work">StreamPulse</a>), and looking for a Data Engineer, Cloud Engineer, or ML
            Engineer role.
          </p>
          <p className="hero-links">
            <a href={personalInfo.cv} {...ext}>cv ↗</a>
            <a href={`mailto:${personalInfo.email}`}>email</a>
          </p>
        </section>

        <section className="proof-ledger" aria-label="Selected evidence">
          <div className="proof-item">
            <strong>5</strong>
            <span>shipped projects, each a different real problem</span>
          </div>
          <div className="proof-item">
            <strong>~$155 → cents</strong>
            <span>monthly cost of liveflights&apos; live-state store after a root-cause fix</span>
          </div>
          <div className="proof-item">
            <strong>~60%</strong>
            <span>fewer API calls in TeamBoard from multi-tier caching</span>
          </div>
        </section>

        <section className="github-activity" aria-labelledby="github-activity-heading">
          <div className="activity-heading">
            <div>
              <p className="section-kicker">live signal</p>
              <h2 id="github-activity-heading">github activity.</h2>
            </div>
            <a className="activity-profile" href={personalInfo.github} {...ext}>@{GH_USER} ↗</a>
          </div>
          <div className="chart-shell">
            <img
              className="github-chart"
              src={chart}
              alt={`${personalInfo.name}'s GitHub contribution chart for the rolling year`}
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="activity-note">rolling 12 months · refreshed daily from public GitHub activity</p>
        </section>

        <hr />

        <section id="work" aria-labelledby="work-heading">
          <p className="section-kicker">selected work</p>
          <h2 id="work-heading">systems with receipts.</h2>
          <p className="section-intro">
            a small set of things i can explain end to end: why they exist, where they fail, and what makes them more
            than a demo.
          </p>

          <div className="featured-work">
            {featured.map((p) => (
              <article className="work-card" key={p.id}>
                <div className="work-heading">
                  <div>
                    <p className="work-type">{p.roleTags.join(' · ').toLowerCase()} · 2026</p>
                    <h3>{p.title}</h3>
                  </div>
                  <div className="work-links">
                    {p.demoLink && <a href={p.demoLink} {...ext}>live ↗</a>}
                    <a href={p.codeLink} {...ext}>source ↗</a>
                    {p.architectureLink && <a href={p.architectureLink} {...ext}>architecture ↗</a>}
                  </div>
                </div>
                <p className="work-thesis">{p.shortDescription}</p>
                {p.images[0] && (
                  <img className="work-shot" src={p.images[0]} alt={`${p.title} screenshot`} loading="lazy" />
                )}
                <p>{p.description}</p>
                <ul className="evidence-list">
                  {p.highlights.slice(0, 3).map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <p className="stack">{p.technologies.join(' · ')}</p>
              </article>
            ))}
          </div>

          <section className="more-work" aria-label="More projects">
            {more.map((p) => (
              <article className="compact-work" key={p.id}>
                <div>
                  <h3>
                    <a href={p.demoLink ?? p.codeLink} {...ext}>{p.title} ↗</a>
                  </h3>
                  <p>{p.shortDescription}</p>
                </div>
                <a className="source-link" href={p.codeLink} {...ext}>source</a>
              </article>
            ))}
          </section>
        </section>

        <hr />

        <section id="experience" aria-labelledby="experience-heading">
          <p className="section-kicker">experience &amp; education</p>
          <h2 id="experience-heading">where i learned the edges.</h2>
          <div className="experience-list">
            {experience.map((e) => (
              <article className="experience-item" key={e.id}>
                <div className="experience-meta">
                  <strong>{e.company.split(',')[0]}</strong>
                  <span>{e.period}</span>
                </div>
                <div>
                  <h3>{e.title}</h3>
                  <p>{e.summary}</p>
                </div>
              </article>
            ))}
            {education.slice(0, 2).map((e) => (
              <article className="experience-item" key={e.id}>
                <div className="experience-meta">
                  <strong>{e.institution.split(' (')[0].split(',')[0]}</strong>
                  <span>{e.period}</span>
                </div>
                <div>
                  <h3>{e.degree}</h3>
                  {e.details && <p>{e.details}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <hr />

        <section className="principles" aria-labelledby="principles-heading">
          <p className="section-kicker">how i work</p>
          <h2 id="principles-heading">built to hold up.</h2>
          <div className="principles-grid">
            {principles.map((p) => (
              <p key={p.title}>
                <strong>{p.title}</strong> {p.text}
              </p>
            ))}
          </div>
        </section>

        <hr />

        <section id="contact" aria-labelledby="contact-heading">
          <p className="section-kicker">contact</p>
          <h2 id="contact-heading">say hi.</h2>
          <p>{ctaContent.description}</p>
          <p className="contact-links">
            <a href={`mailto:${personalInfo.email}`}>email</a>
            <a href={personalInfo.github} {...ext}>github</a>
            <a href={personalInfo.linkedin} {...ext}>linkedin</a>
            <a href={personalInfo.cv} {...ext}>cv</a>
          </p>
          <p className="last-updated">last updated september 2026.</p>
        </section>
      </main>
    </>
  );
}

export default App;
