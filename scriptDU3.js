const cisla = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];

const vystup = document.createElement("div");
document.body.appendChild(vystup);

// 1. Vypište do stránky všechna čísla.
vystup.innerHTML += `<h3>Všechna čísla:</h3> <p>${cisla.join(", ")}</p>`;

// 2. Vypište do stránky druhé mocniny všech čísel.
const druheMocniny = cisla.map(cislo => cislo ** 2);
vystup.innerHTML += `<h3>Druhé mocniny:</h3> <p>${druheMocniny.join(", ")}</p>`;

// 3. Vypište do stránky pouze záporná čísla.
const zapornaCisla = cisla.filter(cislo => cislo < 0);
vystup.innerHTML += `<h3>Záporná čísla:</h3> <p>${zapornaCisla.join(", ")}</p>`;

// 4. Vypište do stránky absolutní hodnotu všech čísel.
const absolutniHodnoty = cisla.map(cislo => Math.abs(cislo));
vystup.innerHTML += `<h3>Absolutní hodnoty:</h3> <p>${absolutniHodnoty.join(", ")}</p>`;

// 5. Vypište do stránky pouze sudá čísla.
const sudaCisla = cisla.filter(cislo => cislo % 2 === 0);
vystup.innerHTML += `<h3>Sudá čísla:</h3> <p>${sudaCisla.join(", ")}</p>`;

// 6. Vypište do stránky pouze ta čísla, jejichž absolutní hodnota je dělitelná třemi.
const delitelnaTremi = cisla.filter(cislo => Math.abs(cislo) % 3 === 0);
vystup.innerHTML += `<h3>Dělitelné třemi:</h3> <p>${delitelnaTremi.join(", ")}</p>`;

// 7. Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
const vzdalenostiOdPetky = cisla.map(cislo => Math.abs(cislo - 5));
vystup.innerHTML += `<h3>Vzdálenost od čísla 5:</h3> <p>${vzdalenostiOdPetky.join(", ")}</p>`;

// 8. Vypište do stránky druhé mocniny vzdáleností všech čísel od čísla 5.
const druheMocninyVzdalenosti = vzdalenostiOdPetky.map(vzdalenost => vzdalenost ** 2);
vystup.innerHTML += `<h3>Druhé mocniny vzdáleností od 5:</h3> <p>${druheMocninyVzdalenosti.join(", ")}</p>`;

// 9. Spočítejte, kolik je v seznamu záporných čísel.
const pocetZapornych = zapornaCisla.length;
vystup.innerHTML += `<h3>Počet záporných čísel:</h3> <p>${pocetZapornych}</p>`;

// 10. Spočítejte součet všech čísel v poli.
const soucetCisel = cisla.reduce((soucet, cislo) => soucet + cislo, 0);
vystup.innerHTML += `<h3>Součet čísel:</h3> <p>${soucetCisel}</p>`;

// 11. Spočítejte průměr všech čísel v poli.
const prumerCisel = soucetCisel / cisla.length;
vystup.innerHTML += `<h3>Průměr čísel:</h3> <p>${prumerCisel.toFixed(2)}</p>`;

// 12. Spočítejte součet všech kladných čísel v poli.
const soucetKladnych = cisla.filter(cislo => cislo > 0).reduce((soucet, cislo) => soucet + cislo, 0);
vystup.innerHTML += `<h3>Součet kladných čísel:</h3> <p>${soucetKladnych}</p>`;