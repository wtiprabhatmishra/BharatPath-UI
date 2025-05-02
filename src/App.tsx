import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { WhyUs } from './components/sections/WhyUs';
import { MapPreview } from './components/sections/MapPreview';
import { Developers } from './components/sections/Developers';
import { Pricing } from './components/sections/Pricing';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/ui/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <WhyUs />
        <MapPreview />
        <Developers />
        <Pricing />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;