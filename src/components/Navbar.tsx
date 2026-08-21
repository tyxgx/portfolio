import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { personalInfo, navItems } from '../data/portfolio';
import { routes } from '../routes';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href={`${routes.home}`} className="font-semibold tracking-tight text-white hover:text-accent-primary transition-colors">
            UT
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`${routes.home}${item.href}`}
                className="hover:text-accent-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link
              to={routes.projects}
              className="px-4 py-2 glass text-white rounded-lg hover:bg-white/10 transition-all text-sm font-medium border border-white/20"
            >
              Activity
            </Link>
            <a
              href={personalInfo.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-accent-primary text-white rounded-lg hover:bg-accent-primary/90 transition-all text-sm font-medium"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
