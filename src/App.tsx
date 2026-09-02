import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ProjectsPage from './pages/ProjectsPage';
import { routes } from './routes';

const Home = () => (
  <>
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Education />
    <Contact />
  </>
);

function App() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <Navbar />
      <main className="pt-[72px]">
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.projects} element={<ProjectsPage />} />
          <Route path="*" element={<Navigate to={routes.home} replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
