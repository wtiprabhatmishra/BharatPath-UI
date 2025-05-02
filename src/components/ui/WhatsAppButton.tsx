import React from 'react';
import { Phone } from 'lucide-react';

export function WhatsAppButton() {
  const openWhatsApp = () => {
    window.open('https://wa.me/919140626921', '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <Phone size={24} />
    </button>
  );
}