import React from 'react';
import { Heart } from 'lucide-react';

interface RoyalHeaderProps {
  onReopenEnvelope: () => void;
}

export const RoyalHeader: React.FC<RoyalHeaderProps> = ({ onReopenEnvelope }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-8 px-4 sm:px-8 py-3.5 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#C5A059]/30 transition-all">
      {/* Zone 1: Brand Wordmark */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="text-base sm:text-lg font-cinzel font-bold tracking-wider text-[#3B060B] whitespace-nowrap shrink-0 flex items-center gap-1.5"
      >
        <span>ANUBHAV</span>
        <Heart className="w-3.5 h-3.5 text-[#8A1C24] fill-[#8A1C24]" />
        <span>KAJAL</span>
      </a>

      {/* Zone 2: 4–5 single-line clean text links */}
      <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-cinzel font-medium text-[#6B5746]">
        <button
          onClick={() => scrollTo('ganesh-invitation')}
          className="hover:text-[#8A1C24] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          Invitation
        </button>
        <button
          onClick={() => scrollTo('wedding-timeline')}
          className="hover:text-[#8A1C24] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          Functions
        </button>
        <button
          onClick={() => scrollTo('venue-section')}
          className="hover:text-[#8A1C24] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          Venue
        </button>
        <button
          onClick={() => scrollTo('our-story')}
          className="hover:text-[#8A1C24] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          Our Story
        </button>
        <button
          onClick={() => scrollTo('countdown-section')}
          className="hover:text-[#8A1C24] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          Countdown
        </button>
      </nav>

      {/* Zone 3: 1 primary action */}
      <div className="flex items-center gap-2.5 shrink-0">
        <button
          onClick={() => scrollTo('rsvp-section')}
          className="px-4 py-1.5 text-xs font-cinzel font-semibold text-[#FAF7F2] bg-[#8A1C24] hover:bg-[#6E141B] rounded-full transition-all shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
        >
          Invitation Card
        </button>
      </div>
    </header>
  );
};
