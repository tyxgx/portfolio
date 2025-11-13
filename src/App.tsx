import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
