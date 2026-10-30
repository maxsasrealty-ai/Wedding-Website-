import React from 'react';
import { WEDDING_DATA } from '../data/wedding';
import { GoldDivider } from './FloralDecorations';
import { Heart, MailOpen } from 'lucide-react';

interface RoyalFooterProps {
  onReopenEnvelope: () => void;
}

export const RoyalFooter: React.FC<RoyalFooterProps> = ({ onReopenEnvelope }) => {
  return (
    <footer className="relative py-12 px-4 sm:px-6 bg-[#160608] text-[#FAF7F2] text-center border-t border-[#C5A059]/40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#C5A059]/20 blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto space-y-4">
        {/* Shloka */}
        <p className="font-hindi text-base sm:text-lg text-[#DFC07A] font-semibold">
          {WEDDING_DATA.invitationMessage.shloka}
        </p>

        {/* Monogram */}
        <div className="flex items-center justify-center gap-2 text-2xl font-cinzel font-bold text-[#FAF7F2]">
          <span>ANUBHAV</span>
          <Heart className="w-5 h-5 text-[#C5A059] fill-[#C5A059]" />
          <span>KAJAL</span>
        </div>

        <p className="font-cormorant italic text-sm text-[#DFC07A]/80">
          "Two Souls, One Beautiful Journey"
        </p>

        <GoldDivider className="my-4 opacity-50" />

        <p className="font-hindi text-xs sm:text-sm text-[#DDD2C6] leading-relaxed">
          {WEDDING_DATA.couple.groom.parentsHindi} एवं {WEDDING_DATA.couple.bride.parentsHindi} तथा समस्त परिवारजन की ओर से आप सभी का हार्दिक वंदन एवं अभिनंदन।
        </p>

        <p className="text-xs font-cinzel text-[#A69383]">
          26 November 2026 · B.S. Resort, Jalalpur Road, Khair, Aligarh (U.P.)
        </p>

        {/* Replay Envelope Opening Experience */}
        <div className="pt-4">
          <button
            onClick={onReopenEnvelope}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C5A059]/60 bg-[#25090C] hover:bg-[#350D11] text-xs font-cinzel font-medium text-[#DFC07A] transition-colors cursor-pointer"
          >
            <MailOpen className="w-3.5 h-3.5" />
            <span>View Envelope Opening Again</span>
          </button>
        </div>

        <p className="text-[11px] text-[#7A6458] pt-4">
          Celebrated with love & blessings by family and friends.
        </p>
      </div>
    </footer>
  );
};
