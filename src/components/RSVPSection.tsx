import React from 'react';
import { motion } from 'motion/react';
import { WEDDING_DATA } from '../data/wedding';
import { GoldDivider, CornerFiligree, GaneshJiMedallion } from './FloralDecorations';
import {
  Heart,
  CalendarPlus,
  MessageCircle,
  Download,
  Sparkles,
  MapPin,
  Calendar,
  Clock,
  Printer,
} from 'lucide-react';

export const RSVPSection: React.FC = () => {
  // WhatsApp Share with encoded personalized message
  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `🙏 *॥ श्री गणेशाय नमः ॥*\n\n` +
      `You are cordially invited to celebrate the royal wedding of *ANUBHAV ❤️ KAJAL*.\n\n` +
      `📅 *Date:* Thursday, 26 November 2026\n` +
      `💍 *Sagai Samaroh:* 6:00 PM\n` +
      `🍽️ *Preetibhoj:* 8:00 PM\n` +
      `📍 *Venue:* B.S. Resort, Jalalpur Road, Khair, Aligarh (U.P.)\n\n` +
      `Open the interactive wedding invitation here:\n${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  // Standard Google Calendar Event
  const handleAddToCalendar = () => {
    const startTime = '20261126T103000Z'; // 4:00 PM IST
    const endTime = '20261126T183000Z';   // 12:00 AM IST
    const title = encodeURIComponent('Wedding & Sagai: Anubhav & Kajal');
    const location = encodeURIComponent('B.S. Resort, Jalalpur Road, Khair, Aligarh, Uttar Pradesh');
    const details = encodeURIComponent(
      'Auspicious wedding ceremony of Anubhav & Kajal. Schedule: Ghurdhari 4:00 PM, Baraat 6:00 PM, Sagai Samaroh 6:00 PM, Preetibhoj 8:00 PM at B.S. Resort, Aligarh.'
    );

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank');
  };

  // Download .ics file
  const handleDownloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Anubhav and Kajal Wedding//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:wedding-anubhav-kajal-20261126@wedding.invite',
      'SUMMARY:Anubhav & Kajal Wedding & Sagai Ceremony',
      'DESCRIPTION:Auspicious wedding & Sagai ceremony of Anubhav & Kajal at B.S. Resort, Aligarh.',
      'LOCATION:B.S. Resort, Jalalpur Road, Khair, Aligarh, Uttar Pradesh',
      'DTSTART:20261126T103000Z',
      'DTEND:20261126T183000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Anubhav_Kajal_Wedding_26Nov2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  // Print or save invitation pass
  const handlePrintPass = () => {
    window.print();
  };

  return (
    <section id="rsvp-section" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-xs font-cinzel tracking-[0.25em] uppercase text-[#8A6B29] font-semibold block mb-1">
            Blessings & Invitation Pass · आशीर्वाद एवं आमंत्रण
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-[#3B060B]">
            Your Presence Is Our Greatest Gift
          </h2>
          <p className="font-cormorant text-base sm:text-lg text-[#5A483B] max-w-xl mx-auto mt-2 leading-relaxed">
            We would be delighted to celebrate this beautiful occasion with you. Your blessings and presence will make our day even more special.
          </p>
          <p className="font-hindi text-sm sm:text-base text-[#8A1C24] font-medium mt-1">
            "आपकी पावन उपस्थिति एवं मंगल आशीर्वाद हमारे लिए सदैव स्मरणीय रहेंगे।"
          </p>
          <GoldDivider className="mt-4" />
        </div>

        {/* Quick Action Buttons Strip */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          <button
            onClick={handleShareWhatsApp}
            className="px-5 py-3 rounded-xl bg-[#1E7E34] hover:bg-[#18642A] text-[#FAF7F2] text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#1E7E34]" />
            <span>SHARE ON WHATSAPP</span>
          </button>

          <button
            onClick={handleAddToCalendar}
            className="px-5 py-3 rounded-xl bg-[#8A1C24] hover:bg-[#6E141B] text-[#FAF7F2] text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <CalendarPlus className="w-4 h-4 text-[#DFC07A]" />
            <span>ADD TO GOOGLE CALENDAR</span>
          </button>

          <button
            onClick={handleDownloadIcs}
            className="px-4 py-3 rounded-xl border border-[#C5A059]/60 bg-[#FFFDF9] hover:bg-[#FAF7F2] text-[#3B060B] text-xs sm:text-sm font-medium flex items-center gap-2 transition-all shadow-sm active:scale-95 cursor-pointer"
            title="Download .ICS Calendar Event"
          >
            <Download className="w-4 h-4 text-[#8A6B29]" />
            <span>.ICS CALENDAR</span>
          </button>

          <button
            onClick={handlePrintPass}
            className="px-4 py-3 rounded-xl border border-[#C5A059]/60 bg-[#FFFDF9] hover:bg-[#FAF7F2] text-[#3B060B] text-xs sm:text-sm font-medium flex items-center gap-2 transition-all shadow-sm active:scale-95 cursor-pointer"
            title="Print or Save Invitation Summary Pass"
          >
            <Printer className="w-4 h-4 text-[#C5A059]" />
            <span>PRINT / SAVE PASS</span>
          </button>
        </div>

        {/* Regal Invitation Keepsake Pass (Clean & Neat presentation) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#FFFDF9] rounded-2xl p-6 sm:p-10 royal-border royal-box-shadow"
        >
          <CornerFiligree position="top-left" size={46} className="top-2 left-2 z-10" />
          <CornerFiligree position="top-right" size={46} className="top-2 right-2 z-10" />
          <CornerFiligree position="bottom-left" size={46} className="bottom-2 left-2 z-10" />
          <CornerFiligree position="bottom-right" size={46} className="bottom-2 right-2 z-10" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Couple Photo Portrait Box */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-xs aspect-[3/4] rounded-xl overflow-hidden royal-border shadow-md">
                <img
                  src={WEDDING_DATA.couple.photoUrl}
                  alt="Anubhav & Kajal - The Beginning of Forever"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-center text-white">
                  <span className="font-cinzel text-xs font-bold tracking-widest text-[#F7E2A9] block">
                    THE BEGINNING OF FOREVER
                  </span>
                  <span className="font-hindi text-[11px] text-[#FAF7F2]">
                    अनुभव ❤️ काजल
                  </span>
                </div>
              </div>
            </div>

            {/* Invitation Details Summary */}
            <div className="md:col-span-7 space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <GaneshJiMedallion size={44} showRays={false} />
                <span className="font-hindi text-base font-bold text-[#8A1C24]">
                  {WEDDING_DATA.invitationMessage.shloka}
                </span>
              </div>

              <div>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#3B060B]">
                  ANUBHAV & KAJAL
                </h3>
                <p className="font-hindi text-sm text-[#8A6B29] font-semibold mt-0.5">
                  चि० अनुभव संग आयु० काजल
                </p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-[#C5A059]/30 text-xs sm:text-sm text-[#4D3E32]">
                <div className="flex items-center justify-center md:justify-start gap-2.5">
                  <Calendar className="w-4 h-4 text-[#8A1C24] shrink-0" />
                  <span className="font-cinzel font-semibold text-[#3B060B]">
                    {WEDDING_DATA.date.displayDate} ({WEDDING_DATA.date.displayDateHindi})
                  </span>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#8A1C24] shrink-0" />
                  <span>
                    <strong>सगाई समारोह:</strong> 6:00 PM · <strong>प्रीतिभोज:</strong> 8:00 PM
                  </span>
                </div>

                <div className="flex items-start justify-center md:justify-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#8A1C24] shrink-0 mt-0.5" />
                  <span>
                    <strong>{WEDDING_DATA.venue.name}:</strong> {WEDDING_DATA.venue.addressHindi}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#C5A059]/30 text-xs text-[#6A5747] space-y-2">
                <div>
                  <span className="font-hindi font-bold text-[#8A1C24] block text-[11px]">
                    वर पक्ष (Groom's Family):
                  </span>
                  <p className="font-hindi font-semibold text-[#3B060B]">
                    {WEDDING_DATA.couple.groom.parentsHindi}
                  </p>
                </div>

                <div className="pt-1.5 border-t border-[#C5A059]/20">
                  <span className="font-hindi font-bold text-[#8A1C24] block text-[11px]">
                    वधू पक्ष (Bride's Family):
                  </span>
                  <p className="font-hindi font-semibold text-[#3B060B]">
                    {WEDDING_DATA.couple.bride.parentsHindi}
                  </p>
                </div>

                <p className="font-hindi text-[#8A6B29] font-medium pt-1 text-center border-t border-[#C5A059]/20">
                  {WEDDING_DATA.invitationMessage.hospitalityNote}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
