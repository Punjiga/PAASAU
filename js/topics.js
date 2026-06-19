/* ============================================================
   RUTA PAA — Temario y lecciones
   Basado en el Cuadro 1 oficial de la PAA (razonamiento verbal y matemático).
   Cada tema tiene una "teoria" corta para la práctica diaria.
   ============================================================ */
window.PAA_TOPICS = [
  /* ---------------- RAZONAMIENTO VERBAL ---------------- */
  {
    id: "finalidad", domain: "verbal", name: "Finalidad",
    teoria: "La finalidad es el PARA QUÉ de una acción: el objetivo que se busca. Preguntate: ¿con qué propósito se hace esto? La respuesta correcta no describe la acción, sino aquello que se quiere lograr con ella. Cuidado con opciones que mencionan medios o efectos secundarios; buscá el fin último que el texto plantea."
  },
  {
    id: "comportamiento", domain: "verbal", name: "Comportamiento",
    teoria: "Aquí se evalúa CÓMO actúa o reacciona algo o alguien ante una situación. Identificá la conducta concreta que describe el texto (qué hace el sujeto), no su causa ni su consecuencia. La clave suele ser un verbo que resume la reacción descrita."
  },
  {
    id: "causa_consecuencia", domain: "verbal", name: "Causa y consecuencia",
    teoria: "La CAUSA es lo que produce algo; la CONSECUENCIA es lo que resulta. Conectores como 'debido a', 'porque', 'por eso', 'provoca' marcan la relación. Leé con cuidado qué se pregunta: a veces piden la causa y a veces el efecto. No confundás el orden."
  },
  {
    id: "simple_complejo", domain: "verbal", name: "Simple y complejo",
    teoria: "El texto contrasta algo de pocos elementos (simple) con algo de muchos elementos o partes interrelacionadas (complejo). Fijate en la esencia del contraste: no es 'viejo/nuevo' ni 'caro/barato', sino la cantidad de componentes o la dificultad. Elegí la opción que capte esa diferencia."
  },
  {
    id: "conceptualizacion", domain: "verbal", name: "Conceptualización",
    teoria: "Te dan una descripción y pedís resumirla en UNA palabra (un concepto). Identificá la idea central de la conducta o situación descrita y buscá el término que la engloba. Descartá palabras que solo describen una parte. Ejemplo: 'compartir sin esperar nada' → generosidad."
  },
  {
    id: "orden_desorden", domain: "verbal", name: "Orden y desorden",
    teoria: "El texto describe si las cosas están organizadas (orden) o sin organización (desorden), o un cambio entre ambos estados. Detectá palabras como 'clasificado', 'amontonado', 'cada cosa en su lugar', 'regado'. A veces preguntan por el cambio: del desorden al orden, o viceversa."
  },
  {
    id: "orden_temporal", domain: "verbal", name: "Orden temporal",
    teoria: "Se trata de la SECUENCIA en el tiempo: qué pasa primero, después y al final. Conectores: 'primero', 'luego', 'antes de', 'después', 'finalmente'. Ubicá el evento que piden respecto a otro (justo antes / justo después). Hacé una línea mental de los pasos."
  },
  {
    id: "esencia", domain: "verbal", name: "Esencia (lo propio)",
    teoria: "La esencia es lo característico, propio o particular de algo. Muchos ítems te dan la esencia de un caso y, por lógica paralela, piden la de OTRO caso parecido. Mantené la misma estructura: si describen un ave por 'alas, plumas, pico', buscá la descripción equivalente para el otro animal."
  },
  {
    id: "perspectiva", domain: "verbal", name: "Perspectiva",
    teoria: "La perspectiva es el punto de vista desde el que se ve algo. Un mismo hecho puede valorarse distinto según quién lo mire (la lluvia: bendición para el agricultor, estorbo para el viajero). La clave suele expresar que la visión depende del observador, o reformular la idea sin cambiar su sentido."
  },
  {
    id: "idea_implicita", domain: "verbal", name: "Idea implícita",
    teoria: "Una idea implícita NO está escrita literalmente, pero se DEDUCE con seguridad del texto. No agregues información de afuera ni exageres. Preguntate: ¿qué tiene que ser cierto para que esta oración tenga sentido? Esa inferencia mínima y segura es la respuesta."
  },
  {
    id: "idea_principal", domain: "verbal", name: "Idea principal / tema",
    teoria: "El tema o idea principal es de qué trata el texto en su conjunto, no un detalle. Si el texto enumera varios rasgos de algo, el tema suele ser 'la clasificación / los beneficios / la importancia de…'. Buscá la opción más general que cubra todo el texto sin quedarse corta ni irse de más."
  },
  {
    id: "parafrasis", domain: "verbal", name: "Paráfrasis",
    teoria: "Parafrasear es decir lo mismo con otras palabras, conservando el sentido. La respuesta correcta es equivalente al texto, sin añadir ni contradecir. Descartá opciones que invierten la idea, la exageran o cambian el significado, aunque usen palabras del texto."
  },
  {
    id: "proposiciones", domain: "verbal", name: "Proposiciones (deducción)",
    teoria: "Te dan un texto y varias proposiciones (I, II, III). Evaluá cada una por separado: ¿se deduce del texto, lo contradice o es ajena? Marcá solo las que se siguen con certeza. Una proposición que dice lo contrario del texto nunca se deduce de él."
  },

  /* ---------------- RAZONAMIENTO MATEMÁTICO ---------------- */
  {
    id: "aritmetica", domain: "math", name: "Operaciones aritméticas",
    teoria: "Sumas, restas, multiplicaciones y divisiones con naturales, enteros, fracciones y decimales. Respetá el orden de operaciones: primero paréntesis, luego multiplicación/división (de izquierda a derecha) y por último suma/resta. Con fracciones, buscá común denominador antes de sumar o restar."
  },
  {
    id: "mcm_mcd", domain: "math", name: "MCM y MCD",
    teoria: "El MCM (mínimo común múltiplo) sirve para 'cuándo coinciden de nuevo' (buses, ciclos). El MCD (máximo común divisor) sirve para 'el reparto más grande sin que sobre' (cortar en partes iguales). Descomponé en factores primos: MCM toma todos los factores con su mayor exponente; MCD, los comunes con el menor."
  },
  {
    id: "relaciones_orden", domain: "math", name: "Relaciones numéricas y de orden",
    teoria: "Comparar y ordenar cantidades (mayor, menor, igual). Para fracciones y decimales, conviene pasarlos a una misma forma (decimal) y comparar. En problemas de orden con personas, escribí las relaciones como cadena: si A>B y B>C, entonces A>B>C."
  },
  {
    id: "conteo", domain: "math", name: "Conteo intuitivo",
    teoria: "Contar posibilidades o el 'peor caso'. En problemas de 'cuántos saco para asegurar…', pensá en lo peor que puede pasar antes de cumplir la condición, y sumá uno. En conteo de combinaciones simples, multiplicá las opciones de cada posición (principio multiplicativo)."
  },
  {
    id: "permutaciones", domain: "math", name: "Permutaciones",
    teoria: "Variar el ORDEN de objetos o personas. Ordenar n elementos distintos: n! = n·(n−1)·…·1 (3 elementos = 6 formas, 4 = 24). Si elegís y ordenás r de n (ej. capitán y subcapitán), multiplicá: n·(n−1)·… con r factores."
  },
  {
    id: "geometria", domain: "math", name: "Geometría",
    teoria: "Perímetro = contorno (sumá los lados; rectángulo: 2·(largo+ancho)). Área: rectángulo = largo·ancho; cuadrado = lado²; triángulo = base·altura/2. Circunferencia = 2·π·radio; área del círculo = π·radio². Usá π ≈ 3,14 o 22/7 según indique el ítem."
  },
  {
    id: "sucesiones", domain: "math", name: "Sucesiones",
    teoria: "Buscá la LEY que conecta los términos. Si suman/restan lo mismo (4,7,10…), es aritmética: aₙ = a₁+(n−1)·d. Si multiplican (2,6,18…), es geométrica. Otras crecen con diferencias que aumentan (2,3,5,8,12 → +1,+2,+3,+4) o son cuadrados (1,4,9,16). Encontrá el patrón antes de calcular."
  },
  {
    id: "datos_probabilidad", domain: "math", name: "Datos y probabilidad",
    teoria: "Promedio = suma de valores ÷ cantidad de valores. Probabilidad = casos favorables ÷ casos totales (entre 0 y 1). 'Más probable' = el de mayor cantidad de casos. En tablas, leé con cuidado mínimos, máximos y totales antes de responder."
  },
  {
    id: "algebra_notacion", domain: "math", name: "Notación algebraica",
    teoria: "Traducir frases a expresiones. 'El doble de un número' = 2x; 'aumentado en 5' = +5; 'el triple menos 200' = 3x−200; 'dentro de 4 años' = n+4. Cuidado con los paréntesis: 'el doble de (un número más 5)' = 2(x+5), distinto de 2x+5."
  },
  {
    id: "algebra_relaciones", domain: "math", name: "Relaciones algebraicas y paridad",
    teoria: "Igualdades, desigualdades y propiedades de par/impar. par·cualquiera = par; impar·impar = impar. Si un producto es impar, ambos factores son impares. Para resolver una igualdad simple (x+3=10), despejá la incógnita paso a paso."
  },
  {
    id: "unidades_medida", domain: "math", name: "Unidades de medida",
    teoria: "Convertí con cuidado: 1 kg = 1000 g, 1 km = 1000 m, 1 h = 60 min. Velocidad = distancia ÷ tiempo (mantené unidades coherentes). Con tiempos, sumá horas con horas y minutos con minutos, y convertí 60 min en 1 h cuando se pase."
  },
  {
    id: "razon_proporcion", domain: "math", name: "Razón y proporción",
    teoria: "Una proporción mantiene constante la relación entre cantidades (regla de tres). Directa: si una sube, la otra sube (más arroz → más agua). Inversa: si una sube, la otra baja (más obreros → menos días; multiplicá obreros·días y mantené ese total). Planteá la regla de tres y resolvé."
  }
];

/* Helpers de temario */
window.PAA_TOPIC_BY_ID = window.PAA_TOPICS.reduce((m, t) => (m[t.id] = t, m), {});
window.PAA_DOMAINS = {
  verbal: { name: "Razonamiento verbal", short: "Verbal", color: "var(--verbal)" },
  math: { name: "Razonamiento matemático", short: "Matemático", color: "var(--math)" }
};
