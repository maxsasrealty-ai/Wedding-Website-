import { useEffect, useRef, useState, useCallback } from 'react';

// YouTube video ID from the user: https://youtube.com/shorts/AvbvLejopvo
export const RABBA_YOUTUBE_ID = 'AvbvLejopvo';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function useMusic() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('wedding_music_muted') === 'true';
    } catch {
      return false;
    }
  });
  const [hasStartedOnce, setHasStartedOnce] = useState<boolean>(false);
  const [visualizerLevels, setVisualizerLevels] = useState<number[]>([15, 30, 60, 40, 20]);
  const [trackName, setTrackName] = useState<string>('Rabba (रब्बा)');

  // Player references
  const ytPlayerRef = useRef<any>(null);
  const isPlayingRef = useRef<boolean>(false);
  const isMutedRef = useRef<boolean>(isMuted);
  const intervalRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Synchronize muted ref
  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  // Load YouTube IFrame API script
  useEffect(() => {
    let tag = document.getElementById('youtube-iframe-api');
    if (!tag) {
      tag = document.createElement('script');
      tag.id = 'youtube-iframe-api';
      tag.setAttribute('src', 'https://www.youtube.com/iframe_api');
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      if (window.YT && window.YT.Player) {
        try {
          ytPlayerRef.current = new window.YT.Player('youtube-audio-holder', {
            height: '1',
            width: '1',
            videoId: RABBA_YOUTUBE_ID,
            playerVars: {
              autoplay: 0,
              controls: 0,
              disablekb: 1,
              fs: 0,
              loop: 1,
              playlist: RABBA_YOUTUBE_ID,
              modestbranding: 1,
              playsinline: 1,
              rel: 0,
              origin: window.location.origin,
            },
            events: {
              onReady: (event: any) => {
                if (isMutedRef.current) {
                  event.target.mute();
                } else {
                  event.target.unMute();
                }
                if (isPlayingRef.current) {
                  event.target.playVideo();
                }
              },
              onStateChange: (event: any) => {
                // If ended, replay
                if (event.data === (window.YT?.PlayerState?.ENDED ?? 0)) {
                  event.target.playVideo();
                }
                if (event.data === (window.YT?.PlayerState?.PLAYING ?? 1)) {
                  setIsPlaying(true);
                  isPlayingRef.current = true;
                }
              },
            },
          });
        } catch {
          // Fallback handled below
        }
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }
  }, []);

  // Web Audio acoustic fallback (if YouTube player is blocked or unavailable)
  const initWebAudioFallback = () => {
    if (audioCtxRef.current) return;
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(isMuted ? 0 : 0.15, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Drone
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(261.63, ctx.currentTime);
      const droneGain = ctx.createGain();
      droneGain.gain.setValueAtTime(0.02, ctx.currentTime);
      osc.connect(droneGain);
      droneGain.connect(masterGain);
      osc.start();
    } catch {
      // AudioContext fallback
    }
  };

  const startVisualizer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      if (isPlayingRef.current && !isMutedRef.current) {
        setVisualizerLevels([
          Math.floor(25 + Math.random() * 55),
          Math.floor(40 + Math.random() * 60),
          Math.floor(55 + Math.random() * 45),
          Math.floor(35 + Math.random() * 60),
          Math.floor(20 + Math.random() * 50),
        ]);
      } else {
        setVisualizerLevels([6, 6, 6, 6, 6]);
      }
    }, 180);
  };

  const playMusic = useCallback(() => {
    isPlayingRef.current = true;
    setIsPlaying(true);
    setHasStartedOnce(true);

    if (ytPlayerRef.current && typeof ytPlayerRef.current.playVideo === 'function') {
      try {
        if (isMutedRef.current) {
          ytPlayerRef.current.mute();
        } else {
          ytPlayerRef.current.unMute();
        }
        ytPlayerRef.current.playVideo();
      } catch {
        initWebAudioFallback();
      }
    } else {
      initWebAudioFallback();
    }

    startVisualizer();
  }, []);

  const pauseMusic = useCallback(() => {
    isPlayingRef.current = false;
    setIsPlaying(false);

    if (ytPlayerRef.current && typeof ytPlayerRef.current.pauseVideo === 'function') {
      try {
        ytPlayerRef.current.pauseVideo();
      } catch {
        // fallback
      }
    }

    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend().catch(() => {});
    }

    setVisualizerLevels([6, 6, 6, 6, 6]);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  }, [isPlaying, playMusic, pauseMusic]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      isMutedRef.current = next;
      try {
        sessionStorage.setItem('wedding_music_muted', String(next));
      } catch {
        // storage fallback
      }

      if (ytPlayerRef.current) {
        try {
          if (next) {
            ytPlayerRef.current.mute();
          } else {
            ytPlayerRef.current.unMute();
          }
        } catch {
          // fallback
        }
      }

      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setValueAtTime(
          next ? 0 : 0.15,
          audioCtxRef.current.currentTime
        );
      }

      return next;
    });
  }, []);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return {
    isPlaying,
    isMuted,
    hasStartedOnce,
    visualizerLevels,
    trackName,
    playMusic,
    pauseMusic,
    togglePlay,
    toggleMute,
  };
}
