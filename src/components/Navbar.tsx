import { useEffect, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu as MenuIcon, X } from 'lucide-react';

interface Props {
  onReserveClick: () => void;
}

export default function Navbar({ onReserveClick }: Props) {
  const { t, locale } = useLanguage();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest > prev && latest > 240) setHidden(true);
    else setHidden(false);
    setScrolled(latest > 40);
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const links = [
    { id: 'home', label: t('navHome') },
    { id: 'seafood', label: t('navSeafood') },
    { id: 'grill', label: t('navSpecials') },
    { id: 'dhaba', label: t('navExperience') },
    { id: 'gallery', label: t('navGallery') },
    { id: 'menu', label: t('navMenu') },
    { id: 'visit', label: t('navVisit') },
  ];

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -120 : 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-5 pt-5"
      >
        <div
          className={`mx-auto flex max-w-[1320px] items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ${
            scrolled
              ? 'border border-bone-50/10 bg-ink-900/60 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl'
              : 'border border-transparent bg-transparent'
          }`}
        >
          <button
            onClick={() => scrollTo('home')}
            className="group flex items-center gap-2 text-left"
          >
            <span className="relative inline-flex h-8 w-8 items-center justify-center">
              <svg viewBox="0 0 32 32" className="h-7 w-7">
                <defs>
                  <linearGradient id="navlogo" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FFD7A1" />
                    <stop offset="100%" stopColor="#C7480A" />
                  </linearGradient>
                </defs>
                <path
                  d="M4 16 Q12 6 22 16 Q12 26 4 16 Z"
                  fill="url(#navlogo)"
                  className="drop-shadow-[0_0_8px_rgba(255,138,31,0.5)]"
                />
                <circle cx="18" cy="14" r="1" fill="#0B0B0B" />
                <path d="M22 16 L30 11 L27 16 L30 21 Z" fill="url(#navlogo)" />
              </svg>
            </span>
            <span className="font-serif text-[15px] tracking-[0.04em] text-bone-50">
              NANDI <span className="text-ember-400">FISHLAND</span> DHABA
            </span>
          </button>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="link-underline text-[12.5px] font-medium tracking-[0.18em] uppercase text-bone-400 transition-colors duration-300 hover:text-bone-50"
                style={{ fontFamily: locale === 'kn' ? "'Inter', sans-serif" : undefined }}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <button
              onClick={onReserveClick}
              className="btn-ember rounded-full px-5 py-2.5 text-[12px] font-semibold tracking-[0.18em] uppercase text-bone-50"
            >
              {t('reserveTable')}
            </button>
          </div>

          <button
            onClick={() => setMobileOpen((s) => !s)}
            className="lg:hidden text-bone-50 p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-ink-950/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8 px-8">
              {links.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => scrollTo(l.id)}
                  className="font-serif text-3xl text-bone-50"
                >
                  {l.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 flex flex-col items-center gap-5"
              >
                <LanguageSwitcher />
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onReserveClick();
                  }}
                  className="btn-ember rounded-full px-8 py-3 text-sm font-semibold tracking-[0.18em] uppercase"
                >
                  {t('reserveTable')}
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
