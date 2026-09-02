import { footerContent } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t border-line">
      <div className="max-w-content mx-auto text-center text-xs text-ink-faint font-mono">{footerContent.text}</div>
    </footer>
  );
};

export default Footer;
