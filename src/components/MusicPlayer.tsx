import React from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  isMuted: boolean;
  visualizerLevels: number[];
  onTogglePlay: () => void;
  onToggleMute: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  isPlaying,
  isMuted,
  visualizerLevels,
  onTogglePlay,
  onToggleMute,
}) => {
  return (
    <div
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#FFFDF9]/95 backdrop-blur-md border border-[#C5A059]/60 shadow-xl text-[#3B060B]"
      style={{
        boxShadow: '0 8px 25px rgba(94, 18, 24, 0.18), 0 0 0 1px rgba(197, 160, 89, 0.4)',
      }}
    >
      {/* Audio Visualizer Waves */}
      <div className="flex items-end gap-0.5 h-4 w-6 px-0.5 justify-center" aria-hidden="true">
        {visualizerLevels.map((lvl, idx) => (
          <span
            key={idx}
            className="w-1 bg-[#8A1C24] rounded-full transition-all duration-150"
            style={{
              height: `${isMuted || !isPlaying ? 3 : Math.max(3, (lvl / 100) * 16)}px`,
            }}
          />
        ))}
      </div>

      {/* Track Label (Hidden on ultra-small mobile screens to save space) */}
      <div className="hidden sm:flex flex-col text-left pr-1">
        <span className="text-[10px] font-cinzel font-bold text-[#8A1C24] leading-tight flex items-center gap-1">
          <span>RABBA (रब्बा)</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
        </span>
        <span className="text-[9px] font-sans text-[#78614E] leading-tight">
          Anubhav ❤️ Kajal · Romantic Melodies
        </span>
      </div>

      {/* Play / Pause Toggle Button */}
      <button
        onClick={onTogglePlay}
        className="w-8 h-8 rounded-full bg-[#8A1C24] hover:bg-[#6A1218] text-[#FAF7F2] flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
        title={isPlaying ? 'Pause Instrumental Music' : 'Play Instrumental Music'}
        aria-label={isPlaying ? 'Pause Music' : 'Play Music'}
      >
        {isPlaying ? (
          <Pause className="w-3.5 h-3.5 fill-current" />
        ) : (
          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
        )}
      </button>

      {/* Mute / Unmute Button */}
      <button
        onClick={onToggleMute}
        className="w-8 h-8 rounded-full border border-[#C5A059]/50 bg-[#FAF7F2] hover:bg-[#F0E6D2] text-[#8A6B29] flex items-center justify-center transition-all cursor-pointer active:scale-95"
        title={isMuted ? 'Unmute' : 'Mute'}
        aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
      >
        {isMuted ? (
          <VolumeX className="w-3.5 h-3.5 text-stone-500" />
        ) : (
          <Volume2 className="w-3.5 h-3.5 text-[#8A1C24]" />
        )}
      </button>
    </div>
  );
};
