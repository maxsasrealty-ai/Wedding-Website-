import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GaneshJiMedallion, CornerFiligree } from './FloralDecorations';
import { WEDDING_DATA } from '../data/wedding';
import { Sparkles, Heart } from 'lucide-react';

interface EnvelopeIntroProps {
  onOpen: () => void;
  isOpen: boolean;
}

export const EnvelopeIntro: React.FC<EnvelopeIntroProps> = ({ onOpen, isOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    // Smooth timing for envelope flap animation before transitioning
    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          key="envelope-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1F0C0F] p-4 sm:p-6 overflow-hidden"
          style={{
            backgroundImage: `radial-gradient(circle at center, #3F0B10 0%, #160608 100%)`,
          }}
        >
          {/* Subtle Ambient Golden Particles */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-[#C5A059]/10 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#8A1C24]/20 blur-3xl" />
          </div>

          {/* Envelope Card Container */}
          <div className="relative w-full max-w-[480px] perspective-1000">
            {/* Flap & Envelope Body Wrapper */}
            <motion.div
              animate={
                isOpening
                  ? { y: [0, -10, 40], scale: [1, 1.02, 0.96], opacity: [1, 1, 0] }
                  : { y: 0 }
              }
              transition={{ duration: 1.1, ease: 'easeInOut' }}
              className="relative w-full bg-[#FFFDF9] rounded-2xl shadow-2xl overflow-hidden royal-border"
              style={{
                boxShadow:
                  '0 25px 60px -15px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(197, 160, 89, 0.45), 0 0 30px rgba(197, 160, 89, 0.25)',
              }}
            >
              {/* Corner Filigrees */}
              <CornerFiligree position="top-left" size={52} className="top-2 left-2" />
              <CornerFiligree position="top-right" size={52} className="top-2 right-2" />
              <CornerFiligree position="bottom-left" size={52} className="bottom-2 left-2" />
              <CornerFiligree position="bottom-right" size={52} className="bottom-2 right-2" />

              {/* Envelope Flap Fold Visual Geometry */}
              <div className="relative pt-10 pb-8 px-6 sm:px-10 text-center">
                {/* Traditional Auspicious Invocation Header */}
                <div className="mb-4">
                  <span className="font-hindi text-sm tracking-wider text-[#8A1C24] font-medium block">
                    {WEDDING_DATA.invitationMessage.shloka}
                  </span>
                  <div className="mx-auto mt-2 w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
                </div>

                {/* Central Ganesh Ji Medallion */}
                <div className="my-2 flex justify-center">
                  <GaneshJiMedallion size={74} />
                </div>

                {/* Couple Circular Portrait Medallion */}
                <div className="relative mx-auto my-2 w-16 h-16 rounded-full overflow-hidden p-[2px] bg-gradient-to-tr from-[#C5A059] via-[#FAF7F2] to-[#8A1C24] shadow-md">
                  <img
                    src={WEDDING_DATA.couple.photoUrl}
                    alt="Anubhav & Kajal"
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                </div>

                {/* Invitation Subtitle */}
                <p className="font-cormorant italic text-base sm:text-lg text-[#78614E] mt-2">
                  You are cordially invited to celebrate the wedding of
                </p>

                {/* Couple Names */}
                <div className="mt-2 mb-4">
                  <h1 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-wider text-[#3F0B10]">
                    ANUBHAV
                  </h1>
                  <div className="flex items-center justify-center gap-2 my-1">
                    <div className="w-8 h-[1px] bg-[#C5A059]/60" />
                    <Heart className="w-4 h-4 fill-[#8A1C24] text-[#8A1C24] animate-pulse" />
                    <div className="w-8 h-[1px] bg-[#C5A059]/60" />
                  </div>
                  <h1 className="font-cinzel text-2xl sm:text-3xl font-bold tracking-wider text-[#3F0B10]">
                    KAJAL
                  </h1>
                </div>

                {/* Date preview */}
                <div className="inline-block py-1 px-4 border-y border-[#C5A059]/40 mb-6">
                  <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-widest text-[#8A6B29] uppercase">
                    26 November 2026 · Aligarh
                  </span>
                </div>

                {/* Wax Seal with Monogram */}
                <div className="relative my-4 flex justify-center">
                  <motion.div
                    animate={
                      isOpening
                        ? { scale: [1, 1.25, 0], rotate: [0, 15, -20], opacity: [1, 1, 0] }
                        : { scale: [0.98, 1.02, 0.98] }
                    }
                    transition={{
                      duration: isOpening ? 0.7 : 3,
                      repeat: isOpening ? 0 : Infinity,
                      ease: 'easeInOut',
                    }}
                    className="relative w-20 h-20 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                    style={{
                      background: 'radial-gradient(circle at 35% 35%, #A82833 0%, #631219 70%, #3B060B 100%)',
                      boxShadow: '0 8px 20px rgba(63, 11, 16, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.3), inset 0 -3px 6px rgba(0, 0, 0, 0.5)',
                      border: '2px solid rgba(197, 160, 89, 0.7)',
                    }}
                    onClick={handleOpenClick}
                    title="Click to break seal & open invitation"
                  >
                    <div className="w-16 h-16 rounded-full border border-[#C5A059]/60 flex flex-col items-center justify-center">
                      <span className="font-cinzel font-bold text-base text-[#F7E2A9] tracking-widest drop-shadow-sm">
                        A & K
                      </span>
                      <span className="text-[9px] font-serif text-[#DFC07A]/80 tracking-widest mt-0.5">
                        2026
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Action CTA Button */}
                <div className="mt-6 mb-2">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleOpenClick}
                    disabled={isOpening}
                    className="group relative w-full sm:w-auto px-8 py-3.5 rounded-full overflow-hidden text-sm font-semibold tracking-widest font-cinzel text-[#FAF7F2] transition-all shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #7A171F 0%, #520F15 100%)',
                      border: '1px solid rgba(197, 160, 89, 0.6)',
                      boxShadow: '0 6px 20px rgba(94, 18, 24, 0.35)',
                    }}
                  >
                    {/* Golden Sheen hover effect */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#C5A059]/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                    <span className="relative flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#DFC07A]" />
                      <span>{isOpening ? 'UNSEALING INVITATION...' : 'OPEN YOUR INVITATION'}</span>
                      <Sparkles className="w-4 h-4 text-[#DFC07A]" />
                    </span>
                  </motion.button>

                  <p className="font-cormorant italic text-xs text-[#8A7969] mt-3">
                    Tap to begin your royal musical experience
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
