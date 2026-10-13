import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section id="accueil" className="relative pt-12 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              BIENVENUE CHEZ DÉLICE
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight leading-tight">
              Une expérience culinaire <span className="text-amber-400 italic">inoubliable</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-lg leading-relaxed">
              Des plats délicieux préparés avec des ingrédients frais et de saison, pour éveiller tous vos sens.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#menu" 
                className="bg-amber-400 hover:bg-amber-500 text-gray-950 font-medium px-6 py-3 rounded-lg text-sm transition-all flex items-center gap-2"
              >
                Découvrir le menu <ArrowRight className="w-4 h-4" />
              </a>
              <button 
                onClick={onOpenReservation}
                className="border border-white/20 hover:border-amber-400 text-white font-medium px-6 py-3 rounded-lg text-sm transition-all cursor-pointer bg-transparent"
              >
                Réserver une table
              </button>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Client" className="w-10 h-10 rounded-full border-2 border-[#0d0d0d] object-cover" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Client" className="w-10 h-10 rounded-full border-2 border-[#0d0d0d] object-cover" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Client" className="w-10 h-10 rounded-full border-2 border-[#0d0d0d] object-cover" />
              </div>
              <div>
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-0.5">Plus de 2,000+ clients satisfaits</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-4/3">
              <img 
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80" 
                alt="Plat gastronomique saumon" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};