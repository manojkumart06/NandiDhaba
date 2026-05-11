import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, Facebook, Phone } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden border-t border-bone-50/8 bg-ink-950 pt-20 pb-10">
      <div className="absolute inset-x-0 top-0 mx-auto h-[400px] w-[700px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,138,31,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1320px] px-6 md:px-10">
        <motion.h3
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif tracking-tightest text-bone-50 leading-[1.05]"
          style={{ fontSize: 'clamp(2.4rem, 7vw, 7rem)' }}
        >
          Nandi <span className="italic text-ember-glow">Fishland</span> Dhaba.
        </motion.h3>

        <p className="mt-6 max-w-xl text-[15px] text-bone-400">{t('footerTagline')}</p>

        <div className="mt-16 grid gap-10 border-t border-bone-50/8 pt-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-[10px] tracking-[0.3em] uppercase text-bone-400">Address</div>
            <div className="mt-3 font-serif text-lg text-bone-50">
              Devanahalli Main Road,<br />
              Karahalli, Karnataka
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.3em] uppercase text-bone-400">Hours</div>
            <div className="mt-3 font-serif text-lg text-bone-50">
              Daily<br />
              11:00 AM — 11:30 PM
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.3em] uppercase text-bone-400">Reservations</div>
            <a
              href="tel:+919113602040"
              className="mt-3 block font-serif text-lg text-bone-50 hover:text-ember-300 transition-colors"
            >
              +91 91136 02040
            </a>
          </div>
          <div className="md:col-span-2">
            <div className="text-[10px] tracking-[0.3em] uppercase text-bone-400">{t('followUs')}</div>
            <div className="mt-3 flex gap-3">
              {[
                {
                  Icon: Instagram,
                  href: 'https://www.instagram.com/nandi_fishland.dhaba/',
                  external: true,
                  label: 'Instagram',
                },
                { Icon: Facebook, href: '#', external: false, label: 'Facebook' },
                { Icon: Phone, href: 'tel:+919113602040', external: false, label: 'Call' },
              ].map(({ Icon, href, external, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-bone-50/15 text-bone-400 transition-all duration-300 hover:border-ember-400/50 hover:text-ember-300 hover:bg-ember-500/5"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-bone-50/8 pt-6 text-[10.5px] tracking-[0.25em] uppercase text-bone-400 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Nandi Fishland Dhaba. {t('rightsReserved')}</span>
          <span>Crafted with fire & soul · Karnataka</span>
        </div>
      </div>

      {/* giant ghost wordmark */}
      <div className="pointer-events-none mt-10 select-none overflow-hidden">
        <div className="whitespace-nowrap text-center font-serif italic text-bone-50/[0.03]" style={{ fontSize: 'clamp(8rem, 22vw, 22rem)', lineHeight: 0.85 }}>
          NANDI · FISHLAND
        </div>
      </div>
    </footer>
  );
}
