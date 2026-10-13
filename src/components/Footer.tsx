import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  return (
    <footer id="contact" className="bg-[#090909] border-t border-white/5 pt-16 pb-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-serif italic text-2xl font-bold text-amber-400">Délice</span>
            <span className="text-[10px] tracking-widest uppercase text-gray-400 font-semibold mt-2">RESTAURANT</span>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">
            Délice vous accueille dans un cadre chaleureux pour une expérience gastronomique unique.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-amber-400 hover:text-gray-950 flex items-center justify-center text-gray-300 transition-colors">f</a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-amber-400 hover:text-gray-950 flex items-center justify-center text-gray-300 transition-colors">ig</a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 hover:bg-amber-400 hover:text-gray-950 flex items-center justify-center text-gray-300 transition-colors">t</a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4 text-amber-400">Navigation</h4>
          <ul className="space-y-2.5 text-xs text-gray-400">
            <li><a href="#accueil" className="hover:text-white transition-colors">Accueil</a></li>
            <li><a href="#apropos" className="hover:text-white transition-colors">À propos</a></li>
            <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
            <li>
              <button 
                onClick={onOpenReservation} 
                className="hover:text-white transition-colors bg-transparent border-none text-xs text-gray-400 p-0 cursor-pointer"
              >
                Réservation
              </button>
            </li>
            <li><a href="#avis" className="hover:text-white transition-colors">Avis</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4 text-amber-400">Contact</h4>
          <ul className="space-y-3 text-xs text-gray-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Dakar, Sénégal</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>+221 77 123 45 67</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <span>contact@delice-restaurant.sn</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Lun - Dim: 10h00 - 23h00</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-4 text-amber-400">Newsletter</h4>
          <p className="text-gray-400 text-xs mb-3">Abonnez-vous pour recevoir nos actualités et offres spéciales.</p>
          <form onSubmit={(e) => { e.preventDefault(); alert('Inscription réussie !'); }} className="space-y-2">
            <input 
              type="email" 
              required
              placeholder="Votre email" 
              className="w-full bg-[#161616] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
            />
            <button 
              type="submit" 
              className="w-full bg-amber-400 hover:bg-amber-500 text-gray-950 font-medium py-2 rounded-lg text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              S'abonner <Send className="w-3 h-3" />
            </button>
          </form>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-12 border-t border-white/5 text-center text-xs text-gray-500">
        © 2026 Délice Restaurant. Tous droits réservés.
      </div>
    </footer>
  );
};