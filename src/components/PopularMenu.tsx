
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { popularDishes } from '../data/menuData.ts';
import { DishCard } from './DishCard';

interface PopularMenuProps {
  onOpenReservation: () => void;
}

export const PopularMenu: React.FC<PopularMenuProps> = ({ onOpenReservation }) => {
  return (
    <section id="menu" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-amber-400 text-xs font-semibold tracking-widest uppercase">NOTRE MENU</span>
            <h2 className="text-3xl font-serif font-bold mt-1">Nos plats populaires</h2>
          </div>
          <a href="#all-menu" className="text-amber-400 text-sm font-medium flex items-center gap-1 mt-3 sm:mt-0 hover:underline">
            Voir tout le menu <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} onOpenReservation={onOpenReservation} />
          ))}
        </div>

      </div>
    </section>
  );
};