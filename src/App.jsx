import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import CommunityImpact from './components/CommunityImpact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <HowItWorks />
      <Benefits />
      <CommunityImpact />
      <Footer />
    </div>
  );
}

export default App;