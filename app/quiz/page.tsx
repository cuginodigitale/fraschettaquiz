"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { questions, selectBalancedQuestions } from "@/data/questions";

const QUESTION_COUNT = 12;
const SEED_STORAGE_KEY = "fraschettaquiz-seed";

const getSarcasticVerdict = (scorePercentage: number) => {
  if (scorePercentage >= 90) {
    return "Aho, t'hanno fatto Console d'Oro: ma chi sei, er Sindaco de Trastevere?";
  }
  if (scorePercentage >= 70) {
    return "Niente male, te la cavi. Mo' però nun te allargà troppo, eh.";
  }
  if (scorePercentage >= 50) {
    return "Ce potevi fa' de meglio, ma nun sei proprio 'n fregnone.";
  }
  if (scorePercentage >= 30) {
    return "Aho, te sei presentato, ma pare che stavi a pensà ar cornetto.";
  }
  return "Te lo dico co' affetto: stai più spaesato de 'n turista a Testaccio.";
};

export default function QuizPage() {
  const [seed, setSeed] = useState<number | null>(null);
  const [selected, setSelected] = useState(questions.slice(0, QUESTION_COUNT));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

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
    const balanced = selectBalancedQuestions(questions, QUESTION_COUNT, seed);
    setSelected(balanced);
    setAnswers(Array.from({ length: balanced.length }, () => null));
    setCurrentIndex(0);
  }, [seed]);

  const categories = useMemo(() => {
    return Array.from(new Set(selected.map((question) => question.category)));
  }, [selected]);

  const currentQuestion = selected[currentIndex];
  const currentAnswer = answers[currentIndex];
  const answeredCount = answers.filter((answer) => answer !== null).length;
  const progress = selected.length > 0 ? ((currentIndex + 1) / selected.length) * 100 : 0;
  const isLastQuestion = currentIndex === selected.length - 1;

  const score = answers.reduce((total, answer, index) => {
    if (answer === null) {
      return total;
    }
    return total + (answer === selected[index]?.answerIndex ? 1 : 0);
  }, 0);
  const scorePercentage = selected.length > 0 ? Math.round((score / selected.length) * 100) : 0;
  const verdict = getSarcasticVerdict(scorePercentage);
  const isCompleted = answers.every((answer) => answer !== null);

  const handleSelectAnswer = (choiceIndex: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = choiceIndex;
      return next;
    });
  };

  const handleNext = () => {
    if (currentIndex < selected.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <section className="flex flex-col gap-6">
      <header className="rounded-3xl bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-secondary">
          Quiz romano
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900">
          Domanda singola, risposta secca.
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          Rispondi una domanda alla volta: il punteggio finale ti giudica senza pietà.
        </p>
      </header>

      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">
              Progresso
            </p>
            <p className="text-sm font-semibold text-slate-800">
              {currentIndex + 1} / {selected.length} · {answeredCount} risposte segnate
            </p>
          </div>
          <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary">
            {categories.length} categorie
          </span>
        </div>
        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-brand-primary transition-all"
            style={{ width: `${progress}%` }}
            aria-hidden
          />
        </div>
      </div>

      {currentQuestion && (
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">
              {String(currentIndex + 1).padStart(2, "0")} · {currentQuestion.category}
            </span>
            <span className="text-xs font-semibold text-slate-500">
              Scelte multiple
            </span>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">
            {currentQuestion.question}
          </h3>
          <div className="mt-4 grid gap-3">
            {currentQuestion.choices.map((choice, choiceIndex) => {
              const isSelected = currentAnswer === choiceIndex;
              return (
                <button
                  key={choice}
                  type="button"
                  onClick={() => handleSelectAnswer(choiceIndex)}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${
                    isSelected
                      ? "border-brand-primary bg-brand-primary/10 text-brand-primary"
                      : "border-slate-200 text-slate-700 hover:border-brand-primary/40"
                  }`}
                >
                  {choice}
                </button>
              );
            })}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-semibold text-slate-500">
              {currentAnswer !== null ? "Risposta salvata." : "Scegli prima di andare avanti."}
            </p>
            {!isLastQuestion ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={currentAnswer === null}
                className="rounded-full bg-brand-secondary px-6 py-3 text-center text-sm font-semibold text-white shadow disabled:cursor-not-allowed disabled:opacity-40"
              >
                Avanti
              </button>
            ) : (
              <span className="rounded-full bg-brand-secondary/10 px-5 py-2 text-xs font-semibold text-brand-secondary">
                Ultima domanda
              </span>
            )}
          </div>
        </div>
      )}

      {isCompleted && (
        <div className="rounded-3xl bg-brand-secondary p-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            Risultato finale
          </p>
          <h3 className="mt-3 text-2xl font-semibold">
            {score} risposte corrette su {selected.length}
          </h3>
          <p className="mt-2 text-sm text-white/80">
            Score: {scorePercentage}% · {verdict}
          </p>
        </div>
      )}

      <div className="flex flex-col gap-3">
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
