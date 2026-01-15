export type Question = {
  id: string;
  category: string;
  question: string;
  choices: string[];
  answerIndex: number;
  explanation?: string;
};

export const questions: Question[] = [
  {
    id: "cucina-1",
    category: "cucina/ricette",
    question: "Pe' fa' l'amatriciana come se deve, che ce va?",
    choices: ["Guanciale", "Pancetta", "Speck", "Prosciutto cotto"],
    answerIndex: 0,
    explanation: "A Roma l'amatriciana s'fa co' er guanciale, nun co' la pancetta."
  },
  {
    id: "cucina-2",
    category: "cucina/ricette",
    question: "La carbonara vera romana quanno se fa, che formaggio se mette?",
    choices: ["Parmigiano", "Pecorino romano", "Grana", "Emmental"],
    answerIndex: 1,
    explanation: "Er pecorino romano è quello giusto, bello saporito."
  },
  {
    id: "cucina-3",
    category: "cucina/ricette",
    question: "Nella cacio e pepe, l'ingrediente che fa la cremina qual è?",
    choices: ["Acqua de cottura", "Panna", "Burro", "Latte"],
    answerIndex: 0
  },
  {
    id: "cucina-4",
    category: "cucina/ricette",
    question: "Pe' la gricia, quale ingrediente fa er profumo?",
    choices: ["Guanciale", "Salsiccia", "Pancetta", "Salame"],
    answerIndex: 0
  },
  {
    id: "cucina-5",
    category: "cucina/ricette",
    question: "Er carciofo alla giudia se fa così: fritto in?",
    choices: ["Olio d'oliva", "Burro", "Strutto", "Margarina"],
    answerIndex: 0
  },
  {
    id: "cucina-6",
    category: "cucina/ricette",
    question: "Per fa' la pajata, che parte se usa?",
    choices: ["Intestino de vitello", "Fegato de pollo", "Pancia de maiale", "Trippa de manzo"],
    answerIndex: 0
  },
  {
    id: "cucina-7",
    category: "cucina/ricette",
    question: "Er supplì romano classico c'ha ar centro?",
    choices: ["Mozzarella filante", "Ricotta", "Gorgonzola", "Provolone"],
    answerIndex: 0
  },
  {
    id: "cucina-8",
    category: "cucina/ricette",
    question: "Pe' fa' l'abbacchio a scottadito, l'agnello va cotto?",
    choices: ["Alla griglia", "Bollito", "Al vapore", "In umido"],
    answerIndex: 0
  },
  {
    id: "cucina-9",
    category: "cucina/ricette",
    question: "Er maritozzo romano se riconosce perché è ripieno de?",
    choices: ["Panna montata", "Crema pasticcera", "Cioccolato", "Ricotta"],
    answerIndex: 0
  },
  {
    id: "cucina-10",
    category: "cucina/ricette",
    question: "La coratella co' li carciofi se fa co' le interiora de?",
    choices: ["Agnello", "Vitello", "Maiale", "Coniglio"],
    answerIndex: 0
  },
  {
    id: "cucina-11",
    category: "cucina/ricette",
    question: "Nella trippa alla romana, che aroma nun può manca'?",
    choices: ["Mentuccia", "Basilico", "Origano", "Rosmarino"],
    answerIndex: 0
  },
  {
    id: "cucina-12",
    category: "cucina/ricette",
    question: "Pe' fa' li rigatoni co' la pajata, che salsa se usa?",
    choices: ["Sugo de pomodoro", "Pesto", "Ragù bianco", "Burro e salvia"],
    answerIndex: 0
  },
  {
    id: "cucina-13",
    category: "cucina/ricette",
    question: "Er baccalà alla romana se trova spesso fritto in?",
    choices: ["Pastella", "Pane grattato", "Uova sode", "Farina di mais"],
    answerIndex: 0
  },
  {
    id: "cucina-14",
    category: "cucina/ricette",
    question: "La vignarola romana è un piatto de?",
    choices: ["Verdure de primavera", "Pesce", "Dolci", "Formaggi"],
    answerIndex: 0
  },
  {
    id: "cucina-15",
    category: "cucina/ricette",
    question: "Pe' fa' li tonnarelli cacio e pepe, la pasta è?",
    choices: ["All'uovo", "Di semola con acqua", "Di riso", "Integrale con farro"],
    answerIndex: 1
  },
  {
    id: "cucina-16",
    category: "cucina/ricette",
    question: "Er pollo co' li peperoni è più tipico de?",
    choices: ["Ferragosto romano", "Natale", "Capodanno", "Carnevale"],
    answerIndex: 0
  },
  {
    id: "cucina-17",
    category: "cucina/ricette",
    question: "Le puntarelle alla romana se condiscono co'?",
    choices: ["Aglio e alici", "Burro e salvia", "Soia", "Curry"],
    answerIndex: 0
  },
  {
    id: "cucina-18",
    category: "cucina/ricette",
    question: "Nella coda alla vaccinara, la carne è de?",
    choices: ["Bue", "Maiale", "Coniglio", "Pollo"],
    answerIndex: 0
  },
  {
    id: "cucina-19",
    category: "cucina/ricette",
    question: "Er saltimbocca alla romana se fa co' che carne?",
    choices: ["Vitello", "Pollo", "Manzo", "Agnello"],
    answerIndex: 0
  },
  {
    id: "cucina-20",
    category: "cucina/ricette",
    question: "Nella pasta all'arrabbiata, che ingrediente dà er piccante?",
    choices: ["Peperoncino", "Paprika dolce", "Pepe nero", "Senape"],
    answerIndex: 0
  },
  {
    id: "cucina-21",
    category: "cucina/ricette",
    question: "Er fagioli co' le cotiche so' più tipici de?",
    choices: ["Osterie romane", "Ristoranti giapponesi", "Pizzerie napoletane", "Trattorie milanesi"],
    answerIndex: 0
  },
  {
    id: "cucina-22",
    category: "cucina/ricette",
    question: "La pizza bianca romana se gusta spesso co'?",
    choices: ["Mortadella", "Tonno e cipolla", "Ananas", "Salmone"],
    answerIndex: 0
  },
  {
    id: "cucina-23",
    category: "cucina/ricette",
    question: "Le ciambelline al vino so' dolcetti co' che liquore?",
    choices: ["Vino bianco", "Limoncello", "Amaro", "Marsala"],
    answerIndex: 0
  },
  {
    id: "cucina-24",
    category: "cucina/ricette",
    question: "La torta ricotta e visciole è tipica de?",
    choices: ["Ghetto ebraico romano", "Torino", "Bologna", "Palermo"],
    answerIndex: 0
  },
  {
    id: "cucina-25",
    category: "cucina/ricette",
    question: "Er gelato al gusto pistacchio lo prendi, ma romano dice?",
    choices: ["Pistacchio vero", "Nocciola", "Caffè", "Limone"],
    answerIndex: 0
  },
  {
    id: "dialetto-1",
    category: "dialetto/modi di dire",
    question: "A Roma se dice Aò pe' chiamà qualcuno. Che significa?",
    choices: ["Ehi", "Ciao", "Grazie", "Scusa"],
    answerIndex: 0
  },
  {
    id: "dialetto-2",
    category: "dialetto/modi di dire",
    question: "Se uno dice nun me va, che sta a dì?",
    choices: ["Non mi piace", "Non mi serve", "Non lo so", "Non lo trovo"],
    answerIndex: 0
  },
  {
    id: "dialetto-3",
    category: "dialetto/modi di dire",
    question: "Te la sei cercata in romanesco se dice?",
    choices: ["Te la sei annata a cercà", "Te la sei comprata", "Te la sei trovata", "Te la sei scordata"],
    answerIndex: 0
  },
  {
    id: "dialetto-4",
    category: "dialetto/modi di dire",
    question: "Che vuol dì me stai a pijà in giro?",
    choices: ["Mi stai prendendo in giro", "Mi stai aiutando", "Mi stai aspettando", "Mi stai guardando"],
    answerIndex: 0
  },
  {
    id: "dialetto-5",
    category: "dialetto/modi di dire",
    question: "Annamo è l'equivalente de?",
    choices: ["Andiamo", "Arriviamo", "Mangiamo", "Dormiamo"],
    answerIndex: 0
  },
  {
    id: "dialetto-6",
    category: "dialetto/modi di dire",
    question: "Se dice che te possino quanno?",
    choices: ["Te fai dispetto", "Sei contento", "Dai un regalo", "Sei d'accordo"],
    answerIndex: 0
  },
  {
    id: "dialetto-7",
    category: "dialetto/modi di dire",
    question: "Avoja in romanesco vuol dì?",
    choices: ["Eccome", "Mai", "Poco", "Forse"],
    answerIndex: 0
  },
  {
    id: "dialetto-8",
    category: "dialetto/modi di dire",
    question: "Ce credo se usa pe' di'?",
    choices: ["Ti credo", "Non ci credo", "Non capisco", "Non voglio"],
    answerIndex: 0
  },
  {
    id: "dialetto-9",
    category: "dialetto/modi di dire",
    question: "Nun fa er fregnone significa?",
    choices: ["Non fare lo sciocco", "Non fare il furbo", "Non fare il serio", "Non fare il lento"],
    answerIndex: 0
  },
  {
    id: "dialetto-10",
    category: "dialetto/modi di dire",
    question: "Me sto a scrocchi vuol dì?",
    choices: ["Mi sto approfittando", "Sto lavorando", "Sto correndo", "Sto studiando"],
    answerIndex: 0
  },
  {
    id: "dialetto-11",
    category: "dialetto/modi di dire",
    question: "Se uno è rosicone è?",
    choices: ["Invidioso", "Felice", "Pigro", "Distratto"],
    answerIndex: 0
  },
  {
    id: "dialetto-12",
    category: "dialetto/modi di dire",
    question: "Daje è usato pe'?",
    choices: ["Incitare", "Salutare", "Chiedere scusa", "Dire addio"],
    answerIndex: 0
  },
  {
    id: "dialetto-13",
    category: "dialetto/modi di dire",
    question: "Stai a fa' er tragico significa?",
    choices: ["Esageri", "Sei felice", "Sei educato", "Sei puntuale"],
    answerIndex: 0
  },
  {
    id: "dialetto-14",
    category: "dialetto/modi di dire",
    question: "Me fai casca' le braccia vuol dì?",
    choices: ["Mi scoraggi", "Mi aiuti", "Mi fai ridere", "Mi fai ballare"],
    answerIndex: 0
  },
  {
    id: "dialetto-15",
    category: "dialetto/modi di dire",
    question: "Aho, stai a fa' tardi significa?",
    choices: ["Sei in ritardo", "Sei in anticipo", "Sei confuso", "Sei tranquillo"],
    answerIndex: 0
  },
  {
    id: "dialetto-16",
    category: "dialetto/modi di dire",
    question: "Arimbarzà in romanesco vuol dì?",
    choices: ["Rimbalzare", "Mangiare", "Dormire", "Leggere"],
    answerIndex: 0
  },
  {
    id: "dialetto-17",
    category: "dialetto/modi di dire",
    question: "Nun me fa' er moralista significa?",
    choices: ["Non fare la predica", "Non fare il regalo", "Non fare la spesa", "Non fare la fila"],
    answerIndex: 0
  },
  {
    id: "dialetto-18",
    category: "dialetto/modi di dire",
    question: "Sta a pijià foco vuol dì?",
    choices: ["Sta migliorando", "Sta peggiorando", "Sta finendo", "Sta iniziando"],
    answerIndex: 0
  },
  {
    id: "dialetto-19",
    category: "dialetto/modi di dire",
    question: "M'hai fatto 'n favore in romanesco è?",
    choices: ["Me hai aiutato", "Me hai offeso", "Me hai evitato", "Me hai scordato"],
    answerIndex: 0
  },
  {
    id: "dialetto-20",
    category: "dialetto/modi di dire",
    question: "Se la tira vuol dì che uno?",
    choices: ["Se la dà", "È stanco", "È gentile", "È distratto"],
    answerIndex: 0
  },
  {
    id: "dialetto-21",
    category: "dialetto/modi di dire",
    question: "Nun ce sta significa?",
    choices: ["Non è possibile", "È facilissimo", "È chiaro", "È gratis"],
    answerIndex: 0
  },
  {
    id: "dialetto-22",
    category: "dialetto/modi di dire",
    question: "Me sa in romanesco è?",
    choices: ["Mi sembra", "Mi scordo", "Mi arrabbio", "Mi annoio"],
    answerIndex: 0
  },
  {
    id: "dialetto-23",
    category: "dialetto/modi di dire",
    question: "Te stai a allargà significa?",
    choices: ["Ti stai allargandò troppo", "Ti stai sedendo", "Ti stai svegliando", "Ti stai cambiando"],
    answerIndex: 0
  },
  {
    id: "dialetto-24",
    category: "dialetto/modi di dire",
    question: "Er tempo è 'na zozzeria vuol dì?",
    choices: ["Fa brutto tempo", "Fa caldo", "Fa freddo", "Fa vento"],
    answerIndex: 0
  },
  {
    id: "dialetto-25",
    category: "dialetto/modi di dire",
    question: "Mo' in romanesco significa?",
    choices: ["Adesso", "Domani", "Ieri", "Mai"],
    answerIndex: 0
  },
  {
    id: "cinema-1",
    category: "cinema/attori",
    question: "Er Marchese del Grillo chi l'ha interpretato?",
    choices: ["Alberto Sordi", "Vittorio Gassman", "Marcello Mastroianni", "Ugo Tognazzi"],
    answerIndex: 0
  },
  {
    id: "cinema-2",
    category: "cinema/attori",
    question: "Roma de Fellini è un film de?",
    choices: ["Federico Fellini", "Ettore Scola", "Luigi Comencini", "Pupi Avati"],
    answerIndex: 0
  },
  {
    id: "cinema-3",
    category: "cinema/attori",
    question: "La Dolce Vita è ambientata spesso a?",
    choices: ["Via Veneto", "Via del Corso", "Trastevere", "San Lorenzo"],
    answerIndex: 0
  },
  {
    id: "cinema-4",
    category: "cinema/attori",
    question: "Un americano a Roma ha come protagonista?",
    choices: ["Alberto Sordi", "Totò", "Nino Manfredi", "Carlo Verdone"],
    answerIndex: 0
  },
  {
    id: "cinema-5",
    category: "cinema/attori",
    question: "Il Marchese del Grillo è diretto da?",
    choices: ["Mario Monicelli", "Dino Risi", "Sergio Leone", "Paolo Sorrentino"],
    answerIndex: 0
  },
  {
    id: "cinema-6",
    category: "cinema/attori",
    question: "Bianco, rosso e Verdone è de?",
    choices: ["Carlo Verdone", "Roberto Benigni", "Massimo Troisi", "Paolo Villaggio"],
    answerIndex: 0
  },
  {
    id: "cinema-7",
    category: "cinema/attori",
    question: "Il sorpasso c'ha per protagonista?",
    choices: ["Vittorio Gassman", "Giancarlo Giannini", "Gigi Proietti", "Raoul Bova"],
    answerIndex: 0
  },
  {
    id: "cinema-8",
    category: "cinema/attori",
    question: "Vacanze Romane vede Audrey Hepburn con?",
    choices: ["Gregory Peck", "Marlon Brando", "Clark Gable", "James Dean"],
    answerIndex: 0
  },
  {
    id: "cinema-9",
    category: "cinema/attori",
    question: "C'eravamo tanto amati è diretto da?",
    choices: ["Ettore Scola", "Sergio Leone", "Lina Wertmüller", "Dario Argento"],
    answerIndex: 0
  },
  {
    id: "cinema-10",
    category: "cinema/attori",
    question: "Il tassinaro è un film con?",
    choices: ["Alberto Sordi", "Francesco Totti", "Christian De Sica", "Enrico Brignano"],
    answerIndex: 0
  },
  {
    id: "cinema-11",
    category: "cinema/attori",
    question: "Johnny Stecchino vede protagonista?",
    choices: ["Roberto Benigni", "Carlo Verdone", "Enzo Salvi", "Lillo"],
    answerIndex: 0
  },
  {
    id: "cinema-12",
    category: "cinema/attori",
    question: "Il vigile (1960) ha come protagonista?",
    choices: ["Alberto Sordi", "Gigi Proietti", "Nino Manfredi", "Totò"],
    answerIndex: 0
  },
  {
    id: "cinema-13",
    category: "cinema/attori",
    question: "La grande bellezza è diretto da?",
    choices: ["Paolo Sorrentino", "Gabriele Muccino", "Matteo Garrone", "Ferzan Özpetek"],
    answerIndex: 0
  },
  {
    id: "cinema-14",
    category: "cinema/attori",
    question: "Mamma Roma è un film de?",
    choices: ["Pier Paolo Pasolini", "Bernardo Bertolucci", "Franco Zeffirelli", "Giuseppe Tornatore"],
    answerIndex: 0
  },
  {
    id: "cinema-15",
    category: "cinema/attori",
    question: "Il Postino c'ha come protagonista?",
    choices: ["Massimo Troisi", "Carlo Verdone", "Fabio De Luigi", "Paolo Ruffini"],
    answerIndex: 0
  },
  {
    id: "cinema-16",
    category: "cinema/attori",
    question: "I soliti ignoti è un film con?",
    choices: ["Totò", "Bud Spencer", "Terence Hill", "Massimo Boldi"],
    answerIndex: 0
  },
  {
    id: "cinema-17",
    category: "cinema/attori",
    question: "Il sorpasso è diretto da?",
    choices: ["Dino Risi", "Sergio Leone", "Ettore Scola", "Mario Bava"],
    answerIndex: 0
  },
  {
    id: "cinema-18",
    category: "cinema/attori",
    question: "Romanzo Criminale (film) è diretto da?",
    choices: ["Michele Placido", "Gabriele Salvatores", "Nanni Moretti", "Pietro Germi"],
    answerIndex: 0
  },
  {
    id: "cinema-19",
    category: "cinema/attori",
    question: "Habemus Papam è un film de?",
    choices: ["Nanni Moretti", "Francesco Rosi", "Sergio Corbucci", "Lina Wertmüller"],
    answerIndex: 0
  },
  {
    id: "cinema-20",
    category: "cinema/attori",
    question: "Il Gladiatore ha scene girate a?",
    choices: ["Cinecittà", "Hollywood", "Pinewood", "Burbank"],
    answerIndex: 0
  },
  {
    id: "cinema-21",
    category: "cinema/attori",
    question: "Il professore con Roberto Benigni è ambientato in?",
    choices: ["Roma", "Milano", "Napoli", "Torino"],
    answerIndex: 0
  },
  {
    id: "cinema-22",
    category: "cinema/attori",
    question: "Sapore di mare vede protagonista?",
    choices: ["Jerry Calà", "Diego Abatantuono", "Renato Pozzetto", "Massimo Troisi"],
    answerIndex: 0
  },
  {
    id: "cinema-23",
    category: "cinema/attori",
    question: "La banda degli onesti è un film con?",
    choices: ["Totò", "Alberto Sordi", "Gigi Proietti", "Aldo Fabrizi"],
    answerIndex: 0
  },
  {
    id: "cinema-24",
    category: "cinema/attori",
    question: "Il principe abusivo ha come protagonista?",
    choices: ["Alessandro Siani", "Checco Zalone", "Claudio Bisio", "Fabio Volo"],
    answerIndex: 0
  },
  {
    id: "cinema-25",
    category: "cinema/attori",
    question: "To Rome with Love è diretto da?",
    choices: ["Woody Allen", "Martin Scorsese", "Quentin Tarantino", "Christopher Nolan"],
    answerIndex: 0
  },
  {
    id: "citta-1",
    category: "città/monumenti",
    question: "Er Colosseo è conosciuto pure come?",
    choices: ["Anfiteatro Flavio", "Foro Romano", "Pantheon", "Ara Pacis"],
    answerIndex: 0
  },
  {
    id: "citta-2",
    category: "città/monumenti",
    question: "La Fontana de Trevi sta vicino a?",
    choices: ["Via del Tritone", "Via Appia", "Via Tuscolana", "Via Casilina"],
    answerIndex: 0
  },
  {
    id: "citta-3",
    category: "città/monumenti",
    question: "Er Pantheon fu costruito pe' onora'?",
    choices: ["Tutti gli dei", "Er Senato", "L'imperatore Nerone", "Le vestali"],
    answerIndex: 0
  },
  {
    id: "citta-4",
    category: "città/monumenti",
    question: "Piazza Navona prima era?",
    choices: ["Stadio di Domiziano", "Foro di Augusto", "Mercato di Traiano", "Circo Massimo"],
    answerIndex: 0
  },
  {
    id: "citta-5",
    category: "città/monumenti",
    question: "Castel Sant'Angelo era nato come?",
    choices: ["Mausoleo di Adriano", "Tempio di Giove", "Palazzo reale", "Terme imperiali"],
    answerIndex: 0
  },
  {
    id: "citta-6",
    category: "città/monumenti",
    question: "Er Gianicolo è famoso pe' la vista su?",
    choices: ["Roma centro", "Ostia", "Tivoli", "Viterbo"],
    answerIndex: 0
  },
  {
    id: "citta-7",
    category: "città/monumenti",
    question: "Er Foro Romano era?",
    choices: ["Centro politico e sociale", "Porto commerciale", "Zona militare", "Mercato del pesce"],
    answerIndex: 0
  },
  {
    id: "citta-8",
    category: "città/monumenti",
    question: "Il Circo Massimo serviva per?",
    choices: ["Corse de bighe", "Teatro", "Bagni termali", "Mercato"],
    answerIndex: 0
  },
  {
    id: "citta-9",
    category: "città/monumenti",
    question: "La Bocca della Verità sta vicino a?",
    choices: ["Santa Maria in Cosmedin", "San Pietro", "Santa Maria Maggiore", "San Giovanni"],
    answerIndex: 0
  },
  {
    id: "citta-10",
    category: "città/monumenti",
    question: "Er Vittoriano sta in?",
    choices: ["Piazza Venezia", "Piazza del Popolo", "Piazza di Spagna", "Piazza Navona"],
    answerIndex: 0
  },
  {
    id: "citta-11",
    category: "città/monumenti",
    question: "La scalinata de Trinità dei Monti sta a?",
    choices: ["Piazza di Spagna", "Piazza Barberini", "Campo de' Fiori", "Piazza Farnese"],
    answerIndex: 0
  },
  {
    id: "citta-12",
    category: "città/monumenti",
    question: "Er Cupolone è la cupola de?",
    choices: ["San Pietro", "San Giovanni", "Santa Maria Maggiore", "San Paolo"],
    answerIndex: 0
  },
  {
    id: "citta-13",
    category: "città/monumenti",
    question: "L'Altare della Patria è dedicato a?",
    choices: ["Vittorio Emanuele II", "Garibaldi", "Mazzini", "Cavour"],
    answerIndex: 0
  },
  {
    id: "citta-14",
    category: "città/monumenti",
    question: "Er Foro di Traiano c'ha la famosa?",
    choices: ["Colonna di Traiano", "Colonna Antonina", "Colonna di Marc'Aurelio", "Colonna Doria"],
    answerIndex: 0
  },
  {
    id: "citta-15",
    category: "città/monumenti",
    question: "Er Campidoglio ospita?",
    choices: ["Musei Capitolini", "Musei Vaticani", "MAXXI", "Galleria Borghese"],
    answerIndex: 0
  },
  {
    id: "citta-16",
    category: "città/monumenti",
    question: "Villa Borghese è?",
    choices: ["Un parco storico", "Un ponte", "Un castello", "Un teatro"],
    answerIndex: 0
  },
  {
    id: "citta-17",
    category: "città/monumenti",
    question: "L'Isola Tiberina sta su?",
    choices: ["Tevere", "Aniene", "Tirreno", "Bracciano"],
    answerIndex: 0
  },
  {
    id: "citta-18",
    category: "città/monumenti",
    question: "Er Mausoleo de Augusto se trova a?",
    choices: ["Piazza Augusto Imperatore", "Piazza Navona", "Piazza Venezia", "Piazza del Popolo"],
    answerIndex: 0
  },
  {
    id: "citta-19",
    category: "città/monumenti",
    question: "La Piramide Cestia sta vicino a?",
    choices: ["Porta San Paolo", "Porta Portese", "Porta Pia", "Porta Maggiore"],
    answerIndex: 0
  },
  {
    id: "citta-20",
    category: "città/monumenti",
    question: "Il quartiere EUR è noto pe'?",
    choices: ["Palazzo della Civiltà", "Colosseo", "Pantheon", "Ara Pacis"],
    answerIndex: 0
  },
  {
    id: "citta-21",
    category: "città/monumenti",
    question: "Er Tempio de Ercole Vincitore sta vicino a?",
    choices: ["Bocca della Verità", "Colosseo", "Trastevere", "Testaccio"],
    answerIndex: 0
  },
  {
    id: "citta-22",
    category: "città/monumenti",
    question: "La Basilica de San Giovanni è?",
    choices: ["Cattedrale de Roma", "Cattedrale de Milano", "Duomo de Napoli", "Cattedrale de Torino"],
    answerIndex: 0
  },
  {
    id: "citta-23",
    category: "città/monumenti",
    question: "Er Testaccio era famoso pe'?",
    choices: ["Monte de cocci", "Terme", "Foro", "Stadio"],
    answerIndex: 0
  },
  {
    id: "citta-24",
    category: "città/monumenti",
    question: "La Galleria Borghese ospita opere de?",
    choices: ["Bernini e Caravaggio", "Giotto e Cimabue", "Tiziano e Veronese", "Canova e Hayez"],
    answerIndex: 0
  },
  {
    id: "citta-25",
    category: "città/monumenti",
    question: "Er Ponte Sant'Angelo collega a?",
    choices: ["Castel Sant'Angelo", "Trastevere", "Isola Tiberina", "Piazza del Popolo"],
    answerIndex: 0
  }
];

const MAX_UINT32 = 4294967296;

const createSeededRandom = (seed: number) => {
  let state = seed >>> 0;
  return () => {
    state += 0x6d2b79f5;
    let result = Math.imul(state ^ (state >>> 15), 1 | state);
    result ^= result + Math.imul(result ^ (result >>> 7), 61 | result);
    return ((result ^ (result >>> 14)) >>> 0) / MAX_UINT32;
  };
};

const shuffle = <T,>(items: T[], random: () => number) => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const index = Math.floor(random() * (i + 1));
    [copy[i], copy[index]] = [copy[index], copy[i]];
  }
  return copy;
};

export const selectBalancedQuestions = (
  allQuestions: Question[],
  count: number,
  seed: number
) => {
  const cappedCount = Math.min(Math.max(count, 0), allQuestions.length);
  if (cappedCount === 0) {
    return [];
  }

  const random = createSeededRandom(seed);
  const grouped = allQuestions.reduce<Map<string, Question[]>>((acc, question) => {
    const entries = acc.get(question.category) ?? [];
    entries.push(question);
    acc.set(question.category, entries);
    return acc;
  }, new Map());

  const categories = shuffle([...grouped.keys()], random);
  const baseCount = Math.floor(cappedCount / categories.length);
  const desiredByCategory = new Map<string, number>();
  let assigned = 0;

  for (const category of categories) {
    const pool = grouped.get(category) ?? [];
    const desired = Math.min(baseCount, pool.length);
    desiredByCategory.set(category, desired);
    assigned += desired;
  }

  let remaining = cappedCount - assigned;
  while (remaining > 0) {
    for (const category of categories) {
      if (remaining === 0) {
        break;
      }
      const pool = grouped.get(category) ?? [];
      const current = desiredByCategory.get(category) ?? 0;
      if (current < pool.length) {
        desiredByCategory.set(category, current + 1);
        remaining -= 1;
      }
    }
  }

  const selected: Question[] = [];
  for (const category of categories) {
    const pool = grouped.get(category) ?? [];
    const desired = desiredByCategory.get(category) ?? 0;
    if (desired > 0) {
      selected.push(...shuffle(pool, random).slice(0, desired));
    }
  }

  return selected;
};
