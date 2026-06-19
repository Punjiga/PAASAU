/* ============================================================
   PAASAU — Temario y lecciones (explicaciones simples)
   Cada tema tiene una "teoria" corta y, si ayuda, un "svg" ilustrativo.
   ============================================================ */
window.PAA_TOPICS = [
  /* ---------------- RAZONAMIENTO VERBAL ---------------- */
  {
    id: "finalidad", domain: "verbal", name: "Finalidad",
    teoria: "La finalidad es el PARA QUÉ: el objetivo de una acción. Preguntate: ¿para qué se hace esto? La respuesta no describe la acción, sino lo que se quiere lograr. Ejemplo: 'estudio para aprobar' → la finalidad es aprobar. Cuidado con opciones que mencionan medios o efectos secundarios."
  },
  {
    id: "comportamiento", domain: "verbal", name: "Comportamiento",
    teoria: "Es CÓMO actúa o reacciona alguien (o algo) ante una situación. Buscá el verbo que resume qué hace. Ejemplo: 'ante el peligro, el armadillo se enrolla' → el comportamiento es enrollarse. No te fijes en la causa ni en la consecuencia, sino en la conducta."
  },
  {
    id: "causa_consecuencia", domain: "verbal", name: "Causa y consecuencia",
    teoria: "La CAUSA es lo que produce algo; la CONSECUENCIA es el resultado. Palabras de causa: 'porque', 'debido a', 'gracias a'. Palabras de consecuencia: 'por eso', 'provoca', 'así que'. Leé bien qué te piden: a veces la causa, a veces el efecto. No los confundás."
  },
  {
    id: "simple_complejo", domain: "verbal", name: "Simple y complejo",
    teoria: "Algo SIMPLE tiene pocas partes; algo COMPLEJO tiene muchas partes o pasos. No se trata de viejo/nuevo ni caro/barato, sino de la CANTIDAD de elementos. Ejemplo: un triciclo (simple) frente a un avión (complejo)."
  },
  {
    id: "conceptualizacion", domain: "verbal", name: "Conceptualización",
    teoria: "Te describen algo y tenés que resumirlo en UNA palabra (un concepto). Buscá el término que engloba toda la descripción. Ejemplo: 'compartir sin esperar nada a cambio' → generosidad. Descartá palabras que solo cubren una parte."
  },
  {
    id: "orden_desorden", domain: "verbal", name: "Orden y desorden",
    teoria: "Fijate si las cosas están organizadas (orden) o regadas (desorden), o si cambian de un estado al otro. Pistas de orden: 'clasificado', 'cada cosa en su lugar'. Pistas de desorden: 'amontonado', 'regado'. A veces preguntan por el cambio: del desorden al orden, o al revés."
  },
  {
    id: "orden_temporal", domain: "verbal", name: "Orden temporal",
    teoria: "Es la SECUENCIA en el tiempo: qué pasa primero, después y al final. Pistas: 'primero', 'luego', 'antes de', 'después', 'finalmente'. Si piden lo que ocurre 'justo antes' o 'justo después', ubicá el evento vecino en la fila."
  },
  {
    id: "esencia", domain: "verbal", name: "Esencia (lo propio)",
    teoria: "La esencia es lo PROPIO de algo, lo que lo caracteriza. Muchas veces te dan la esencia de un caso y piden la de otro parecido: mantené la misma idea. Ejemplo: si lo propio de un ave es 'tener alas y volar', lo propio de un pez es 'tener aletas y nadar'."
  },
  {
    id: "perspectiva", domain: "verbal", name: "Perspectiva",
    teoria: "Un mismo hecho se ve distinto según QUIÉN lo mire. La lluvia es buena para el agricultor y molesta para el viajero. La respuesta correcta suele decir que la visión depende del observador, o repetir la idea sin cambiar su sentido."
  },
  {
    id: "idea_implicita", domain: "verbal", name: "Idea implícita",
    teoria: "Lo implícito NO está escrito, pero se DEDUCE con seguridad del texto. No inventes ni exageres. Preguntate: ¿qué tiene que ser cierto para que esta frase tenga sentido? Esa deducción mínima y segura es la respuesta."
  },
  {
    id: "idea_principal", domain: "verbal", name: "Idea principal / tema",
    teoria: "Es de qué trata TODO el texto, no un detalle. Si el texto enumera varias cosas de algo, la idea principal suele ser 'la importancia / los beneficios / la clasificación de…'. Buscá la opción más general que cubra todo sin quedarse corta ni pasarse."
  },
  {
    id: "parafrasis", domain: "verbal", name: "Paráfrasis",
    teoria: "Parafrasear es decir lo MISMO con otras palabras, sin cambiar el sentido. La opción correcta es equivalente al texto. Descartá las que invierten la idea, la exageran o la contradicen, aunque usen palabras parecidas a las del texto."
  },
  {
    id: "proposiciones", domain: "verbal", name: "Proposiciones (deducción)",
    teoria: "Te dan varias proposiciones (I, II, III) y evaluás cada una por separado: ¿se deduce del texto, lo contradice o es ajena? Marcá solo las que se siguen con certeza. Una proposición que dice lo contrario del texto nunca se deduce de él."
  },

  /* ---------------- RAZONAMIENTO MATEMÁTICO ---------------- */
  {
    id: "aritmetica", domain: "math", name: "Operaciones aritméticas",
    teoria: "Operaciones con números (enteros, fracciones y decimales). El ORDEN importa: primero los paréntesis, luego × y ÷ (de izquierda a derecha) y al final + y −. Con fracciones, buscá común denominador antes de sumar o restar.",
    svg: '<svg viewBox="0 0 280 96" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="48" cy="48" r="30" fill="rgba(77,163,255,.10)" stroke="var(--math)" stroke-width="2"/><path d="M48 48 L48 18 A30 30 0 0 1 74 63 Z" fill="var(--math)" opacity=".55"/><text x="48" y="92" text-anchor="middle" fill="currentColor" font-size="11">2/5</text><text x="100" y="34" fill="currentColor" font-size="12">1) ( ) paréntesis</text><text x="100" y="54" fill="currentColor" font-size="12">2) × y ÷</text><text x="100" y="74" fill="currentColor" font-size="12">3) + y −</text></svg>'
  },
  {
    id: "mcm_mcd", domain: "math", name: "MCM y MCD",
    teoria: "MCM (mínimo común múltiplo) = 'cuándo vuelven a coincidir' (buses que salen juntos, luces que parpadean). MCD (máximo común divisor) = 'el reparto más grande sin que sobre' (cortar en partes iguales). Descomponé en factores primos: el MCM toma todos los factores con su mayor exponente; el MCD, solo los comunes con el menor."
  },
  {
    id: "relaciones_orden", domain: "math", name: "Relaciones numéricas y de orden",
    teoria: "Comparar y ordenar cantidades (mayor, menor, igual). Para fracciones y decimales, pasalos todos a decimal y compará. En problemas con personas, armá una cadena: si A > B y B > C, entonces A > B > C."
  },
  {
    id: "conteo", domain: "math", name: "Conteo intuitivo",
    teoria: "Contar posibilidades o el 'peor caso'. En '¿cuántos saco para asegurar…?', pensá en lo PEOR que puede pasar antes de cumplir la condición y sumá uno. Para combinar opciones, multiplicá (3 camisas × 2 pantalones = 6 combinaciones)."
  },
  {
    id: "permutaciones", domain: "math", name: "Permutaciones",
    teoria: "Se usan cuando importa el ORDEN. Ordenar n cosas distintas = n! = n·(n−1)·…·1 (3 cosas = 6, 4 cosas = 24). Si elegís y ordenás r de n (un capitán y un subcapitán), multiplicá n·(n−1)·… usando r factores."
  },
  {
    id: "geometria", domain: "math", name: "Geometría",
    teoria: "Perímetro = contorno (sumá todos los lados). Áreas: rectángulo = base × altura; cuadrado = lado²; triángulo = base × altura ÷ 2. Círculo: perímetro = 2·π·r y área = π·r². Usá π ≈ 3,14 o 22/7 según indique el ítem.",
    svg: '<svg viewBox="0 0 280 110" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="16" y="20" width="78" height="46" rx="3" fill="rgba(77,163,255,.10)" stroke="var(--math)" stroke-width="2"/><text x="55" y="80" text-anchor="middle" fill="currentColor" font-size="11">base (b)</text><text x="10" y="46" fill="currentColor" font-size="11">h</text><text x="120" y="32" fill="currentColor" font-size="12">rectángulo: b × h</text><text x="120" y="54" fill="currentColor" font-size="12">cuadrado: lado²</text><text x="120" y="76" fill="currentColor" font-size="12">triángulo: b × h ÷ 2</text><text x="120" y="98" fill="currentColor" font-size="12">círculo: π · r²</text></svg>'
  },
  {
    id: "sucesiones", domain: "math", name: "Sucesiones",
    teoria: "Buscá la REGLA que conecta los números. Si suman lo mismo (4, 7, 10…) es aritmética. Si multiplican (2, 6, 18…) es geométrica. Otras crecen con diferencias que aumentan (2, 3, 5, 8, 12 → +1, +2, +3, +4) o son cuadrados (1, 4, 9, 16). Encontrá el patrón y seguilo.",
    svg: '<svg viewBox="0 0 280 70" fill="none" xmlns="http://www.w3.org/2000/svg"><g font-size="13" fill="currentColor"><circle cx="30" cy="42" r="16" fill="rgba(46,230,166,.12)" stroke="var(--brand)" stroke-width="2"/><text x="30" y="47" text-anchor="middle">4</text><circle cx="105" cy="42" r="16" fill="rgba(46,230,166,.12)" stroke="var(--brand)" stroke-width="2"/><text x="105" y="47" text-anchor="middle">7</text><circle cx="180" cy="42" r="16" fill="rgba(46,230,166,.12)" stroke="var(--brand)" stroke-width="2"/><text x="180" y="47" text-anchor="middle">10</text><circle cx="252" cy="42" r="16" fill="rgba(46,230,166,.12)" stroke="var(--brand)" stroke-width="2"/><text x="252" y="47" text-anchor="middle">13</text></g><g font-size="11" fill="var(--brand)"><text x="67" y="18" text-anchor="middle">+3</text><text x="142" y="18" text-anchor="middle">+3</text><text x="216" y="18" text-anchor="middle">+3</text></g></svg>'
  },
  {
    id: "datos_probabilidad", domain: "math", name: "Datos y probabilidad",
    teoria: "Promedio = suma de los valores ÷ cantidad de valores. Probabilidad = casos a favor ÷ casos totales (siempre entre 0 y 1). 'Más probable' = el que tiene más casos. En tablas, leé con calma los totales, máximos y mínimos antes de responder.",
    svg: '<svg viewBox="0 0 280 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40 30 h44 l8 50 a30 30 0 0 1 -60 0 Z" fill="rgba(255,159,67,.10)" stroke="var(--streak)" stroke-width="2"/><circle cx="50" cy="60" r="7" fill="var(--danger)"/><circle cx="70" cy="58" r="7" fill="var(--math)"/><circle cx="60" cy="74" r="7" fill="var(--danger)"/><text x="120" y="50" fill="currentColor" font-size="12">P = casos a favor</text><line x1="122" y1="58" x2="246" y2="58" stroke="currentColor" stroke-width="1"/><text x="140" y="74" fill="currentColor" font-size="12">casos totales</text></svg>'
  },
  {
    id: "algebra_notacion", domain: "math", name: "Notación algebraica",
    teoria: "Traducir frases a símbolos. 'El doble de un número' = 2x; 'aumentado en 5' = +5; 'el triple menos 200' = 3x−200; 'dentro de 4 años' = n+4. Cuidado con los paréntesis: 'el doble de (un número más 5)' = 2(x+5), que es distinto de 2x+5."
  },
  {
    id: "algebra_relaciones", domain: "math", name: "Relaciones algebraicas y paridad",
    teoria: "Igualdades, desigualdades y par/impar. Reglas útiles: par × cualquiera = par; impar × impar = impar; impar + impar = par. Si un producto es impar, los dos factores son impares. Para despejar (x + 3 = 10), pasá lo que estorba al otro lado: x = 10 − 3 = 7."
  },
  {
    id: "unidades_medida", domain: "math", name: "Unidades de medida",
    teoria: "Convertí con cuidado: 1 kg = 1000 g, 1 km = 1000 m, 1 L = 1000 ml, 1 h = 60 min. Velocidad = distancia ÷ tiempo (usando las mismas unidades). Con horas y minutos, sumá por separado y convertí 60 min en 1 h cuando se pase."
  },
  {
    id: "razon_proporcion", domain: "math", name: "Razón y proporción",
    teoria: "Regla de tres. DIRECTA: si una sube, la otra también (más arroz → más agua). INVERSA: si una sube, la otra baja (más obreros → menos días; multiplicá obreros × días y mantené ese total constante). Planteá la relación y resolvé.",
    svg: '<svg viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="var(--math)" stroke-width="2"><rect x="20" y="30" width="20" height="20" fill="rgba(77,163,255,.18)"/><rect x="44" y="30" width="20" height="20" fill="rgba(77,163,255,.18)"/></g><text x="84" y="46" fill="currentColor" font-size="16">:</text><g stroke="var(--brand)" stroke-width="2"><rect x="100" y="30" width="20" height="20" fill="rgba(46,230,166,.18)"/><rect x="124" y="30" width="20" height="20" fill="rgba(46,230,166,.18)"/><rect x="148" y="30" width="20" height="20" fill="rgba(46,230,166,.18)"/></g><text x="190" y="46" fill="currentColor" font-size="13">razón 2 : 3</text></svg>'
  }
];

/* Helpers de temario */
window.PAA_TOPIC_BY_ID = window.PAA_TOPICS.reduce((m, t) => (m[t.id] = t, m), {});
window.PAA_DOMAINS = {
  verbal: { name: "Razonamiento verbal", short: "Verbal", color: "var(--verbal)" },
  math: { name: "Razonamiento matemático", short: "Matemático", color: "var(--math)" }
};
