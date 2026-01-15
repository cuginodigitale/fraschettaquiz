import Link from "next/link";

const highlights = [
  "Layout mobile-first pe' telefono",
  "Struttura quiz modulare",
  "Branding pronto pe' l'asset finali"
];

export default function HomePage() {
  return (
    <section className="flex flex-col gap-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-secondary">
          Aho, benvenuto
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900">
          Mo' te preparo er quiz interattivo.
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          Sta pagina principale è 'n placeholder pe' la home der quiz, co' layout
          mobile-first e rimandi chiari a logo, palette e font.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Link
            href="/quiz"
            className="rounded-full bg-brand-primary px-5 py-3 text-center text-sm font-semibold text-white shadow"
          >
            Attacca er quiz
          </Link>
          <Link
            href="/quiz"
            className="rounded-full border border-brand-primary/30 px-5 py-3 text-center text-sm font-semibold text-brand-primary"
          >
            Dà 'n'occhiata ar giro delle route
          </Link>
        </div>
      </div>

      <div className="rounded-3xl border border-dashed border-brand-secondary/30 bg-white p-6">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">
          Branding de prova
        </h3>
        <ul className="mt-4 space-y-3 text-sm text-slate-600">
          <li>
            <span className="font-semibold text-slate-800">Logo:</span>{" "}
            /public/branding/logo-placeholder.svg
          </li>
          <li>
            <span className="font-semibold text-slate-800">Palette:</span> variabili CSS
            dentro <span className="font-mono text-xs"> app/globals.css</span>
          </li>
          <li>
            <span className="font-semibold text-slate-800">Font:</span> variabbile
            <span className="font-mono text-xs"> --font-brand</span>
          </li>
        </ul>
      </div>

      <div className="rounded-3xl bg-brand-secondary p-6 text-white">
        <h3 className="text-lg font-semibold">Prossimi giri</h3>
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
