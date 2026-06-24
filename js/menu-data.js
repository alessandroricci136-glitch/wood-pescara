// menu-data.js — legge/scrive su Firestore, fallback su dati default

import { db } from "./firebase-config.js";
import {
  collection, doc, getDoc, setDoc, getDocs, writeBatch
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ─── Dati default (usati solo al primo setup o se Firestore non risponde) ───
export const WOOD_DEFAULT_MENU = [
  {
    id: "antipasti",
    title: "Antipasti & Fritti",
    items: [
      { name: "Tagliere WOOD", price: "22 euro", desc: "Mortadella, crudo di Parma, lonza, bresaola, ventricina, salame, pecorino, bocconcino di provola affumicata. Per due persone.", tag: "Da condividere" },
      { name: "Lollipop di Pollo", price: "9 euro", desc: "Alette di pollo croccanti, salsa a scelta.", tag: "" },
      { name: "Crocchette di Patata Viola", price: "7 euro", desc: "Cuore filante, panatura croccante.", tag: "Vegetariano" },
      { name: "Sfere Philadelphia e Mortadella", price: "10 euro", desc: "In croccante di cornflakes, su besciamella di pistacchio e germogli.", tag: "" },
      { name: "Anelli di Cipolla", price: "6 euro", desc: "Pastella croccante, fritti al momento.", tag: "Vegano" },
      { name: "Bruschette Miste", price: "8 euro", desc: "Pomodorino fresco, basilico, olio EVO su pane casereccio.", tag: "" }
    ]
  },
  {
    id: "pizze-classiche",
    title: "Pizze Classiche",
    items: [
      { name: "Marinara", price: "6 euro", desc: "Pomodoro, aglio, origano, olio EVO.", tag: "Vegano" },
      { name: "Margherita", price: "7 euro", desc: "Pomodoro, mozzarella fior di latte, basilico fresco.", tag: "Vegetariano" },
      { name: "Margherita di Bufala", price: "10 euro", desc: "Pomodoro, mozzarella di bufala DOP, basilico, olio EVO a crudo.", tag: "Consigliata" },
      { name: "Ventricina", price: "11 euro", desc: "Pomodoro, mozzarella fior di latte, ventricina abruzzese, olio EVO.", tag: "" },
      { name: "Diavola", price: "10 euro", desc: "Pomodoro, mozzarella, salame piccante.", tag: "" },
      { name: "Capricciosa", price: "11 euro", desc: "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi, olive.", tag: "" }
    ]
  },
  {
    id: "pizze-gourmet",
    title: "Pizze Gourmet WOOD",
    items: [
      { name: "Tartufo e Porcini", price: "16 euro", desc: "Base crema di tartufo, provola affumicata, funghi porcini, champignon, pioppini, olio EVO e burratina di tartufo al centro.", tag: "Signature" },
      { name: "Bufala e Ventricina Piccante", price: "14 euro", desc: "Mozzarella di bufala DOP, pomodoro, ventricina, jalapenos ripieni di formaggio e cipolla caramellata.", tag: "Piccante" },
      { name: "Zucca e Salsiccia", price: "14 euro", desc: "Crema di zucca, mozzarella di bufala DOP, salsiccia di fegato, cicorietta selvatica, peperone dolce di Altino, scaglie di grana e olio EVO.", tag: "Stagionale" },
      { name: "Tartufo, Speck e Noci", price: "15 euro", desc: "Base crema di tartufo, provola affumicata, funghi porcini, salsiccia, olio EVO. In uscita speck, ricotta e noci.", tag: "" },
      { name: "Pulled Pork", price: "14 euro", desc: "Mozzarella fior di latte, patate, pulled pork affumicato, salsa barbecue.", tag: "" },
      { name: "Pistacchio e Ricotta", price: "14 euro", desc: "Crema di pistacchio, ricotta, mortadella, granella di pistacchio.", tag: "Signature" },
      { name: "Pizza Fritta WOOD", price: "13 euro", desc: "Impasto fritto a regola d'arte, ricotta, provola, guanciale croccante, pepe.", tag: "" }
    ]
  },
  {
    id: "arrosticini",
    title: "Arrosticini & Griglia",
    items: [
      { name: "Arrosticini fatti a mano (10 pz)", price: "12 euro", desc: "Carne di pecora tagliata e infilzata a mano, brace viva. La specialita della casa.", tag: "Consigliati" },
      { name: "Arrosticini a macchina (10 pz)", price: "9 euro", desc: "Lavorazione classica, sapore deciso.", tag: "" },
      { name: "Tagliata di Manzo", price: "18 euro", desc: "Rucola, scaglie di grana, riduzione di aceto balsamico.", tag: "" },
      { name: "Salsicce alla Brace", price: "9 euro", desc: "Salsiccia di suino, cottura lenta su brace di legna.", tag: "" },
      { name: "Hamburger WOOD", price: "13 euro", desc: "200g di manzo, cheddar, bacon croccante, salsa della casa, patatine.", tag: "" }
    ]
  },
  {
    id: "dolci",
    title: "Dolci",
    items: [
      { name: "Tiramisu al Pistacchio", price: "7 euro", desc: "Crema al mascarpone, crumble al pistacchio. Il piu richiesto.", tag: "Consigliato" },
      { name: "Cheesecake della Casa", price: "7 euro", desc: "Base biscotto, frutti di bosco freschi.", tag: "" },
      { name: "Pizza Fritta Dolce", price: "8 euro", desc: "Nutella, granella di nocciola, zucchero a velo.", tag: "" }
    ]
  },
  {
    id: "bevande",
    title: "Bevande",
    items: [
      { name: "Birra alla Spina", price: "5-7 euro", desc: "Selezione artigianale, piccola / media / grande.", tag: "" },
      { name: "Vino della Casa", price: "5 / 18 euro", desc: "Calice o bottiglia, selezione abruzzese.", tag: "" },
      { name: "Cocktail Margarita", price: "8 euro", desc: "Tequila, triple sec, lime fresco.", tag: "" },
      { name: "Acqua / Soft Drink", price: "3 euro", desc: "Naturale o frizzante, bibite in lattina.", tag: "" }
    ]
  }
];

// ─── Leggi menu da Firestore ───
export async function woodGetMenu() {
  try {
    const snap = await getDoc(doc(db, "config", "menu_order"));
    if (!snap.exists()) return WOOD_DEFAULT_MENU;

    const order = snap.data().order || [];
    const menu = [];

    for (const catId of order) {
      const catSnap = await getDoc(doc(db, "menu", catId));
      if (catSnap.exists()) {
        menu.push({ id: catId, ...catSnap.data() });
      }
    }
    return menu.length > 0 ? menu : WOOD_DEFAULT_MENU;
  } catch (e) {
    console.warn("Firestore non raggiungibile, uso dati default:", e);
    return WOOD_DEFAULT_MENU;
  }
}

// ─── Salva menu su Firestore ───
export async function woodSaveMenu(menuData) {
  const batch = writeBatch(db);

  // Salva ogni categoria come documento separato
  for (const cat of menuData) {
    const ref = doc(db, "menu", cat.id);
    batch.set(ref, { title: cat.title, items: cat.items });
  }

  // Salva l'ordine delle categorie
  const orderRef = doc(db, "config", "menu_order");
  batch.set(orderRef, { order: menuData.map(c => c.id) });

  await batch.commit();
}

// ─── Carica menu iniziale (usa solo una volta dall'admin) ───
export async function woodSetupInitialMenu() {
  await woodSaveMenu(WOOD_DEFAULT_MENU);
}
