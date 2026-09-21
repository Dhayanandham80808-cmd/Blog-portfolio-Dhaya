import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/common/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import BrailleDemo from './components/BrailleDemo';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/common/Footer';
import ResumeModal from './components/ResumeModal';

function App() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-navy-950 dark:text-slate-100 transition-colors duration-300 font-sans">
        
        {/* Sticky Glass Navbar */}
        <Navbar onOpenResume={() => setShowResumeModal(true)} />

        {/* Main Content Sections */}
        <main>
          {/* Hero Section */}
          <Hero onOpenResume={() => setShowResumeModal(true)} />

          {/* About Section */}
          <About />

          {/* Skills Matrix */}
          <Skills />

          {/* Real Resume Projects */}
          <Projects onOpenBrailleDemo={() => {
            const el = document.getElementById('braille-demo');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }} />

          {/* Interactive Text-to-Braille Simulator */}
          <BrailleDemo />

          {/* Tech Blog Feed & Studio */}
          <Blogs />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Printable Resume Modal */}
        {showResumeModal && (
          <ResumeModal onClose={() => setShowResumeModal(false)} />
        )}

      </div>
    </ThemeProvider>
  );
}

export default App;
