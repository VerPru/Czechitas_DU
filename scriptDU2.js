document.body.innerHTML = "<h2>úkol 2 - Catering </h2>";

// Funkce pro každou cateringovou společnost
const justFood = (pocetLidi) => {
	const cena = pocetLidi * 100; // Cena 100 Kč za osobu
	return `Catering od Just Food pro ${pocetLidi} lidí za ${cena} Kč`;
  };
  
  const yourMama = (pocetLidi) => {
	const cena = pocetLidi * 300; // Cena 300 Kč za osobu
	return `Catering od Your Mama pro ${pocetLidi} lidí za ${cena} Kč`;
  };
  
  const flavourHaven = (pocetLidi) => {
	const cena = pocetLidi * 3000; // Cena 3000 Kč za osobu
	return `Catering od Flavour Haven pro ${pocetLidi} lidí za ${cena} Kč`;
  };
  
  // Funkce createEvent pro vytvoření události s cateringem
  const createEvent = (nazevUdalosti, pocetLidi, cateringFunkce) => {
	const cateringZprava = cateringFunkce(pocetLidi); // Zavolání příslušné cateringové funkce
	return `Událost ${nazevUdalosti} s ${cateringZprava}`;
  };
  
  // Testování funkcí
  console.log(justFood(50)); // → Catering od Just Food pro 50 lidí za 5 000 Kč
  console.log(yourMama(100)); // → Catering od Your Mama pro 100 lidí za 30 000 Kč
  console.log(flavourHaven(10)); // → Catering od Flavour Haven pro 10 lidí za 30 000 Kč
  
  // Testování funkce createEvent
  console.log(createEvent("Inaugurace prezidenta", 100, flavourHaven));
  // → Událost Inaugurace prezidenta s Catering od Flavour Haven pro 100 lidí za 300 000 Kč
  
  console.log(createEvent("Firemní večírek", 50, yourMama));
  // → Událost Firemní večírek s Catering od Your Mama pro 50 lidí za 15 000 Kč
  
  console.log(createEvent("Rodinná oslava", 20, justFood));
  // → Událost Rodinná oslava s Catering od Just Food pro 20 lidí za 2 000 Kč