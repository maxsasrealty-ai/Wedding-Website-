import React from 'react';
import { motion } from 'motion/react';
import { WEDDING_DATA, WeddingEvent } from '../data/wedding';
import { GoldDivider } from './FloralDecorations';
import { Clock, Utensils, Award, Users, Gem } from 'lucide-react';

export const WeddingTimeline: React.FC = () => {
  const getEventIcon = (type: WeddingEvent['icon']) => {
    switch (type) {
      case 'horse':
        // Traditional ceremonial icon
        return <Award className="w-5 h-5 text-[#C5A059]" />;
      case 'car':
        // Baraat celebratory gathering
        return <Users className="w-5 h-5 text-[#C5A059]" />;
      case 'ring':
        // Sagai / Ring Ceremony
        return <Gem className="w-5 h-5 text-[#8A1C24] animate-pulse" />;
      case 'feast':
        // Royal banquet
        return <Utensils className="w-5 h-5 text-[#C5A059]" />;
      default:
        return <Clock className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section id="wedding-timeline" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#FAF7F2] overflow-hidden">
      {/* Background Section Title */}
      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
        <span className="text-xs font-cinzel tracking-[0.25em] uppercase text-[#8A6B29] font-semibold block mb-1">
          Auspicious Schedule · वैवाहिक कार्यक्रम
        </span>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#3B060B]">
          Wedding Itinerary
        </h2>
        <p className="font-hindi text-base sm:text-lg text-[#8A1C24] font-medium mt-2">
          {WEDDING_DATA.date.displayDateHindi} ({WEDDING_DATA.date.displayDate})
        </p>
        <GoldDivider className="mt-4" />
      </div>

      {/* Vertical Interactive Timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Central Golden Spine */}
        <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#C5A059]/10 via-[#C5A059]/60 to-[#C5A059]/10 pointer-events-none" />

        <div className="space-y-8 sm:space-y-12">
          {WEDDING_DATA.events.map((event, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? 'sm:flex-row-reverse' : ''
                } gap-6 group`}
              >
                {/* Timeline Center Node */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#FFFDF9] border-2 border-[#C5A059] flex items-center justify-center shadow-md z-10 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-8 h-8 rounded-full bg-[#FAF7F2] flex items-center justify-center">
                    {getEventIcon(event.icon)}
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-14 sm:ml-0 w-full sm:w-[calc(50%-2rem)] bg-[#FFFDF9] rounded-xl p-5 sm:p-6 royal-border royal-box-shadow relative transition-all duration-300 group-hover:-translate-y-1 ${
                    event.highlight ? 'ring-1 ring-[#8A1C24]/30' : ''
                  }`}
                >
                  {/* Subtle top indicator for highlight */}
                  {event.highlight && (
                    <div className="absolute top-0 right-4 -translate-y-1/2 bg-[#8A1C24] text-[#FAF7F2] text-[10px] font-cinzel font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                      Main Ceremony · मुख्य संस्कार
                    </div>
                  )}

                  {/* Time Badge */}
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-3.5 h-3.5 text-[#8A1C24]" />
                    <span className="font-cinzel text-xs sm:text-sm font-bold tracking-wider text-[#8A1C24]">
                      {event.time}
                    </span>
                  </div>

                  {/* Event Titles */}
                  <div className="mb-2">
                    <h3 className="font-hindi text-xl sm:text-2xl font-bold text-[#3B060B]">
                      {event.titleHindi}
                    </h3>
                    <h4 className="font-cinzel text-xs sm:text-sm tracking-wide text-[#8A6B29] font-semibold mt-0.5">
                      {event.titleEnglish}
                    </h4>
                  </div>

                  {/* Descriptions */}
                  <p className="font-hindi text-xs sm:text-sm text-[#4D3F33] leading-relaxed">
                    {event.descriptionHindi}
                  </p>
                  <p className="font-cormorant italic text-xs sm:text-sm text-[#7D6652] mt-1">
                    {event.descriptionEnglish}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
