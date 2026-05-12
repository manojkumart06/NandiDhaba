import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Phone } from 'lucide-react';

// Brand icons inlined — lucide-react deprecated the brand-icon set.
const InstagramIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

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
          className="font-serif tracking-tight text-bone-50 leading-[1.05] text-balance break-words"
          style={{ fontSize: 'clamp(1.85rem, 5.5vw, 5.5rem)' }}
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
                  Icon: InstagramIcon,
                  href: 'https://www.instagram.com/nandi_fishland.dhaba/',
                  external: true,
                  label: 'Instagram',
                },
                { Icon: FacebookIcon, href: '#', external: false, label: 'Facebook' },
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

      {/* giant ghost wordmark — sized so it always fits within viewport */}
      <div className="pointer-events-none mt-10 select-none overflow-hidden">
        <div
          className="whitespace-nowrap text-center font-serif italic text-bone-50/[0.04]"
          style={{ fontSize: 'clamp(3.5rem, 13vw, 14rem)', lineHeight: 0.9 }}
        >
          NANDI · FISHLAND
        </div>
      </div>
    </footer>
  );
}
