// Dati di default del menu WOOD Pescara.
// Vengono usati al primo caricamento; dopo la prima modifica dall'area admin
// i dati reali vivono in localStorage sotto la chiave WOOD_MENU_DATA.

const WOOD_DEFAULT_MENU = [
  {
    id: "antipasti",
    title: "Antipasti & Fritti",
    items: [
      { name: "Tagliere WOOD", price: "22 €", desc: "Mortadella, crudo di Parma, lonza, bresaola, ventricina, salame, pecorino, bocconcino di provola affumicata. Per due persone.", tag: "Da condividere" },
      { name: "Lollipop di Pollo", price: "9 €", desc: "Alette di pollo croccanti, salsa a scelta.", tag: "" },
      { name: "Crocchette di Patata Viola", price: "7 €", desc: "Cuore filante, panatura croccante.", tag: "Vegetariano" },
      { name: "Sfere Philadelphia & Mortadella", price: "10 €", desc: "In croccante di cornflakes, su besciamella di pistacchio e germogli.", tag: "" },
      { name: "Anelli di Cipolla", price: "6 €", desc: "Pastella croccante, fritti al momento.", tag: "Vegano" },
      { name: "Bruschette Miste", price: "8 €", desc: "Pomodorino fresco, basilico, olio EVO su pane casereccio.", tag: "" }
    ]
  },
  {
    id: "pizze-classiche",
    title: "Pizze Classiche",
    items: [
      { name: "Marinara", price: "6 €", desc: "Pomodoro, aglio, origano, olio EVO.", tag: "Vegano" },
      { name: "Margherita", price: "7 €", desc: "Pomodoro, mozzarella fior di latte, basilico fresco.", tag: "Vegetariano" },
      { name: "Margherita di Bufala", price: "10 €", desc: "Pomodoro, mozzarella di bufala DOP, basilico, olio EVO a crudo.", tag: "Consigliata" },
      { name: "Ventricina", price: "11 €", desc: "Pomodoro, mozzarella fior di latte, ventricina abruzzese, olio EVO.", tag: "" },
      { name: "Diavola", price: "10 €", desc: "Pomodoro, mozzarella, salame piccante.", tag: "" },
      { name: "Capricciosa", price: "11 €", desc: "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi, olive.", tag: "" }
    ]
  },
  {
    id: "pizze-gourmet",
    title: "Pizze Gourmet WOOD",
    items: [
      { name: "Tartufo & Porcini", price: "16 €", desc: "Base crema di tartufo, provola affumicata, funghi porcini, champignon, pioppini, olio EVO e burratina di tartufo al centro.", tag: "Signature" },
      { name: "Bufala & Ventricina Piccante", price: "14 €", desc: "Mozzarella di bufala DOP, pomodoro, ventricina, jalapenos ripieni di formaggio e cipolla caramellata.", tag: "Piccante" },
      { name: "Zucca & Salsiccia", price: "14 €", desc: "Crema di zucca, mozzarella di bufala DOP, salsiccia di fegato, cicorietta selvatica, peperone dolce di Altino, scaglie di grana e olio EVO.", tag: "Stagionale" },
      { name: "Tartufo, Speck & Noci", price: "15 €", desc: "Base crema di tartufo, provola affumicata, funghi porcini, salsiccia, olio EVO. In uscita speck, ricotta e noci.", tag: "" },
      { name: "Pulled Pork", price: "14 €", desc: "Mozzarella fior di latte, patate, pulled pork affumicato, salsa barbecue.", tag: "" },
      { name: "Pistacchio & Ricotta", price: "14 €", desc: "Crema di pistacchio, ricotta, mortadella, granella di pistacchio.", tag: "Signature" },
      { name: "Pizza Fritta WOOD", price: "13 €", desc: "Impasto fritto a regola d'arte, ricotta, provola, guanciale croccante, pepe.", tag: "" }
    ]
  },
  {
    id: "arrosticini",
    title: "Arrosticini & Griglia",
    items: [
      { name: "Arrosticini fatti a mano (10 pz)", price: "12 €", desc: "Carne di pecora tagliata e infilzata a mano, brace viva. La specialita della casa.", tag: "Consigliati" },
      { name: "Arrosticini a macchina (10 pz)", price: "9 €", desc: "Lavorazione classica, sapore deciso.", tag: "" },
      { name: "Tagliata di Manzo", price: "18 €", desc: "Rucola, scaglie di grana, riduzione di aceto balsamico.", tag: "" },
      { name: "Salsicce alla Brace", price: "9 €", desc: "Salsiccia di suino, cottura lenta su brace di legna.", tag: "" },
      { name: "Hamburger WOOD", price: "13 €", desc: "200g di manzo, cheddar, bacon croccante, salsa della casa, patatine.", tag: "" }
    ]
  },
  {
    id: "dolci",
    title: "Dolci",
    items: [
      { name: "Tiramisu al Pistacchio", price: "7 €", desc: "Crema al mascarpone, crumble al pistacchio. Il piu richiesto.", tag: "Consigliato" },
      { name: "Cheesecake della Casa", price: "7 €", desc: "Base biscotto, frutti di bosco freschi.", tag: "" },
      { name: "Pizza Fritta Dolce", price: "8 €", desc: "Nutella, granella di nocciola, zucchero a velo.", tag: "" }
    ]
  },
  {
    id: "bevande",
    title: "Bevande",
    items: [
      { name: "Birra alla Spina", price: "5-7 €", desc: "Selezione artigianale, piccola / media / grande.", tag: "" },
      { name: "Vino della Casa", price: "5 € / 18 €", desc: "Calice o bottiglia, selezione abruzzese.", tag: "" },
      { name: "Cocktail Margarita", price: "8 €", desc: "Tequila, triple sec, lime fresco.", tag: "" },
      { name: "Acqua / Soft Drink", price: "3 €", desc: "Naturale o frizzante, bibite in lattina.", tag: "" }
    ]
  }
];

const WOOD_MENU_KEY = "WOOD_MENU_DATA";

function woodGetMenu() {
  try {
    const raw = localStorage.getItem(WOOD_MENU_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn("Impossibile leggere il menu salvato, uso i dati di default.", e);
  }
  return JSON.parse(JSON.stringify(WOOD_DEFAULT_MENU));
}

function woodSaveMenu(data) {
  localStorage.setItem(WOOD_MENU_KEY, JSON.stringify(data));
}
