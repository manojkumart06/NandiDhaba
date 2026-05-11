import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ArrowDown } from 'lucide-react';
import HeroFish from './HeroFish';

interface Props {
  onReserveClick: () => void;
}

export default function Hero({ onReserveClick }: Props) {
  const { t, locale } = useLanguage();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const opacityCopy = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const yCopy = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const blurCopy = useTransform(scrollYProgress, [0, 0.6], [0, 8]);

  const scrollNext = () => {
    document.getElementById('marquee')?.scrollIntoView({ behavior: 'smooth' });
  };

  const headlineWords1 = t('heroHeadline1').split(' ');
  const headlineWords2 = t('heroHeadline2').split(' ');

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-ink-950"
    >
      {/* Background image with parallax + scale */}
      <motion.div
        style={{ y: yBg, scale: scaleBg }}
        className="absolute inset-0 will-change-transform"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1665401015549-712c0dc5ef85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />
        {/* Cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/30 via-ink-950/60 to-ink-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(255,138,31,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(255,217,161,0.15),transparent_40%)]" />
        {/* Smoke / vignette */}
        <div className="absolute inset-0 vignette" />
      </motion.div>

      {/* Animated fish swimming through the hero */}
      <HeroFish />

      {/* Floating ember particles */}
      <Embers />

      {/* Headlines */}
      <motion.div
        style={{ opacity: opacityCopy, y: yCopy, filter: useTransform(blurCopy, (v) => `blur(${v}px)`) }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-24 pb-20 text-center md:pt-28"
      >
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 block text-[10.5px] font-medium tracking-[0.45em] uppercase text-ember-200 md:mb-8"
        >
          ◆ &nbsp; {t('heroEyebrow')} &nbsp; ◆
        </motion.span>
        <h1
          className={`font-serif tracking-tightest text-bone-50 will-change-transform ${
            locale === 'kn' ? 'leading-[1.18]' : 'leading-[0.92]'
          }`}
          style={{
            fontSize:
              locale === 'kn'
                ? 'clamp(2.4rem, 8vw, 7.5rem)'
                : 'clamp(2.8rem, 9.5vw, 9rem)',
          }}
        >
          <span className="block overflow-hidden pb-[0.12em]">
            {headlineWords1.map((w, i) => (
              <motion.span
                key={`h1-${i}-${locale}`}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  delay: 0.55 + i * 0.08,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block pr-[0.18em]"
              >
                {w}
              </motion.span>
            ))}
          </span>
          <span className="block overflow-hidden pb-[0.18em]">
            {headlineWords2.map((w, i) => (
              <motion.span
                key={`h2-${i}-${locale}`}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  delay: 0.85 + i * 0.08,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block pr-[0.18em] italic text-ember-glow"
              >
                {w}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-xl text-balance text-[15px] leading-relaxed text-bone-400 md:text-[16px]"
          key={`sub-${locale}`}
        >
          {t('heroSubheadline')}
        </motion.p>

        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.65, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-ember rounded-full px-7 py-3.5 text-[12.5px] font-semibold tracking-[0.18em] uppercase text-bone-50"
          >
            {t('exploreMenu')}
          </button>
          <button
            onClick={onReserveClick}
            className="btn-ghost rounded-full px-7 py-3.5 text-[12.5px] font-semibold tracking-[0.18em] uppercase text-bone-50"
          >
            {t('reserveTable')}
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll affordance */}
      <motion.button
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.1, duration: 1 }}
        onClick={scrollNext}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-bone-400 hover:text-bone-50 transition-colors"
      >
        <motion.span
          className="block"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.span>
      </motion.button>

      {/* Side text — vertical */}
      <div className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 -rotate-90 text-[10px] tracking-[0.5em] uppercase text-bone-400/50 md:block">
        Est. Coastal · Karnataka · 2014
      </div>
      <div className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 rotate-90 text-[10px] tracking-[0.5em] uppercase text-bone-400/50 md:block">
        Open Flame · Fresh Catch
      </div>
    </section>
  );
}

function Embers() {
  const particles = Array.from({ length: 22 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, i) => {
        const size = 1 + Math.random() * 3;
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = 8 + Math.random() * 14;
        const drift = (Math.random() - 0.5) * 80;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              bottom: -20,
              width: size,
              height: size,
              background:
                'radial-gradient(circle, rgba(255,217,161,0.95), rgba(255,138,31,0.4) 60%, transparent 75%)',
              boxShadow: '0 0 8px 2px rgba(255,138,31,0.35)',
            }}
            animate={{
              y: [-0, -window.innerHeight - 100],
              x: [0, drift],
              opacity: [0, 0.8, 0.6, 0],
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
