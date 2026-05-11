import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { featuredDishes } from '../data/menu';

export default function SeafoodShowcase() {
  const { t, locale } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const kn = locale === 'kn';
  const horizontalRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const { scrollYProgress: hScroll } = useScroll({
    target: horizontalRef,
    offset: ['start end', 'end start'],
  });
  const xTrack = useTransform(hScroll, [0, 1], ['8%', '-58%']);

  return (
    <section
      id="seafood"
      ref={ref}
      className="relative overflow-hidden bg-ink-950 py-32 md:py-44"
    >
      {/* Floating texture */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-20 top-10 h-[420px] w-[420px] rounded-full bg-ember-500/[0.08] blur-[120px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -right-20 bottom-10 h-[480px] w-[480px] rounded-full bg-ocean-500/[0.07] blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-[10.5px] font-medium tracking-[0.45em] uppercase text-ember-200/80"
            >
              ◆ {t('showcaseEyebrow')}
            </motion.span>
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className={`mt-4 font-serif tracking-tightest text-bone-50 ${
                kn ? 'leading-[1.45]' : 'leading-[1.08]'
              }`}
              style={{
                fontSize: kn
                  ? 'clamp(2rem, 4.5vw, 4.5rem)'
                  : 'clamp(2.4rem, 6vw, 5.5rem)',
              }}
            >
              {t('showcaseHeadline').split(' ').map((w, i) => (
                <span key={i} className="inline-block pr-[0.18em]">
                  {i === 3 ? <span className="italic text-ember-glow">{w}</span> : w}
                </span>
              ))}
            </motion.h2>
          </div>
          <motion.p
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 max-w-md text-[15px] leading-relaxed text-bone-400 md:text-right md:ml-auto"
          >
            {t('showcaseSub')}
          </motion.p>
        </div>
      </div>

      {/* Horizontal scrub track */}
      <div ref={horizontalRef} className="relative mt-20">
        <motion.div
          style={{ x: xTrack }}
          className="flex w-max gap-6 px-6 md:gap-10 md:px-10"
        >
          {featuredDishes.map((d, i) => (
            <DishCard key={d.id} d={d} index={i} />
          ))}
        </motion.div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
      </div>
    </section>
  );
}

function DishCard({ d, index }: { d: (typeof featuredDishes)[number]; index: number }) {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.9, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-[480px] w-[330px] flex-shrink-0 overflow-hidden rounded-2xl md:h-[560px] md:w-[400px]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[1400ms] ease-out group-hover:scale-110"
          style={{ backgroundImage: `url(${d.img})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/10" />
      </div>

      <div className="absolute left-5 top-5 flex items-center gap-2">
        <span className="inline-flex h-2 w-2 rounded-full bg-ember-400 shadow-[0_0_8px_rgba(255,138,31,0.8)] animate-pulse" />
        <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-ember-200">
          {d.tag}
        </span>
      </div>

      <div className="absolute right-5 top-5 rounded-full border border-bone-50/15 bg-ink-950/70 px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-bone-200 backdrop-blur">
        {t('freshCatch')}
      </div>

      <div className="absolute inset-x-5 bottom-5">
        <h3 className="font-serif text-3xl leading-tight tracking-tight text-bone-50 md:text-4xl">
          {d.title}
        </h3>
        <p className="mt-2 max-w-[88%] text-[12.5px] leading-relaxed text-bone-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {d.desc}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-bone-50/10 pt-4">
          <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-bone-400">
            ₹ {d.price}
          </span>
          <span className="text-[11px] font-medium tracking-[0.3em] uppercase text-ember-300 transition-transform duration-500 group-hover:translate-x-1">
            View →
          </span>
        </div>
      </div>
    </motion.div>
  );
}
