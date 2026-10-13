import React, { useState } from 'react';
import { X, Calendar, Clock, Users, User, Phone, Mail } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#141414] border border-amber-500/30 rounded-2xl p-6 sm:p-8 text-white shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <>
            <div className="text-center mb-6">
              <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">Délice Restaurant</span>
              <h3 className="text-2xl font-bold mt-1">Réservez votre table</h3>
              <p className="text-gray-400 text-sm mt-1">Remplissez le formulaire ci-dessous pour valider votre réservation.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-300 mb-1">Nom complet</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                    <input 
                      type="text" 
                      required
                      placeholder="Moustapha Ba" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-[#1e1e1e] border border-gray-800 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-300 mb-1">Téléphone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                    <input 
                      type="tel" 
                      required
                      placeholder="+221 77..." 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-[#1e1e1e] border border-gray-800 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-300 mb-1">Adresse Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                  <input 
                    type="email" 
                    required
                    placeholder="exemple@email.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[#1e1e1e] border border-gray-800 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-gray-300 mb-1">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                    <input 
                      type="date" 
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full bg-[#1e1e1e] border border-gray-800 rounded-lg pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors text-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-300 mb-1">Heure</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                    <input 
                      type="time" 
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="w-full bg-[#1e1e1e] border border-gray-800 rounded-lg pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors text-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-300 mb-1">Personnes</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                    <select 
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                      className="w-full bg-[#1e1e1e] border border-gray-800 rounded-lg pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:border-amber-400 transition-colors text-gray-300"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, '8+'].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Personne' : 'Personnes'}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full mt-2 bg-amber-400 hover:bg-amber-500 text-gray-950 font-medium py-3 rounded-lg transition-colors shadow-lg shadow-amber-400/10 cursor-pointer"
              >
                Confirmer la réservation
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold">Réservation confirmée !</h3>
            <p className="text-gray-300 text-sm max-w-xs mx-auto">
              Merci <span className="text-amber-400 font-semibold">{formData.name}</span>. Nous avons bien reçu votre demande pour <span className="text-white font-semibold">{formData.guests} personnes</span> le <span className="text-white font-semibold">{formData.date}</span> à <span className="text-white font-semibold">{formData.time}</span>.
            </p>
            <button 
              onClick={resetForm}
              className="mt-4 px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm transition-colors cursor-pointer"
            >
              Fermer
            </button>
          </div>
        )}
      </div>
    </div>
  );
};