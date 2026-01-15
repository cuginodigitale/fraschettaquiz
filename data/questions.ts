export type Question = {
  id: string;
  category: string;
  question: string;
  choices: string[];
  answerIndex: number;
  explanation?: string;
};

export type QuizCategory = {
  id: string;
  label: string;
  intro: string;
};

export const quizCategories: QuizCategory[] = [
  {
    id: "cucina",
    label: "Cucina",
    intro:
      "Aho, qui se magna co' la testa: se sbaji, te resta solo er pane secco."
  },
  {
    id: "dialetto",
    label: "Dialetto",
    intro:
      "Mo' parlamo come se deve: se nun capisci, t'aricordi co' li gesti."
  },
  {
    id: "cinema",
    label: "Cinema",
    intro:
      "Luci, camera, sfotto: vedemo se Roma l'hai vista o solo sognata."
  },
  {
    id: "citta",
    label: "Città",
    intro:
      "Ultima passeggiata: se te perdi, te ritroviamo ar bar co' er soriso."
  }
];

export const questions: Question[] = [
  {
    id: "cucina-1",
    category: "cucina",
    question: "La carbonara romana prevede la panna.",
    choices: ["Vero", "Falso"],
    answerIndex: 1,
    explanation: "La panna è eresia, la carbonara è co' uova, pecorino e guanciale."
  },
  {
    id: "cucina-2",
    category: "cucina",
    question: "Pe' fa' l'amatriciana come se deve, che ce va?",
    choices: ["Guanciale", "Pancetta", "Speck", "Prosciutto cotto"],
    answerIndex: 0
  },
  {
    id: "cucina-3",
    category: "cucina",
    question: "Er supplì ar telefono c'ha ar centro?",
    choices: ["Mozzarella filante", "Ricotta", "Gorgonzola", "Provolone"],
    answerIndex: 0
  },
  {
    id: "cucina-4",
    category: "cucina",
    question: "La pizza bianca romana se magna spesso co'?",
    choices: ["Mortadella", "Tonno e cipolla", "Ananas", "Salmone"],
    answerIndex: 0
  },
  {
    id: "dialetto-1",
    category: "dialetto",
    question: "A Roma se dice Aò pe' chiamà qualcuno.",
    choices: ["Vero", "Falso"],
    answerIndex: 0
  },
  {
    id: "dialetto-2",
    category: "dialetto",
    question: "Se uno dice nun me va, che sta a dì?",
    choices: ["Non mi piace", "Non mi serve", "Non lo so", "Non lo trovo"],
    answerIndex: 0
  },
  {
    id: "dialetto-3",
    category: "dialetto",
    question: "Quando uno è 'gnente male', sta dicendo che?",
    choices: ["Va abbastanza bene", "È terribile", "È sparito", "È carissimo"],
    answerIndex: 0
  },
  {
    id: "dialetto-4",
    category: "dialetto",
    question: "Se uno te dice 'm'hai preso per i fondelli', che significa?",
    choices: ["Mi hai preso in giro", "Mi hai aiutato", "Mi hai dato ragione", "Mi hai salutato"],
    answerIndex: 0
  },
  {
    id: "cinema-1",
    category: "cinema",
    question: "Roma città aperta è un film de Rossellini.",
    choices: ["Vero", "Falso"],
    answerIndex: 0
  },
  {
    id: "cinema-2",
    category: "cinema",
    question: "In quale film c'è la scena della Fontana di Trevi co' Anita Ekberg?",
    choices: ["La dolce vita", "Vacanze Romane", "Il sorpasso", "8½"],
    answerIndex: 0
  },
  {
    id: "cinema-3",
    category: "cinema",
    question: "Er Marchese del Grillo c'ha come protagonista?",
    choices: ["Alberto Sordi", "Carlo Verdone", "Vittorio Gassman", "Nino Manfredi"],
    answerIndex: 0
  },
  {
    id: "cinema-4",
    category: "cinema",
    question: "Perfetti Sconosciuti è ambientato a Roma.",
    choices: ["Vero", "Falso"],
    answerIndex: 0
  },
  {
    id: "citta-1",
    category: "citta",
    question: "Piazza Navona nasce sopra un antico stadio romano.",
    choices: ["Vero", "Falso"],
    answerIndex: 0
  },
  {
    id: "citta-2",
    category: "citta",
    question: "Quale fiume attraversa Roma?",
    choices: ["Tevere", "Arno", "Po", "Ticino"],
    answerIndex: 0
  },
  {
    id: "citta-3",
    category: "citta",
    question: "Er Colosseo se chiama così pe' via de?",
    choices: ["Er Colosso de Nerone", "La forma tonda", "L'altezza record", "Er colore dorato"],
    answerIndex: 0
  },
  {
    id: "citta-4",
    category: "citta",
    question: "Trastevere vuol dì?",
    choices: ["Al di là der Tevere", "Tra le sette vie", "Sopra er colle", "Dentro le mura"],
    answerIndex: 0
  }
];
