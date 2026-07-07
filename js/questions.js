window.PAA_QUESTIONS = [
  {
    id: "q_pdf1_01",
    domain: "verbal",
    topic: "idea_opuesta",
    dif: 3,
    stem: "Un periodo de la historia se destaca particularmente por dos características: la mezcla de elementos disímiles y la exageración como estrategia ante el temor a la existencia de la nada.",
    q: "¿Cuál de las siguientes opciones se opone al texto anterior?",
    opts: [
      "Este periodo se caracterizó, en parte, por la diversidad de sus componentes.",
      "Este periodo carece de características como el equilibrio y la armonía.",
      "Este periodo utiliza la exuberancia en un momento de crisis y miedos.",
      "Este periodo propone una idea de lo bello basada en la simetría."
    ],
    ans: 3,
    exp: "El texto afirma que el periodo se caracteriza por la **mezcla de elementos disímiles** (cosas muy diferentes entre sí, es decir, caos o desorden) y la **exageración**.\n\nPara encontrar la idea que se OPONE, debemos buscar conceptos contrarios. La opción D habla de un concepto de belleza basado en la **simetría**, que es el opuesto directo a la mezcla desordenada y exagerada de elementos disímiles. Las demás opciones reafirman o parafrasean las ideas del texto (diversidad, falta de equilibrio, exuberancia).\n\n**Tip Élite:** Cuando te pidan la idea *opuesta*, identifica primero las palabras clave del texto original (disímiles, exageración) y busca sus antónimos directos (simetría, equilibrio) en las opciones."
  },
  {
    id: "q_pdf1_02",
    domain: "math",
    topic: "ciclos",
    dif: 3,
    stem: "Andrés tiene tres pares de zapatos, cada uno de un estilo diferente: P, T y R. Para decidir cuál usar, sigue un orden que se repite cada tres días:\n\n- Día 1: estilo P.\n- Día 2: estilo T.\n- Día 3: estilo R.\n- Día 4: estilo P.\n\nY así sucesivamente, los días siguientes. El día 1 fue lunes.",
    q: "¿Qué día de la semana será el día 332 y qué par de zapatos deberá usar Andrés?",
    opts: [
      "Será un martes y usará los zapatos estilo T.",
      "Será un martes y usará los zapatos estilo R.",
      "Será un miércoles y usará los zapatos estilo T.",
      "Será un miércoles y usará los zapatos estilo R."
    ],
    ans: 2,
    exp: "Este es un problema clásico de **ciclos** superpuestos. Vamos a resolverlo en dos partes:\n\n1. **Los zapatos (ciclo de 3 días):**\nEl patrón se repite cada 3 días. Dividimos 332 entre 3. Sabemos que 330 es múltiplo de 3 (330 ÷ 3 = 110), por lo que sobran 2 (el residuo es 2). Un residuo de 2 significa que cae en el **Día 2** del ciclo, es decir, el estilo **T**.\n\n2. **El día de la semana (ciclo de 7 días):**\nEl Día 1 es lunes. Para llegar al Día 332, han pasado 331 días. Dividimos 331 entre 7. Sabemos que 7 × 40 = 280, y 7 × 7 = 49 (280 + 49 = 329). El residuo de 331 ÷ 7 es 2. Si avanzamos 2 días desde el lunes (martes, miércoles), caemos en **miércoles**.\n\nCombinando ambas partes: será miércoles y usará zapatos estilo T.\n\n**Tip Élite:** Para los días de la semana, siempre réstale 1 al número de día buscado si el Día 1 ya está definido. Aquí: 332 - 1 = 331 días transcurridos. Divide eso entre 7 y suma el residuo al día inicial."
  },
  {
    id: "q_pdf1_03",
    domain: "verbal",
    topic: "idea_principal",
    dif: 3,
    stem: "En la prehistoria, el trabajo de las personas iba mucho más allá de lo que cree la sociedad actual. Precisamente, el análisis de los huesos de seres humanos prehistóricos sugiere que estos realizaban una amplia gama de tareas como plantar, labrar la tierra, cosechar manualmente, buscar comida y agua, transportar productos e, incluso, convertir fibras en textiles con el fin de confeccionar vestimentas.",
    q: "¿Cuál de las siguientes opciones es la idea principal del texto anterior?",
    opts: [
      "Los seres humanos prehistóricos tenían mucha resistencia.",
      "Los seres humanos prehistóricos tenían una vida muy difícil.",
      "Los seres humanos prehistóricos realizaban actividades complejas.",
      "Los seres humanos prehistóricos realizaban labores con más empeño."
    ],
    ans: 2,
    exp: "La idea principal debe englobar todo lo que el texto describe sin salir de sus límites.\n\nEl texto enumera una serie de actividades avanzadas (plantar, convertir fibras en textiles, etc.) para demostrar que el trabajo iba *mucho más allá* de lo que solemos creer. Esto se resume perfectamente en que realizaban **actividades complejas**.\n\nLas opciones A y B pueden parecer deducciones lógicas, pero el texto no se centra en si resistían mucho o si su vida era triste/difícil, sino en la variedad y complejidad de sus tareas. La opción D introduce la palabra 'empeño' que implica una comparación de actitud que el texto nunca hace.\n\n**Tip Élite:** La idea principal es como un paraguas que cubre toda la información del texto. Si una opción solo menciona una gotita (un detalle), o inventa lluvia que no hay (información externa), descártala."
  },
  {
    id: "q_pdf1_04",
    domain: "math",
    topic: "sucesiones",
    dif: 3,
    stem: "Considere las siguientes secuencias de números:\nSecuencia I: 1, 4, 7, 10, 13, ...\nSecuencia II: 1, 2, 4, 7, 11, ...",
    q: "¿Cuál de los siguientes números está en ambas secuencias?",
    opts: [
      "34",
      "37",
      "40",
      "43"
    ],
    ans: 1,
    exp: "Para resolver esto, debemos identificar el patrón de cada secuencia y extenderlas hasta alcanzar los valores de las respuestas.\n\n- **Secuencia I:** Aumenta de 3 en 3 (1, 4, 7, 10, 13...). Si seguimos sumando 3, llegaremos a: 16, 19, 22, 25, 28, 31, 34, 37, 40, 43.\n- **Secuencia II:** Aumenta sumando un número progresivo (+1, +2, +3, +4...). Sigamos el patrón a partir del 11:\n   11 + 5 = 16\n   16 + 6 = 22\n   22 + 7 = 29\n   29 + 8 = 37\n   37 + 9 = 46\n\nEl número que coincide y que aparece en las opciones es el **37**.\n\n**Tip Élite:** Cuando las opciones son números relativamente pequeños (menores a 50), es mucho más rápido y seguro escribir los siguientes 5 o 6 términos a mano que intentar formular una ecuación compleja."
  },
  {
    id: "q_pdf1_05",
    domain: "verbal",
    topic: "idea_opuesta",
    dif: 3,
    stem: "El concepto de biofilia parte de una teoría que concibe un vínculo muy estrecho entre el ser humano y la naturaleza. Según estos postulados, la humanidad necesita estar en contacto con la naturaleza, pues a lo largo de su evolución ha convivido con plantas y animales. Por lo tanto, establecer estas relaciones permite el equilibrio mental y la felicidad de las personas. En los últimos años, esta teoría ha tenido un impacto en la arquitectura, disciplina que se ha preocupado por diseñar estructuras amigables con la naturaleza.",
    q: "¿Cuál de las siguientes opciones se opone al texto anterior?",
    opts: [
      "El ser humano se ha adaptado a vivir armoniosamente con los demás seres vivos.",
      "La biofilia establece espacios claramente segregados entre seres humanos y animales.",
      "La biofilia promueve un ambiente urbano centrado en un uso práctico de los recursos.",
      "El bienestar de las personas se basa en la exposición a distintos elementos ambientales."
    ],
    ans: 1,
    exp: "El texto define la biofilia como un **vínculo estrecho** y de convivencia entre el ser humano y la naturaleza, buscando el contacto y la integración (incluso en la arquitectura).\n\nLa opción B afirma que la biofilia establece espacios **claramente segregados** (separados o aislados) entre humanos y animales. Esto es exactamente lo contrario a convivir o tener un vínculo estrecho.\n\n**Tip Élite:** 'Segregar' significa separar o marginar. Conocer vocabulario preciso te regala estas preguntas al instante. Siempre busca la opción que choque frontalmente con la tesis del autor."
  },
  {
    id: "q_pdf1_06",
    domain: "verbal",
    topic: "parafrasis",
    dif: 3,
    stem: "Una raza de perro tiene el color ideal para mezclarse con el ambiente donde trabaja. El camuflaje y el sigilo son una parte importante de su quehacer. Sus colores, matices de café, el blanco y el negro, se combinan con las hojas secas, la maleza del bosque y los troncos de los árboles. Sin embargo, el color de la cola es llamativo, lo cual permite que los humanos siempre encuentren al perro con facilidad; así, humano y perro conforman un equipo de trabajo eficiente.",
    q: "¿Cuál de las siguientes opciones es una idea del texto anterior expresada con otras palabras?",
    opts: [
      "La función de los perros es trabajar.",
      "La aptitud del perro y sus colores están relacionados.",
      "La función sugerida en el texto solo la cumple una raza de perro.",
      "Los perros deben tener colores especiales para realizar su trabajo."
    ],
    ans: 1,
    exp: "El texto explica detalladamente cómo los distintos colores del perro (camuflaje en el cuerpo para sigilo, color llamativo en la cola para que el dueño lo vea) le permiten hacer su trabajo de forma eficiente.\n\nEsto se resume perfectamente en la opción B: **La aptitud** (capacidad para realizar bien su función) y **sus colores** están directamente relacionados.\n\nDescartamos la A por ser demasiado general y obvia (no capta la esencia del texto). Descartamos la C porque asume que 'solo' esta raza puede hacerlo, lo cual es inventar información. Descartamos la D por ser extremista con la palabra 'deben'.\n\n**Tip Élite:** Las opciones que usan palabras absolutas como 'solo', 'siempre', 'ninguno' o 'deben' suelen ser falsas porque exageran lo expuesto en el texto original."
  },
  {
    id: "q_pdf1_07",
    domain: "verbal",
    topic: "parafrasis",
    dif: 3,
    stem: "El metabolismo se refiere a todas las acciones químicas que ocurren en un ser vivo para conservar su funcionamiento. El metabolismo básicamente actúa de dos formas: primero, puede destruir los nutrientes para producir la energía necesaria para mantener vivo y activo al cuerpo; segundo, puede formar compuestos químicos complejos usados para construir partes del cuerpo y otros propósitos.",
    q: "¿Cuál de las siguientes opciones es una idea del texto con otras palabras?",
    opts: [
      "La energía garantiza la formación de compuestos químicos.",
      "Construir las partes del cuerpo requiere una buena alimentación.",
      "El funcionamiento del metabolismo excluye las acciones químicas.",
      "Estar vivo y poseer las partes del cuerpo son consecuencias metabólicas."
    ],
    ans: 3,
    exp: "Analicemos la estructura del texto: nos dice que el metabolismo hace dos cosas. 1) Produce energía para **mantener vivo** al cuerpo. 2) Forma compuestos para **construir partes del cuerpo**.\n\nLa opción D expresa exactamente esto: 'estar vivo' (acción 1) y 'poseer las partes del cuerpo' (acción 2) son los resultados o **consecuencias metabólicas**.\n\nLa opción A mezcla ambas acciones incorrectamente. La B es un conocimiento general que no se deduce directamente del texto (el texto habla de metabolismo, no de la calidad de la alimentación). La C contradice el texto directamente.\n\n**Tip Élite:** Cuando un texto te da una lista de funciones o efectos (primero esto, segundo lo otro), la paráfrasis correcta suele ser una oración que agrupa todos esos elementos de forma elegante."
  },
  {
    id: "q_pdf1_08",
    domain: "verbal",
    topic: "parafrasis",
    dif: 3,
    stem: "El chingolo macho es un ave cuyo canto no es innato, sino aprendido. Los juveniles aprenden la melodía de sus padres o de otros adultos, en un proceso que dura aproximadamente tres meses. En una reserva natural de Buenos Aires, un grupo de investigadores reintrodujo una canción desaparecida del repertorio local mediante un tutor robótico. Este dispositivo reproducía el canto extinto durante las primeras horas del día, imitando la forma en que los adultos enseñan a los jóvenes. Sorprendentemente, algunos chingolos jóvenes aprendieron e incorporaron la melodía sintética a su repertorio, incluso adaptándola ligeramente. El experimento sugiere que la cultura vocal en aves puede conservarse y reintroducirse si se emplean tecnologías adecuadas durante el periodo de aprendizaje.",
    q: "¿Cuál de las siguientes opciones es una idea del texto anterior con otras palabras?",
    opts: [
      "El canto de los chingolos es hereditario y se transmite sin intervención externa.",
      "El experimento probó que los chingolos prefieren melodías modernas a las tradicionales.",
      "Algunos chingolos jóvenes fueron capaces de aprender una canción extinta gracias a un medio artificial.",
      "Las aves pueden incorporar melodías nuevas a su canto solamente si las escuchan desde que nacen."
    ],
    ans: 2,
    exp: "El texto relata el experimento donde aves jóvenes aprendieron una canción que ya no existía, utilizando un robot (tutor artificial) que la reproducía.\n\nLa opción C dice exactamente esto con sinónimos precisos: 'aprender una canción extinta' (desaparecida del repertorio) 'gracias a un medio artificial' (el tutor robótico).\n\nLas demás opciones son trampas obvias: la A contradice la primera línea (dice que NO es genético, por ende no es hereditario). La B inventa que 'prefieren' melodías modernas. La D usa la palabra absolutista 'solamente' y se inventa lo de 'desde que nacen' (el texto dice 3 meses).\n\n**Tip Élite:** La paráfrasis perfecta es un espejo de la idea original que utiliza ropa distinta (sinónimos). Si la opción se pone creativa e inventa detalles que 'suenan bonitos' pero no están en el texto, descártala."
  },
  {
    id: "q_pdf1_09",
    domain: "math",
    topic: "ecuaciones",
    dif: 3,
    stem: "Álvaro y sus amigos compraron 7 cajas con 24 bebidas naturales. Cada uno tomaba 3 bebidas al día durante 14 días. Álvaro dejó de tomar refrescos. Al final sobraron 27 bebidas.",
    q: "¿Cuántos días tomó refrescos Álvaro?",
    opts: [
      "4",
      "5",
      "6",
      "7"
    ],
    ans: 1,
    exp: "Vamos a resolverlo paso a paso:\n\n1. **Total de bebidas:** Compraron 7 cajas × 24 = 168 bebidas.\n2. **Bebidas consumidas:** Si sobraron 27, entonces se tomaron 168 - 27 = 141 bebidas.\n3. **El consumo esperado:** 'Álvaro y sus amigos'. Digamos que son $N$ personas en total. Si todos tomaran 3 bebidas diarias por 14 días, consumirían $N \\times 3 \\times 14 = 42 \\times N$ bebidas.\n4. **El cálculo de Álvaro:** Sabemos que los amigos de Álvaro sí tomaron durante los 14 días. Álvaro tomó durante $X$ días (que es lo que buscamos).\n   Si deducimos la cantidad de personas tanteando:\n   - Si solo fuera 1 amigo (total 2 personas): El amigo toma $42$. Faltan $99$ bebidas para 141, Álvaro no pudo tomar tanto.\n   - Si fueran 2 amigos (total 3 personas): Los amigos toman $42 \\times 2 = 84$. Faltan $57$ bebidas. Álvaro (3 diarias) habría tomado por 19 días, pero el viaje fue de 14.\n   - Si fueran **3 amigos (total 4 personas):** Los amigos toman $42 \\times 3 = 126$ bebidas. Faltan $141 - 126 = 15$ bebidas. \n\nEsas $15$ bebidas las tomó Álvaro. A razón de 3 por día, $15 \\div 3 = 5$ días.\n\n**Tip Élite:** Cuando hay variables ocultas (cantidad de amigos), usa el total consumido (141) y divídelo entre el consumo completo por persona (42) para aproximar. $141 \\div 42 = 3.35$. Eso te dice casi de inmediato que hay 3 personas que completaron el ciclo y una que se quedó a medias."
  },
  {
    id: "q_pdf1_10",
    domain: "verbal",
    topic: "inferencia",
    dif: 3,
    stem: "Cierto insecto ha evolucionado de manera que sus características físicas le permiten huir u ocultarse de sus depredadores: sus largas patas traseras le facilitan dar saltos, sus alas son útiles para volar distancias cortas y sus colores lo ocultan del entorno. Las hembras pueden poner hasta diez mil huevos, lo cual aumenta las posibilidades de sobrevivir de su descendencia.",
    q: "¿Cuál de las siguientes afirmaciones se infiere del texto en relación con el insecto mencionado?",
    opts: [
      "Este insecto es un animal débil por su tamaño.",
      "La pervivencia de este insecto ha motivado cambios en su apariencia.",
      "Este insecto es una especie abundante debido a su capacidad reproductiva.",
      "Las hembras de estos insectos han experimentado más modificaciones físicas que los machos."
    ],
    ans: 1,
    exp: "El texto explica que el insecto 'ha evolucionado' desarrollando características (patas, alas, colores) para 'ocultarse o huir' de depredadores y aumentar 'las posibilidades de sobrevivir' de su especie.\n\nInferimos lógicamente que la necesidad de **pervivencia** (supervivencia a lo largo del tiempo) es lo que ha motivado estos **cambios en su apariencia** (su evolución). \n\nNo podemos elegir la A porque no habla de su tamaño. Tampoco la C porque, aunque pone muchos huevos, no sabemos si eso la hace 'abundante' (tal vez se los comen a casi todos). Y la D asume diferencias entre machos y hembras que no se mencionan.\n\n**Tip Élite:** Inferir es llegar a la causa o el efecto directo. Si A (necesidad de sobrevivir) produce B (evolución de alas y colores), la inferencia directa es que la supervivencia dictó la apariencia."
  },
  {
    id: "q_pdf1_11",
    domain: "math",
    topic: "combinatoria",
    dif: 3,
    stem: "Isabel desea levantar un peso de 18 kg en una máquina de ejercicio. Esta máquina solo tiene pesas de 3 kg, 4 kg y 5 kg. Ella no usó pesas de 3 kg.",
    q: "¿Cuántas pesas usó Isabel?",
    opts: [
      "3",
      "4",
      "5",
      "6"
    ],
    ans: 1,
    exp: "Si Isabel no usó las pesas de 3 kg, debe sumar exactamente 18 kg usando únicamente pesas de 4 kg y 5 kg.\n\nLlamemos $X$ a la cantidad de pesas de 4 kg y $Y$ a la cantidad de pesas de 5 kg. \nLa ecuación es: $4X + 5Y = 18$\n\nProbemos los valores posibles para $Y$ (pesas de 5 kg):\n- Si $Y = 0$, restan 18 kg. (18 no es múltiplo de 4).\n- Si $Y = 1$ (5 kg), restan 13 kg. (13 no es múltiplo de 4).\n- Si $Y = 2$ (10 kg), restan 8 kg. (¡8 SÍ es múltiplo de 4! Serían dos pesas de 4 kg).\n- Si $Y = 3$ (15 kg), restan 3 kg. (Imposible con pesas de 4 kg).\n\nPor lo tanto, la única combinación posible es usar **dos pesas de 5 kg** y **dos pesas de 4 kg**. \nEn total usó: 2 + 2 = **4 pesas**.\n\n**Tip Élite:** En ecuaciones diofánticas simples como esta, el método de tanteo sistemático empezando por la pesa más grande te lleva a la respuesta en menos de 10 segundos."
  },
  {
    id: "q_pdf1_12",
    domain: "verbal",
    topic: "inferencia",
    dif: 3,
    stem: "Excavaciones arqueológicas y profundos estudios filológicos evidencian que gran parte de los dioses superiores de la mitología griega son adaptados de otras culturas.",
    q: "De acuerdo con el texto anterior, ¿cómo pueden definirse los dioses griegos en una sola palabra?",
    opts: [
      "Como foráneos.",
      "Como auténticos.",
      "Como autóctonos.",
      "Como imaginarios."
    ],
    ans: 0,
    exp: "El texto afirma que los dioses griegos fueron **adaptados de otras culturas**, es decir, vienen de afuera, no son originarios de Grecia.\n\nLa palabra exacta para definir algo que viene de afuera o de otro lugar es **foráneo**. 'Autóctono' es exactamente lo contrario (originario del mismo lugar). 'Auténticos' o 'imaginarios' no capturan el punto central de que vinieron de *otras culturas*.\n\n**Tip Élite:** Expandir tu vocabulario es tu mejor arma en la PAA. Foráneo = extranjero. Autóctono = local. Conocer esta diferencia te da el punto automáticamente."
  },
  {
    id: "q_pdf1_13",
    domain: "verbal",
    topic: "idea_opuesta",
    dif: 3,
    stem: "Durante años se creyó que el megalodón se parecía al gran tiburón blanco, pero nuevas investigaciones sugieren algo diferente. Al no haberse encontrado un esqueleto completo, los científicos han tenido que usar vértebras y comparaciones con otras especies para reconstruir su posible aspecto. A partir de una columna vertebral fósil, un grupo de investigadores propuso que el megalodón era más largo y delgado de lo que se pensaba. Estiman que algunos ejemplares podrían haber alcanzado hasta 24 metros. Según los análisis, un cuerpo más delgado habría sido más eficiente para nadar en el océano, aunque aún no hay pruebas definitivas.",
    q: "¿Cuál de las siguientes opciones es una idea opuesta al texto anterior?",
    opts: [
      "Las comparaciones con otras especies ayudaron a estimar su forma corporal.",
      "El aspecto real del megalodón aún es incierto por falta de fósiles completos.",
      "La nueva hipótesis propone que el megalodón era más extenso que el tiburón blanco.",
      "Las nuevas estimaciones proponen que el megalodón era menos esbelto de lo que se pensaba."
    ],
    ans: 3,
    exp: "El texto expone las nuevas teorías de los investigadores, que proponen que el megalodón era **'más largo y delgado'** de lo que se creía.\n\nBuscamos la idea OPUESTA. La opción D afirma que era **'menos esbelto'**. 'Esbelto' es sinónimo de delgado, por lo que 'menos esbelto' significa 'menos delgado' o más gordo, contradiciendo directamente la hipótesis del texto.\n\nLas opciones A, B y C son afirmaciones que concuerdan perfectamente con la lectura.\n\n**Tip Élite:** Cuando busques la idea opuesta, presta muchísima atención a los adjetivos descriptivos en el texto (largo, delgado) y busca sus antónimos exactos en las respuestas."
  },
  {
    id: "q_pdf1_14",
    domain: "verbal",
    topic: "idea_opuesta",
    dif: 3,
    stem: "El canto del chingolo macho no es genético, sino aprendido. Cada individuo imita a su padre o a otro tutor adulto durante los primeros meses de vida. En una reserva natural en Buenos Aires, científicos usaron un dispositivo robótico para reintroducir una canción extinta en la población local. El tutor robótico reproducía la melodía durante las horas en que las aves jóvenes aprendían mejor. Algunos chingolos incorporaron esa canción a su repertorio y mostraron que el aprendizaje vocal puede ser estimulado con tecnología. Los investigadores sostienen que preservar la cultura vocal forma parte de la conservación de la biodiversidad.",
    q: "¿Cuál de las siguientes opciones es una idea opuesta al texto anterior?",
    opts: [
      "El canto aprendido es parte del repertorio vocal de los chingolos.",
      "La intervención científica permitió recuperar una melodía desaparecida.",
      "La introducción del canto mediante robótica requiere de la intervención de aves adultas.",
      "Algunos chingolos pueden incorporar melodías enseñadas por medio de un tutor artificial."
    ],
    ans: 2,
    exp: "El experimento consistió explícitamente en usar un **dispositivo robótico** que enseñó la canción a los chingolos jóvenes de forma autónoma. Es decir, reemplazó al ave adulta en el proceso de enseñanza.\n\nPor lo tanto, la opción C, que afirma que se **'requiere de la intervención de aves adultas'** para introducir el canto mediante robótica, es falsa y se opone directamente al éxito del experimento descrito en el texto.\n\n**Tip Élite:** Si un texto te describe un experimento tecnológico o artificial que reemplaza un proceso biológico, cualquier opción que diga que el proceso biológico original sigue siendo estrictamente 'requerido' será una contradicción u oposición."
  }
];
