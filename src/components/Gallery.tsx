import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const images = [
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGj4pDcbvan1MzGuFFKi-jdbJIDX3UeszE8izHvO1lJmJHBKqtzqSRgmQBISwRNYqIxhKzEL66TK9Flf4XSx4-zRg904KXoosaW-LYHynNlCr45dcb6YkfW7me5CJr-wduZ1EZX_oWFHwiD=s1289-k-no', span: 'col-span-6 row-span-2 aspect-[4/5]' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHp2usXS3NTG9KFp7sIF3rUq0VQYvQkaHmsKZJnfGLJefzrLly0xvVUFLNqmqlbyZ3z2Zds1f5lkHZu5ttlV-Q5sNtMyiNdTyohLCK1dUAFef9xqLGKkYpe4BF2jksLR-Kb4zFl=w344-h448-p-k-no', span: 'col-span-3 aspect-square' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGrWkIDVa-_-LWUTe5F8yXxXuSe4th-53NKlfawXjK0i4wwtFLpefRxF7P_OcxHMq_-iTCJ2GjflZ7V8a0-mp7VxX5HdJdTX0gLIu9Hv-2Kx9SZf_7G6aHnvpC_oD5wS5LT6RtxAg=w344-h448-p-k-no', span: 'col-span-3 aspect-square' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAH_yh3yKBzM5WhjYKyE5pti51qDG5TScagjqKDiNrgITWvuIajCvIWQ-l3SbXQMqEvSL419J-shXWDqFIrl8dhTU2Hlk-vq3Eq259FlmioqKcwsWQfNqwEi7gyYwcFeF66sLoi2=w344-h448-p-k-no', span: 'col-span-3 row-span-2 aspect-[3/4]' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFMrbsSccf6iPAFOngDBB7IKHoeWPlNMpwIeZ2OJbzhNUTiHWsDiViFMejIVsk7lmq6FV4Mmgx0Ajep21PWQogHKum4Wrh5ZFxJqjBjecY2EqgoGkX4YhKM8hwkRAu9C4TqoiyF5ZBYbwxV=w203-h448-k-no', span: 'col-span-3 aspect-[4/3]' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHC92unlLBciawQw44p2iJdo_pG6ndGpyqc2D4tpwTdqWXRFPtJdAlTJ3twmTujCOHiJUpFBSEu_ZNySVF4jI7KkCj2iHnGIuYAvC4Hghxqu5jjxrMosbuv-Mn-4cMC9f3OJeFOnQ=s773-k-no', span: 'col-span-6 aspect-[16/9]' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFzK75rgYGvgjbfX9pHTjs1e-EgcjY5WPUtB4WcNVWWUwLMs5Z14WdpaoVrQHvgzonDnyW-HJh5aYV61cSO1F8igoxdnyl-eMjKRvyEoF_RMrXdvkyukmzLg_60uXvVn8yC0KI=w203-h152-k-no', span: 'col-span-3 aspect-square' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEWAqdL9eBNyNLcWkrLUR272j5_0Xoe9wrtJZmCgNreSu9poxV5DaSHsG7cLApdOrZm_GBauTKcHANKi8E9d3lcQb7E4caMiq_S94h5fwvVLfiYHetHqjw-yl4tlutthXAzCheOWg=w222-h100-k-no', span: 'col-span-9 aspect-[21/9]' },
  { src: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFEISxxXZ8gpDMIVtOspy_CLYTawMk9OxCfx2Wi48efD23dUy7SP0OmJGj90QsH-JWH7hk22jveQacmYd6HmJN5skPrq-1N4DvH2NUKh7t9qlIimMw_s7NcFbByAGVxz7z4o-3bHtYhlihV=s1354-k-no', span: 'col-span-3 aspect-square' },
];

export default function Gallery() {
  const { t, locale } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const kn = locale === 'kn';
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative overflow-hidden bg-ink-950 py-32 md:py-44"
    >
      <motion.div
        style={{ y: y1 }}
        className="absolute -right-40 top-32 h-[600px] w-[600px] rounded-full bg-ember-700/[0.05] blur-[160px]"
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[10.5px] font-medium tracking-[0.45em] uppercase text-ember-200/80"
            >
              ◆ {t('galleryEyebrow')}
            </motion.span>
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`mt-4 font-serif tracking-tightest text-bone-50 ${
                kn ? 'leading-[1.45]' : 'leading-[1.08]'
              }`}
              style={{
                fontSize: kn
                  ? 'clamp(2rem, 4.5vw, 4rem)'
                  : 'clamp(2.4rem, 5.5vw, 5rem)',
              }}
            >
              {t('galleryHeadline').split(' ').map((w, i) => (
                <span key={i} className="inline-block pr-[0.18em]">
                  {i >= 2 ? <span className="italic text-gold-glow">{w}</span> : w}
                </span>
              ))}
            </motion.h2>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-3 md:mt-20 md:gap-4">
          {images.map((img, i) => (
            <motion.figure
              key={i}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl ${img.span}`}
            >
              <img
                src={img.src}
                loading="lazy"
                alt=""
                className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 ring-0 ring-ember-400/0 transition-all duration-500 group-hover:ring-1 group-hover:ring-ember-400/30" />
              <div className="absolute bottom-3 left-3 translate-y-2 text-[10px] tracking-[0.3em] uppercase text-bone-50 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                ◆ Frame {String(i + 1).padStart(2, '0')}
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
