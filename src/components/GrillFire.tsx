import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function GrillFire() {
  const { t, locale } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const kn = locale === 'kn';

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const yText = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);
  const opacityHaze = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.2, 0.55, 0.2]);

  return (
    <section
      id="grill"
      ref={ref}
      className="relative h-[100svh] min-h-[680px] overflow-hidden bg-ink-900"
    >
      <div className="relative h-full overflow-hidden">
        <motion.div
          style={{ y: yImage, scale: scaleImage }}
          className="absolute inset-0 will-change-transform"
        >
          <div
            className="heat-shimmer absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1739484151190-e2a73842ca13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          />
          {/* Fire glow overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_70%,rgba(255,138,31,0.4),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(255,217,161,0.18),transparent_50%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-transparent to-ink-950" />
        </motion.div>

        {/* Heat haze overlay */}
        <motion.div
          style={{ opacity: opacityHaze }}
          className="absolute inset-0 bg-gradient-to-t from-ember-700/30 via-transparent to-transparent mix-blend-overlay"
        />

        {/* Floating ember sparks */}
        <FireSparks />

        <motion.div
          style={{ y: yText }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          <motion.span
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[10.5px] font-medium tracking-[0.45em] uppercase text-ember-200 [text-shadow:_0_1px_3px_rgba(0,0,0,0.95),_0_0_14px_rgba(0,0,0,0.7)]"
          >
            ◆ {t('grillEyebrow')} ◆
          </motion.span>
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`mt-5 max-w-[14ch] font-serif tracking-tightest text-bone-50 [text-shadow:_0_2px_4px_rgba(0,0,0,0.95),_0_4px_24px_rgba(0,0,0,0.85)] ${
              kn ? 'leading-[1.45]' : 'leading-[1.05]'
            }`}
            style={{
              fontSize: kn
                ? 'clamp(2rem, 5vw, 5rem)'
                : 'clamp(2.4rem, 7vw, 6.5rem)',
            }}
          >
            {t('grillHeadline').split('. ').map((line, i) => (
              <span key={i} className="block">
                {i === 1 ? <span className="italic text-ember-glow">{line}</span> : line}
              </span>
            ))}
          </motion.h2>

          {/* Subheadline gets its own glass-dark plate so body text stays legible
              against the fish + flame imagery */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-8 max-w-xl rounded-2xl border border-bone-50/8 bg-ink-950/65 px-7 py-5 backdrop-blur-md shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]"
          >
            <p className="text-[15px] leading-relaxed text-bone-50/95">
              {t('grillSub')}
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom credit lines */}
        <div className="absolute inset-x-0 bottom-6 mx-auto flex max-w-[1320px] items-end justify-between px-6 text-[10px] tracking-[0.3em] uppercase text-bone-400/70 md:px-10">
          <span>900° Charcoal</span>
          <span>Marinated 12 Hours</span>
          <span>Hand-Ground Masala</span>
        </div>
      </div>
    </section>
  );
}

function FireSparks() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => {
        const size = 1 + Math.random() * 2.5;
        const left = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = 5 + Math.random() * 12;
        const drift = (Math.random() - 0.5) * 100;
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
                'radial-gradient(circle, rgba(255,239,180,1), rgba(255,138,31,0.7) 60%, transparent 80%)',
              boxShadow: '0 0 6px 2px rgba(255,138,31,0.5)',
            }}
            animate={{
              y: [0, -700],
              x: [0, drift],
              opacity: [0, 1, 0.7, 0],
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
