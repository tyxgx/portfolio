import { motion, useReducedMotion } from 'framer-motion';
import { GithubLogo, LinkedinLogo, ArrowUpRight } from '@phosphor-icons/react';
import { heroContent, personalInfo } from '../data/portfolio';

const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const el = document.getElementById('projects');
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', '#projects');
  }
};

const Hero = () => {
  const reduce = useReducedMotion();
  const fadeUp = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section id="hero" className="relative pt-24 pb-16 sm:pb-20 overflow-hidden">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Text column */}
          <div>
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-line text-xs font-mono text-ink-muted"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
              </span>
              {heroContent.status}
            </motion.div>

            <motion.h1
              {...fadeUp(0.06)}
              className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.08] text-ink mb-5"
            >
              {heroContent.headline}
            </motion.h1>

            <motion.p {...fadeUp(0.12)} className="text-lg text-ink-muted max-w-[46ch] mb-8">
              {heroContent.subtext}
            </motion.p>

            <motion.div {...fadeUp(0.18)} className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="px-5 py-3 rounded-full bg-accent text-surface text-sm font-semibold hover:bg-accent-soft transition-colors"
              >
                {heroContent.ctaPrimary}
              </a>
              <a
                href={personalInfo.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full border border-line text-ink text-sm font-medium hover:border-accent/50 hover:text-accent transition-colors"
              >
                {heroContent.ctaSecondary}
              </a>
              <div className="flex items-center gap-1 ml-1">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded-full text-ink-muted hover:text-ink hover:bg-surface-raised transition-colors"
                >
                  <GithubLogo size={20} weight="regular" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-full text-ink-muted hover:text-ink hover:bg-surface-raised transition-colors"
                >
                  <LinkedinLogo size={20} weight="regular" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Visual column: real dashboard screenshot from the flagship project */}
          <motion.a
            href="#projects"
            onClick={scrollToProjects}
            {...fadeUp(0.2)}
            className="group relative block rounded-2xl border border-line overflow-hidden shadow-card"
          >
            <img
              src={`${import.meta.env.BASE_URL}screenshots/liveflights-dashboard.png`}
              alt="liveflights live flight-tracking dashboard, showing the Europe map with corridor overlays"
              className="w-full h-auto object-cover"
              loading="eager"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-surface/95 to-transparent flex items-center justify-between">
              <span className="font-mono text-xs text-ink-muted">liveflights, live now</span>
              <ArrowUpRight size={16} className="text-ink-muted group-hover:text-accent transition-colors" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
