import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';
import { personalInfo, navItems } from '../data/portfolio';
import { routes } from '../routes';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  // Plain <a href="#section"> anchors don't reliably trigger the browser's
  // native scroll-to-element inside this SPA (the hash updates but the
  // viewport stays put), so scroll explicitly instead of relying on it.
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', hash);
    }
  };

  return (
    <motion.nav
      initial={reduce ? false : { y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 h-[72px] border-b border-line bg-surface/80 backdrop-blur-md"
    >
      <div className="max-w-content mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href={routes.home} className="font-mono text-sm font-medium tracking-wide text-ink hover:text-accent transition-colors">
          UT<span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-ink-muted">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`${routes.home}${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className="hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to={routes.projects}
            className="px-4 py-2 rounded-full border border-line text-ink text-sm font-medium hover:border-accent/50 hover:text-accent transition-colors"
          >
            Activity
          </Link>
          <a
            href={personalInfo.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-accent text-surface text-sm font-semibold hover:bg-accent-soft transition-colors"
          >
            Download CV
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-ink"
        >
          {open ? <X size={22} weight="regular" /> : <List size={22} weight="regular" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-b border-line bg-surface"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={`${routes.home}${item.href}`}
                  onClick={(e) => {
                    setOpen(false);
                    handleNavClick(e, item.href);
                  }}
                  className="text-ink-muted hover:text-ink transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Link to={routes.projects} onClick={() => setOpen(false)} className="text-ink-muted hover:text-ink transition-colors">
                Activity
              </Link>
              <a
                href={personalInfo.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit px-4 py-2 rounded-full bg-accent text-surface text-sm font-semibold"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
