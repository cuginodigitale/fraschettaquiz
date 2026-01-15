import Link from "next/link";

const highlights = [
  "Layout mobile-first", 
  "Struttura quiz modulare",
  "Branding pronto per asset finali"
];

export default function HomePage() {
  return (
    <section className="flex flex-col gap-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-secondary">
          Benvenuto
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900">
          Prepariamo il tuo quiz interattivo.
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          Questa pagina principale è un placeholder per la home del quiz, con
          layout mobile-first e riferimenti chiari a logo, palette e font.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Link
            href="/quiz"
            className="rounded-full bg-brand-primary px-5 py-3 text-center text-sm font-semibold text-white shadow"
          >
            Avvia il quiz
          </Link>
          <Link
            href="/quiz"
            className="rounded-full border border-brand-primary/30 px-5 py-3 text-center text-sm font-semibold text-brand-primary"
          >
            Vedi struttura route
          </Link>
        </div>
      </div>

      <div className="rounded-3xl border border-dashed border-brand-secondary/30 bg-white p-6">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">
          Placeholder branding
        </h3>
        <ul className="mt-4 space-y-3 text-sm text-slate-600">
          <li>
            <span className="font-semibold text-slate-800">Logo:</span> /public/branding/logo-placeholder.svg
          </li>
          <li>
            <span className="font-semibold text-slate-800">Palette:</span> CSS variables in
            <span className="font-mono text-xs"> app/globals.css</span>
          </li>
          <li>
            <span className="font-semibold text-slate-800">Font:</span> variabile
            <span className="font-mono text-xs"> --font-brand</span>
          </li>
        </ul>
      </div>

      <div className="rounded-3xl bg-brand-secondary p-6 text-white">
        <h3 className="text-lg font-semibold">Prossimi step</h3>
        <ul className="mt-4 space-y-2 text-sm text-white/80">
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-accent" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
