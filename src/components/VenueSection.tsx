import React, { useState } from 'react';
import { motion } from 'motion/react';
import { WEDDING_DATA } from '../data/wedding';
import { GoldDivider, CornerFiligree } from './FloralDecorations';
import { MapPin, Navigation, Copy, Check, ExternalLink, Building2 } from 'lucide-react';

export const VenueSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      const fullAddress = `${WEDDING_DATA.venue.name}, ${WEDDING_DATA.venue.addressHindi} (${WEDDING_DATA.venue.addressEnglish})`;
      await navigator.clipboard.writeText(fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // clipboard fallback
    }
  };

  const openGoogleMaps = () => {
    window.open(WEDDING_DATA.venue.mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="venue-section" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-xs font-cinzel tracking-[0.25em] uppercase text-[#8A6B29] font-semibold block mb-1">
            Celebration Destination · विवाह स्थल
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#3B060B]">
            Wedding Venue
          </h2>
          <GoldDivider className="mt-4" />
        </div>

        {/* Venue Card Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#FFFDF9] rounded-2xl overflow-hidden royal-border royal-box-shadow"
        >
          <CornerFiligree position="top-left" size={50} className="top-2 left-2 z-10" />
          <CornerFiligree position="top-right" size={50} className="top-2 right-2 z-10" />
          <CornerFiligree position="bottom-left" size={50} className="bottom-2 left-2 z-10" />
          <CornerFiligree position="bottom-right" size={50} className="bottom-2 right-2 z-10" />

          {/* Architectural Venue Banner Illustration */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-gradient-to-b from-[#2A080C] via-[#4A1016] to-[#1C0507]">
            {/* Background Night Sky & Golden Stars */}
            <div className="absolute inset-0 opacity-40">
              <div className="absolute top-6 left-12 w-1.5 h-1.5 rounded-full bg-[#DFC07A]" />
              <div className="absolute top-14 right-20 w-1 h-1 rounded-full bg-[#FAF7F2]" />
              <div className="absolute top-8 right-1/3 w-2 h-2 rounded-full bg-[#C5A059] blur-[0.5px]" />
              <div className="absolute top-20 left-1/3 w-1.5 h-1.5 rounded-full bg-[#FAF7F2]" />
            </div>

            {/* Regal Palace Arches & Festive Lights SVG Silhouette */}
            <svg
              className="absolute bottom-0 w-full h-full preserve-3d"
              viewBox="0 0 800 320"
              preserveAspectRatio="xMidYMax slice"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="palaceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#DFC07A" stopOpacity="0.4" />
                  <stop offset="60%" stopColor="#C5A059" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#5E1218" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Grand Arched Palace Facade Silhouette */}
              {/* Central Dome & Chhatri */}
              <path
                d="M340 180 C340 130 400 110 400 90 C400 110 460 130 460 180 L460 320 L340 320 Z"
                fill="url(#palaceGrad)"
                stroke="#C5A059"
                strokeWidth="1.5"
              />
              <circle cx="400" cy="85" r="4" fill="#DFC07A" />

              {/* Central Grand Archway */}
              <path
                d="M365 320 L365 240 C365 200 435 200 435 240 L435 320 Z"
                fill="#160608"
                stroke="#DFC07A"
                strokeWidth="1.2"
              />

              {/* Left Wing & Arches */}
              <path
                d="M160 210 C160 180 220 160 220 145 C220 160 280 180 280 210 L280 320 L160 320 Z"
                fill="url(#palaceGrad)"
                stroke="#C5A059"
                strokeWidth="1"
              />
              <path
                d="M185 320 L185 260 C185 235 255 235 255 260 L255 320 Z"
                fill="#160608"
                stroke="#C5A059"
                strokeWidth="1"
              />

              {/* Right Wing & Arches */}
              <path
                d="M520 210 C520 180 580 160 580 145 C580 160 640 180 640 210 L640 320 L520 320 Z"
                fill="url(#palaceGrad)"
                stroke="#C5A059"
                strokeWidth="1"
              />
              <path
                d="M545 320 L545 260 C545 235 615 235 615 260 L615 320 Z"
                fill="#160608"
                stroke="#C5A059"
                strokeWidth="1"
              />

              {/* Outer Pillars and Minarets */}
              <rect x="60" y="160" width="20" height="160" fill="#2A080C" stroke="#C5A059" strokeWidth="1" />
              <polygon points="55,160 70,130 85,160" fill="#C5A059" />

              <rect x="720" y="160" width="20" height="160" fill="#2A080C" stroke="#C5A059" strokeWidth="1" />
              <polygon points="715,160 730,130 745,160" fill="#C5A059" />

              {/* Festive String Fairy Lights */}
              <path
                d="M0 110 Q200 150 400 110 Q600 150 800 110"
                stroke="rgba(255,235,160,0.6)"
                strokeWidth="1"
                strokeDasharray="4 8"
              />
              {/* Hanging Lanterns */}
              {[120, 240, 400, 560, 680].map((cx, i) => (
                <g key={i}>
                  <line x1={cx} y1="125" x2={cx} y2="145" stroke="#DFC07A" strokeWidth="0.8" />
                  <circle cx={cx} cy="150" r="5" fill="#F7E2A9" filter="drop-shadow(0 0 6px #F7E2A9)" />
                </g>
              ))}
            </svg>

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C0507] via-transparent to-black/30" />

            {/* Venue Tag Overlay */}
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[#FAF7F2]">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#DFC07A]" />
                <span className="font-cinzel text-xs sm:text-sm font-semibold tracking-wider text-[#DFC07A]">
                  Luxury Resort & Banquet Hall
                </span>
              </div>
              <span className="text-xs font-cinzel text-[#FAF7F2]/80 hidden sm:inline">
                Khair, Aligarh (U.P.)
              </span>
            </div>
          </div>

          {/* Venue Information Body */}
          <div className="p-6 sm:p-10 space-y-6">
            <div className="text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#3B060B]">
                  {WEDDING_DATA.venue.name}
                </h3>
                <h4 className="font-hindi text-lg sm:text-xl font-bold text-[#8A1C24] mt-0.5">
                  {WEDDING_DATA.venue.nameHindi}
                </h4>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 pt-2 sm:pt-0">
                <button
                  onClick={copyAddress}
                  className="px-4 py-2.5 rounded-lg border border-[#C5A059]/60 bg-[#FAF7F2] text-[#3B060B] hover:bg-[#FAF7F2]/60 text-xs sm:text-sm font-medium flex items-center gap-2 transition-all cursor-pointer shadow-sm active:scale-95"
                  title="Copy full venue address"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#8A6B29]" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <button
                  onClick={openGoogleMaps}
                  className="px-5 py-2.5 rounded-lg bg-[#8A1C24] hover:bg-[#70151C] text-[#FAF7F2] text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-md active:scale-95 group"
                >
                  <Navigation className="w-4 h-4 text-[#DFC07A] group-hover:translate-x-0.5 transition-transform" />
                  <span>GET DIRECTIONS</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </button>
              </div>
            </div>

            {/* Address Details */}
            <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#C5A059]/30 space-y-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#8A1C24] shrink-0 mt-0.5" />
                <div>
                  <p className="font-hindi text-base sm:text-lg font-bold text-[#3B060B] leading-relaxed">
                    {WEDDING_DATA.venue.addressHindi}
                  </p>
                  <p className="font-cinzel text-xs sm:text-sm text-[#6E5A49] mt-0.5">
                    {WEDDING_DATA.venue.addressEnglish}
                  </p>
                </div>
              </div>
            </div>

            {/* Travel Guidance Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#665342]">
              <div className="p-4 rounded-lg bg-[#FAF7F2]/60 border border-[#C5A059]/20">
                <span className="font-semibold text-[#8A1C24] block mb-1">
                  🚗 Route & Arrival
                </span>
                <p>
                  Conveniently situated on the Jalalpur Road in the Khair region with ample guest parking.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-[#FAF7F2]/60 border border-[#C5A059]/20">
                <span className="font-semibold text-[#8A1C24] block mb-1">
                  📍 Landmarks
                </span>
                <p>
                  Located near the Khair main link corridor, District Aligarh, Uttar Pradesh.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
