import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const PHONE = '+919876543210';
const WHATSAPP = '919876543210';

interface Props {
  onReserveClick: () => void;
}

export default function Visit({ onReserveClick }: Props) {
  const { t, locale } = useLanguage();
  const kn = locale === 'kn';

  return (
    <section
      id="visit"
      className="relative overflow-hidden bg-ink-900 py-32 md:py-44"
    >
      {/* Atmospheric backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-900/85 to-ink-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(255,138,31,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[10.5px] font-medium tracking-[0.45em] uppercase text-ember-200/80"
            >
              ◆ {t('visitEyebrow')}
            </motion.span>
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`mt-4 font-serif tracking-tightest text-bone-50 ${
                kn ? 'leading-[1.45]' : 'leading-[1.05]'
              }`}
              style={{
                fontSize: kn
                  ? 'clamp(2rem, 5vw, 4.5rem)'
                  : 'clamp(2.4rem, 6vw, 5.5rem)',
              }}
            >
              <span className="block">{t('visitHeadline').replace('.', '')}</span>
              <span className="block italic text-ember-glow">.</span>
            </motion.h2>

            <div className="mt-10 space-y-6">
              <InfoRow
                icon={<MapPin size={16} />}
                label="Location"
                value={t('address')}
              />
              <InfoRow
                icon={<Clock size={16} />}
                label={t('hours')}
                value={t('hoursValue')}
              />
              <InfoRow
                icon={<Phone size={16} />}
                label="Reservations"
                value={PHONE}
              />
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <button
                onClick={onReserveClick}
                className="btn-ember rounded-full px-6 py-3 text-[12px] font-semibold tracking-[0.18em] uppercase text-bone-50"
              >
                {t('reserveTable')}
              </button>
              <a
                href={`tel:${PHONE}`}
                className="btn-ghost rounded-full px-6 py-3 text-[12px] font-semibold tracking-[0.18em] uppercase text-bone-50 inline-flex items-center gap-2"
              >
                <Phone size={14} /> {t('callUs')}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}?text=Hi%20Nandi%20Fishland%20Dhaba,%20I'd%20like%20to%20reserve%20a%20table.`}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost rounded-full px-6 py-3 text-[12px] font-semibold tracking-[0.18em] uppercase text-bone-50 inline-flex items-center gap-2"
              >
                <MessageCircle size={14} /> {t('whatsapp')}
              </a>
            </div>
          </div>

          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7"
          >
            <div className="map-darken relative h-[440px] overflow-hidden rounded-3xl border border-bone-50/8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] md:h-[560px]">
              <iframe
                title="Nandi Fishland Dhaba Location"
                src="https://www.google.com/maps?q=Nandi+Fishland+Dhaba+Karahalli+Devanahalli&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ember-400/10 rounded-3xl" />
            </div>
            <a
              href="https://maps.app.goo.gl/5LMawmJUpT28yf2F7"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-bone-400 hover:text-ember-300 transition-colors"
            >
              {t('getDirections')} →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-start gap-4"
    >
      <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-ember-400/30 bg-ember-500/10 text-ember-200">
        {icon}
      </div>
      <div>
        <div className="text-[10px] tracking-[0.3em] uppercase text-bone-400">{label}</div>
        <div className="mt-1 font-serif text-lg text-bone-50">{value}</div>
      </div>
    </motion.div>
  );
}
