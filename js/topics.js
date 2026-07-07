window.PAA_TOPICS = [
  /* ---------------- RAZONAMIENTO VERBAL ---------------- */
  {
    id: "idea_opuesta", domain: "verbal", name: "Idea opuesta",
    teoria: "En este tema debes buscar la opción que contradice directamente lo que afirma el texto. Es vital leer con atención los adjetivos y descripciones. Si el texto dice que algo es 'delgado y largo', la idea opuesta dirá que es 'menos esbelto' o 'corto'."
  },
  {
    id: "idea_principal", domain: "verbal", name: "Idea principal",
    teoria: "La idea principal es el resumen global del texto. No te quedes con un detalle específico (como que los humanos hacían ropa), sino con la idea que engloba a todas las demás (realizaban actividades complejas)."
  },
  {
    id: "parafrasis", domain: "verbal", name: "Paráfrasis (Otras palabras)",
    teoria: "Consiste en encontrar la opción que diga exactamente lo mismo que el texto, pero usando sinónimos u otra estructura gramatical. Cuidado con las opciones que agregan información que no estaba en el texto original."
  },
  {
    id: "inferencia", domain: "verbal", name: "Inferencia y comprensión",
    teoria: "Inferir es deducir algo que no está escrito literalmente, pero que es una consecuencia lógica e innegable de lo que se lee. No debes inventar, solo conectar los puntos de la información dada."
  },
  {
    id: "proposiciones", domain: "verbal", name: "Análisis de proposiciones",
    teoria: "En estos ejercicios, debes evaluar afirmaciones (I, II, III) basándote estrictamente en el texto. Para encontrar la proposición falsa, busca afirmaciones absolutas ('todo', 'ningún') o conclusiones que contradigan directamente el sentido del texto original."
  },

  /* ---------------- RAZONAMIENTO MATEMÁTICO ---------------- */
  {
    id: "sucesiones", domain: "math", name: "Sucesiones",
    teoria: "Debes encontrar el patrón que sigue una lista de números. Pueden ser sumas constantes (aritméticas) o sumas que van creciendo (+1, +2, +3...). Si te piden números en común, extiende ambas listas siguiendo su patrón hasta encontrar la coincidencia."
  },
  {
    id: "ciclos", domain: "math", name: "Ciclos y calendarios",
    teoria: "Cuando algo se repite cada cierto tiempo (ej. días de la semana cada 7 días, o 3 pares de zapatos cada 3 días), usa la división y fíjate en el RESIDUO. El residuo te dirá en qué posición exacta del ciclo cae el número grande."
  },
  {
    id: "ecuaciones", domain: "math", name: "Planteo de ecuaciones",
    teoria: "Traduce el problema a matemáticas. Si varias personas consumen algo, multiplica (Personas × Consumo × Días). Si alguien deja de consumir, sepáralo del grupo. Juega con las respuestas o despeja la incógnita paso a paso."
  },
  {
    id: "combinatoria", domain: "math", name: "Combinatoria y sumas",
    teoria: "Cuando debes alcanzar un total usando partes de distintos tamaños (ej. formar 18kg con pesas de 4kg y 5kg), prueba las combinaciones posibles de manera ordenada empezando desde la más grande o la más pequeña hasta que la suma cuadre exacto."
  },
  {
    id: "certeza", domain: "math", name: "Lógica de certeza",
    teoria: "Estos problemas describen situaciones con varias posibilidades. La afirmación que 'sucederá con certeza' es aquella que es verdad en TODOS los casos posibles, incluso en el peor de los escenarios. Analiza siempre los extremos."
  },
  {
    id: "husos_horarios", domain: "math", name: "Husos horarios y tiempos",
    teoria: "Para calcular duraciones entre países, convierte siempre una de las horas a la zona horaria de la otra ANTES de sumar o restar. Si un país está 'adelantado', suma horas; si está 'atrasado', resta. Luego calcula la diferencia como un bloque de tiempo único."
  },
  {
    id: "logica_deductiva", domain: "math", name: "Deducción lógica (Silogismos)",
    teoria: "Consiste en cruzar reglas ('Todos los que nadan se mojan', 'Ninguno sabe andar en bicicleta'). Si te piden una conclusión cierta, debes combinar las reglas sin agregar información externa. Un diagrama de Venn rápido (círculos) puede hacer visible lo invisible."
  }
];

/* Helpers de temario */
window.PAA_TOPIC_BY_ID = window.PAA_TOPICS.reduce((m, t) => (m[t.id] = t, m), {});
window.PAA_DOMAINS = {
  verbal: { name: "Razonamiento verbal", short: "Verbal", color: "var(--verbal)" },
  math: { name: "Razonamiento matemático", short: "Matemático", color: "var(--math)" }
};
