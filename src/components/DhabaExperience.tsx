import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const moments = [
  {
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80',
    label: 'Long-table evenings',
  },
  {
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80',
    label: 'Warm lamp service',
  },
  {
    img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=80',
    label: 'Slow-poured tea',
  },
];

export default function DhabaExperience() {
  const { t, locale } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const kn = locale === 'kn';

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <section
      id="dhaba"
      ref={ref}
      className="relative overflow-hidden bg-ink-950 pt-20 pb-28 md:pt-28 md:pb-40"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 top-0 mx-auto h-[600px] w-[700px] rounded-full bg-ember-700/[0.06] blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="text-[10.5px] font-medium tracking-[0.45em] uppercase text-ember-200/80"
            >
              ◆ {t('dhabaEyebrow')}
            </motion.span>
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`mt-4 font-serif tracking-tightest text-bone-50 ${
                kn ? 'leading-[1.45]' : 'leading-[1.1]'
              }`}
              style={{
                fontSize: kn
                  ? 'clamp(1.9rem, 4vw, 3.5rem)'
                  : 'clamp(2.4rem, 5vw, 4.5rem)',
              }}
            >
              {t('dhabaHeadline').split(' ').map((w, i) => (
                <span key={i} className="inline-block pr-[0.18em]">
                  {i % 2 === 1 ? <span className="italic text-gold-glow">{w}</span> : w}
                </span>
              ))}
            </motion.h2>
            <motion.p
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="mt-6 max-w-md text-[15px] leading-relaxed text-bone-400"
            >
              {t('dhabaSub')}
            </motion.p>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { k: '12+', l: 'Years' },
                { k: '80', l: 'Plates' },
                { k: '4.8', l: 'Rating' },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="rounded-xl border border-bone-50/8 bg-ink-900/50 p-4 backdrop-blur-sm"
                >
                  <div className="font-serif text-3xl text-bone-50">{s.k}</div>
                  <div className="mt-1 text-[10px] tracking-[0.3em] uppercase text-bone-400">
                    {s.l}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-12 gap-3 md:gap-4">
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="col-span-8 row-span-2 group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-[1500ms] group-hover:scale-110"
                    style={{ backgroundImage: `url(${moments[0].img})` }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-[11px] tracking-[0.3em] uppercase text-bone-200">
                  {moments[0].label}
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="col-span-4 group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-square overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-[1500ms] group-hover:scale-110"
                    style={{ backgroundImage: `url(${moments[1].img})` }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" />
                <div className="absolute bottom-3 left-3 text-[10px] tracking-[0.25em] uppercase text-bone-200">
                  {moments[1].label}
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="col-span-4 group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-square overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-[1500ms] group-hover:scale-110"
                    style={{ backgroundImage: `url(${moments[2].img})` }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" />
                <div className="absolute bottom-3 left-3 text-[10px] tracking-[0.25em] uppercase text-bone-200">
                  {moments[2].label}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
