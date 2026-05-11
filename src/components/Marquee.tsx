import { useLanguage } from '../context/LanguageContext';

export default function Marquee() {
  const { locale } = useLanguage();
  const en = [
    'FRESH CATCH',
    'OPEN FLAME',
    'COASTAL SOUL',
    'HAND-GROUND MASALA',
    'CHARCOAL TANDOOR',
    'SLOW DUM',
    'DEVANAHALLI',
  ];
  const kn = ['ತಾಜಾ ಮೀನು', 'ತೆರೆದ ಬೆಂಕಿ', 'ಕರಾವಳಿ ಆತ್ಮ', 'ಕೈ-ರುಬ್ಬಿದ ಮಸಾಲೆ', 'ಚಾರ್ಕೋಲ್ ತಂದೂರಿ', 'ನಿಧಾನ ದಮ್', 'ದೇವನಹಳ್ಳಿ'];
  const items = (locale === 'kn' ? kn : en).concat(locale === 'kn' ? kn : en);

  return (
    <div
      id="marquee"
      className="relative z-[6] overflow-hidden border-y border-bone-50/5 bg-ink-900/60 py-5"
    >
      <div className="marquee flex w-max items-center gap-12 whitespace-nowrap">
        {items.map((it, i) => (
          <span
            key={i}
            className="font-serif text-3xl text-bone-400/80 tracking-cinematic md:text-5xl"
          >
            {it}
            <span className="ml-12 text-ember-400/70">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
