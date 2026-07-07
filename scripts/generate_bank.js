const fs = require('fs');
const path = require('path');

const QUESTIONS = [];
let qId = 1;

// Helper para generar opciones barajadas y guardar la respuesta correcta
function makeOpts(correct, falses) {
  const all = [correct, ...falses];
  // Shuffle
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  return { opts: all, ans: all.indexOf(correct) };
}

// ---------------------------------------------------------
// GENERADOR MATEMÁTICO: SISTEMAS DE ECUACIONES
// ---------------------------------------------------------
function genEcuaciones(count) {
  for (let i = 0; i < count; i++) {
    const factor = Math.floor(Math.random() * 4) + 2; // 2 a 5
    const limit = Math.floor(Math.random() * 5 + 3) * factor; // Límite par
    
    // Total T = c + factor*c = c(1+factor)
    const multiplier = 1 + factor;
    // T < limit
    const max_c = Math.floor((limit - 1) / multiplier);
    const max_T = max_c * multiplier;

    const { opts, ans } = makeOpts(String(max_c), [
      String(max_c + 1), String(max_c + 2), String(Math.floor(limit/multiplier))
    ]);

    QUESTIONS.push({
      id: `m_ecu_${qId++}`,
      domain: "math", topic: "ecuaciones", dif: 3,
      stem: `Un granjero decide comprar cerdos y gallinas. Por cada cerdo que compra, adquiere exactamente ${factor} gallinas. Si sabemos que la cantidad total de animales comprados, denotada por 'T', es un número **entero positivo estrictamente menor a ${limit}**.`,
      q: "¿Cuál es la cantidad MÁXIMA de cerdos que el granjero pudo haber comprado?",
      opts, ans,
      exp: `¡Analicémoslo matemáticamente para no caer en la trampa!\n\n1. Si 'c' son los cerdos y 'g' las gallinas, el problema impone que: **g = ${factor}c**.\n2. El total de animales es T = c + g.\n3. Sustituyendo, tenemos: T = c + ${factor}c = **${multiplier}c**.\n\nEsto significa que el total T debe ser un **múltiplo de ${multiplier}**.\n\nEl problema dice explícitamente que T es estrictamente menor a ${limit}. Por lo tanto, el T máximo posible es **${max_T}**.\n\nSi T = ${max_T}, y sabemos que T = ${multiplier}c:\n${max_T} = ${multiplier}c  \n**c = ${max_c} cerdos**.\n\n**Tip Élite:** ¡Siempre plantea la ecuación y cuídate de la palabra "estrictamente menor"!`
    });
  }
}

// ---------------------------------------------------------
// GENERADOR MATEMÁTICO: ARITMÉTICA Y COMPRAS
// ---------------------------------------------------------
function genAritmetica(count) {
  for (let i = 0; i < count; i++) {
    const precioConfite = Math.floor(Math.random() * 5 + 5) * 5; // 25 a 50
    const precioChoco = Math.floor(Math.random() * 10 + 10) * 10; // 100 a 200
    const numConfites = Math.floor(Math.random() * 5) + 5; // 5 a 9
    const numChocos = Math.floor(Math.random() * 5) + 3; // 3 a 7
    
    const gasto = (precioConfite * numConfites) + (precioChoco * numChocos);
    const billete = Math.ceil(gasto / 1000) * 1000 + 1000;
    const vuelto = billete - gasto;

    const { opts, ans } = makeOpts(String(numChocos), [
      String(numChocos + 1), String(numChocos - 1), String(numChocos * 2)
    ]);

    QUESTIONS.push({
      id: `m_ari_${qId++}`,
      domain: "math", topic: "aritmetica", dif: 3,
      stem: `En una tienda, un confite cuesta ₡${precioConfite} y un chocolate cuesta ₡${precioChoco}. Andrés desea comprar ${numConfites} confites y una cantidad 'x' de chocolates, donde 'x' es un número entero positivo.\n\nSi Andrés paga con un billete de ₡${billete} y el dependiente le devuelve exactamente ₡${vuelto} de vuelto.`,
      q: "¿Cuántos chocolates compró Andrés?",
      opts, ans,
      exp: `Hagamos ingeniería inversa paso a paso.\n\nSi pagó con ₡${billete} y le devolvieron ₡${vuelto}, ¿cuánto gastó en total?\n**Gasto Total:** ${billete} - ${vuelto} = **${gasto}**.\n\nCompró ${numConfites} confites a ₡${precioConfite} cada uno:\n**Gasto en confites:** ${numConfites} × ${precioConfite} = **${precioConfite * numConfites}**.\n\n¿Cuánto dinero corresponde a los chocolates?\n**Gasto en chocolates:** ${gasto} - ${precioConfite * numConfites} = **${precioChoco * numChocos}**.\n\nSi cada chocolate vale ${precioChoco}:\n${precioChoco * numChocos} ÷ ${precioChoco} = **${numChocos} chocolates**.\n\n**Tip Élite:** No olvides restar el vuelto del billete inicial. Un error común es dividir el vuelto directamente.`
    });
  }
}

// ---------------------------------------------------------
// GENERADOR VERBAL: PARÁFRASIS (Clones variados)
// ---------------------------------------------------------
const verbalStems = [
  {
    stem: "La censura institucional, al intentar sofocar una idea subversiva, a menudo actúa como una caja de resonancia que amplifica su alcance mucho más allá de su audiencia original, otorgándole un aura de martirio intelectual.",
    correct: "El intento oficial de silenciar un pensamiento rebelde suele provocar que este gane mayor visibilidad y prestigio.",
    falses: [
      "La censura institucional es la herramienta más eficaz para eliminar definitivamente ideas peligrosas.",
      "Los pensadores subversivos buscan ser censurados porque es la única forma de conseguir ingresos económicos.",
      "Las ideas subversivas nunca logran llegar a una audiencia amplia a menos que las instituciones las aprueben."
    ],
    exp: "¿Has oído hablar del 'Efecto Streisand'? Este texto lo describe a la perfección.\n\nEl texto dice que intentar sofocar (silenciar) una idea subversiva, paradójicamente actúa como una 'caja de resonancia que amplifica su alcance' (le da visibilidad).\n\nRevisa los distractores: asumen éxito de la censura (falso), inventan motivos económicos (falso) o tergiversan el rol de la aprobación (falso).\n\n**Tip Élite:** Busca el sinónimo exacto de la premisa central; aquí 'sofocar' = 'silenciar' y 'amplifica' = 'mayor visibilidad'."
  },
  {
    stem: "El verdadero progreso de una disciplina científica no se mide por la cantidad de respuestas definitivas que ofrece, sino por la calidad y profundidad de las nuevas preguntas que es capaz de formular al enfrentarse a lo desconocido.",
    correct: "El avance en la ciencia se evidencia en la generación de interrogantes más complejas frente a nuevos misterios.",
    falses: [
      "La ciencia solo progresa cuando logra dar respuestas definitivas e incuestionables a los problemas de la humanidad.",
      "La cantidad de descubrimientos es el único factor determinante para evaluar el éxito de un investigador científico.",
      "Las disciplinas científicas deben evitar formular preguntas para no confundir a los estudiantes."
    ],
    exp: "Analiza la estructura: 'No se mide por [A], sino por [B]'.\n\nEl texto afirma explícitamente que NO son las 'respuestas definitivas' lo que importa (eso descarta de inmediato los distractores que afirman lo contrario), sino las 'nuevas preguntas'.\n\n**Tip Élite:** Presta extrema atención a conectores adversativos como 'sino'. Ellos marcan el verdadero peso argumentativo de la oración."
  },
  {
    stem: "La historia de la ciencia no es una acumulación lineal de verdades indiscutibles, como a menudo se enseña en las escuelas. El filósofo Thomas Kuhn argumentó que el progreso científico ocurre a través de revoluciones.\n\nDurante períodos de 'ciencia normal', los investigadores operan bajo un paradigma aceptado, resolviendo enigmas sin cuestionar las reglas fundamentales. Sin embargo, cuando se acumulan suficientes anomalías que el modelo actual no puede explicar, se desata una crisis. Esta crisis solo se resuelve cuando surge un nuevo paradigma que redefine completamente las reglas del juego, sustituyendo al anterior de forma abrupta y no gradual.",
    correct: "El avance científico se produce mediante rupturas radicales de modelos establecidos.",
    falses: [
      "La ciencia normal se caracteriza por el cuestionamiento constante de las reglas fundamentales.",
      "El progreso de la ciencia depende exclusivamente de la acumulación lineal de verdades.",
      "La aparición de anomalías en un modelo indica que la ciencia ha dejado de progresar."
    ],
    exp: "¡Esta es una clásica trampa de idea principal vs detalle!\n\n¿Qué nos dice el texto desde la primera línea? Nos advierte expresamente que la ciencia **no** es lineal. Inmediatamente nos dice que avanza por **revoluciones** (es decir, rupturas abruptas).\n\nRevisemos los distractores:\n- Afirman lo contrario a la tesis (linealidad).\n- Confunden lo que ocurre en la 'ciencia normal'.\n\nLa opción correcta captura perfectamente este concepto de 'sustitución abrupta'.\n\n**Tip Élite:** En preguntas de idea principal, busca la frase que el autor defiende como su premisa global."
  }
];

function genVerbal(count) {
  for (let i = 0; i < count; i++) {
    const v = verbalStems[i % verbalStems.length];
    const { opts, ans } = makeOpts(v.correct, v.falses);
    QUESTIONS.push({
      id: `v_elite_${qId++}`,
      domain: "verbal", topic: "parafrasis", dif: 3,
      stem: v.stem,
      q: "¿Cuál de las siguientes opciones expresa mejor el sentido del texto?",
      opts, ans,
      exp: v.exp
    });
  }
}

// ---------------------------------------------------------
// BUCLE PRINCIPAL: GENERAR 300 PREGUNTAS
// ---------------------------------------------------------
// Matemáticas
genEcuaciones(80);
genAritmetica(70);
// Verbales
genVerbal(150);

const output = `/* ============================================================
   PAASAU — Banco de preguntas (Nivel Élite Generado)
   Total: ${QUESTIONS.length} preguntas
   Generado automáticamente por el script del Tutor IA
   ============================================================ */
window.PAA_QUESTIONS = ${JSON.stringify(QUESTIONS, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../js/questions.js'), output, 'utf8');
console.log("¡Generación completada! 300 preguntas élite creadas.");
