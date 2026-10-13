import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ReservationBannerProps {
  onOpenReservation: () => void;
}

export const ReservationBanner: React.FC<ReservationBannerProps> = ({ onOpenReservation }) => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative border border-white/10 bg-linear-to-r from-[#1b1713] to-[#121212] p-8 sm:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] bg-size-[16px_16px] pointer-events-none"></div>
        
        <div className="relative z-10 space-y-3 max-w-xl">
          <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">RÉSERVATION</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">Réservez votre table</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Que ce soit pour un dîner romantique, un déjeuner d'affaires ou une célébration, nous avons la table parfaite pour vous.
          </p>
        </div>

        <button 
          onClick={onOpenReservation}
          className="relative z-10 bg-amber-400 hover:bg-amber-500 text-gray-950 font-medium px-8 py-3.5 rounded-xl text-sm transition-all shadow-xl shadow-amber-400/10 cursor-pointer flex items-center gap-2"
        >
          Réserver maintenant <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};