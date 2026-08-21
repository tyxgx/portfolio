import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ProjectsPage from './pages/ProjectsPage';
import { routes } from './routes';

const Home = () => (
  <>
    <Hero />
    <Projects />
    <Skills />
    <Contact />
  </>
);

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
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
