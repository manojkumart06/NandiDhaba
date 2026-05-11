import { motion } from 'framer-motion';

interface FishProps {
  size: number;
  color: string;
  opacity: number;
  blur: number;
  topPercent: number;
  duration: number;
  delay: number;
  direction: 'ltr' | 'rtl';
  amplitude: number;
}

function Fish({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 200 70" className="block h-full w-full overflow-visible">
      <defs>
        <linearGradient id={`${id}-body`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.05" />
          <stop offset="35%" stopColor="currentColor" stopOpacity="0.55" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.95" />
        </linearGradient>
        <radialGradient id={`${id}-belly`} cx="0.45" cy="0.7" r="0.5">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Body */}
      <path
        d="M14 35 C 38 8, 110 8, 142 35 C 110 62, 38 62, 14 35 Z"
        fill={`url(#${id}-body)`}
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="0.6"
      />
      {/* Belly highlight */}
      <ellipse cx="78" cy="42" rx="40" ry="9" fill={`url(#${id}-belly)`} />

      {/* Animated tail — slow swim wiggle */}
      <motion.g
        style={{ transformOrigin: '142px 35px' }}
        animate={{ rotate: [-8, 8, -8] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path
          d="M142 35 L188 14 L172 35 L188 56 Z"
          fill={`url(#${id}-body)`}
          stroke="currentColor"
          strokeOpacity="0.45"
          strokeWidth="0.5"
        />
      </motion.g>

      {/* Dorsal fin (top) */}
      <motion.path
        d="M68 18 Q 80 4 96 16 L86 22 Z"
        fill="currentColor"
        fillOpacity="0.4"
        animate={{ y: [-0.5, 0.5, -0.5] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Pectoral fin (bottom) */}
      <motion.path
        d="M62 48 Q 74 60 92 50 L82 46 Z"
        fill="currentColor"
        fillOpacity="0.28"
        animate={{ y: [0.5, -0.5, 0.5] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Gill arc */}
      <path
        d="M48 23 Q 51 35 48 47"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="0.6"
        fill="none"
      />

      {/* Eye */}
      <circle cx="32" cy="32" r="2.2" fill="currentColor" fillOpacity="0.85" />
      <circle cx="31.4" cy="31.4" r="0.8" fill="#0B0B0B" />
      <circle cx="31" cy="31" r="0.3" fill="#FFF7E2" />
    </svg>
  );
}

function SwimmingFish({
  size,
  color,
  opacity,
  blur,
  topPercent,
  duration,
  delay,
  direction,
  amplitude,
  id,
}: FishProps & { id: string }) {
  const isLtr = direction === 'ltr';
  // SVG draws the fish facing left (eye on left edge). For LTR motion we flip
  // horizontally so the fish swims head-first.
  const flipStyle: React.CSSProperties = isLtr
    ? { transform: 'scaleX(-1)', transformOrigin: 'center' }
    : {};
  return (
    <motion.div
      className="absolute will-change-transform"
      style={{
        top: `${topPercent}%`,
        left: 0,
        width: size,
        height: size * 0.35,
        color,
        opacity,
        filter: blur > 0 ? `blur(${blur}px)` : undefined,
      }}
      initial={{ x: isLtr ? -size - 80 : '100vw' }}
      animate={{
        x: isLtr ? ['-15vw', '115vw'] : ['115vw', '-15vw'],
      }}
      transition={{
        x: {
          duration,
          delay,
          repeat: Infinity,
          ease: 'linear',
        },
      }}
    >
      <motion.div
        className="h-full w-full"
        animate={{ y: [-amplitude, amplitude, -amplitude] }}
        transition={{
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Apply the horizontal flip on a non-animated wrapper so framer-motion's
            x/y transforms on the parents don't overwrite it. */}
        <div className="h-full w-full" style={flipStyle}>
          <Fish id={id} />
        </div>
      </motion.div>
    </motion.div>
  );
}

const fish: (FishProps & { id: string })[] = [
  // Foreground large warm fish, drifting left to right slowly
  {
    id: 'h-fish-1',
    size: 180,
    color: '#FFD7A1',
    opacity: 0.32,
    blur: 0,
    topPercent: 24,
    duration: 38,
    delay: 0,
    direction: 'ltr',
    amplitude: 14,
  },
  // Mid layer warm
  {
    id: 'h-fish-2',
    size: 130,
    color: '#FF9A3D',
    opacity: 0.22,
    blur: 0.6,
    topPercent: 70,
    duration: 46,
    delay: 6,
    direction: 'rtl',
    amplitude: 18,
  },
  // Small school in distance
  {
    id: 'h-fish-3',
    size: 70,
    color: '#7DB3C7',
    opacity: 0.28,
    blur: 1,
    topPercent: 14,
    duration: 28,
    delay: 4,
    direction: 'ltr',
    amplitude: 8,
  },
  {
    id: 'h-fish-4',
    size: 80,
    color: '#7DB3C7',
    opacity: 0.22,
    blur: 1.2,
    topPercent: 18,
    duration: 32,
    delay: 9,
    direction: 'ltr',
    amplitude: 10,
  },
  // Deep background, very blurred
  {
    id: 'h-fish-5',
    size: 220,
    color: '#FF8A1F',
    opacity: 0.12,
    blur: 4,
    topPercent: 55,
    duration: 60,
    delay: 12,
    direction: 'rtl',
    amplitude: 22,
  },
  // Small playful one near bottom
  {
    id: 'h-fish-6',
    size: 60,
    color: '#E8C97A',
    opacity: 0.4,
    blur: 0,
    topPercent: 82,
    duration: 24,
    delay: 2,
    direction: 'rtl',
    amplitude: 6,
  },
];

export default function HeroFish() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[3] overflow-hidden">
      {fish.map((f) => (
        <SwimmingFish key={f.id} {...f} />
      ))}

      {/* Tiny bubble trails rising slowly */}
      {Array.from({ length: 16 }).map((_, i) => {
        const size = 2 + Math.random() * 5;
        const left = Math.random() * 100;
        const delay = Math.random() * 12;
        const duration = 10 + Math.random() * 10;
        const drift = (Math.random() - 0.5) * 60;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              bottom: -10,
              width: size,
              height: size,
              background:
                'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.55), rgba(125,179,199,0.25) 60%, transparent 80%)',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
            animate={{
              y: [0, -900],
              x: [0, drift],
              opacity: [0, 0.7, 0.5, 0],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        );
      })}
    </div>
  );
}
