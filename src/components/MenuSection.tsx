import { useMemo, useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { menu, MenuCategory } from '../data/menu';

const accentMap = {
  ember: 'from-ember-400 to-ember-600',
  gold: 'from-gold-400 to-gold-600',
  ocean: 'from-ocean-400 to-ocean-700',
};

const accentDot = {
  ember: 'bg-ember-400 shadow-[0_0_14px_rgba(255,138,31,0.7)]',
  gold: 'bg-gold-400 shadow-[0_0_14px_rgba(212,175,55,0.6)]',
  ocean: 'bg-ocean-400 shadow-[0_0_14px_rgba(125,179,199,0.6)]',
};

const accentText = {
  ember: 'text-ember-200',
  gold: 'text-gold-400',
  ocean: 'text-ocean-400',
};

export default function MenuSection() {
  const { t, locale } = useLanguage();
  const [activeId, setActiveId] = useState<string>('all');
  const [query, setQuery] = useState<string>('');
  const kn = locale === 'kn';

  const searching = query.trim().length > 0;

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const inActive = activeId === 'all' ? menu : menu.filter((c) => c.id === activeId);

    if (!q) return inActive;

    // When searching, look across ALL categories regardless of the active pill,
    // then filter the items in each category.
    return menu
      .map<MenuCategory>((c) => ({
        ...c,
        items: c.items.filter((it) => {
          const hay = `${it.name} ${it.nameKn ?? ''} ${t(c.labelKey)}`.toLowerCase();
          return hay.includes(q);
        }),
      }))
      .filter((c) => c.items.length > 0);
  }, [activeId, query, t]);

  const matchCount = useMemo(
    () => visible.reduce((sum, c) => sum + c.items.length, 0),
    [visible]
  );

  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-ink-900 py-32 md:py-44"
    >
      {/* Atmospheric backdrop */}
      <div className="absolute inset-0">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-ember-700/[0.08] blur-[140px]" />
        <div className="absolute -right-40 bottom-20 h-[600px] w-[600px] rounded-full bg-ocean-900/[0.18] blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,138,31,0.06),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 md:px-10">
        {/* Header */}
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="text-[10.5px] font-medium tracking-[0.45em] uppercase text-ember-200/80"
            >
              ◆ {t('menuEyebrow')}
            </motion.span>
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
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
              {t('menuHeadline').split(' ').map((w, i) => (
                <span key={i} className="inline-block pr-[0.18em]">
                  {i === 1 ? <span className="italic text-ember-glow">{w}</span> : w}
                </span>
              ))}
            </motion.h2>
          </div>
          <motion.p
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="md:col-span-5 max-w-md text-[15px] leading-relaxed text-bone-400 md:ml-auto md:text-right"
          >
            {t('menuSub')}
          </motion.p>
        </div>

        {/* Search */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 md:mt-14"
        >
          <div className="group relative mx-auto max-w-2xl">
            <span
              className={`pointer-events-none absolute left-5 top-1/2 z-10 -translate-y-1/2 transition-colors duration-300 ${
                searching ? 'text-ember-300' : 'text-bone-400 group-focus-within:text-ember-300'
              }`}
            >
              <Search size={18} strokeWidth={2} />
            </span>
            <input
              id="menu-search-input"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
                kn ? 'ಪ್ಲೇಟ್‌ಗಳನ್ನು ಹುಡುಕಿ — ಸಿಗಡಿ, ಬಿರಿಯಾನಿ…' : 'Search dishes — prawns, biryani, tandoori…'
              }
              className="w-full rounded-full border border-bone-50/10 bg-ink-950/60 px-12 py-3.5 text-[14px] tracking-wide text-bone-50 placeholder:text-bone-400 backdrop-blur-md transition-all duration-300 focus:border-ember-400/40 focus:bg-ink-950/85 focus:outline-none focus:ring-2 focus:ring-ember-400/15"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-bone-50/15 text-bone-400 transition hover:border-ember-400/50 hover:bg-ember-500/10 hover:text-ember-300"
              >
                <X size={13} />
              </button>
            )}
          </div>

          <AnimatePresence>
            {searching && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-center text-[10.5px] tracking-[0.3em] uppercase text-bone-400"
              >
                {matchCount > 0 ? (
                  <>
                    <span className="text-ember-300">{matchCount}</span>{' '}
                    {matchCount === 1 ? 'plate' : 'plates'} matched ·{' '}
                    <span className="text-bone-200">"{query}"</span>
                  </>
                ) : (
                  <>No plates matched · <span className="text-bone-200">"{query}"</span></>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Category Tabs */}
        <LayoutGroup>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className={`no-scrollbar mt-8 -mx-6 flex gap-2 overflow-x-auto px-6 md:mt-10 transition-opacity duration-300 ${
              searching ? 'opacity-40 pointer-events-none' : 'opacity-100'
            }`}
          >
            <CategoryPill
              id="all"
              label={t('allCategories')}
              activeId={activeId}
              setActiveId={setActiveId}
              accent="ember"
              emblem="✦"
            />
            {menu.map((c) => (
              <CategoryPill
                key={c.id}
                id={c.id}
                label={t(c.labelKey)}
                activeId={activeId}
                setActiveId={setActiveId}
                accent={c.accent}
                emblem={c.emblem}
              />
            ))}
          </motion.div>
        </LayoutGroup>

        {/* Categories */}
        <div className="mt-16 space-y-20 md:mt-20">
          <AnimatePresence mode="wait">
            {visible.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center py-20 text-center"
              >
                <span className="text-6xl text-ember-400/30">∅</span>
                <p className="mt-6 font-serif text-2xl text-bone-50">Nothing on the fire.</p>
                <p className="mt-2 max-w-xs text-[13.5px] text-bone-400">
                  No plates match{' '}
                  <span className="text-bone-200">"{query}"</span>. Try "prawns", "tandoori", or
                  "biryani".
                </p>
                <button
                  onClick={() => setQuery('')}
                  className="btn-ghost mt-6 rounded-full px-5 py-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-bone-50"
                >
                  Clear search
                </button>
              </motion.div>
            ) : (
              visible.map((cat) => (
                <motion.div
                  key={`${cat.id}-${locale}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <CategoryBlock cat={cat} highlight={query.trim()} />
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function CategoryPill({
  id,
  label,
  activeId,
  setActiveId,
  accent,
  emblem,
}: {
  id: string;
  label: string;
  activeId: string;
  setActiveId: (id: string) => void;
  accent: 'ember' | 'gold' | 'ocean';
  emblem: string;
}) {
  const active = id === activeId;
  return (
    <button
      onClick={() => setActiveId(id)}
      className={`relative flex-shrink-0 rounded-full border px-4 py-2 text-[11.5px] font-medium tracking-[0.18em] uppercase transition-colors duration-300 ${
        active
          ? 'border-transparent text-bone-50'
          : 'border-bone-50/10 text-bone-400 hover:text-bone-50 hover:border-bone-50/25'
      }`}
    >
      {active && (
        <motion.span
          layoutId="active-cat"
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${accentMap[accent]} shadow-[0_0_24px_rgba(255,138,31,0.35)]`}
          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
        />
      )}
      <span className="relative">
        <span className="mr-2">{emblem}</span>
        {label}
      </span>
    </button>
  );
}

function highlightMatch(text: string, q: string) {
  if (!q) return text;
  const lower = text.toLowerCase();
  const idx = lower.indexOf(q.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-ember-400/20 text-ember-200 rounded px-0.5">
        {text.slice(idx, idx + q.length)}
      </mark>
      {text.slice(idx + q.length)}
    </>
  );
}

function CategoryBlock({ cat, highlight = '' }: { cat: MenuCategory; highlight?: string }) {
  const { t, locale } = useLanguage();
  return (
    <div>
      <div className="mb-8 flex items-end justify-between gap-6 border-b border-bone-50/8 pb-5">
        <div>
          <div className="flex items-center gap-3">
            <span className={`inline-block h-1.5 w-1.5 rounded-full ${accentDot[cat.accent]}`} />
            <span className={`text-[10px] font-medium tracking-[0.4em] uppercase ${accentText[cat.accent]}`}>
              {cat.emblem} Category
            </span>
          </div>
          <h3 className="mt-2 font-serif text-3xl tracking-tight text-bone-50 md:text-4xl">
            {t(cat.labelKey)}
          </h3>
        </div>
        <div className="text-right text-[10px] tracking-[0.3em] uppercase text-bone-400">
          {cat.items.length} {cat.items.length === 1 ? 'plate' : 'plates'}
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={{
          visible: { transition: { staggerChildren: 0.05 } },
          hidden: {},
        }}
        className="grid gap-x-10 gap-y-2 md:grid-cols-2 md:gap-x-16"
      >
        {cat.items.map((item, i) => (
          <motion.div
            key={`${cat.id}-${item.name}-${i}`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="group relative flex items-baseline gap-4 border-b border-bone-50/5 py-4 transition-colors hover:border-ember-400/20"
          >
            <h4 className="font-serif text-xl text-bone-50 transition-colors duration-300 group-hover:text-ember-200 md:text-2xl">
              {highlightMatch(
                locale === 'kn' && item.nameKn ? item.nameKn : item.name,
                highlight
              )}
            </h4>
            <div className="mx-2 flex-1 translate-y-[-3px] border-b border-dashed border-bone-50/10" />
            <span className="font-mono text-[15px] text-bone-200 transition-colors group-hover:text-bone-50">
              ₹{item.price}
            </span>
            <span className="ml-2 text-ember-400/0 transition-all duration-300 group-hover:text-ember-400 group-hover:translate-x-1">
              ›
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
