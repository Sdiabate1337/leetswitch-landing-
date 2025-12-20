import Header from './components/Header';
import Hero from './components/Hero';

import Problem from './components/Problem';
import Approach from './components/Approach';
import SolutionsPreview from './components/SolutionsPreview';
import Process from './components/Process';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />

        <Problem />
        <Approach />
        <SolutionsPreview />
        <Process />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
