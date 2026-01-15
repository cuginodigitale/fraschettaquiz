import Link from "next/link";

const steps = [
  {
    title: "Domanda 1",
    description: "Placeholder per domanda con risposta multipla."
  },
  {
    title: "Domanda 2",
    description: "Placeholder per domanda con slider o scelta singola."
  },
  {
    title: "Domanda 3",
    description: "Placeholder per domanda con input testuale."
  }
];

export default function QuizPage() {
  return (
    <section className="flex flex-col gap-6">
      <header className="rounded-3xl bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-secondary">
          Route /quiz
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900">
          Struttura base del quiz
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          Qui inserirai la logica di navigazione, lo stato delle risposte e i
          componenti di domanda.
        </p>
      </header>

      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">
          Step placeholder
        </h3>
        <ol className="mt-4 space-y-4 text-sm text-slate-600">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-slate-100 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary">
                  Placeholder
                </span>
              </div>
              <h4 className="mt-3 text-base font-semibold text-slate-900">
                {step.title}
              </h4>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col gap-3">
        <Link
          href="/results"
          className="rounded-full bg-brand-secondary px-5 py-3 text-center text-sm font-semibold text-white"
        >
          Vai ai risultati (route placeholder)
        </Link>
        <Link
          href="/"
          className="rounded-full border border-brand-secondary/30 px-5 py-3 text-center text-sm font-semibold text-brand-secondary"
        >
          Torna alla home
        </Link>
      </div>
    </section>
  );
}
