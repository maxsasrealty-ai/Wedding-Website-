import React, { useState } from 'react';
import { motion } from 'motion/react';
import { WEDDING_DATA } from '../data/wedding';
import { GoldDivider, CornerFiligree } from './FloralDecorations';
import { Heart, Sparkles, Image as ImageIcon } from 'lucide-react';

export const CoupleStory: React.FC = () => {
  const [activeStoryIdx, setActiveStoryIdx] = useState<number>(0);

  return (
    <section id="our-story" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-cinzel tracking-[0.25em] uppercase text-[#8A6B29] font-semibold block mb-1">
            Anubhav & Kajal · प्रेम और समर्पण
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#3B060B]">
            Our Beautiful Beginning
          </h2>
          <p className="font-hindi text-base sm:text-lg text-[#8A1C24] font-medium mt-2">
            "दो दिलों का पावन संगम, एक सुंदर सफर की शुरुआत"
          </p>
          <GoldDivider className="mt-4" />
        </div>

        {/* Regal Editorial Portrait Frame & Story Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Couple Portrait Card (Left) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm aspect-[3/4] rounded-2xl p-2.5 bg-[#FFFDF9] royal-border royal-box-shadow">
              <CornerFiligree position="top-left" size={40} className="top-1 left-1 z-10" />
              <CornerFiligree position="top-right" size={40} className="top-1 right-1 z-10" />
              <CornerFiligree position="bottom-left" size={40} className="bottom-1 left-1 z-10" />
              <CornerFiligree position="bottom-right" size={40} className="bottom-1 right-1 z-10" />

              {/* Photo Frame Container */}
              <div className="relative w-full h-full rounded-xl overflow-hidden border border-[#C5A059]/40 shadow-inner group">
                <img
                  src={WEDDING_DATA.couple.photoUrl}
                  alt="Anubhav & Kajal - The Beginning of Forever"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Scrim Overlay & Floating Monogram Tag */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 text-center text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#160608]/85 backdrop-blur-sm border border-[#C5A059]/70 text-[#F7E2A9] text-[10px] font-cinzel font-semibold tracking-widest uppercase mb-1">
                    <Sparkles className="w-3 h-3 text-[#DFC07A]" />
                    <span>The Beginning of Forever</span>
                  </div>
                  <h4 className="font-cinzel text-base font-bold text-white tracking-wide">
                    ANUBHAV & KAJAL
                  </h4>
                  <p className="font-hindi text-xs text-[#DFC07A] font-medium">
                    अनुभव ❤️ काजल
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Story Narrative Chapters (Right) */}
          <div className="md:col-span-7 space-y-4">
            {WEDDING_DATA.story.map((item, idx) => {
              const isActive = activeStoryIdx === idx;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  onClick={() => setActiveStoryIdx(idx)}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#FFFDF9] border-[#C5A059] shadow-md ring-1 ring-[#C5A059]/40'
                      : 'bg-[#FFFDF9]/60 border-[#C5A059]/20 hover:bg-[#FFFDF9] hover:border-[#C5A059]/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-cinzel text-xs font-bold tracking-wider text-[#8A1C24]">
                      {item.date}
                    </span>
                    <span className="text-xs font-hindi text-[#8A6B29] font-medium">
                      अध्याय {idx + 1}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#3B060B]">
                    {item.title}
                  </h3>
                  <h4 className="font-hindi text-sm font-semibold text-[#8A1C24] mb-2">
                    {item.titleHindi}
                  </h4>

                  <p className="font-cormorant text-sm sm:text-base text-[#574639] leading-relaxed">
                    {item.caption}
                  </p>
                </motion.div>
              );
            })}

            {/* Sacred Seven Vows (Saat Phere) Callout */}
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#C5A059]/30 text-center">
              <span className="font-hindi text-xs sm:text-sm font-semibold text-[#8A1C24]">
                ॥ सखा सप्तपदा भव। सख्यं ते गमेयम् ॥
              </span>
              <p className="font-cormorant italic text-xs text-[#735F4E] mt-0.5">
                "Together we take these seven steps to share our lives, dreams, and joys forever."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
