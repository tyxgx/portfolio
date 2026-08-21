import { footerContent } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center text-xs text-gray-500">
        {footerContent.text}
      </div>
    </footer>
  );
};

export default Footer;
