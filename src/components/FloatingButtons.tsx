import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PHONE = '+919113602040';
const WHATSAPP = '919141877399';
const WA_MESSAGE = encodeURIComponent(
  "Hi Nandi Fishland Dhaba 👋, I'd like to know more."
);
const WA_URL = `https://wa.me/${WHATSAPP}?text=${WA_MESSAGE}`;

interface Props {
  onReserveClick: () => void;
}

export default function FloatingButtons({ onReserveClick }: Props) {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => {
    setShow(y > 600);
  });

  return (
    <>
      {/* Right side floating contact stack (desktop) */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 80, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex"
          >
            <FloatingIcon
              href={WA_URL}
              label="WhatsApp"
              external
              ring="from-emerald-400 to-emerald-700"
            >
              <MessageCircle size={18} />
            </FloatingIcon>
            <FloatingIcon
              href={`tel:${PHONE}`}
              label="Call"
              ring="from-ember-400 to-ember-700"
            >
              <Phone size={18} />
            </FloatingIcon>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile sticky bottom CTA */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 md:hidden"
          >
            <div className="glass flex items-center justify-between gap-2 rounded-full p-1.5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]">
              <a
                href={`tel:${PHONE}`}
                className="flex h-11 w-11 items-center justify-center rounded-full text-bone-50 hover:bg-bone-50/8 transition"
                aria-label="Call"
              >
                <Phone size={17} />
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full text-bone-50 hover:bg-bone-50/8 transition"
                aria-label="WhatsApp"
              >
                <MessageCircle size={17} />
              </a>
              <button
                onClick={onReserveClick}
                className="btn-ember flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-3 text-[11.5px] font-semibold tracking-[0.18em] uppercase text-bone-50"
              >
                <CalendarCheck size={14} />
                {t('reserveTable')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function FloatingIcon({
  href,
  label,
  external,
  ring,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  ring: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      aria-label={label}
      className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-bone-50/15 bg-ink-900/80 text-bone-50 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-bone-50/30"
    >
      <span
        className={`pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br ${ring} opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-50`}
      />
      <span className="relative">{children}</span>
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-ink-900/95 px-2.5 py-1 text-[10px] tracking-[0.2em] uppercase text-bone-50 opacity-0 transition-all duration-300 translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 backdrop-blur border border-bone-50/10">
        {label}
      </span>
    </a>
  );
}
