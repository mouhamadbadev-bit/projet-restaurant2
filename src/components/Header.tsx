import React from 'react';

interface HeaderProps {
  onOpenReservation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenReservation }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0d0d0d]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-serif italic text-2xl sm:text-3xl font-bold tracking-wide text-amber-400">
            Délice
          </span>
          <span className="text-[10px] tracking-widest uppercase text-gray-400 font-semibold mt-2">
            RESTAURANT
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#accueil" className="hover:text-amber-400 transition-colors">Accueil</a>
          <a href="#apropos" className="hover:text-amber-400 transition-colors">À propos</a>
          <a href="#menu" className="hover:text-amber-400 transition-colors">Menu</a>
          <button 
            onClick={onOpenReservation} 
            className="hover:text-amber-400 transition-colors cursor-pointer bg-transparent border-none text-sm text-gray-300 p-0"
          >
            Réservation
          </button>
          <a href="#avis" className="hover:text-amber-400 transition-colors">Avis</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
        </nav>

        <button 
          onClick={onOpenReservation}
          className="bg-amber-400 hover:bg-amber-500 text-gray-950 font-medium px-5 py-2.5 rounded-lg text-sm transition-all shadow-lg shadow-amber-400/10 cursor-pointer"
        >
          Réserver une table
        </button>
      </div>
    </header>
  );
};