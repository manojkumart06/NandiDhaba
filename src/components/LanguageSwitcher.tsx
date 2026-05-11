import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Locale } from '../data/translations';

const labels: Record<Locale, string> = {
  en: 'EN',
  kn: 'ಕನ್ನಡ',
};

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="relative inline-flex items-center rounded-full border border-bone-50/10 bg-ink-900/60 backdrop-blur-md px-1 py-1">
      {(['en', 'kn'] as Locale[]).map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          className={`relative z-10 px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
            locale === l ? 'text-ink-950' : 'text-bone-400 hover:text-bone-50'
          }`}
        >
          {labels[l]}
        </button>
      ))}
      <AnimatePresence initial={false}>
        <motion.span
          key={locale}
          layoutId="lang-pill"
          className="absolute inset-y-1 rounded-full bg-gradient-to-r from-ember-400 to-ember-600 shadow-[0_0_18px_rgba(255,138,31,0.5)]"
          style={{
            width: locale === 'en' ? '38px' : '60px',
            left: locale === 'en' ? '4px' : '46px',
          }}
          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
        />
      </AnimatePresence>
    </div>
  );
}
