import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { X, Phone, MessageCircle, Check } from 'lucide-react';

interface Props {
  open: boolean;
  onClose: () => void;
}

const PHONE = '+919113602040';
const WHATSAPP = '919141877399';
const WA_DEFAULT_URL = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Hi Nandi Fishland Dhaba 👋, I'd like to know more."
)}`;

export default function ReservationModal({ open, onClose }: Props) {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [waUrl, setWaUrl] = useState<string>('');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    guests: 2,
    datetime: '',
    notes: '',
  });

  useEffect(() => {
    if (open) {
      setSubmitted(false);
      setWaUrl('');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const buildWaUrl = () => {
    const friendlyDate = form.datetime
      ? new Date(form.datetime).toLocaleString('en-IN', {
          dateStyle: 'medium',
          timeStyle: 'short',
        })
      : '—';
    const lines = [
      `Hi Nandi Fishland Dhaba, I'd like to reserve a table.`,
      ``,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Guests: ${form.guests}`,
      `Date/Time: ${friendlyDate}`,
      `Notes: ${form.notes?.trim() || '—'}`,
    ];
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = buildWaUrl();
    setWaUrl(url);
    setSubmitted(true);
    // Open synchronously inside the user-gesture so Safari / iOS keep the popup
    // and preserve the full text payload.
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.5 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink-950/85"
          />

          {/* Panel */}
          <motion.div
            initial={{ y: 60, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 30, scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-bone-50/10 bg-ink-900/95 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-ember-500/20 blur-[80px]" />
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-ocean-700/20 blur-[80px]" />

            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-bone-50/15 text-bone-400 hover:text-bone-50 hover:bg-bone-50/5 transition"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            <div className="relative px-7 pb-7 pt-9 md:px-10 md:pt-10">
              <div className="text-[10px] tracking-[0.4em] uppercase text-ember-200/80">
                ◆ Reservation
              </div>
              <h3
                className="mt-2 font-serif tracking-tight text-bone-50"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}
              >
                {t('reservationTitle')}
              </h3>
              <p className="mt-2 text-[13.5px] text-bone-400">{t('reservationSub')}</p>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    onSubmit={submit}
                    className="mt-7 space-y-4"
                  >
                    <Field label={t('fullName')}>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="input"
                        placeholder="Your name"
                      />
                    </Field>
                    <div className="grid grid-cols-2 gap-3">
                      <Field label={t('phoneNumber')}>
                        <input
                          required
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="input"
                          placeholder="+91"
                        />
                      </Field>
                      <Field label={t('guests')}>
                        <input
                          required
                          type="number"
                          min={1}
                          max={30}
                          value={form.guests}
                          onChange={(e) =>
                            setForm({ ...form, guests: parseInt(e.target.value) || 1 })
                          }
                          className="input"
                        />
                      </Field>
                    </div>
                    <Field label={t('dateTime')}>
                      <input
                        required
                        type="datetime-local"
                        value={form.datetime}
                        onChange={(e) => setForm({ ...form, datetime: e.target.value })}
                        className="input"
                      />
                    </Field>
                    <Field label={t('specialRequests')}>
                      <textarea
                        rows={2}
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        className="input resize-none"
                        placeholder="Birthday, allergies, seating preference…"
                      />
                    </Field>

                    <div className="!mt-7 flex flex-col gap-3 sm:flex-row">
                      <button
                        type="submit"
                        className="btn-ember flex-1 rounded-full px-6 py-3 text-[12px] font-semibold tracking-[0.18em] uppercase text-bone-50"
                      >
                        {t('confirmReservation')}
                      </button>
                      <a
                        href={`tel:${PHONE}`}
                        className="btn-ghost flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3 text-[12px] font-semibold tracking-[0.18em] uppercase text-bone-50"
                      >
                        <Phone size={13} /> {t('callUs')}
                      </a>
                    </div>
                    <a
                      href={WA_DEFAULT_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 pt-1 text-[11px] tracking-[0.3em] uppercase text-bone-400 hover:text-ember-300 transition"
                    >
                      <MessageCircle size={12} /> {t('whatsapp')}
                    </a>
                  </motion.form>
                ) : (
                  <motion.div
                    key="ok"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-10 flex flex-col items-center text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 320,
                        damping: 18,
                        delay: 0.1,
                      }}
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-ember-400 to-ember-600 shadow-[0_0_40px_rgba(255,138,31,0.5)]"
                    >
                      <Check className="text-bone-50" size={28} />
                    </motion.div>
                    <h4 className="mt-6 font-serif text-2xl text-bone-50">
                      Thank you, {form.name || 'Guest'}.
                    </h4>
                    <p className="mt-2 max-w-xs text-[13.5px] text-bone-400">
                      WhatsApp should have opened with your details. If not, tap below to send your reservation.
                    </p>
                    {waUrl && (
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-ember mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[12px] font-semibold tracking-[0.18em] uppercase text-bone-50"
                      >
                        <MessageCircle size={14} /> {t('whatsapp')}
                      </a>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <style>{`
              .input {
                width: 100%;
                background: rgba(11,11,11,0.6);
                border: 1px solid rgba(245,245,245,0.08);
                border-radius: 12px;
                color: #F5F5F5;
                padding: 11px 14px;
                font-size: 14px;
                font-family: 'Inter', sans-serif;
                transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
                color-scheme: dark;
              }
              .input::placeholder { color: #525252; }
              .input:focus {
                outline: none;
                border-color: rgba(255, 138, 31, 0.5);
                background: rgba(11,11,11,0.85);
                box-shadow: 0 0 0 3px rgba(255, 138, 31, 0.12);
              }
            `}</style>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[10px] tracking-[0.3em] uppercase text-bone-400">
        {label}
      </span>
      {children}
    </label>
  );
}
