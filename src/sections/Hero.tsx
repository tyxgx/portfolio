import { motion } from 'framer-motion';
import { heroContent, personalInfo, projects, experience } from '../data/portfolio';

const Hero = () => {
  const teamboard = projects.find(p => p.id === 1);
  const notesy = projects.find(p => p.id === 2);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-8">
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Intro & Teamboard */}
          <div className="space-y-8">
            {/* Intro */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
              >
                {heroContent.intro}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl sm:text-2xl text-gray-300 mb-3"
              >
                {heroContent.tagline}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-400"
              >
                {heroContent.description}
              </motion.p>
            </div>

            {/* Teamboard Project */}
            {teamboard && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass rounded-xl p-6 border border-accent-primary/20"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{teamboard.title}</h3>
                    <p className="text-gray-400 text-sm">{teamboard.shortDescription}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {teamboard.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-accent-primary/10 text-accent-primary rounded text-xs border border-accent-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="space-y-1 mb-4">
                  {teamboard.highlights.map((highlight, idx) => (
                    <p key={idx} className="text-sm text-gray-400 flex items-start">
                      <span className="text-accent-primary mr-2">•</span>
                      <span>{highlight}</span>
                    </p>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={teamboard.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-accent-primary text-white rounded-lg hover:bg-accent-primary/90 transition-all text-sm font-medium"
                  >
                    Github
                  </a>
                  {teamboard.demoLink && (
                    <a
                      href={teamboard.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 glass text-white rounded-lg hover:bg-white/10 transition-all text-sm font-medium border border-white/20"
                    >
                      Live Link
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column - Notesy, Internships, Contact */}
          <div className="space-y-6">
            {/* Notesy Project */}
            {notesy && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass rounded-xl p-4 border border-white/10"
              >
                <div className="mb-2">
                  <h3 className="text-lg font-semibold mb-1">{notesy.title}</h3>
                  <p className="text-gray-400 text-sm">{notesy.shortDescription}</p>
                </div>
                <div className="space-y-1.5 mb-3">
                  {notesy.highlights.slice(0, 2).map((h, idx) => (
                    <p key={idx} className="text-xs text-gray-400 flex items-start">
                      <span className="text-accent-primary mr-2">•</span>
                      <span>{h}</span>
                    </p>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={notesy.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 glass text-white rounded hover:bg-white/10 transition-all text-xs font-medium border border-white/20"
                  >
                    Github
                  </a>
                  {notesy.demoLink && (
                    <a
                      href={notesy.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 glass text-white rounded hover:bg-white/10 transition-all text-xs font-medium border border-white/20"
                    >
                      Live
                    </a>
                  )}
                </div>
              </motion.div>
            )}

            {/* Internships */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass rounded-xl p-6 border border-accent-primary/20"
            >
              <h3 className="text-2xl font-bold mb-5">Internships</h3>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-accent-primary/40 pl-4">
                    <p className="font-semibold text-base mb-1">{exp.title}</p>
                    <p className="text-gray-300 text-sm mb-2">{exp.company} · {exp.period}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{exp.summary}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass rounded-xl p-6 border border-accent-primary/20 mx-auto max-w-md text-center"
            >
              <p className="text-lg font-medium mb-4">{heroContent.cta}</p>
              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="block w-full px-6 py-3 bg-accent-primary text-white rounded-lg hover:bg-accent-primary/90 transition-all text-center font-medium"
                >
                  {personalInfo.email}
                </a>
                <div className="flex gap-3 justify-center">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-lg hover:bg-white/10 transition-all"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-lg hover:bg-white/10 transition-all"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
