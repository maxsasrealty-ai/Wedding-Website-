import React, { useEffect, useRef } from 'react';

// ==========================================
// 1. CANVAS FALLING ROSE PETALS & GOLD DUST
// ==========================================
export const FallingPetalsCanvas: React.FC<{ active?: boolean }> = ({ active = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Rose petals and gold dust particles
    interface Petal {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      angle: number;
      angularSpeed: number;
      flip: number;
      flipSpeed: number;
      color: string;
      opacity: number;
      isSparkle: boolean;
    }

    const petals: Petal[] = [];
    const count = window.innerWidth < 768 ? 20 : 38;

    const colors = [
      '#8A1C24', // Deep Royal Maroon
      '#B8323E', // Rich Rose Red
      '#D44A58', // Soft Rose Pink
      '#C5A059', // Antique Gold
      '#E8D094', // Pale Gold
    ];

    for (let i = 0; i < count; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: 8 + Math.random() * 14,
        speedX: -0.6 + Math.random() * 1.2,
        speedY: 0.8 + Math.random() * 1.6,
        angle: Math.random() * 360,
        angularSpeed: (Math.random() - 0.5) * 1.5,
        flip: Math.random() * Math.PI,
        flipSpeed: 0.015 + Math.random() * 0.03,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: 0.35 + Math.random() * 0.45,
        isSparkle: Math.random() < 0.25,
      });
    }

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.angle * Math.PI) / 180);
      ctx.scale(Math.cos(p.flip), 1);
      ctx.globalAlpha = p.opacity;

      if (p.isSparkle) {
        // Shimmering Golden Dust Particle
        ctx.fillStyle = '#DFC07A';
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 0.25, 0, Math.PI * 2);
        ctx.fill();
        // Cross sparkle
        ctx.strokeStyle = '#F7E7C4';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-p.size * 0.4, 0);
        ctx.lineTo(p.size * 0.4, 0);
        ctx.moveTo(0, -p.size * 0.4);
        ctx.lineTo(0, p.size * 0.4);
        ctx.stroke();
      } else {
        // Organic Curved Rose Petal
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.moveTo(0, -p.size);
        ctx.bezierCurveTo(
          p.size * 0.7,
          -p.size * 0.8,
          p.size * 0.8,
          p.size * 0.4,
          0,
          p.size
        );
        ctx.bezierCurveTo(
          -p.size * 0.8,
          p.size * 0.4,
          -p.size * 0.7,
          -p.size * 0.8,
          0,
          -p.size
        );
        ctx.closePath();
        ctx.fill();

        // Subtle petal vein highlight
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(0, -p.size * 0.7);
        ctx.lineTo(0, p.size * 0.6);
        ctx.stroke();
      }

      ctx.restore();
    };

    const update = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.008) * 0.5;
        p.angle += p.angularSpeed;
        p.flip += p.flipSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        drawPetal(p);
      }

      animationId = requestAnimationFrame(update);
    };

    animationId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-20 h-full w-full"
      aria-hidden="true"
    />
  );
};

// ==========================================
// 2. GANESH JI DIVINE MEDALLION (ANTIQUE GOLD)
// ==========================================
export const GaneshJiMedallion: React.FC<{
  size?: number;
  className?: string;
  showRays?: boolean;
}> = ({ size = 96, className = '', showRays = true }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {showRays && (
        <div className="absolute inset-0 -m-3 animate-spin-slow opacity-25">
          <svg viewBox="0 0 100 100" className="h-full w-full text-[#C5A059]">
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeDasharray="2, 4"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      )}

      {/* Ganesh Ji Sacred Vector Silhouette */}
      <svg
        viewBox="0 0 120 120"
        className="h-full w-full drop-shadow-[0_2px_10px_rgba(197,160,89,0.35)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8A6B29" />
            <stop offset="35%" stopColor="#C5A059" />
            <stop offset="70%" stopColor="#F7E2A9" />
            <stop offset="100%" stopColor="#9E772D" />
          </linearGradient>
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#C5A059" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Outer Circular Filigree Mandala */}
        <circle cx="60" cy="60" r="56" stroke="url(#goldGradient)" strokeWidth="1.2" opacity="0.8" />
        <circle cx="60" cy="60" r="52" stroke="url(#goldGradient)" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.6" />
        <circle cx="60" cy="60" r="48" fill="#FFFDF9" stroke="url(#goldGradient)" strokeWidth="1" />

        {/* Sacred Traditional Ganesh Silhouette */}
        {/* Crown (Mukut) */}
        <path
          d="M50 28 L60 17 L70 28 L65 31 L60 25 L55 31 Z"
          fill="url(#goldGradient)"
          filter="url(#goldGlow)"
        />
        <circle cx="60" cy="18" r="2" fill="url(#goldGradient)" />

        {/* Head and Ears */}
        {/* Left Ear */}
        <path
          d="M48 36 C40 33, 30 38, 32 50 C33 58, 42 59, 47 54"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Right Ear */}
        <path
          d="M72 36 C80 33, 90 38, 88 50 C87 58, 78 59, 73 54"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Forehead and Trunk curve */}
        <path
          d="M60 32 C53 32, 48 37, 49 46 C50 56, 52 64, 53 72 C54 78, 59 84, 66 84 C72 84, 76 79, 74 74 C73 70, 68 70, 67 73"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="3.8"
          strokeLinecap="round"
        />

        {/* Sacred Tilak / Trishul on Forehead */}
        <path
          d="M57 37 C58 35, 62 35, 63 37 L61 44 L59 44 Z"
          fill="#8A1C24"
        />
        <circle cx="60" cy="46" r="1.5" fill="#8A1C24" />

        {/* Right Tusk (Ekdanta) */}
        <path
          d="M68 53 L74 54"
          stroke="url(#goldGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Divine Modak / Sweet in left hand */}
        <circle cx="43" cy="68" r="4.5" fill="url(#goldGradient)" />
        <circle cx="43" cy="68" r="2" fill="#8A1C24" />

        {/* Auspicious Lotus Base petals */}
        <path
          d="M40 92 C48 88, 55 94, 60 97 C65 94, 72 88, 80 92 C74 98, 65 101, 60 100 C55 101, 46 98, 40 92 Z"
          fill="url(#goldGradient)"
          opacity="0.85"
        />
      </svg>
    </div>
  );
};

// ==========================================
// 3. ELEGANT GOLD DIVIDER
// ==========================================
export const GoldDivider: React.FC<{ className?: string; label?: string }> = ({
  className = '',
  label,
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-4 ${className}`}>
      {/* Left ornamental line */}
      <div className="flex items-center flex-1 max-w-[120px] sm:max-w-[160px]">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C5A059]/60 to-[#C5A059]" />
        <div className="w-1.5 h-1.5 rotate-45 border border-[#C5A059] bg-[#FAF7F2] -ml-0.5 shrink-0" />
      </div>

      {/* Center Motif / Kalash or Text */}
      {label ? (
        <span className="font-hindi text-sm sm:text-base font-semibold text-[#8A1C24] tracking-wide px-2">
          {label}
        </span>
      ) : (
        <div className="flex items-center gap-1.5 px-1 shrink-0">
          <span className="text-[#C5A059] text-xs">✤</span>
          <div className="w-2.5 h-2.5 rotate-45 bg-[#8A1C24] border border-[#C5A059]" />
          <span className="text-[#C5A059] text-xs">✤</span>
        </div>
      )}

      {/* Right ornamental line */}
      <div className="flex items-center flex-1 max-w-[120px] sm:max-w-[160px]">
        <div className="w-1.5 h-1.5 rotate-45 border border-[#C5A059] bg-[#FAF7F2] -mr-0.5 shrink-0" />
        <div className="h-[1px] w-full bg-gradient-to-l from-transparent via-[#C5A059]/60 to-[#C5A059]" />
      </div>
    </div>
  );
};

// ==========================================
// 4. ROYAL CORNER FILIGREE
// ==========================================
export const CornerFiligree: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: number;
  className?: string;
}> = ({ position, size = 44, className = '' }) => {
  const rotationClass = {
    'top-left': '',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <div
      className={`absolute pointer-events-none text-[#C5A059] ${rotationClass} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full opacity-80">
        <path
          d="M4 96 L4 24 C4 13 13 4 24 4 L96 4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 96 L12 28 C12 19 19 12 28 12 L96 12"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 3"
        />
        <path
          d="M20 20 C20 40 40 40 40 20 C40 40 60 40 60 20"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="8" cy="8" r="3" fill="#8A1C24" />
        <circle cx="28" cy="28" r="2.5" fill="currentColor" />
        <path
          d="M16 48 C18 36 28 26 40 24"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

// ==========================================
// 5. ROTATING MANDALA BACKGROUND
// ==========================================
export const MandalaOrnament: React.FC<{
  size?: number;
  className?: string;
  speed?: string;
}> = ({ size = 260, className = '' }) => {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        className="w-full h-full text-[#C5A059] animate-spin-slow opacity-20"
      >
        <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
        <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="25" stroke="currentColor" strokeWidth="1.2" />
        {/* 12 radial petals */}
        {[...Array(12)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 30} 100 100)`}>
            <path
              d="M100 25 C92 45, 92 65, 100 80 C108 65, 108 45, 100 25 Z"
              stroke="currentColor"
              strokeWidth="0.8"
              fill="rgba(197, 160, 89, 0.05)"
            />
            <circle cx="100" cy="20" r="2" fill="currentColor" />
          </g>
        ))}
      </svg>
    </div>
  );
};
