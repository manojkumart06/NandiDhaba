import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { translations, Locale, TranslationKeys } from '../data/translations';

interface LangCtx {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: keyof TranslationKeys) => string;
  cycleLocale: () => void;
}

const LanguageContext = createContext<LangCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  const t = useCallback(
    (key: keyof TranslationKeys) => translations[locale][key] ?? translations.en[key] ?? String(key),
    [locale]
  );

  const cycleLocale = useCallback(() => {
    setLocale((prev) => (prev === 'en' ? 'kn' : 'en'));
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, cycleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
