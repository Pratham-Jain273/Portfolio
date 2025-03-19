import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Certificates from './components/Certificates'; // ✅ Added Certificates Section
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Certificates /> {/* ✅ Ensures Certificates section is included */}
      <Contact />
    </div>
  );
}

export default App;
