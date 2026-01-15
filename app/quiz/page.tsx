"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { questions, selectBalancedQuestions } from "@/data/questions";

const QUESTION_COUNT = 12;
const SEED_STORAGE_KEY = "fraschettaquiz-seed";

export default function QuizPage() {
  const [seed, setSeed] = useState<number | null>(null);
  const [selected, setSelected] = useState(questions.slice(0, QUESTION_COUNT));

  useEffect(() => {
    const storedSeed = sessionStorage.getItem(SEED_STORAGE_KEY);
    const parsedSeed = storedSeed ? Number.parseInt(storedSeed, 10) : Number.NaN;
    if (Number.isNaN(parsedSeed)) {
      const nextSeed = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
      sessionStorage.setItem(SEED_STORAGE_KEY, String(nextSeed));
      setSeed(nextSeed);
    } else {
      setSeed(parsedSeed);
    }
  }, []);

  useEffect(() => {
    if (seed === null) {
      return;
    }
    setSelected(selectBalancedQuestions(questions, QUESTION_COUNT, seed));
  }, [seed]);

  const categories = useMemo(() => {
    return Array.from(new Set(selected.map((question) => question.category)));
  }, [selected]);

  return (
    <section className="flex flex-col gap-6">
      <header className="rounded-3xl bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-secondary">
          Route /quiz
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900">
          Selezione domande bilanciata
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          Le domande vengono estratte per categoria con un seed salvato in
          sessione, così al refresh restano consistenti.
        </p>
      </header>

      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">
            Domande selezionate
          </h3>
          <span className="text-xs font-semibold text-slate-500">
            {selected.length} domande · {categories.length} categorie
          </span>
        </div>
        <ol className="mt-4 space-y-4 text-sm text-slate-600">
          {selected.map((question, index) => (
            <li key={question.id} className="rounded-2xl border border-slate-100 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary">
                  {question.category}
                </span>
              </div>
              <h4 className="mt-3 text-base font-semibold text-slate-900">
                {question.question}
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                Risposte: {question.choices.join(" · ")}
              </p>
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
