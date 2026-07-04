import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Footer from './sections/Footer';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
