
import React, { useState } from 'react';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import BenefitsSection from './components/BenefitsSection';
import GreenerTomorrowSection from './components/GreenerTomorrowSection';
import Calculator from './components/Calculator';
import PetitionForm from './components/PetitionForm';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <Calculator />
        <GreenerTomorrowSection />
        <PetitionForm />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;