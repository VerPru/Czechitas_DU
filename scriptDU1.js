// Vytvoření HTML prvků přímo v JavaScriptu
document.body.innerHTML += "<h2>Generátor e-mailové adresy ČVUT</h2>";

// Získání jména a příjmení od uživatele
const jmeno = prompt("Zadejte své křestní jméno bez diakritiky").trim();
const prijmeni = prompt("Zadejte své příjmení bez diakritiky").trim();

// Vyříznutí prvních 3 znaků z křestního jména a 5 znaků z příjmení
const jmenoCut = jmeno.slice(0, 3).toLowerCase();
const prijmeniCut = prijmeni.slice(0, 5).toLowerCase();

// Sestavení e-mailové adresy pomocí interpolace řetězců
const email = `${prijmeniCut}${jmenoCut}@fit.cvut.cz`;

// Výpis výsledku na stránku
document.body.innerHTML += `<p>Vaše e-mailová adresa je: ${email}</p>`;