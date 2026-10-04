import { useEffect, useRef, useState } from 'react';
import { personalInfo, projects, path, lastUpdated } from './data/portfolio';

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

// order of the "more projects" list
const MORE_ORDER = ['TeamBoard', 'Interactive ML', 'PDF Digest', 'Hyper Quest Research Assistant', 'Seamless Tiler'];

/** Education and work path. Draws in, step by step, the first time it scrolls into view. */
function Path() {
  const ref = useRef<HTMLOListElement>(null);
  const [shown, setShown] = useState(() => typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <ol ref={ref} className={`path${shown ? ' in' : ''}`}>
      {path.map((n, i) => (
        <li key={n.id} className={n.highlight ? 'path-node hl' : 'path-node'} style={{ ['--i' as string]: i }}>
          <span className="path-dot" aria-hidden="true" />
          <strong>{n.title}</strong>
          <span className="path-detail">{n.detail}</span>
          <span className="path-place">{n.place}</span>
          <span className="path-period">{n.period}</span>
          {n.note && <span className="path-note">{n.note}</span>}
        </li>
      ))}
    </ol>
  );
}

function App() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* storage blocked */
    }
  }, [theme]);

  const major = projects.filter((p) => p.featured);
  const more = MORE_ORDER.map((t) => projects.find((p) => p.title === t)).filter((p) => !!p);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <header className="site-header">
        <nav className="nav" aria-label="Theme">
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
          <h1>hi i&apos;m uttkarsh.</h1>
          <p className="lede">i build systems that run live on the cloud, from raw data to what you see on screen.</p>
          <p className="hero-links">
            <a href={personalInfo.cv} {...ext}>cv ↗</a>
            <a href={`mailto:${personalInfo.email}`}>email</a>
            <a href={personalInfo.github} {...ext}>github ↗</a>
          </p>
        </section>

        <hr />

        <section id="work" aria-labelledby="work-heading">
          <p className="section-kicker">work</p>
          <h2 id="work-heading">major projects.</h2>
          <p className="section-intro">both run live on AWS.</p>

          <div className="featured-work">
            {major.map((p) => (
              <article className="work-card" key={p.id}>
                <div className="work-heading">
                  <h3>{p.title}</h3>
                  <div className="work-links">
                    {p.demoLink && <a href={p.demoLink} {...ext}>live ↗</a>}
                    <a href={p.codeLink} {...ext}>source ↗</a>
                    {p.architectureLink && <a href={p.architectureLink} {...ext}>architecture ↗</a>}
                  </div>
                </div>
                <p className="work-thesis">{p.tagline}</p>
                <ul className="evidence-list">
                  {p.bullets?.map((b) => <li key={b}>{b}</li>)}
                </ul>
                {p.screenshot && (
                  <figure className="work-fig">
                    <img className="work-shot" src={p.screenshot} alt={`${p.title} screenshot`} loading="lazy" />
                    <figcaption>screenshot</figcaption>
                  </figure>
                )}
                {p.architectureImage && (
                  <figure className="work-fig">
                    <a href={p.architectureLink} {...ext} aria-label={`${p.title} architecture, open full size`}>
                      <img className="work-shot arch" src={p.architectureImage} alt={`${p.title} architecture diagram`} loading="lazy" />
                    </a>
                    <figcaption>architecture</figcaption>
                  </figure>
                )}
                <p className="stack">{p.technologies.join(' · ')}</p>
              </article>
            ))}
          </div>

          <p className="section-kicker more-kicker">more projects</p>
          <p className="more-note">work is still in progress on these.</p>
          <section className="more-work" aria-label="More projects">
            {more.map((p) => (
              <article className="compact-work" key={p!.id}>
                <div>
                  <h3>
                    <a href={p!.demoLink ?? p!.codeLink} {...ext}>{p!.title} ↗</a>
                  </h3>
                  <p>{p!.shortDescription}</p>
                </div>
                <a className="source-link" href={p!.codeLink} {...ext}>source</a>
              </article>
            ))}
          </section>
        </section>

        <hr />

        <section id="education" aria-labelledby="education-heading">
          <p className="section-kicker" id="education-heading">education</p>
          <Path />
        </section>

        <hr />

        <section id="contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading">let's talk.</h2>
          <p className="contact-links">
            <a href={`mailto:${personalInfo.email}`}>email</a>
            <a href={personalInfo.github} {...ext}>github</a>
            <a href={personalInfo.linkedin} {...ext}>linkedin</a>
            <a href={personalInfo.cv} {...ext}>cv</a>
          </p>
          <p className="last-updated">last updated {lastUpdated}.</p>
        </section>
      </main>
    </>
  );
}

export default App;
