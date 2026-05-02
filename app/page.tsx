import Image from "next/image";
import { Phone, MapPin, Clock, Shield, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const PHONE = "+37360021878";
const PHONE_DISPLAY = "+373 600 21 878";

const services = [
  {
    n: "01",
    title: "Litigii Penale & Civile",
    text: "Reprezentare completă în fața instanțelor judecătorești — de la ancheta penală și urmărirea penală până la pronunțarea sentinței definitive. Strategie juridică personalizată, apărare ferm fundamentată pe text de lege.",
    tags: ["Drept Penal", "Drept Civil", "Apeluri", "Recursuri"],
  },
  {
    n: "02",
    title: "Redactare & Traduceri Juridice",
    text: "Elaborarea și revizuirea contractelor, acțiunilor civile, memorandumurilor și documentelor notariale. Traduceri juridice de precizie în română, rusă, spaniolă și engleză.",
    tags: ["Contracte", "Acțiuni Civile", "4 Limbi"],
  },
  {
    n: "03",
    title: "Masterclass pentru Avocați",
    text: "Program specializat de formare profesională: tehnici avansate de examinare și contrainterogare a martorilor. Peste 7 ani de experiență pedagogică predată avocaților în exercițiu din Republica Moldova.",
    tags: ["Examinare Martori", "CPD", "Formare Profesională"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-ink-900 font-sans text-parchment-100">

      {/* ─── HEADER ─────────────────────────────────────────── */}
      <header className="fixed left-0 right-0 top-0 z-50 h-[58px] border-b border-ink-700/60 bg-ink-900/92 backdrop-blur-sm">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="font-display text-sm font-bold italic text-gold-500">
              EuroLex
            </span>
            <span className="h-3 w-px bg-ink-600" />
            <span className="hidden text-xs tracking-wide text-parchment-400 sm:block">
              Avocat Canțer Oleg
            </span>
          </div>
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-2 border border-gold-500/30 px-3 py-1.5 text-xs text-gold-500 transition-colors hover:border-gold-500 hover:bg-gold-500/5"
          >
            <Phone className="h-3 w-3" />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            <span className="sm:hidden">Sună acum</span>
          </a>
        </div>
      </header>

      {/* ─── HERO ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">

        {/* Desktop: editorial split */}
        <div
          className="hidden min-h-screen lg:grid"
          style={{ gridTemplateColumns: "55% 45%" }}
        >
          {/* Left — content */}
          <div className="flex flex-col justify-end pb-24 pl-16 pr-10 pt-[120px] xl:pl-24">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-8 bg-gold-500" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold-500">
                Avocat la Chișinău · EuroLex
              </span>
            </div>

            <h1 className="font-display block text-[90px] font-bold leading-[0.87] tracking-tight text-parchment-100 xl:text-[108px]">
              Canțer
            </h1>
            <h1 className="font-display block text-[90px] font-bold leading-[0.87] tracking-tight text-gold-500 xl:text-[108px]">
              Oleg
            </h1>

            <div className="my-8 flex items-center gap-4">
              <div className="h-px w-14 bg-gold-500/40" />
              <span className="text-xs uppercase tracking-[0.2em] text-parchment-500">
                16 Ani Practică Juridică
              </span>
            </div>

            <p className="mb-2 max-w-[400px] text-base leading-relaxed text-parchment-300">
              Specialist în Drept Penal &amp; Civil. Reprezentare fără compromis
              în fața instanțelor din Republica Moldova.
            </p>
            <p className="mb-12 text-sm text-parchment-500">
              Română · Rusă · Spaniolă · Engleză
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-gold-500 px-7 py-3.5 text-sm font-bold text-ink-900 transition-colors hover:bg-gold-400"
              >
                Solicită o Consultație
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 border border-parchment-100/15 px-7 py-3.5 text-sm text-parchment-400 transition-colors hover:border-parchment-100/40 hover:text-parchment-100"
              >
                <Phone className="h-3.5 w-3.5" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Right — photo */}
          <div className="relative overflow-hidden">
            <Image
              src="/hero-desktop.jpg"
              alt="Avocat Canțer Oleg în biroul său"
              fill
              priority
              sizes="45vw"
              className="object-cover object-center"
            />
            {/* fade left edge into content */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink-900 to-transparent" />
            {/* fade bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ink-900 to-transparent" />
            {/* trust badge */}
            <div className="absolute bottom-10 right-8 border border-white/10 bg-ink-900/80 px-5 py-4 text-center backdrop-blur-sm">
              <div className="mb-1 text-sm tracking-widest text-gold-500">
                ★★★★★
              </div>
              <div className="font-display text-2xl font-bold text-parchment-100">
                5.0
              </div>
              <div className="mt-0.5 text-xs text-parchment-500">
                Google Maps
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: portrait photo bg */}
        <div className="relative flex min-h-[100svh] flex-col justify-end lg:hidden">
          <Image
            src="/hero-mobile.jpg"
            alt="Avocat Canțer Oleg"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/60 to-ink-900/5" />
          <div className="relative px-5 pb-10">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-6 bg-gold-500" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold-500">
                Avocat la Chișinău
              </span>
            </div>
            <h1 className="font-display mb-0.5 text-[58px] font-bold leading-[0.87] text-parchment-100">
              Canțer
            </h1>
            <h1 className="font-display mb-6 text-[58px] font-bold leading-[0.87] text-gold-500">
              Oleg
            </h1>
            <p className="mb-6 text-sm leading-relaxed text-parchment-300">
              16 ani · Drept Penal &amp; Civil
              <br />
              <span className="text-parchment-500">
                Română · Rusă · Spaniolă · Engleză
              </span>
            </p>
            <div className="mb-7 inline-flex items-center gap-2 border border-gold-500/20 bg-ink-900/60 px-3 py-2 backdrop-blur-sm">
              <span className="text-xs text-gold-500">★★★★★</span>
              <span className="text-xs text-parchment-400">5.0 · Google Maps</span>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-gold-500 py-4 text-sm font-bold text-ink-900 hover:bg-gold-400"
              >
                Solicită o Consultație
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`tel:${PHONE}`}
                className="flex items-center justify-center gap-2 border border-parchment-100/20 py-4 text-sm text-parchment-300"
              >
                <Phone className="h-3.5 w-3.5" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NUMBERS ─────────────────────────────────────────── */}
      <section className="border-y border-ink-700 bg-ink-800">
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-ink-700 px-5 sm:px-8">
          {[
            { num: "16+", label: "Ani Practică", sub: "Drept Penal & Civil" },
            { num: "7+",  label: "Ani Pedagogie", sub: "Tehnici examinare" },
            { num: "5.0", label: "★ Google",      sub: "Recenzii verificate" },
          ].map(({ num, label, sub }) => (
            <div key={label} className="py-10 px-4 sm:px-8">
              <div className="font-display text-4xl font-bold text-gold-500 sm:text-5xl lg:text-6xl">
                {num}
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-widest text-parchment-300">
                {label}
              </div>
              <div className="mt-0.5 text-xs text-parchment-500">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICES — editorial numbered list ──────────────── */}
      <section id="servicii" className="bg-ink-900 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-14 flex items-end justify-between border-b border-ink-700 pb-8">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="h-px w-8 bg-gold-500" />
                <span className="text-xs uppercase tracking-[0.25em] text-gold-500">
                  Domenii de Practică
                </span>
              </div>
              <h2 className="font-display text-4xl font-bold text-parchment-100 lg:text-5xl">
                Servicii Juridice
              </h2>
            </div>
            <a
              href="#contact"
              className="hidden text-xs text-parchment-500 underline underline-offset-4 hover:text-gold-500 lg:block"
            >
              Programează o consultație →
            </a>
          </div>

          <div>
            {services.map(({ n, title, text, tags }) => (
              <div
                key={n}
                className="group border-b border-ink-700 py-10 transition-colors hover:border-gold-500/20 lg:grid lg:grid-cols-[72px_1fr_100px] lg:gap-10 lg:py-14"
              >
                {/* Number */}
                <div className="mb-4 font-display text-6xl font-bold leading-none text-ink-700 transition-colors group-hover:text-gold-500/12 lg:mb-0 lg:text-7xl">
                  {n}
                </div>
                {/* Content */}
                <div>
                  <h3 className="font-display mb-4 text-2xl font-bold text-parchment-100 lg:text-3xl">
                    {title}
                  </h3>
                  <p className="mb-5 max-w-2xl text-sm leading-relaxed text-parchment-400">
                    {text}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-ink-600 px-3 py-1 text-xs text-parchment-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Arrow */}
                <div className="mt-5 flex items-start lg:mt-0 lg:items-center lg:justify-end">
                  <a
                    href="#contact"
                    className="group/a flex items-center gap-1 text-xs uppercase tracking-wide text-parchment-500 transition-colors hover:text-gold-500"
                  >
                    Detalii
                    <ArrowRight className="h-3 w-3 transition-transform group-hover/a:translate-x-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─────────────────────────────────────── */}
      <section className="bg-ink-800 py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <div className="font-display mb-4 text-7xl font-bold leading-none text-gold-500/20">
            &ldquo;
          </div>
          <blockquote className="font-display mb-10 text-xl italic leading-relaxed text-parchment-200 lg:text-2xl">
            Avocat extrem de profesionist și dedicat. M-a ajutat să navighez un
            proces civil deosebit de complex — cu claritate, calm și rezultate
            concrete.
          </blockquote>
          <div className="flex items-center justify-center gap-5">
            <div className="h-px w-12 bg-ink-600" />
            <div>
              <div className="text-xs text-gold-500">★★★★★</div>
              <div className="mt-1 text-xs text-parchment-500">
                Client verificat Google Maps
              </div>
            </div>
            <div className="h-px w-12 bg-ink-600" />
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─────────────────────────────────────────── */}
      <section id="contact" className="bg-ink-900 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-14">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-8 bg-gold-500" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold-500">
                Contact
              </span>
            </div>
            <h2 className="font-display text-4xl font-bold text-parchment-100 lg:text-5xl">
              Solicită o Consultație
            </h2>
            <p className="mt-4 text-sm text-parchment-400">
              Prima consultație este{" "}
              <span className="text-gold-500">gratuită</span>. Răspundem în
              aceeași zi lucrătoare.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_320px]">
            <ContactForm />

            {/* Contact info */}
            <div className="space-y-8 border-t border-ink-700 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gold-500">
                  Telefon
                </p>
                <a
                  href={`tel:${PHONE}`}
                  className="text-lg font-semibold text-parchment-100 transition-colors hover:text-gold-500"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gold-500">
                  Adresă
                </p>
                <address className="text-sm not-italic leading-loose text-parchment-300">
                  Strada București 60, of. 45
                  <br />
                  MD-2012, Chișinău
                  <br />
                  Republica Moldova
                </address>
              </div>
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gold-500">
                  Program
                </p>
                <p className="text-sm leading-loose text-parchment-300">
                  Luni – Vineri: 09:00 – 18:00
                  <br />
                  <span className="text-parchment-500">Weekend: Închis</span>
                </p>
              </div>
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gold-500">
                  Limbi de lucru
                </p>
                <p className="text-sm text-parchment-300">
                  Română · Rusă · Spaniolă · Engleză
                </p>
              </div>
              <a
                href={`tel:${PHONE}`}
                className="group flex items-center justify-between border border-gold-500/25 px-5 py-4 transition-colors hover:border-gold-500/60 hover:bg-gold-500/5"
              >
                <div>
                  <div className="text-xs uppercase tracking-wide text-parchment-500">
                    Sună direct
                  </div>
                  <div className="mt-0.5 text-sm font-semibold text-gold-500">
                    {PHONE_DISPLAY}
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-gold-500/50 transition-transform group-hover:translate-x-1 group-hover:text-gold-500" />
              </a>
              <div className="flex items-start gap-3">
                <Shield className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-600" />
                <p className="text-xs leading-relaxed text-parchment-500">
                  Confidențialitate garantată prin secretul profesional al
                  avocatului.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────── */}
      <footer className="border-t border-ink-700 bg-ink-950 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 text-xs text-parchment-500 sm:flex-row sm:items-center sm:px-8">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold italic text-gold-500">
              EuroLex
            </span>
            <span className="h-3 w-px bg-ink-600" />
            <span>Avocat Canțer Oleg</span>
          </div>
          <span>
            &copy; {new Date().getFullYear()} &middot; Str. București 60, of.
            45, Chișinău
          </span>
          <a
            href={`tel:${PHONE}`}
            className="transition-colors hover:text-gold-500"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </footer>
    </div>
  );
}
