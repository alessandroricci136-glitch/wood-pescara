// Menu default condiviso da sito e admin.

const cat = (id, title, title_en, items) => ({ id, title, title_en, items });
const item = (name, price, desc = "", name_en = name, desc_en = desc, tag = "") => ({
  name,
  price,
  desc,
  name_en,
  desc_en,
  tag
});

const pizzaExtras = [
  item("Bocconcino di Bufala / Bocconcino di Provola Affumicata", "2 €", "", "Buffalo Mozzarella Bite / Smoked Provola Bite", ""),
  item("Cornicione Ricotta e Tartufo / Cornicione Ricotta", "3 €", "", "Ricotta and Truffle Crust / Ricotta Crust", ""),
  item("Cornicione Ricotta e Crema di Pistacchio", "4 €", "", "Ricotta and Pistachio Cream Crust", ""),
  item("Burratina al centro", "4 €", "", "Burratina in the center", "")
];

export const WOOD_DEFAULT_MENU = [
  cat("antipasti-stuzzicherie", "Antipasti & Stuzzicherie", "Starters & Fried Bites", [
    item("Contorno di Verdure", "5 €", "Zucchine, peperoni, melanzane.", "Vegetable Side Dish", "Zucchini, peppers, eggplant.", "Antipasti"),
    item("Bruschette Miste", "7 €", "1 salsiccia di carne, 1 prosciutto crudo di Parma, 1 pate di olive, 1 pomodoro.", "Mixed Bruschette", "1 sausage bruschetta, 1 Parma ham, 1 olive pate, 1 tomato.", "Antipasti"),
    item("Chicken Bao (2 pezzi)", "8 €", "Pane bao, pulled chicken, salsa Caesar, scaglie di grana e insalata.", "Chicken Bao (2 pcs)", "Bao buns, pulled chicken, Caesar sauce, Grana cheese flakes and salad.", "Antipasti"),
    item("Tortino di Verdure Vegano", "9 €", "Accompagnato da patatine fritte dolci.", "Vegan Vegetable Pie", "Served with sweet potato fries.", "Vegano"),
    item("Tacos all'Italiana (2 pezzi)", "9 €", "Cialda di pecorino, prosciutto crudo, peperoni in agrodolce, stracciata di Bufala DOP, crema di rucola.", "Italian-Style Tacos (2 pcs)", "Pecorino crisp, cured ham, sweet-and-sour peppers, DOP buffalo stracciata, arugula cream.", "Antipasti"),
    item("Tartare Mix (4 pezzi)", "14 €", "1 tartare di manzetta abruzzese condita con sale, pepe e senape in grani; 1 tartare con cipolla caramellata e pistacchio; 1 tartare con stracciatella di Bufala DOP e pomodorini secchi; 1 tartare con ricotta di Bufala DOP e miele al tartufo.", "Tartare Mix (4 pcs)", "1 Abruzzo beef tartare with salt, pepper and whole-grain mustard; 1 tartare with caramelized onion and pistachio; 1 tartare with DOP buffalo stracciatella and sun-dried tomatoes; 1 tartare with DOP buffalo ricotta and truffle honey.", "Antipasti"),
    item("Crudo di Parma e Burrata (per 2 persone)", "16 €", "", "Parma Ham and Burrata (for 2 people)", "", "Da condividere"),
    item("Mini Burger (4 pezzi)", "15 €", "2 hamburger di Black Angus abruzzese con guanciale croccante e salsa burger; 2 hamburger di salsiccia di suino, peperoni arrosto, cipolla caramellata, ketchup, maionese.", "Mini Burgers (4 pcs)", "2 Abruzzo Black Angus burgers with crispy guanciale and burger sauce; 2 pork sausage burgers with roasted peppers, caramelized onion, ketchup and mayonnaise.", "Antipasti"),
    item("Tagliere Salumi e Formaggi (per 2 persone)", "18 €", "Mortadella, crudo di Parma, lonza, bresaola, ventricina, salame, pecorino, bocconcini di provola affumicata, formaggio di capra e composta di peperoni.", "Cured Meats and Cheese Board (for 2 people)", "Mortadella, Parma ham, lonza, bresaola, ventricina, salami, pecorino, smoked provola bites, goat cheese and pepper compote.", "Da condividere"),
    item("Piatto di Patanegra (per 2 persone)", "24 €", "Prosciutto Patanegra con bocconcini di bufala.", "Patanegra Plate (for 2 people)", "Patanegra ham with buffalo mozzarella bites.", "Da condividere"),
    item("Anellini di Cipolla", "4,5 €", "", "Onion Rings", "", "Stuzzicherie"),
    item("Olive all'Ascolana (6 pezzi)", "5 €", "", "Ascolana Olives (6 pcs)", "", "Stuzzicherie"),
    item("Crocchette di Patate (2 pezzi)", "4,5 €", "Prosciutto cotto, mozzarella.", "Potato Croquettes (2 pcs)", "Cooked ham, mozzarella.", "Stuzzicherie"),
    item("Pepite di Cheddar e Jalapenos (5 pezzi)", "5 €", "", "Cheddar and Jalapeno Nuggets (5 pcs)", "", "Stuzzicherie"),
    item("Red Hot Jalapenos (4 pezzi)", "5,5 €", "Piccante.", "Red Hot Jalapenos (4 pcs)", "Spicy.", "Piccante"),
    item("Fritto Misto (per 2 persone)", "12 €", "Olive all'ascolana, crocchette di patate, anelli di cipolla, red hot jalapenos, verdure in pastella, cheese bites.", "Mixed Fried Platter (for 2 people)", "Ascolana olives, potato croquettes, onion rings, red hot jalapenos, battered vegetables, cheese bites.", "Da condividere"),
    item("Frittatina di Pasta alla Gricia", "4,5 €", "Crema cacio e pepe, bucatini, guanciale.", "Gricia Pasta Frittatina", "Cacio e pepe cream, bucatini, guanciale.", "Special Fried"),
    item("Sfere di Riso Soffiato alla Carbonara (2 pezzi)", "7 €", "Riso, uova, guanciale, pecorino, con panatura di riso soffiato.", "Carbonara Puffed Rice Spheres (2 pcs)", "Rice, eggs, guanciale, pecorino, coated in puffed rice.", "Special Fried"),
    item("Mini Magnum (4 pezzi)", "9 €", "2 mozzarella, patate e mortadella con crema di pistacchio e panatura al corn flakes; 2 mozzarella, patate, salsiccia e cheddar con panatura di riso soffiato.", "Mini Magnum (4 pcs)", "2 with mozzarella, potatoes, mortadella, pistachio cream and corn flakes coating; 2 with mozzarella, potatoes, sausage, cheddar and puffed rice coating.", "Special Fried"),
    item("Polpette Pulled Pork (4 pezzi)", "9 €", "Polpette di pulled pork ripiene di salsa BBQ e formaggio filante, con panatura di riso soffiato, accompagnate da cipolla caramellata.", "Pulled Pork Meatballs (4 pcs)", "Pulled pork meatballs filled with BBQ sauce and melted cheese, puffed rice coating, served with caramelized onion.", "Special Fried"),
    item("Crocchette Patate Ripiene (2 pezzi)", "9 €", "1 salsiccia, cheddar e pancetta; 1 pulled pork e salsa BBQ.", "Stuffed Potato Croquettes (2 pcs)", "1 with sausage, cheddar and pancetta; 1 with pulled pork and BBQ sauce.", "Special Fried"),
    item("Donuts (2 pezzi)", "8 €", "Ciambelle salate ripiene di prosciutto cotto, cheddar, formaggio filante, con panatura di riso soffiato.", "Savory Donuts (2 pcs)", "Savory donuts filled with cooked ham, cheddar and melted cheese, coated in puffed rice.", "Special Fried"),
    item("Pizza Fritta Pomodoro (2 pezzi)", "5 €", "Salsa di pomodoro, grana, olio EVO, basilico.", "Fried Pizza with Tomato (2 pcs)", "Tomato sauce, Grana cheese, EVO oil, basil.", "Pizze Fritte"),
    item("Pizza Fritta Alici (2 pezzi)", "6 €", "Alici del Cantabrico, stracciatella di bufala, pomodori secchi, origano.", "Fried Pizza with Anchovies (2 pcs)", "Cantabrian anchovies, buffalo stracciatella, sun-dried tomatoes, oregano.", "Pizze Fritte"),
    item("Pizza Fritta Mortadella (2 pezzi)", "6 €", "Mortadella, stracciatella di bufala, crema di pistacchio.", "Fried Pizza with Mortadella (2 pcs)", "Mortadella, buffalo stracciatella, pistachio cream.", "Pizze Fritte"),
    item("Pizza Fritta Lardo (2 pezzi)", "6 €", "Lardo di maialino nero di Gregorio, miele, noci.", "Fried Pizza with Lardo (2 pcs)", "Black pig lardo from Di Gregorio, honey, walnuts.", "Pizze Fritte"),
    item("Pizza Fritta Patanegra (2 pezzi)", "8 €", "Prosciutto Patanegra, formaggio di capra.", "Fried Pizza with Patanegra (2 pcs)", "Patanegra ham, goat cheese.", "Pizze Fritte"),
    item("Pizza Fritta Mix (4 pezzi)", "11 €", "1 pomodoro, 1 alici, 1 mortadella, 1 lardo.", "Fried Pizza Mix (4 pcs)", "1 tomato, 1 anchovies, 1 mortadella, 1 lardo.", "Pizze Fritte"),
    item("Patate Fritte", "4 €", "", "French Fries", "", "Patate Fritte"),
    item("Patate Campagnole", "4,5 €", "Pepe nero e cipolla.", "Country Fries", "Black pepper and onion.", "Patate Fritte"),
    item("Patate alla Paprika", "4,5 €", "", "Paprika Fries", "", "Patate Fritte"),
    item("Patate Dolci", "4,5 €", "", "Sweet Potato Fries", "", "Patate Fritte")
  ]),

  cat("primi-secondi", "Primi & Secondi", "Pasta & Main Courses", [
    item("Pasta al Sugo Semplice", "9 €", "", "Pasta with Tomato Sauce", ""),
    item("Tagliolino con Ragu alle Tre Carni", "12 €", "", "Tagliolino with Three-Meat Ragu", ""),
    item("Cacio e Pepe", "12 €", "", "Cacio e Pepe", ""),
    item("Arrosticini Fatti a Mano", "1,5 €", "", "Handmade Arrosticini", ""),
    item("Arrosticini a Macchinetta", "1,2 €", "", "Machine-Cut Arrosticini", ""),
    item("Arrosticini di Fegato", "1,3 €", "", "Liver Arrosticini", ""),
    item("Arrosto Misto", "15 €", "Bistecca di collo di maiale, pancetta, salsiccia di carne, spiedini di pollo.", "Mixed Grill", "Pork neck steak, pancetta, pork sausage, chicken skewers."),
    item("Tagliata Black Angus USA (350 gr. circa)", "24 €", "Pregiata carne americana di razza Angus, celebre per il sapore deciso e la consistenza uniforme.", "USA Black Angus Sliced Steak (about 350 g)", "Premium American Angus beef, known for its bold flavor and even texture."),
    item("Picanha (350 gr. circa)", "24 €", "Taglio brasiliano pregiato, tenero e succoso, con sapore ricco e caratteristico e il suo tipico strato di grasso, perfetto alla griglia.", "Picanha (about 350 g)", "Premium Brazilian cut, tender and juicy, with rich flavor and its typical fat cap, perfect on the grill.")
  ]),

  cat("rosse", "Le Rosse", "Red Pizzas", [
    item("Marinara", "6,5 €", "Pomodoro, aglio, origano, in uscita olio EVO, basilico.", "Marinara", "Tomato, garlic, oregano, finished with EVO oil and basil.", "Vegano"),
    item("Margherita", "7 €", "Pomodoro, mozzarella fior di latte, in uscita olio EVO, basilico.", "Margherita", "Tomato, fior di latte mozzarella, finished with EVO oil and basil.", "Vegetariano"),
    item("Napoli", "9 €", "Pomodoro, mozzarella fior di latte, alici del Cantabrico, capperi, in uscita olio EVO, basilico.", "Napoli", "Tomato, fior di latte mozzarella, Cantabrian anchovies, capers, finished with EVO oil and basil."),
    item("Margherita di Bufala", "9,5 €", "Pomodoro, mozzarella di Bufala DOP, in uscita olio EVO, basilico.", "Buffalo Margherita", "Tomato, DOP buffalo mozzarella, finished with EVO oil and basil.", "Vegetariano"),
    item("Provola e Pepe", "9,5 €", "Provola affumicata, pepe, pomodoro, olio EVO e basilico.", "Smoked Provola and Pepper", "Smoked provola, pepper, tomato, EVO oil and basil."),
    item("Tonno e Cipolla", "9,5 €", "Pomodoro, mozzarella fior di latte, tonno, cipolla, in uscita olio EVO, basilico.", "Tuna and Onion", "Tomato, fior di latte mozzarella, tuna, onion, finished with EVO oil and basil."),
    item("Capricciosa", "10 €", "Pomodoro, mozzarella fior di latte, carciofi, funghi champignon, prosciutto cotto, olive taggiasche, in uscita olio EVO, basilico.", "Capricciosa", "Tomato, fior di latte mozzarella, artichokes, champignon mushrooms, cooked ham, Taggiasca olives, finished with EVO oil and basil."),
    item("Diavola", "10 €", "Pomodoro, mozzarella fior di latte, ventricina, in uscita olio EVO, basilico.", "Diavola", "Tomato, fior di latte mozzarella, ventricina, finished with EVO oil and basil.", "Piccante"),
    item("Quattro Stagioni", "10 €", "Pomodoro, mozzarella fior di latte, carciofi, funghi champignon, prosciutto cotto, olive taggiasche, in uscita olio EVO, basilico.", "Four Seasons", "Tomato, fior di latte mozzarella, artichokes, champignon mushrooms, cooked ham, Taggiasca olives, finished with EVO oil and basil.")
  ]),

  cat("bianche", "Le Bianche", "White Pizzas", [
    item("Paperino", "9 €", "Mozzarella fior di latte, wurstel, patatine fritte.", "Paperino", "Fior di latte mozzarella, wurstel, French fries."),
    item("Mimosa", "9 €", "Mozzarella fior di latte, prosciutto cotto, mais, in uscita olio EVO, basilico.", "Mimosa", "Fior di latte mozzarella, cooked ham, corn, finished with EVO oil and basil."),
    item("Vegetariana", "9,5 €", "Mozzarella fior di latte, melanzane, zucchine, peperoni, crema di zucchine, cicoria, in uscita olio EVO, basilico.", "Vegetarian", "Fior di latte mozzarella, eggplant, zucchini, peppers, zucchini cream, chicory, finished with EVO oil and basil.", "Vegetariano"),
    item("Quattro Formaggi", "10 €", "Mozzarella fior di latte, gorgonzola, provola affumicata, taleggio, in uscita olio EVO, basilico.", "Four Cheese", "Fior di latte mozzarella, gorgonzola, smoked provola, taleggio, finished with EVO oil and basil.", "Vegetariano"),
    item("Cotto e Funghi", "10 €", "Prosciutto cotto, funghi champignon, mozzarella fior di latte, olio EVO, basilico.", "Ham and Mushrooms", "Cooked ham, champignon mushrooms, fior di latte mozzarella, EVO oil, basil."),
    item("Patate e Salsiccia", "10 €", "Mozzarella fior di latte, patate, salsiccia, in uscita olio EVO, basilico.", "Potatoes and Sausage", "Fior di latte mozzarella, potatoes, sausage, finished with EVO oil and basil."),
    item("Contadina", "11 €", "Provola affumicata, patate al forno, salsiccia, cipolla, peperoni, in uscita olio EVO, basilico.", "Country-Style", "Smoked provola, roasted potatoes, sausage, onion, peppers, finished with EVO oil and basil."),
    item("Salsiccia e Friarielli", "11 €", "Provola affumicata, crema di friarielli, salsiccia, peperoni rossi, in uscita olio EVO, basilico.", "Sausage and Friarielli", "Smoked provola, friarielli cream, sausage, red peppers, finished with EVO oil and basil."),
    item("Tricolore", "13 €", "Mozzarella di Bufala DOP, pomodorini confit, in uscita olio EVO, basilico, burratina al centro, rucola, crudo di Parma e scaglie di grana.", "Tricolore", "DOP buffalo mozzarella, confit cherry tomatoes, finished with EVO oil and basil, burratina in the center, arugula, Parma ham and Grana flakes.")
  ]),

  cat("scrocchiarelle", "Scrocchiarelle", "Crispy Scrocchiarelle", [
    item("Margherita Crock", "7,5 €", "Mozzarella fior di latte, pomodoro, olio all'aglio, origano, in uscita olio EVO, basilico.", "Crispy Margherita", "Fior di latte mozzarella, tomato, garlic oil, oregano, finished with EVO oil and basil.", "Novita"),
    item("Pizza del Forno", "9 €", "Crema di pomodorini confit, olio all'aglio, origano e alici, in uscita olio EVO, basilico.", "Oven Pizza", "Confit cherry tomato cream, garlic oil, oregano and anchovies, finished with EVO oil and basil.", "Novita"),
    item("Rubia & Tartufo", "18 €", "Carpaccio di Rubia Gallega, mozzarella fior di latte, maionese al tartufo, tartufo fresco, in uscita olio EVO, basilico.", "Rubia & Truffle", "Rubia Gallega carpaccio, fior di latte mozzarella, truffle mayonnaise, fresh truffle, finished with EVO oil and basil."),
    item("Patanegra", "15 €", "Lardo di Patanegra, salsa di pere e zenzero in agrodolce, pomodorini confit, scaglie di pecorino, mozzarella fior di latte.", "Patanegra", "Patanegra lardo, sweet-and-sour pear and ginger sauce, confit cherry tomatoes, pecorino flakes, fior di latte mozzarella."),
    item("Angus", "16 €", "Tartare di Angus, mozzarella fior di latte, tartufo fresco, maionese al tartufo, funghi porcini.", "Angus", "Angus tartare, fior di latte mozzarella, fresh truffle, truffle mayonnaise, porcini mushrooms."),
    item("Tuna Tartare", "18 €", "Tartare di tonno, pomodorini confit, stracciatella di Bufala DOP, erba cipollina, maionese al lime, mozzarella fior di latte.", "Tuna Tartare", "Tuna tartare, confit cherry tomatoes, DOP buffalo stracciatella, chives, lime mayonnaise, fior di latte mozzarella."),
    item("Jamon", "18 €", "Prosciutto Patanegra, scaglie di pecorino, pomodorini confit, crema di formaggio caprino e mozzarella fior di latte.", "Jamon", "Patanegra ham, pecorino flakes, confit cherry tomatoes, goat cheese cream and fior di latte mozzarella."),
    item("Lardo e Viola", "19 €", "Tartare di gambero viola, polvere di olive, cipolla caramellata, lardo di Patanegra, mozzarella fior di latte.", "Lardo and Purple Prawn", "Purple prawn tartare, olive powder, caramelized onion, Patanegra lardo, fior di latte mozzarella.")
  ]),

  cat("speciali", "Le Speciali", "Special Pizzas", [
    item("La Fata", "11 €", "Mozzarella di Bufala DOP, crema di zucchine, pacchetelle gialle, in uscita olio EVO, basilico, ciuffetti di ricotta, cialda di grana.", "La Fata", "DOP buffalo mozzarella, zucchini cream, yellow pacchetelle tomatoes, finished with EVO oil and basil, ricotta tufts, Grana crisp."),
    item("Margherita Suprema", "12 €", "Pomodoro, mozzarella di Bufala DOP, cornicione di ricotta di Bufala DOP, in uscita olio EVO, basilico, bocconcino di Bufala DOP al centro.", "Supreme Margherita", "Tomato, DOP buffalo mozzarella, DOP buffalo ricotta crust, finished with EVO oil and basil, DOP buffalo bite in the center."),
    item("Napoli a Wood", "12 €", "Mozzarella di Bufala DOP, alici del Cantabrico, olive taggiasche, passata di pomodoro giallo, origano, in uscita gocce di basilico, olio EVO, basilico.", "Napoli at Wood", "DOP buffalo mozzarella, Cantabrian anchovies, Taggiasca olives, yellow tomato sauce, oregano, finished with basil drops, EVO oil and basil."),
    item("Gricia", "13 €", "Crema di cacio e pepe, mozzarella fior di latte, guanciale, cialde di pecorino, miele, in uscita olio EVO, basilico.", "Gricia", "Cacio e pepe cream, fior di latte mozzarella, guanciale, pecorino crisps, honey, finished with EVO oil and basil."),
    item("Caronte", "13 €", "Pomodoro, mozzarella di Bufala DOP, ventricina, cipolla caramellata, in uscita jalapenos ripieni di formaggio, olio EVO, basilico.", "Caronte", "Tomato, DOP buffalo mozzarella, ventricina, caramelized onion, finished with cheese-filled jalapenos, EVO oil and basil.", "Piccante"),
    item("Fior di Viola", "13 €", "Mozzarella fior di latte, cavolfiore viola, salsiccia, ferfellone, crema di zucca, olio EVO, basilico.", "Fior di Viola", "Fior di latte mozzarella, purple cauliflower, sausage, ferfellone pepper, pumpkin cream, EVO oil and basil."),
    item("Oro Verde", "13 €", "Crema di friarielli, guanciale, in uscita stracciata di Bufala DOP, ferfellone sbriciolato, olio EVO, basilico.", "Oro Verde", "Friarielli cream, guanciale, finished with DOP buffalo stracciata, crumbled ferfellone pepper, EVO oil and basil."),
    item("Cacciatora", "12,5 €", "Pulled chicken, olive taggiasche, peperoni arrosto, pomodoro, mozzarella fior di latte, olio EVO, basilico.", "Cacciatora", "Pulled chicken, Taggiasca olives, roasted peppers, tomato, fior di latte mozzarella, EVO oil and basil."),
    item("Dolceamaro", "12,5 €", "Crema di radicchio, gorgonzola, mozzarella fior di latte, in uscita noci, stracciatella, speck, olio EVO, basilico.", "Dolceamaro", "Radicchio cream, gorgonzola, fior di latte mozzarella, finished with walnuts, stracciatella, speck, EVO oil and basil."),
    item("Dolce & Salato", "13 €", "Crema cacio e pepe, speck, mozzarella fior di latte, in uscita patatine dolci, miele al tartufo, olio EVO, basilico.", "Sweet & Savory", "Cacio e pepe cream, speck, fior di latte mozzarella, finished with sweet potato fries, truffle honey, EVO oil and basil."),
    item("Forte e Gentile", "13 €", "Crema di zucca, mozzarella di Bufala DOP, salsiccia di fegato nostrana, cicorietta, in uscita peperone dolce di Altino, scaglie di grana, olio EVO, basilico.", "Forte e Gentile", "Pumpkin cream, DOP buffalo mozzarella, local liver sausage, chicory, finished with sweet Altino pepper, Grana flakes, EVO oil and basil."),
    item("Fungarola", "14 €", "Base di tartufo, provola affumicata, funghi porcini, funghi champignon, funghi pioppini, in uscita olio EVO, basilico, burratina al centro.", "Fungarola", "Truffle base, smoked provola, porcini, champignon and pioppini mushrooms, finished with EVO oil and basil, burratina in the center."),
    item("Milady", "13,5 €", "Mozzarella fior di latte, patate al forno, prosciutto cotto, in uscita crocchette di patate, fonduta di formaggio, olio EVO, basilico.", "Milady", "Fior di latte mozzarella, roasted potatoes, cooked ham, finished with potato croquettes, cheese fondue, EVO oil and basil."),
    item("Pistacchiola", "13 €", "Crema di funghi porcini, guanciale, in uscita stracciatella, granella di pistacchio, olio EVO, basilico.", "Pistacchiola", "Porcini mushroom cream, guanciale, finished with stracciatella, pistachio crumble, EVO oil and basil."),
    item("Tirolese", "13,5 €", "Crema di noci, provola affumicata, funghi champignon, gorgonzola, speck, in uscita miele al tartufo, olio EVO, basilico.", "Tirolese", "Walnut cream, smoked provola, champignon mushrooms, gorgonzola, speck, finished with truffle honey, EVO oil and basil."),
    item("Zucca e Guanciale", "13 €", "Base di zucca, provola affumicata, guanciale amatriciano, salsiccia di cotica, in uscita scaglie di grana, bocconcino di provola affumicata al centro, olio EVO, basilico.", "Pumpkin and Guanciale", "Pumpkin base, smoked provola, Amatriciana-style guanciale, cotica sausage, finished with Grana flakes, smoked provola bite in the center, EVO oil and basil."),
    item("Bella Addormentata", "14 €", "Base crema di tartufo, provola affumicata, funghi porcini, salsiccia, in uscita speck, ricotta, noci, olio EVO, basilico.", "Sleeping Beauty", "Truffle cream base, smoked provola, porcini mushrooms, sausage, finished with speck, ricotta, walnuts, EVO oil and basil."),
    item("Nero d'Abruzzo", "14 €", "Crema di pomodorini confit, mozzarella di bufala, in uscita lonza di maialino nero, cialde di grana, stracciatella di bufala, rucola, olio EVO, basilico.", "Nero d'Abruzzo", "Confit cherry tomato cream, buffalo mozzarella, finished with black pig lonza, Grana crisps, buffalo stracciatella, arugula, EVO oil and basil."),
    item("Rica", "13,5 €", "Provola affumicata, salame dolce, gorgonzola, funghi porcini, in uscita carpaccio di tartufo, bocconcino di provola affumicata al centro, olio EVO, basilico.", "Rica", "Smoked provola, mild salami, gorgonzola, porcini mushrooms, finished with truffle carpaccio, smoked provola bite in the center, EVO oil and basil."),
    item("Spicy Cheese", "13,5 €", "Crema di cacio e pepe, mozzarella di Bufala DOP, provola affumicata, gorgonzola, in uscita bocconcini di formaggio fritto piccante, salsa di pere e zenzero in agrodolce, olio EVO, basilico.", "Spicy Cheese", "Cacio e pepe cream, DOP buffalo mozzarella, smoked provola, gorgonzola, finished with spicy fried cheese bites, sweet-and-sour pear and ginger sauce, EVO oil and basil.", "Piccante"),
    item("Maianella", "14 €", "Provola affumicata, porchetta di Ariccia, patate al rosmarino, crema di peperoni, in uscita bocconcino di provola affumicata, olio EVO, basilico.", "Maianella", "Smoked provola, Ariccia porchetta, rosemary potatoes, pepper cream, finished with a smoked provola bite, EVO oil and basil."),
    item("Sottobosco", "14 €", "Crema di mirtilli, salsiccia, gorgonzola, mozzarella fior di latte, in uscita cialde di grana, miele al tartufo, olio EVO, basilico.", "Sottobosco", "Blueberry cream, sausage, gorgonzola, fior di latte mozzarella, finished with Grana crisps, truffle honey, EVO oil and basil."),
    item("Carbonara", "14 €", "Guanciale croccante, crema alla carbonara, scaglie di pecorino, mozzarella fior di latte in cottura.", "Carbonara", "Crispy guanciale, carbonara cream, pecorino flakes, fior di latte mozzarella baked in."),
    item("Brigante", "15 €", "Salsiccia di fegato, cipolla caramellata, crema di peperoni, mozzarella fior di latte, in uscita lardo di Patanegra, scaglie di grana, miele, olio EVO, basilico.", "Brigante", "Liver sausage, caramelized onion, pepper cream, fior di latte mozzarella, finished with Patanegra lardo, Grana flakes, honey, EVO oil and basil."),
    item("BBQ", "14 €", "Mozzarella fior di latte, pulled pork, patate alla paprika, cipolla caramellata, salsa BBQ, in uscita olio EVO, basilico.", "BBQ", "Fior di latte mozzarella, pulled pork, paprika potatoes, caramelized onion, BBQ sauce, finished with EVO oil and basil."),
    item("Pizza e Fichi", "14,5 €", "Mozzarella di Bufala DOP, crema di noci, in uscita prosciutto crudo di Parma, scaglie di pecorino, salsa di fichi in agrodolce, olio EVO, basilico, bocconcino di bufala al centro.", "Pizza and Figs", "DOP buffalo mozzarella, walnut cream, finished with Parma ham, pecorino flakes, sweet-and-sour fig sauce, EVO oil and basil, buffalo bite in the center."),
    item("Violetta", "14 €", "Mozzarella fior di latte, crema di patate viola, guanciale, pacchetelle gialle, in uscita crocchette di patate, olio EVO, basilico.", "Violetta", "Fior di latte mozzarella, purple potato cream, guanciale, yellow pacchetelle tomatoes, finished with potato croquettes, EVO oil and basil."),
    item("Ariccia", "16 €", "Porchetta di Ariccia, crema di pomodorini confit, patate alla paprika doppia cottura, cipolla, pecorino, mozzarella fior di latte, in uscita stracciatella di bufala, olio EVO, basilico.", "Ariccia", "Ariccia porchetta, confit cherry tomato cream, twice-cooked paprika potatoes, onion, pecorino, fior di latte mozzarella, finished with buffalo stracciatella, EVO oil and basil."),
    item("Croccantella", "15,5 €", "Provola affumicata, crema di patate viola, in uscita mortadella, stracciatella di Bufala DOP, crocchette di patate, granella di pistacchio, olio EVO, basilico.", "Croccantella", "Smoked provola, purple potato cream, finished with mortadella, DOP buffalo stracciatella, potato croquettes, pistachio crumble, EVO oil and basil."),
    item("Golosa", "16 €", "Cornicione ripieno di ricotta di Bufala DOP, mozzarella di bufala, in uscita mortadella DOP, ciuffetti di ricotta di Bufala DOP, crema di pistacchio, granella di pistacchio, olio EVO, basilico, burratina al centro.", "Golosa", "Crust filled with DOP buffalo ricotta, buffalo mozzarella, finished with DOP mortadella, DOP buffalo ricotta tufts, pistachio cream, pistachio crumble, EVO oil and basil, burratina in the center."),
    item("Wood", "16,5 €", "Crema di tartufo, mozzarella fior di latte, funghi pioppini, in uscita lonza di maialino nero d'Abruzzo, miele di acacia e tartufo nero estivo, carpaccio di tartufo, scaglie di grana, olio EVO, basilico, burratina al centro.", "Wood", "Truffle cream, fior di latte mozzarella, pioppini mushrooms, finished with Abruzzo black pig lonza, acacia honey and summer black truffle, truffle carpaccio, Grana flakes, EVO oil and basil, burratina in the center.", "Signature"),
    item("Nostromo", "18 €", "Tartare di tonno, cipolla caramellata, olive, crema di pomodorini confit, stracciatella di Bufala DOP, maionese al lime, olio EVO, basilico.", "Nostromo", "Tuna tartare, caramelized onion, olives, confit cherry tomato cream, DOP buffalo stracciatella, lime mayonnaise, EVO oil and basil."),
    item("Iberica Imperiale", "18 €", "Prosciutto Patanegra, crema di pomodorini confit gialli, stracciata di bufala, noci, miele, in uscita olio EVO, basilico.", "Imperial Iberian", "Patanegra ham, yellow confit cherry tomato cream, buffalo stracciata, walnuts, honey, finished with EVO oil and basil."),
    item("Mare e Terra", "19 €", "Tartare di gambero viola, crema di peperoni, mozzarella fior di latte, stracciatella di Bufala DOP, olio al ferfellone, in uscita olio EVO, basilico.", "Sea and Land", "Purple prawn tartare, pepper cream, fior di latte mozzarella, DOP buffalo stracciatella, ferfellone pepper oil, finished with EVO oil and basil.")
  ]),

  cat("calzoni-focacce", "Calzoni & Focacce", "Calzones & Focaccias", [
    item("Cotto e Mozzarella (bianco o rosso a scelta)", "11 €", "Prosciutto cotto, mozzarella fior di latte, olio EVO.", "Ham and Mozzarella (white or red)", "Cooked ham, fior di latte mozzarella, EVO oil."),
    item("Salame", "12 €", "Salame dolce, ricotta di Bufala DOP, mozzarella fior di latte, spolverata di pepe, olio EVO.", "Salami", "Mild salami, DOP buffalo ricotta, fior di latte mozzarella, pepper dusting, EVO oil."),
    item("Ventricina", "12 €", "Provola affumicata, ventricina, olio EVO.", "Ventricina", "Smoked provola, ventricina, EVO oil."),
    item("Funghi e Salsiccia", "13 €", "Provola affumicata, salsa tartufata, funghi champignon, salsiccia, olio EVO.", "Mushrooms and Sausage", "Smoked provola, truffle sauce, champignon mushrooms, sausage, EVO oil."),
    item("Mortadella e Pistacchio", "14,5 €", "Mortadella, crema di pistacchio, ricotta di Bufala DOP, mozzarella fior di latte, granella di pistacchio, olio EVO.", "Mortadella and Pistachio", "Mortadella, pistachio cream, DOP buffalo ricotta, fior di latte mozzarella, pistachio crumble, EVO oil."),
    item("Focaccia Caprese", "8 €", "Pomodoro, mozzarella fior di latte, basilico, origano, olio EVO.", "Caprese Focaccia", "Tomato, fior di latte mozzarella, basil, oregano, EVO oil."),
    item("Focaccia Sostanziosa", "11 €", "Lardo di Patanegra, pomodorino confit, cipolla caramellata, salsa ai peperoni, miele, olio EVO, basilico.", "Hearty Focaccia", "Patanegra lardo, confit cherry tomato, caramelized onion, pepper sauce, honey, EVO oil, basil."),
    item("Focaccia Fit", "14 €", "Bresaola, miele, noci, ricotta di Bufala DOP a ciuffetti, pomodorini confit, rucola, scaglie di grana, olio EVO, basilico.", "Fit Focaccia", "Bresaola, honey, walnuts, DOP buffalo ricotta tufts, confit cherry tomatoes, arugula, Grana flakes, EVO oil, basil.")
  ]),

  cat("hamburger", "Hamburger", "Burgers", [
    item("Chicken Burger", "10 €", "Hamburger di pollo con panatura croccante, pomodoro, insalata, ketchup, maionese. Accompagnato da patate fritte.", "Chicken Burger", "Crispy breaded chicken burger, tomato, lettuce, ketchup, mayonnaise. Served with fries."),
    item("Big Wood", "12 €", "Hamburger di Black Angus, cipolla caramellata, melanzane sott'olio, patatine fritte, salsa BBQ hot, senape. Accompagnato da patate fritte.", "Big Wood", "Black Angus burger, caramelized onion, marinated eggplant, fries, hot BBQ sauce, mustard. Served with fries."),
    item("Spicy", "12 €", "Hamburger di Black Angus, jalapenos panati ripieni di formaggio, salsa BBQ hot, cipolla caramellata. Accompagnato da patate fritte.", "Spicy", "Black Angus burger, breaded jalapenos filled with cheese, hot BBQ sauce, caramelized onion. Served with fries.", "Piccante"),
    item("Crispy", "12 €", "Hamburger di Black Angus, guanciale croccante, cheddar, salsa burger. Accompagnato da patate fritte.", "Crispy", "Black Angus burger, crispy guanciale, cheddar, burger sauce. Served with fries."),
    item("Pulled Pork", "12 €", "Hamburger di Black Angus, pulled pork, patate alla paprika, cipolla caramellata, salsa BBQ. Accompagnato da patate fritte.", "Pulled Pork", "Black Angus burger, pulled pork, paprika potatoes, caramelized onion, BBQ sauce. Served with fries."),
    item("Vegan Burger", "12 €", "Hamburger di frumento, peperoni arrosto, cipolla caramellata, patatine fritte, ketchup. Accompagnato da patate fritte.", "Vegan Burger", "Wheat burger, roasted peppers, caramelized onion, fries, ketchup. Served with fries.", "Vegano")
  ]),

  cat("dessert", "Dessert", "Desserts", [
    item("Sorbetto", "3 €", "", "Sorbet", ""),
    item("Tiramisu", "7 €", "Pan di Stelle - Pistacchio.", "Tiramisu", "Pan di Stelle cocoa biscuits - Pistachio."),
    item("Cheesecake con Ricotta di Bufala", "7 €", "Nutella - Pan di Stelle - Pistacchio - Frutti di bosco.", "Cheesecake with Buffalo Ricotta", "Nutella - Pan di Stelle cocoa biscuits - Pistachio - Berries."),
    item("Torta Tre Cioccolati", "7 €", "", "Three-Chocolate Cake", ""),
    item("Tortino dal Cuore Caldo accompagnato da Gelato", "7 €", "Cioccolato - Cioccolato bianco - Pistacchio.", "Warm-Centered Cake served with Ice Cream", "Chocolate - White chocolate - Pistachio."),
    item("Millefoglie Scomposta", "7 €", "Con crema chantilly e frutti di bosco.", "Deconstructed Millefeuille", "With Chantilly cream and berries.")
  ]),

  cat("bevande", "Bevande", "Drinks", [
    item("Acqua Liscia", "2,5 €", "", "Still Water", ""),
    item("Acqua Frizzante", "2,5 €", "", "Sparkling Water", ""),
    item("Coca Cola / Zero 0,33 cl", "3,5 €", "", "Coca Cola / Zero 0.33 l", ""),
    item("Coca Cola 1 litro", "7 €", "", "Coca Cola 1 liter", ""),
    item("Fanta 0,33 cl", "3,5 €", "", "Fanta 0.33 l", ""),
    item("Sprite 0,33 cl", "3,5 €", "", "Sprite 0.33 l", ""),
    item("Estathe Pesca / Limone", "3,5 €", "", "Estathe Peach / Lemon", ""),
    item("Gin Tonic", "10 €", "Gin Mare - Nordes.", "Gin Tonic", "Gin Mare - Nordes."),
    item("Americano / Negroni", "8 €", "", "Americano / Negroni", ""),
    item("Amari", "3 €", "", "Bitters", ""),
    item("Caffe", "1,5 €", "", "Coffee", ""),
    item("Coperto", "2,5 €", "", "Cover Charge", "")
  ]),

  cat("birra-alla-spina", "Birra alla Spina", "Draft Beer", [
    item("Heineken", "", "0,25 cl 3 € · 0,5 cl 5,5 € · Caraffa 1,5 litri 16 €", "Heineken", "0.25 l 3 € · 0.5 l 5.5 € · 1.5 l pitcher 16 €"),
    item("Ichnusa Non Filtrata", "", "0,20 cl 3,5 € · 0,4 cl 6 € · Caraffa 1,5 litri 18 €", "Ichnusa Unfiltered", "0.20 l 3.5 € · 0.4 l 6 € · 1.5 l pitcher 18 €"),
    item("Moretti Bianca", "", "0,20 cl 3,5 € · 0,4 cl 6 € · Caraffa 1,5 litri 18 €", "Moretti Wheat Beer", "0.20 l 3.5 € · 0.4 l 6 € · 1.5 l pitcher 18 €"),
    item("Moretti Rossa", "", "0,20 cl 3,5 € · 0,4 cl 6,5 € · Caraffa 1,5 litri 19 €", "Moretti Red", "0.20 l 3.5 € · 0.4 l 6.5 € · 1.5 l pitcher 19 €"),
    item("Messina Cristalli di Sale", "", "0,20 cl 3,5 € · 0,4 cl 6 € · Caraffa 1,5 litri 19 €", "Messina Sea Salt Crystals", "0.20 l 3.5 € · 0.4 l 6 € · 1.5 l pitcher 19 €"),
    item("Lagunitas IPA", "", "0,20 cl 4,5 € · 0,4 cl 8 € · Caraffa 1,5 litri 25 €", "Lagunitas IPA", "0.20 l 4.5 € · 0.4 l 8 € · 1.5 l pitcher 25 €")
  ]),

  cat("aggiunte", "Aggiunte per Pizze", "Pizza Add-ons", pizzaExtras)
];
