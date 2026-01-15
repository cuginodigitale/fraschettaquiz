"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { questions, selectBalancedQuestions } from "@/data/questions";

const QUESTION_COUNT = 12;
const SEED_STORAGE_KEY = "fraschettaquiz-seed";

const verdictRanges = [
  {
    min: 90,
    phrases: [
      "Aho, t'hanno fatto Console d'Oro: ma chi sei, er Sindaco de Trastevere?",
      "Te la magni la città a morsi: pure er Tevere se leva er cappello.",
      "Sei 'n'enciclopedia co' er bacio de Roma stampato in fronte."
    ]
  },
  {
    min: 70,
    phrases: [
      "Niente male, te la cavi. Mo' però nun te allargà troppo, eh.",
      "Se vede che c'hai occhio: te manca giusto 'n giro pe' fa' er fenomeno.",
      "Bravo, stai sul pezzo: ancora 'na spinta e sei da panettone."
    ]
  },
  {
    min: 50,
    phrases: [
      "Ce potevi fa' de meglio, ma nun sei proprio 'n fregnone.",
      "Mezzo e mezzo: sei come er supplì, bello ma te manca 'na scrocchia.",
      "Te la giochi, ma ogni tanto te perdi pe' strada come er tram 8."
    ]
  },
  {
    min: 30,
    phrases: [
      "Aho, te sei presentato, ma pare che stavi a pensà ar cornetto.",
      "Te sei messo in fila, però er cervello è rimasto ar bar.",
      "Daje che ce sei quasi... ma solo co' l'occhi."
    ]
  },
  {
    min: 0,
    phrases: [
      "Te lo dico co' affetto: stai più spaesato de 'n turista a Testaccio.",
      "Er quiz t'ha fatto er solletico e te s'è fermato er pensiero.",
      "Avoja a dì: qui c'è da fa' er ripasso serio, fratè."
    ]
  }
];

const getSarcasticVerdict = (scorePercentage: number) => {
  const range = verdictRanges.find((entry) => scorePercentage >= entry.min) ?? verdictRanges.at(-1);
  const phrases = range?.phrases ?? [];
  if (phrases.length === 0) {
    return "";
  }
  const index = scorePercentage % phrases.length;
  return phrases[index] ?? phrases[0];
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
          Quiz de Roma
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-900">
          Domanna secca, risposta dritta.
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          Risponni 'na domanda alla vorta: er punteggio finale te giudica senza pietà.
        </p>
      </header>

      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">
              A che punto stai
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
              Scelte mischiate
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
              {currentAnswer !== null
                ? "Risposta segnata."
                : "Scegli prima de annà avanti."}
            </p>
            {!isLastQuestion ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={currentAnswer === null}
                className="rounded-full bg-brand-secondary px-6 py-3 text-center text-sm font-semibold text-white shadow disabled:cursor-not-allowed disabled:opacity-40"
              >
                Daje
              </button>
            ) : (
              <span className="rounded-full bg-brand-secondary/10 px-5 py-2 text-xs font-semibold text-brand-secondary">
                Ultima botta
              </span>
            )}
          </div>
        </div>
      )}

      {isCompleted && (
        <div className="rounded-3xl bg-brand-secondary p-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            Risurtato finale
          </p>
          <h3 className="mt-3 text-2xl font-semibold">
            {score} risposte giuste su {selected.length}
          </h3>
          <p className="mt-2 text-sm text-white/80">
            Punteggio: {scorePercentage}% · {verdict}
          </p>
        </div>
      )}

      <div className="flex flex-col gap-3">
        <Link
          href="/"
          className="rounded-full border border-brand-secondary/30 px-5 py-3 text-center text-sm font-semibold text-brand-secondary"
        >
          Torna ar começo
        </Link>
      </div>
    </section>
  );
}
