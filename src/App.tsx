import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { useSmoothScroll } from './hooks/useSmoothScroll';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import SeafoodShowcase from './components/SeafoodShowcase';
import GrillFire from './components/GrillFire';
import DhabaExperience from './components/DhabaExperience';
import MenuSection from './components/MenuSection';
import Gallery from './components/Gallery';
import Visit from './components/Visit';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import FloatingButtons from './components/FloatingButtons';

function Site() {
  useSmoothScroll();
  const [reserveOpen, setReserveOpen] = useState(false);
  const openReserve = () => setReserveOpen(true);

  return (
    <div className="cinematic-grain relative min-h-screen bg-ink-950 text-bone-50">
      <Navbar onReserveClick={openReserve} />

      <main className="relative z-[2]">
        <Hero onReserveClick={openReserve} />
        <Marquee />
        <SeafoodShowcase />
        <GrillFire />
        <DhabaExperience />
        <MenuSection />
        <Gallery />
        <Visit onReserveClick={openReserve} />
        <Footer />
      </main>

      <FloatingButtons onReserveClick={openReserve} />
      <ReservationModal open={reserveOpen} onClose={() => setReserveOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  );
}
