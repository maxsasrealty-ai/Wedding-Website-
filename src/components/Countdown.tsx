import React from 'react';
import { motion } from 'motion/react';
import { useCountdown } from '../hooks/useCountdown';
import { WEDDING_DATA } from '../data/wedding';
import { GoldDivider, CornerFiligree } from './FloralDecorations';
import { Sparkles, Heart } from 'lucide-react';

export const Countdown: React.FC = () => {
  const { days, hours, minutes, seconds, isPast } = useCountdown(
    WEDDING_DATA.date.targetIso
  );

  return (
    <section id="countdown-section" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-[#FFFDF9] rounded-2xl p-6 sm:p-12 royal-border royal-box-shadow text-center">
          <CornerFiligree position="top-left" size={48} className="top-2 left-2" />
          <CornerFiligree position="top-right" size={48} className="top-2 right-2" />
          <CornerFiligree position="bottom-left" size={48} className="bottom-2 left-2" />
          <CornerFiligree position="bottom-right" size={48} className="bottom-2 right-2" />

          {/* Heading */}
          <span className="text-xs font-cinzel tracking-[0.25em] uppercase text-[#8A6B29] font-semibold block mb-1">
            Counting Down To The Big Day
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#3B060B]">
            {isPast ? 'The Celebration Has Begun!' : 'The Celebration Begins In...'}
          </h2>
          <p className="font-hindi text-sm sm:text-base text-[#8A1C24] font-medium mt-1">
            {isPast
              ? 'अनुभव एवं काजल का पावन परिणय संपन्न हुआ। आशीर्वाद बनाए रखें।'
              : 'शुभ विवाह: 26 नवम्बर 2026 · अलीगढ़'}
          </p>

          <GoldDivider className="my-6" />

          {isPast ? (
            /* Post-Wedding Message */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 space-y-4"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#8A1C24]/10 border border-[#C5A059] flex items-center justify-center">
                <Heart className="w-8 h-8 text-[#8A1C24] fill-[#8A1C24]" />
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-[#3B060B]">
                Happily Ever After
              </h3>
              <p className="font-hindi text-lg text-[#5C493B] max-w-lg mx-auto">
                शुभ विवाह के मंगल अवसर पर आपके पावन स्नेह एवं आशीर्वाद के लिए कोटि-कोटि धन्यवाद।
              </p>
            </motion.div>
          ) : (
            /* Live Dynamic Timer */
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 my-8 max-w-2xl mx-auto">
              {[
                { label: 'DAYS', labelHindi: 'दिन', value: days },
                { label: 'HOURS', labelHindi: 'घंटे', value: hours },
                { label: 'MINUTES', labelHindi: 'मिनट', value: minutes },
                { label: 'SECONDS', labelHindi: 'सेकंड', value: seconds },
              ].map((unit, idx) => (
                <motion.div
                  key={unit.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative p-4 sm:p-6 rounded-xl bg-[#FAF7F2] border border-[#C5A059]/40 shadow-sm flex flex-col items-center justify-center"
                >
                  <span className="font-cinzel text-3xl sm:text-5xl font-bold text-[#3B060B] tabular-nums tracking-tight">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <div className="mt-2 text-center border-t border-[#C5A059]/30 pt-1.5 w-full">
                    <span className="font-cinzel text-[11px] sm:text-xs font-bold tracking-widest text-[#8A6B29] block">
                      {unit.label}
                    </span>
                    <span className="font-hindi text-[10px] sm:text-xs text-[#8A1C24] font-medium block">
                      {unit.labelHindi}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Subtext */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-cinzel text-[#756252]">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>26 November 2026 · B.S. Resort, Aligarh (U.P.)</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          </div>
        </div>
      </div>
    </section>
  );
};
