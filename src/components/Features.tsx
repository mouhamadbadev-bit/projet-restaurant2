import React from 'react';
import { Utensils, ChefHat, HeartHandshake, Smile } from 'lucide-react';


// React.FC signifie react.function.componente
export const Features: React.FC = () => {
  return (
    <section className="py-12 bg-[#121212] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="flex items-start gap-4 p-4 rounded-xl bg-[#181818] border border-white/5">
            <div className="p-3 bg-amber-400/10 rounded-lg text-amber-400">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Ingrédients frais</h3>
              <p className="text-gray-400 text-xs mt-1">Nous utilisons des produits frais et locaux de qualité.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-[#181818] border border-white/5">
            <div className="p-3 bg-amber-400/10 rounded-lg text-amber-400">
              <ChefHat className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Chefs passionnés</h3>
              <p className="text-gray-400 text-xs mt-1">Nos chefs mettent leur savoir-faire et leur passion dans chaque plat.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-[#181818] border border-white/5">
            <div className="p-3 bg-amber-400/10 rounded-lg text-amber-400">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Ambiance chaleureuse</h3>
              <p className="text-gray-400 text-xs mt-1">Un cadre cosy et élégant pour un moment unique.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-[#181818] border border-white/5">
            <div className="p-3 bg-amber-400/10 rounded-lg text-amber-400">
              <Smile className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Service de qualité</h3>
              <p className="text-gray-400 text-xs mt-1">Notre équipe est à votre écoute pour vous offrir le meilleur service.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};