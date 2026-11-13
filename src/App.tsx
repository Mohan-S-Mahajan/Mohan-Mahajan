import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Lenis from 'lenis';
import { GrainOverlay } from './components/ui/GrainOverlay';
import { Navbar } from './components/layout/Navbar';
import { MobileMenu } from './components/layout/MobileMenu';
import { StickyCallButton } from './components/layout/StickyCallButton';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { AudioProvider } from './context/AudioContext';
import { BetterCallSaulPlayer } from './components/audio/BetterCallSaulPlayer';

// Multi-Page Routes
import { HomePage } from './pages/HomePage';
import { FlowPage } from './pages/FlowPage';
import { TeamPage } from './pages/TeamPage';
import { CasesPage } from './pages/CasesPage';
import { ToolkitPage } from './pages/ToolkitPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Set document mode attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-mode', 'whsp');
  }, []);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });
    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <AudioProvider>
      <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
        {/* Route Scroll Position Reset */}
        <ScrollToTop />

        {/* Global Visual Overlays */}
        <GrainOverlay />

        {/* Navigation */}
        <Navbar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        {/* Multi-Page Routes */}
        <main id="main-concierge" className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/flow" element={<FlowPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/toolkit" element={<ToolkitPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Better Call Saul Theme / Spotify Floating Sound Player */}
        <BetterCallSaulPlayer />

        {/* Footer */}
        <Footer />

        {/* Mobile Sticky Concierge Call Pill */}
        <StickyCallButton />
      </div>
    </AudioProvider>
  );
};

export default App;
