import  { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { PopularMenu } from './components/PopularMenu';
import { ReservationBanner } from './components/ReservationBanner';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openReservation = () => setIsModalOpen(true);
  const closeReservation = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-sans selection:bg-amber-400 selection:text-gray-950">
      <Header onOpenReservation={openReservation} />
      <Hero onOpenReservation={openReservation} />
      <Features />
      <PopularMenu onOpenReservation={openReservation} />
      <ReservationBanner onOpenReservation={openReservation} />
      <Footer onOpenReservation={openReservation} />
      <ReservationModal isOpen={isModalOpen} onClose={closeReservation} />
    </div>
  );
}

export default App;