/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { EnvelopeIntro } from './components/EnvelopeIntro';
import { HeroSection } from './components/HeroSection';
import { GaneshInvitation } from './components/GaneshInvitation';
import { WeddingTimeline } from './components/WeddingTimeline';
import { VenueSection } from './components/VenueSection';
import { CoupleStory } from './components/CoupleStory';
import { Countdown } from './components/Countdown';
import { RSVPSection } from './components/RSVPSection';
import { RoyalHeader } from './components/RoyalHeader';
import { RoyalFooter } from './components/RoyalFooter';
import { MusicPlayer } from './components/MusicPlayer';
import { FallingPetalsCanvas } from './components/FloralDecorations';
import { useMusic } from './hooks/useMusic';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [showPetals, setShowPetals] = useState(true);

  // Background Instrumental Music Hook
  const {
    isPlaying,
    isMuted,
    hasStartedOnce,
    visualizerLevels,
    playMusic,
    togglePlay,
    toggleMute,
  } = useMusic();

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpen(true);
    // User interaction satisfies browser autoplay policies
    playMusic();
  };

  const handleReopenEnvelope = () => {
    setIsEnvelopeOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#FAF7F2] text-[#231C16] font-sans selection:bg-[#8A1C24] selection:text-[#FAF7F2] overflow-x-hidden">
      {/* Hidden YouTube audio holder for Rabba track */}
      <div id="youtube-audio-holder" className="fixed -top-96 -left-96 w-1 h-1 opacity-0 pointer-events-none" aria-hidden="true" />

      {/* Falling Rose Petals & Golden Dust Canvas */}
      <FallingPetalsCanvas active={showPetals && isEnvelopeOpen} />

      {/* SECTION 1: Interactive Envelope Opening Screen */}
      <EnvelopeIntro onOpen={handleOpenEnvelope} isOpen={isEnvelopeOpen} />

      {/* Main Wedding Invitation Website */}
      {isEnvelopeOpen && (
        <div className="relative flex flex-col min-h-screen">
          {/* Top Bar Navigation */}
          <RoyalHeader onReopenEnvelope={handleReopenEnvelope} />

          {/* SECTION 2: Cinematic Hero */}
          <main className="flex-1">
            <HeroSection />

            {/* SECTION 3: Ganesh Vandana & Family Invitation */}
            <GaneshInvitation />

            {/* SECTION 4: Wedding Events Timeline */}
            <WeddingTimeline />

            {/* SECTION 5: Wedding Venue & Navigation */}
            <VenueSection />

            {/* SECTION 6: Our Story & Couple Portrait */}
            <CoupleStory />

            {/* SECTION 7: Live Dynamic Countdown */}
            <Countdown />

            {/* SECTION 8: Final Invitation & RSVP */}
            <RSVPSection />
          </main>

          {/* Royal Footer */}
          <RoyalFooter onReopenEnvelope={handleReopenEnvelope} />

          {/* Floating Music Controls & Visualizer */}
          <MusicPlayer
            isPlaying={isPlaying}
            isMuted={isMuted}
            visualizerLevels={visualizerLevels}
            onTogglePlay={togglePlay}
            onToggleMute={toggleMute}
          />
        </div>
      )}
    </div>
  );
}
