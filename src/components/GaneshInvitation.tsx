import React from 'react';
import { motion } from 'motion/react';
import { WEDDING_DATA } from '../data/wedding';
import { GaneshJiMedallion, GoldDivider, CornerFiligree } from './FloralDecorations';
import { Sparkles } from 'lucide-react';

export const GaneshInvitation: React.FC = () => {
  return (
    <section id="ganesh-invitation" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#FAF7F2] overflow-hidden">
      {/* Decorative Traditional Paper Border Container */}
      <div className="relative max-w-4xl mx-auto">
        <div className="relative bg-[#FFFDF9] rounded-2xl p-6 sm:p-12 royal-border royal-box-shadow">
          <CornerFiligree position="top-left" size={54} className="top-2 left-2" />
          <CornerFiligree position="top-right" size={54} className="top-2 right-2" />
          <CornerFiligree position="bottom-left" size={54} className="bottom-2 left-2" />
          <CornerFiligree position="bottom-right" size={54} className="bottom-2 right-2" />

          {/* Central Invocation */}
          <div className="text-center pt-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-4"
            >
              <GaneshJiMedallion size={110} />
            </motion.div>

            {/* Sacred Shloka */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-hindi text-2xl sm:text-3xl md:text-4xl font-bold text-[#8A1C24] tracking-wide mb-2">
                {WEDDING_DATA.invitationMessage.shloka}
              </h2>
              <p className="font-hindi text-xs sm:text-sm text-[#7D6652] max-w-lg mx-auto italic">
                {WEDDING_DATA.invitationMessage.subShloka}
              </p>
            </motion.div>

            <GoldDivider className="my-6" />

            {/* Main Auspicious Invitation Letter */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="max-w-2xl mx-auto space-y-4 text-center my-6"
            >
              <p className="font-hindi text-base sm:text-xl text-[#3A2D23] font-medium leading-relaxed">
                {WEDDING_DATA.invitationMessage.primaryHindi}
              </p>
              <p className="font-cormorant italic text-sm sm:text-lg text-[#6E5A49]">
                "{WEDDING_DATA.invitationMessage.primaryEnglish}"
              </p>
            </motion.div>

            <GoldDivider className="my-6" />

            {/* Family & Couple Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 pt-2">
              {/* Groom Side */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative p-6 rounded-xl bg-[#FAF7F2]/80 border border-[#C5A059]/40 text-center space-y-3"
              >
                <div className="inline-block px-3 py-1 bg-[#8A1C24]/10 border border-[#8A1C24]/30 rounded-full text-xs font-hindi font-semibold text-[#8A1C24]">
                  वर पक्ष (Groom's Side)
                </div>

                <div className="pt-2">
                  <span className="font-hindi text-xs text-[#8A6B29] font-medium block">वर (Groom)</span>
                  <h3 className="font-hindi text-2xl sm:text-3xl font-bold text-[#3B060B] mt-1">
                    {WEDDING_DATA.couple.groom.nameHindi}
                  </h3>
                  <span className="font-cinzel text-sm tracking-wider text-[#665140] block mt-0.5">
                    ({WEDDING_DATA.couple.groom.nameEnglish})
                  </span>
                </div>

                <div className="pt-2 border-t border-[#C5A059]/30">
                  <span className="font-hindi text-xs text-[#7A6451] block mb-1">
                    {WEDDING_DATA.couple.groom.relation}
                  </span>
                  <p className="font-hindi text-base sm:text-lg font-bold text-[#8A1C24] leading-relaxed">
                    {WEDDING_DATA.couple.groom.parentsHindi}
                  </p>
                  <p className="font-cormorant text-xs sm:text-sm text-[#614F40]">
                    {WEDDING_DATA.couple.groom.parentsEnglish}
                  </p>
                </div>
              </motion.div>

              {/* Bride Side */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative p-6 rounded-xl bg-[#FAF7F2]/80 border border-[#C5A059]/40 text-center space-y-3"
              >
                <div className="inline-block px-3 py-1 bg-[#8A1C24]/10 border border-[#8A1C24]/30 rounded-full text-xs font-hindi font-semibold text-[#8A1C24]">
                  वधू पक्ष (Bride's Side)
                </div>

                <div className="pt-2">
                  <span className="font-hindi text-xs text-[#8A6B29] font-medium block">वधू (Bride)</span>
                  <h3 className="font-hindi text-2xl sm:text-3xl font-bold text-[#3B060B] mt-1">
                    {WEDDING_DATA.couple.bride.nameHindi}
                  </h3>
                  <span className="font-cinzel text-sm tracking-wider text-[#665140] block mt-0.5">
                    ({WEDDING_DATA.couple.bride.nameEnglish})
                  </span>
                </div>

                <div className="pt-2 border-t border-[#C5A059]/30">
                  <span className="font-hindi text-xs text-[#7A6451] block mb-1">
                    {WEDDING_DATA.couple.bride.relation}
                  </span>
                  <p className="font-hindi text-base sm:text-lg font-bold text-[#8A1C24] leading-relaxed">
                    {WEDDING_DATA.couple.bride.parentsHindi}
                  </p>
                  <p className="font-cormorant text-xs sm:text-sm text-[#614F40]">
                    {WEDDING_DATA.couple.bride.parentsEnglish}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Darshanabhilashi / Hospitality line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 pt-4 border-t border-[#C5A059]/40 text-center"
            >
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-hindi text-[#8A6B29]">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="font-semibold">{WEDDING_DATA.invitationMessage.hospitalityNote}</span>
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
