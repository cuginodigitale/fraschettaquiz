import Link from "next/link";

export default function ResultsPage() {
  return (
    <section className="flex flex-col gap-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-secondary">
          Route /results
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900">
          Risultati del quiz (placeholder)
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          Qui verranno mostrati punteggio, consigli e call-to-action finali.
        </p>
      </div>

      <div className="rounded-3xl border border-dashed border-brand-primary/30 bg-white p-6 text-sm text-slate-600">
        <p>
          Integrare i grafici o le card con l'identità visiva finale quando il
          branding sarà disponibile.
        </p>
      </div>

      <Link
        href="/quiz"
        className="rounded-full border border-brand-primary/30 px-5 py-3 text-center text-sm font-semibold text-brand-primary"
      >
        Torna al quiz
      </Link>
    </section>
  );
}
