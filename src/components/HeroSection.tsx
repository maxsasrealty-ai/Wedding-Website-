import React from 'react';
import { motion } from 'motion/react';
import { WEDDING_DATA } from '../data/wedding';
import { CornerFiligree, GoldDivider, MandalaOrnament } from './FloralDecorations';
import { ChevronDown, Calendar, MapPin, Heart, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToNext = () => {
    const el = document.getElementById('ganesh-invitation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between pt-12 pb-8 px-4 sm:px-6 overflow-hidden bg-parchment">
      {/* Background Rotating Mandalas */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20">
        <MandalaOrnament size={540} />
      </div>
      <div className="absolute bottom-10 -right-20 pointer-events-none opacity-15 hidden lg:block">
        <MandalaOrnament size={400} />
      </div>
      <div className="absolute bottom-10 -left-20 pointer-events-none opacity-15 hidden lg:block">
        <MandalaOrnament size={400} />
      </div>

      {/* Top Auspicious Kicker */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center z-10 max-w-xl mx-auto"
      >
        <span className="font-hindi text-base sm:text-lg font-medium text-[#8A1C24] tracking-widest block">
          {WEDDING_DATA.invitationMessage.shloka}
        </span>
        <div className="flex items-center justify-center gap-2 mt-1">
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C5A059]" />
          <span className="text-[10px] text-[#C5A059] tracking-widest uppercase font-cinzel">
            Royal Wedding Invitation
          </span>
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C5A059]" />
        </div>
      </motion.div>

      {/* Main Center Editorial & Couple Showcase */}
      <div className="relative z-10 w-full max-w-4xl mx-auto my-auto py-4 sm:py-6 text-center">
        {/* Subtle Decorative Arch Frame */}
        <div className="relative mx-auto max-w-3xl bg-[#FFFDF9]/95 backdrop-blur-sm p-6 sm:p-10 rounded-2xl royal-border royal-box-shadow">
          <CornerFiligree position="top-left" size={48} className="top-2 left-2" />
          <CornerFiligree position="top-right" size={48} className="top-2 right-2" />
          <CornerFiligree position="bottom-left" size={48} className="bottom-2 left-2" />
          <CornerFiligree position="bottom-right" size={48} className="bottom-2 right-2" />

          {/* Couple Real Photograph Feature - Clean & Regal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative mx-auto mb-6 max-w-xs sm:max-w-sm"
          >
            <div className="relative p-2.5 rounded-2xl bg-gradient-to-b from-[#DFC07A]/40 via-[#FAF7F2] to-[#C5A059]/40 royal-border shadow-xl">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-[#C5A059]/50 shadow-inner group">
                <img
                  src={WEDDING_DATA.couple.photoUrl}
                  alt="Anubhav and Kajal - The Beginning of Forever"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle vignette scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-2.5 left-0 right-0 text-center pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#160608]/80 backdrop-blur-sm border border-[#C5A059]/60 text-[#F7E2A9] text-[10px] font-cinzel font-semibold tracking-widest uppercase shadow-sm">
                    <Sparkles className="w-3 h-3 text-[#DFC07A]" />
                    <span>The Beginning of Forever</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Subtitle / Quote */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-cormorant italic text-lg sm:text-2xl text-[#6B5746] tracking-wide"
          >
            "{WEDDING_DATA.couple.taglineEnglish}"
          </motion.p>
          <p className="font-hindi text-xs sm:text-sm text-[#8A1C24] mt-1 font-medium">
            {WEDDING_DATA.couple.taglineHindi}
          </p>

          <GoldDivider className="my-3 sm:my-4" />

          {/* Couple Regal Name Reveal */}
          <div className="py-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.6 }}
            >
              <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider text-[#3B060B] gold-shimmer uppercase leading-tight">
                ANUBHAV
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center justify-center gap-3 my-1.5 sm:my-2"
            >
              <div className="h-[1px] w-14 bg-[#C5A059]/70" />
              <div className="w-8 h-8 rounded-full bg-[#8A1C24]/10 border border-[#C5A059] flex items-center justify-center">
                <Heart className="w-3.5 h-3.5 text-[#8A1C24] fill-[#8A1C24]" />
              </div>
              <div className="h-[1px] w-14 bg-[#C5A059]/70" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 1.0 }}
            >
              <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider text-[#3B060B] gold-shimmer uppercase leading-tight">
                KAJAL
              </h1>
            </motion.div>
          </div>

          <GoldDivider className="my-3 sm:my-4" />

          {/* Family Blessings Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="font-cormorant text-base sm:text-lg text-[#4A3B2F] max-w-lg mx-auto leading-relaxed"
          >
            With the blessings of our families, we invite you to celebrate our wedding & sagai samaroh.
          </motion.p>

          {/* Date & Location Pill Strip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-5 flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 border-t border-[#C5A059]/30 text-xs sm:text-sm font-medium text-[#6B5746]"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#8A1C24]" />
              <span className="font-cinzel font-semibold tracking-wider text-[#3B060B]">
                26 NOVEMBER 2026
              </span>
            </div>
            <div className="hidden sm:block text-[#C5A059]">✦</div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#8A1C24]" />
              <span className="font-cinzel tracking-wide text-[#3B060B]">
                B.S. RESORT · ALIGARH
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="group relative z-10 flex flex-col items-center gap-1.5 text-xs font-cinzel font-semibold tracking-widest text-[#8A6B29] hover:text-[#5E1218] transition-colors cursor-pointer pt-2"
        aria-label="Scroll to explore invitation"
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">SCROLL TO EXPLORE</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#8A1C24]" />
      </motion.button>
    </section>
  );
};
