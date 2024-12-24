// Array delle domande
const domande = [
    // Pediatria
    "1. La crescita", "2. Bambino con pubertà precoce", "3. Bambino che cresce poco",
    "4. Le vaccinazioni", "5. Bambino con linfoadenopatie", "6. Bambino con epatosplenomegalia",
    "7. Malattie autoimmunitarie e auto infiammatorie", "8. Bambino con vomito",
    "9. Bambino con sangue nelle feci", "10. Nutrizione enterale e parenterale",
    "11. Disturbi funzionali gastrointestinali", "12. Malassorbimento", "13. Bambino con diarrea acuta e disidratazione",
    "14. Bambino con urine rosse", "15. Bambino con IVU", "16. Bambino con edemi",
    "17. Anemia", "18. Cardiopatie congenite", "19. Malattia di Kawasaki",
    "20. Bambino con iperglicemia", "21. Saper gestire le ipoglicemie", "22. Diagnosi di diabete",
    "23. Chetoacidosi diabetica", "24. Asma bronchiale", "25. Esami di laboratorio",
    "26. Antibiotici e antipiretici", "27. Allattamento al seno", "28. Classificazione del neonato",
    "29. Sepsi e infezioni neonatali", "30. Distress respiratorio e ipertensione polmonare",
    "31. Bambino con febbre", "32. Bambino con dolore", "33. Infezioni respiratorie",
    "34. Orticaria ed eczema", "35. Bambino con ipertensione", "36. Bambino con obesità essenziale",
    "37. Obesità genetiche ed endocrine", "38. Rachitismo carenziale", "39. Altri rachitismi",

    // Genetica
    "40. Diagnosi prenatale", "41. Rischio genetico e cancro",
    "42. Anomalie cromosomiche (S. Down, S. Turner, S. Klinefelter)",
    "43. Malattie autosomiche recessive (Fibrosi cistica, talassemia, anemia falciforme)",
    "44. Malattie autosomiche dominanti (Marfan, neurofibromatosi 1 e 2)",

    // Chirurgia pediatrica
    "45. Varicocele", "46. Scroto acuto", "47. Ernie inguinali e idrocele",
    "48. Criptorchidismo (scroto vuoto)", "49. Uropatie malformative",
    "50. Addome acuto neonatale (atresia duodenale, malrotazione e volvolo, enterocolite necrotizzante, ileo da meconio)",
    "51. Atresia esofagea", "52. Ernia diaframmatica", "53. Malformazioni anorettali",
    "54. Morbo di Hirschsprung", "55. Appendicite acuta",

    // Neuropsichiatria
    "56. Sviluppo psicomotorio", "57. Disabilità intellettiva e disturbi dello spettro autistico",
    "58. Paralisi cerebrale infantile"
];

// Genera un numero casuale
function generaNumero(testo, min, max) {
    const numero = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('result').innerText = `${testo}\nDomanda estratta: ${numero}`;
}

// Genera 3 numeri casuali
function generaTreNumeri() {
    let numeri = [];
    while (numeri.length < 3) {
        let numero = Math.floor(Math.random() * 58) + 1;
        if (!numeri.includes(numero)) {
            numeri.push(numero);
        }
    }
    document.getElementById('result').innerText = `Simulazione esame\nDomande estratte: ${numeri.join(' - ')}`;
}

// Mostra l'elenco delle domande
function mostraElencoDomande() {
    const modal = document.getElementById('modal');
    const list = document.getElementById('domandeList');
    list.innerHTML = domande.map(domanda => `<li>${domanda}</li>`).join('');
    modal.style.display = 'block';
}

// Nascondi il modal
function nascondiModal() {
    document.getElementById('modal').style.display = 'none';
}

// Eventi per i bottoni
document.getElementById('btnPediatria').addEventListener('click', () => generaNumero("Pediatria", 1, 39));
document.getElementById('btnChPediatrica').addEventListener('click', () => generaNumero("Ch. Pediatrica", 45, 55));
document.getElementById('btnNeuropsichiatria').addEventListener('click', () => generaNumero("Neuropsichiatria", 56, 58));
document.getElementById('btnGenetica').addEventListener('click', () => generaNumero("Genetica", 40, 44));
document.getElementById('btnSimulazioneEsame').addEventListener('click', generaTreNumeri);
document.getElementById('btnDomande').addEventListener('click', mostraElencoDomande);
