import { useEffect, useState } from 'react';
import { personalInfo, projects, experience, education } from './data/portfolio';
import { caseStudies } from './data/caseStudies';

type Theme = 'light' | 'dark';

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

// "#/liveflights" is a case-study page; anything else ("", "#work", "#contact") is the landing page.
const readRoute = () => (location.hash.startsWith('#/') ? location.hash.slice(2) : '');

function App() {
  const [theme, setTheme] = useState<Theme>(readTheme);
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* storage blocked */
    }
  }, [theme]);

  useEffect(() => {
    const onHash = () => setRoute(readRoute());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // After a route change: top of a case study, or the section a plain "#id" link points to.
  useEffect(() => {
    const id = location.hash.startsWith('#/') ? '' : location.hash.slice(1);
    const el = id ? document.getElementById(id) : null;
    if (el) el.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [route]);

  const study = caseStudies.find((c) => c.slug === route);
  const featured = projects.filter((p) => caseStudies.some((c) => c.title === p.title));
  const more = projects.filter((p) => !caseStudies.some((c) => c.title === p.title));

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <header className="site-header">
        <nav className="nav" aria-label="Primary navigation">
          <a href="#home">home</a>
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
        {study ? (
          <article className="case" aria-labelledby="case-title">
            <p className="case-back"><a href="#work">← all work</a></p>
            <p className="eyebrow">case study</p>
            <h1 id="case-title">{study.title}</h1>
            <p className="lede">{study.tagline}</p>
            <p>{study.why}</p>

            <p className="case-links">
              {study.links.map((l) => (
                <a key={l.label} href={l.href} {...ext}>{l.label} ↗</a>
              ))}
            </p>

            <section aria-labelledby="how-h">
              <h2 id="how-h">how it works.</h2>
              <ol className="case-steps">
                {study.how.map((h) => (
                  <li key={h.title}>
                    <strong>{h.title}</strong>
                    <span>{h.text}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="problems-h">
              <h2 id="problems-h">what went wrong, and what i did.</h2>
              <div className="case-problems">
                {study.problems.map((p) => (
                  <p key={p.title}>
                    <strong>{p.title}.</strong> {p.text}
                  </p>
                ))}
              </div>
            </section>

            <section className="case-numbers" aria-label="Key numbers">
              {study.numbers.map((n) => (
                <div key={n.label}>
                  <strong>{n.value}</strong>
                  <span>{n.label}</span>
                </div>
              ))}
            </section>
          </article>
        ) : (
          <>
            <section id="home" className="hero" aria-label="Introduction">
              <p className="eyebrow">data · cloud · ml engineer</p>
              <h1>hi i&apos;m uttkarsh.</h1>
              <p className="lede">
                i build data pipelines, cloud infrastructure and ML systems, and i like showing exactly how they work.
              </p>
              <p>
                C-DAC PG Certificate in Big Data Analytics (Mumbai, 2026) on top of a B.Tech in Information Technology.
                looking for a Data Engineer, Cloud Engineer or ML Engineer role.
              </p>
              <p className="hero-links">
                <a href={personalInfo.cv} {...ext}>cv ↗</a>
                <a href={`mailto:${personalInfo.email}`}>email</a>
                <a href={personalInfo.github} {...ext}>github ↗</a>
              </p>
            </section>

            <hr />

            <section id="work" aria-labelledby="work-heading">
              <p className="section-kicker">work</p>
              <h2 id="work-heading">two projects, explained.</h2>
              <p className="section-intro">
                both run live on AWS. each has a short page that shows where the data comes from, how it is processed and
                what went wrong along the way.
              </p>

              <div className="featured-work">
                {featured.map((p) => {
                  const c = caseStudies.find((s) => s.title === p.title)!;
                  return (
                    <article className="work-card" key={p.id}>
                      <div className="work-heading">
                        <h3>{p.title}</h3>
                        <div className="work-links">
                          <a href={`#/${c.slug}`}>how it works →</a>
                          {p.demoLink && <a href={p.demoLink} {...ext}>live ↗</a>}
                          <a href={p.codeLink} {...ext}>source ↗</a>
                        </div>
                      </div>
                      <p className="work-thesis">{p.shortDescription}</p>
                      <p className="stack">{c.numbers.map((n) => `${n.value} ${n.label}`).join(' · ')}</p>
                    </article>
                  );
                })}
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

            <section id="contact" aria-labelledby="contact-heading">
              <p className="section-kicker">contact</p>
              <h2 id="contact-heading">say hi.</h2>
              <p className="contact-links">
                <a href={`mailto:${personalInfo.email}`}>email</a>
                <a href={personalInfo.github} {...ext}>github</a>
                <a href={personalInfo.linkedin} {...ext}>linkedin</a>
                <a href={personalInfo.cv} {...ext}>cv</a>
              </p>
              <p className="last-updated">last updated october 2026.</p>
            </section>
          </>
        )}
      </main>
    </>
  );
}

export default App;
