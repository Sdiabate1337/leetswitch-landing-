import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Showcase from './components/Showcase';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Benefits />
        <Showcase />
        <HowItWorks />
        <Services />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
