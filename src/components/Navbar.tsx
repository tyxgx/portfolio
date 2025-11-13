import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolio';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="w-8 h-8" aria-hidden />
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
    </motion.nav>
  );
};

export default Navbar;

