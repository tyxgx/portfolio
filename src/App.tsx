import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Footer from './sections/Footer';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  const path = window.location.pathname;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
        {path === '/projects' ? <ProjectsPage /> : <Hero />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
