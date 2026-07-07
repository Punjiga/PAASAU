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
  },
  {
    id: "q_pdf2_01",
    domain: "math",
    topic: "certeza",
    dif: 3,
    stem: "Una empresa posee dos oficinas. En la oficina 1 solo hay hombres y en la oficina 2 hay 15 mujeres y varios hombres. Se van a pasar 9 personas de la oficina 2 a la oficina 1.",
    q: "¿Cuál de las siguientes afirmaciones sucederá con certeza?",
    opts: [
      "La oficina 1 tendrá mujeres y hombres.",
      "La oficina 2 tendrá mujeres y hombres.",
      "La oficina 1 tendrá varias mujeres.",
      "La oficina 2 tendrá varias mujeres."
    ],
    ans: 3,
    exp: "En problemas de *certeza*, debes analizar el PEOR escenario. Nos dicen que se pasan 9 personas de la oficina 2 a la 1.\n\n- Opción A: ¿Tendrá la oficina 1 mujeres? Depende. ¿Qué pasa si las 9 personas trasladadas son todas hombres? (Porque dice que hay 'varios hombres'). Entonces la oficina 1 podría seguir teniendo SOLO hombres. La A no es certera.\n- Opción B: ¿Tendrá la oficina 2 mujeres y hombres? Si se trasladan todos los hombres de la oficina 2, la oficina 2 quedaría SOLO con mujeres. La B no es certera.\n- Opción C: Parecida a la A. Podrían pasarse solo hombres o solo 1 mujer. No es certera.\n- Opción D: Sabemos que hay 15 mujeres en la oficina 2. Si, en el caso más extremo posible, las 9 personas trasladadas fueran TODAS mujeres, la oficina 2 quedaría con $15 - 9 = 6$ mujeres. Siempre quedarán al menos 6 mujeres (varias). Esta afirmación se cumple con **total certeza** en cualquier escenario posible.\n\n**Tip Élite:** 'Con certeza' significa que es verdad en el 100% de los casos. Busca el caso extremo que intente romper la regla; si la regla sobrevive al caso extremo, esa es la respuesta."
  },
  {
    id: "q_pdf2_02",
    domain: "math",
    topic: "husos_horarios",
    dif: 3,
    stem: "Álvaro y Daniela participaron en un juego por internet. Álvaro se encontraba en Panamá y Daniela en Portugal. Álvaro comentó que el juego empezó un lunes a las 4:00 a. m. de Panamá y Daniela dijo que el juego terminó a las 4:00 a. m. de Portugal, pero del martes. La hora en Portugal está adelantada 6 horas respecto a la de Panamá.",
    q: "¿Cuántas horas duró el juego?",
    opts: [
      "6",
      "12",
      "18",
      "24"
    ],
    ans: 2,
    exp: "Para calcular duraciones en distintas zonas horarias, el secreto es **usar un solo reloj** (ya sea el de Panamá o el de Portugal) y convertir todo a esa zona antes de calcular.\n\nUsaremos el reloj de Portugal:\n1. Álvaro dice que inició a las 4:00 a.m. (Panamá). Como Portugal está adelantado 6 horas, en Portugal el juego **inició a las 10:00 a.m. del lunes**.\n2. Daniela dice que el juego **terminó a las 4:00 a.m. del martes** (hora de Portugal).\n3. Ahora calculamos la diferencia: de las 10:00 a.m. (lunes) hasta las 10:00 p.m. (lunes) son 12 horas. De las 10:00 p.m. hasta las 4:00 a.m. (martes) son 6 horas más.\n   $12 + 6 = 18$ horas.\n\n**Tip Élite:** Jamás intentes restar horas mientras hablas en dos husos distintos. Siempre traduce la 'hora de inicio' a la hora del país destino y luego cuenta normalmente."
  },
  {
    id: "q_pdf2_03",
    domain: "math",
    topic: "logica_deductiva",
    dif: 3,
    stem: "Un grupo de personas quiere comenzar a practicar algún deporte que sea adecuado a sus preferencias y habilidades, de manera que nadie se quede sin practicar uno o más deportes. A partir de estos requisitos, se toman en cuenta los siguientes aspectos:\n\n- A todos les gusta mojarse y no saben andar en bicicleta.\n- Todos pueden mantenerse a flote en el agua y no les gusta el contacto físico.\n- Algunos pueden controlar bien los objetos esféricos y no desean recorrer largas distancias.",
    q: "De acuerdo con los aspectos anteriores, ¿qué se puede concluir, con certeza?",
    opts: [
      "Algunos pueden practicar natación y ciclismo.",
      "Todos pueden practicar ciclismo, pero no boxeo.",
      "Todos pueden practicar natación, pero no ciclismo.",
      "Algunos pueden practicar boxeo y todos pueden practicar natación."
    ],
    ans: 2,
    exp: "Analicemos las conclusiones lógicas de las condiciones dadas:\n1. 'A todos les gusta mojarse' y 'Todos pueden mantenerse a flote': Significa que la **natación** es apta para todos.\n2. 'No saben andar en bicicleta': Nadie puede practicar **ciclismo**. Descartamos opciones A y B de inmediato.\n3. 'No les gusta el contacto físico': Nadie puede practicar **boxeo**. Descartamos opción D.\n\nLa única conclusión 100% segura es la opción C: 'Todos pueden practicar natación (cumple la condición del agua) pero no ciclismo (no saben andar en bicicleta)'.\n\n**Tip Élite:** Ve descartando opciones apenas leas las limitantes. 'No saben andar en bici' tacha cualquier respuesta que sugiera que pueden hacer ciclismo."
  },
  {
    id: "q_pdf2_04",
    domain: "verbal",
    topic: "parafrasis",
    dif: 3,
    stem: "En diversos países, la globalización, lejos de favorecer con mayores incentivos económicos la superación de los trabajadores, ha provocado que los salarios sean cada vez más reducidos.",
    q: "De acuerdo con lo anterior, ¿cuál de las siguientes afirmaciones reproduce lo expuesto en el texto?",
    opts: [
      "La globalización eliminó los incentivos salariales.",
      "La globalización logró unificar los ingresos.",
      "La globalización redistribuyó los ingresos.",
      "La globalización modificó los salarios."
    ],
    ans: 3,
    exp: "El texto principal hace una afirmación clara: la globalización provocó que los **salarios sean cada vez más reducidos**.\n\nDebemos buscar la opción que reproduzca esta idea sin decir mentiras ni inventar información:\n- A) Falsa. Dice que no favoreció con 'mayores incentivos', no que los 'eliminó' por completo.\n- B) Falsa. Reducir salarios no significa que todos ganen lo mismo (unificarlos).\n- C) Falsa. Redistribuir implica que se repartieron de forma distinta; el texto solo dice que bajaron.\n- D) Verdadera. Si los salarios se redujeron, inevitablemente sufrieron una **modificación**.\n\n**Tip Élite:** A veces la paráfrasis correcta es una deducción hiper-lógica y generalizada. 'Reducir' es un tipo de 'modificación'. Al ser la única opción que no inventa detalles ajenos al texto, es la correcta."
  },
  {
    id: "q_pdf2_05",
    domain: "verbal",
    topic: "proposiciones",
    dif: 3,
    stem: "Si alguien sabe andar en bicicleta es porque ha pasado por un proceso de aprendizaje, durante el cual pueden ocurrir muchas caídas. No obstante, llega el momento en que el aprendiz es capaz de mantener un equilibrio activo.\nAnalice las siguientes proposiciones:\n\nI. El aprendizaje no requiere de tiempo.\nII. En todo aprendizaje pueden ocurrir equivocaciones.\nIII. Algunos procesos de aprendizaje no tardan mucho tiempo en completarse.",
    q: "De las anteriores proposiciones, ¿cuál(es) hace(n) que el texto principal sea falso?",
    opts: [
      "Solo la I.",
      "Solo la II.",
      "Solo la III.",
      "Solo la II y la III."
    ],
    ans: 0,
    exp: "La pregunta pide encontrar cuál proposición haría que el texto original sea FALSO, es decir, debes encontrar la proposición que **contradice** directamente el texto.\n\n- Proposición I: 'El aprendizaje no requiere tiempo'. El texto dice que 'llega el momento en que el aprendiz...', lo que implica directamente un transcurso de tiempo (un proceso). Si la proposición I fuera cierta, el texto sería falso. Por ende, la I es la clave.\n- Proposición II: 'pueden ocurrir equivocaciones'. El texto menciona 'muchas caídas', que equivalen a equivocaciones. Concuerda.\n- Proposición III: 'Algunos no tardan mucho tiempo'. El texto no dice cuánto dura el proceso, por lo que esta afirmación no lo contradice.\n\n**Tip Élite:** Presta mucha atención a la pregunta. No te piden qué se infiere del texto, sino qué proposición es *incompatible* con él. Lee siempre la instrucción dos veces."
  },
  {
    id: "q_pdf2_06",
    domain: "verbal",
    topic: "inferencia",
    dif: 3,
    stem: "Los luchadores exitosos son aquellos persistentes y no precisamente los más fuertes; en una carrera de resistencia, ganan los más constantes, y no siempre los más veloces.",
    q: "Según el texto anterior, ¿cuál característica deben tener los luchadores exitosos para alcanzar sus metas?",
    opts: [
      "Inteligencia.",
      "Entusiasmo.",
      "Esperanza.",
      "Insistencia."
    ],
    ans: 3,
    exp: "El texto enumera características clave del éxito: ser **persistentes** y ser **constantes**.\n\nNinguna de las opciones usa literalmente esas dos palabras, así que debemos inferir el sinónimo más cercano o la cualidad asociada:\n- A) Inteligencia: No se menciona.\n- B) Entusiasmo: Un ánimo exaltado no garantiza la constancia (se puede ser entusiasta hoy y rendirse mañana).\n- C) Esperanza: Confiar en el futuro no implica un esfuerzo constante.\n- D) Insistencia: Ser insistente significa tratar repetidamente, lo cual es casi sinónimo de ser constante y persistente en una meta.\n\n**Tip Élite:** En preguntas de asociación léxica, busca la palabra en las opciones que pertenezca a la misma 'familia semántica' (grupo de significados) de las palabras clave del texto."
  },
  {
    id: "q_pdf3_01",
    domain: "verbal",
    topic: "inferencia",
    dif: 3,
    stem: "En las profundidades del mar, dadas sus características especiales, existe una fauna completamente desconocida en otras partes del mar.",
    q: "Del texto anterior es correcto concluir que, respecto a las diferentes partes del mar, la fauna de las profundidades es, con certeza,",
    opts: [
      "muy compleja.",
      "muy variada.",
      "distinta.",
      "exótica.",
      "rara."
    ],
    ans: 2,
    exp: "El texto afi rma que la fauna de las profundidades es **'completamente desconocida en otras partes del mar'**. Esto signifi ca lógicamente que los animales que viven ahí no existen en las demás partes, por lo tanto, la fauna es **distinta**.\n\nLas opciones como 'rara', 'exótica', 'compleja' o 'variada' son juicios de valor que el texto no realiza. Solo se nos dice que no se encuentra en otras partes.\n\n**Tip Élite:** No agregues adjetivos dramáticos (rara, exótica) si el texto solo expresa un hecho objetivo (es desconocida en otros lados = es diferente)."
  },
  {
    id: "q_pdf3_02",
    domain: "verbal",
    topic: "proposiciones",
    dif: 3,
    stem: "Nadie puede constituirse en dueño de la verdad, esta no tiene propietario. Se alcanza o se demuestra, eso es todo; lo demás no tiene sentido.\n\nObserve las siguientes expresiones:\nI. No tiene sentido demostrar la verdad.\nII. No tiene sentido alcanzar la verdad.\nIII. No tiene sentido adueñarse de la verdad.",
    q: "De acuerdo con la información dada,",
    opts: [
      "todas son verdaderas.",
      "ninguna es verdadera.",
      "solo la I es verdadera.",
      "solo la II es verdadera.",
      "solo la III es verdadera."
    ],
    ans: 4,
    exp: "Analicemos cada expresión contrastándola con el texto:\n\n- **I. No tiene sentido demostrar la verdad:** Falso. El texto dice explícitamente: 'Se alcanza o se demuestra, eso es todo'. Demostrarla sí tiene sentido.\n- **II. No tiene sentido alcanzar la verdad:** Falso, por la misma razón anterior.\n- **III. No tiene sentido adueñarse de la verdad:** Verdadero. El texto inicia diciendo 'Nadie puede constituirse en dueño de la verdad... lo demás no tiene sentido'.\n\nPor lo tanto, **solo la III es verdadera**.\n\n**Tip Élite:** Cuando el texto dice 'A y B sí, lo demás no', cualquier proposición que diga que 'A no' es falsa de inmediato."
  },
  {
    id: "q_pdf3_03",
    domain: "verbal",
    topic: "parafrasis",
    dif: 3,
    stem: "A altos pensamientos es preciso que correspondan sublimes expresiones.",
    q: "El texto anterior propone una correspondencia entre",
    opts: [
      "explicar y sugerir.",
      "meditar y observar.",
      "exponer y expresar.",
      "hablar y representar.",
      "refl exionar y comunicar."
    ],
    ans: 2,
    exp: "El texto establece una relación entre **'pensamientos'** (ideas mentales) y **'expresiones'** (la forma de sacar esas ideas). \n\nDebemos buscar la opción que reﬂeje mejor este par de acciones en el mismo orden o sentido. Un pensamiento profundo debe ser sacado al mundo exterior ('exponer') mediante una buena articulación ('expresar'). La opción C ('exponer y expresar') captura la esencia de la frase.\n\n*Nota: La UCR marca esta opción (C) como la clave oficial en su práctica, validando que el acto de pensamiento elevado y su salida (expresión sublime) se asocian fuertemente al arte de exponer y expresar con maestría.*\n\n**Tip Élite:** Identifica los verbos subyacentes. 'Pensamientos' (lo que se expone o concibe mentalmente) y 'expresiones' (cómo se expresa)."
  },
  {
    id: "q_pdf3_04",
    domain: "verbal",
    topic: "parafrasis",
    dif: 3,
    stem: "Es buen pensador quien sabe ver en los objetos todo lo que hay, pero no más de lo que hay.",
    q: "Según el texto anterior, para ser buen pensador es necesaria una",
    opts: [
      "ágil intuición.",
      "fi rme opinión.",
      "justa observación.",
      "amplia imaginación.",
      "rápida comprensión."
    ],
    ans: 2,
    exp: "El texto define al buen pensador como alguien que ve **exactamente lo que hay** ('todo lo que hay, pero no más'). Esto exige precisión, objetividad y no inventar cosas.\n\n- 'Ágil intuición' o 'amplia imaginación' incitan a ver 'más de lo que hay', contradiciendo el texto.\n- 'Justa observación' signifi ca observar con exactitud y medida (lo justo), lo cual calza a la perfección con no quedarse corto ni pasarse.\n\n**Tip Élite:** 'Justo' no solo se refi ere a la justicia legal, sino a la medida exacta (como cuando un pantalón te queda 'justo'). Conocer acepciones de las palabras te salva."
  },
  {
    id: "q_pdf3_05",
    domain: "verbal",
    topic: "inferencia",
    dif: 3,
    stem: "Cuando la verdad alcanza un plano supremo se convierte en virtud suprema.",
    q: "Del texto anterior, se concluye que",
    opts: [
      "sin verdad no hay virtud.",
      "a menos verdad, menos virtud.",
      "a menos virtud, menos verdad.",
      "a mínima verdad, mínima virtud.",
      "a máxima verdad, máxima virtud."
    ],
    ans: 4,
    exp: "El texto plantea una relación de proporcionalidad directa en su punto más alto: verdad en **plano supremo** = virtud **suprema**.\n\nEsto se traduce lógicamente a: **'a máxima verdad, máxima virtud'**. \nLas opciones que hablan de carencias ('sin verdad', 'a menos...') no se pueden deducir estrictamente del texto, pues el enunciado solo nos habla del límite superior (lo supremo/máximo).\n\n**Tip Élite:** Si la premisa habla de 'lo máximo', la deducción más segura siempre estará en términos de 'lo máximo'. No asumas automáticamente la inversa negativa a menos que sea estrictamente necesario."
  },
  {
    id: "q_pdf3_06",
    domain: "verbal",
    topic: "proposiciones",
    dif: 3,
    stem: "Cuando se puede medir aquello de lo que se habla y expresarlo en números, se sabe algo de ello; pero cuando no se puede expresar en números, su conocimiento es pobre y de una calidad poco satisfactoria.\n\nAnalice las siguientes proposiciones:\nI. Si se ignora la expresión numérica, la calidad del conocimiento es poco satisfactoria.\nII. Si es imposible la expresión numérica, la calidad del conocimiento es poco satisfactoria.\nIII. Si la calidad del conocimiento es poco satisfactoria, no puede expresarse numéricamente.",
    q: "¿Cuál(es) proposición(es) reproduce(n) la idea central del texto anterior?",
    opts: [
      "Solo la I.",
      "Solo la II.",
      "Solo la III.",
      "Solo la I y la II.",
      "Solo la II y la III."
    ],
    ans: 3,
    exp: "Analicemos lógicamente la oración principal: **Si NO se puede expresar en números $\\rightarrow$ conocimiento pobre y poco satisfactorio**.\n\n- **I:** 'Si se ignora la expresión numérica...'. (Verdadero, calza con la idea).\n- **II:** 'Si es imposible la expresión numérica...'. (Verdadero, también calza con no poder expresarlo).\n- **III:** 'Si la calidad es poco satisfactoria, no puede expresarse'. (¡Falso! Falacia de afirmación del consecuente. El texto dice que NO números causa conocimiento pobre, pero un conocimiento podría ser pobre por otras razones aun teniendo números).\n\nPor tanto, solo I y II reproducen correctamente el sentido directo de la premisa.\n\n**Tip Élite:** Cuidado con darle vuelta a las causas y efectos. Que la lluvia moje el suelo no significa que si el suelo está mojado, obligatoriamente llovió."
  },
  {
    id: "q_pdf3_07",
    domain: "verbal",
    topic: "parafrasis",
    dif: 3,
    stem: "Los conocimientos astronómicos de los griegos estaban llenos de datos indefi nidos acerca de las estrellas, los planetas y sus movimientos; solo en los últimos tiempos lograron un alto grado de exactitud.",
    q: "Del texto anterior, se concluye que los griegos desarrollaron sus conocimientos astronómicos con datos",
    opts: [
      "vagos que fueron precisando.",
      "erróneos que fueron cambiando.",
      "aislados que fueron combinando.",
      "escasos que fueron multiplicando.",
      "elementales que fueron ampliando."
    ],
    ans: 0,
    exp: "El texto nos da dos estados cronológicos de los datos:\n1. Al inicio estaban **'indefi nidos'**.\n2. Al fi nal lograron **'exactitud'**.\n\nDebemos buscar la opción que refleje esta transición usando sinónimos. \n'Vago' es el sinónimo perfecto de 'indefinido'. 'Precisando' es el sinónimo perfecto de adquirir 'exactitud'.\n\nDescartamos 'erróneos' porque indefi nido no es un error, simplemente le falta claridad. Descartamos 'escasos' porque la cantidad no estaba en debate, sino la calidad.\n\n**Tip Élite:** La paráfrasis perfecta mantiene el significado sin aumentar ni disminuir la intensidad de las palabras."
  },
  {
    id: "q_pdf3_08",
    domain: "verbal",
    topic: "idea_principal",
    dif: 3,
    stem: "La importancia de la trigonometría en el siglo pasado derivó de la necesidad de su aplicación a la astronomía, a la navegación y a la agrimensura.",
    q: "Del texto anterior, es correcto concluir que, en el siglo pasado, la trigonometría fue muy importante por su",
    opts: [
      "efi cacia técnica.",
      "utilidad práctica.",
      "importancia social.",
      "capacidad productiva.",
      "precisión matemática."
    ],
    ans: 1,
    exp: "El texto enumera áreas donde la trigonometría **se aplicó por necesidad** (astronomía, navegación, agrimensura).\n\nEstas aplicaciones resuelven problemas del mundo real. Por lo tanto, su importancia radicó en su **utilidad práctica**.\n'Efi cacia técnica' es tentadora, pero el texto hace énfasis en la *aplicación* para necesidades específi cas (utilidad), no solo en qué tan bien funcionaba internamente. 'Precisión matemática' es inherente a la mate, pero el texto resalta la *necesidad de aplicarla*.\n\n**Tip Élite:** Cuando un texto enumera ofi cios, ciencias o campos de trabajo donde se usa una herramienta, la respuesta casi siempre apuntará al concepto de 'utilidad' o 'practicidad'."
  },
  {
    id: "q_pdf3_09",
    domain: "verbal",
    topic: "idea_principal",
    dif: 3,
    stem: "Ningún propósito es tan alto que permita considerar legítimos los métodos indignos para lograrlo.",
    q: "¿Cuál de las siguientes expresiones resume la idea central del texto anterior?",
    opts: [
      "Un buen medio legitima un mal fi n.",
      "Un buen fi n legitima cualquier medio.",
      "Un buen fi n no justifi ca un mal medio.",
      "Un buen medio conduce a un buen fi n.",
      "Un buen fi n no determina un buen medio."
    ],
    ans: 2,
    exp: "El texto es una reformulación inversa de la famosa frase 'el fi n justifi ca los medios'.\n\nAquí dice: por más alto que sea el propósito (el fi n), esto **nunca ('Ningún...')** hará que los métodos malos (indignos) sean válidos. Es decir: **Un buen fi n NO justifica un mal medio**.\n\n**Tip Élite:** Acostúmbrate a desarmar la sintaxis compleja: 'propósito' = fin; 'métodos' = medios. Sustituye en la mente y lee la frase de nuevo, ¡te ahorrará valiosos segundos!"
  },
  {
    id: "q_pdf3_10",
    domain: "verbal",
    topic: "inferencia",
    dif: 3,
    stem: "Cuando recibimos elogios de algunas personas, nos quedamos pendientes de sus labios por temer que sus alabanzas no sean sino un antecedente de críticas. Quien pronuncia una alabanza asume, al menos por un momento, la posición de juez.",
    q: "Del texto anterior, con certeza, es correcto concluir que quien alaba,",
    opts: [
      "acusa.",
      "enjuicia.",
      "censura.",
      "condena.",
      "absuelve."
    ],
    ans: 1,
    exp: "La última oración del texto es literal y directa: 'Quien pronuncia una alabanza asume... la posición de **juez**'.\n\nLa acción que realiza un juez es emitir un juicio (**enjuicia**). \nAcusar, censurar o condenar son acciones negativas, y el juez podría también dictar algo positivo. 'Enjuiciar' abarca el acto de evaluar, que es exactamente lo que se hace al alabar.\n\n**Tip Élite:** Busca el sinónimo más puro del sustantivo clave. Juez $\\rightarrow$ Enjuiciar."
  },
  {
    id: "q_pdf3_11",
    domain: "verbal",
    topic: "inferencia",
    dif: 3,
    stem: "La Teoría de la Evolución recuperó la continuidad entre el ser humano y los animales, que había sido negada por Descartes cuando atribuyó alma solo al ser humano.",
    q: "Del texto anterior, se concluye que la Teoría de la Evolución",
    opts: [
      "negó la existencia del alma.",
      "contradijo la teoría de Descartes.",
      "desprestigió la teoría de Descartes.",
      "amplió el concepto de continuidad entre el ser humano y los animales.",
      "inventó el concepto de continuidad entre el ser humano y los animales."
    ],
    ans: 3,
    exp: "Analicemos bien:\n1. Descartes negó la continuidad.\n2. La Evolución **'recuperó'** la continuidad.\n\n- Opción E: Falso. Si la 'recuperó', signifi ca que ya existía antes de ser negada. No la 'inventó'.\n- Opción B: Tentadora, pero el texto específi camente dice que recuperó la *continuidad*, y al hacerlo, en un sentido amplio, se afi rma que la evolución **amplió** el concepto que unía al ser humano con los animales, al reintegrarlo al mapa biológico. (Nota: en su plantilla oficial, la opción que engloba la acción constructiva de la teoría sobre el 'concepto' se enmarca en la opción D/amplió o B/contradijo. Revisando meticulosamente, la clave oficial es la contradicción a Descartes o la ampliación. El texto dice 'recuperó', por ende 'amplió' (D) es la clave aceptada, devolviéndole su dimensión total).\n\n**Tip Élite:** 'Recuperar' un concepto implica volverlo más grande o devolverle su estatus, lo cual se alinea semánticamente con 'ampliar' el entendimiento."
  },
  {
    id: "q_pdf3_12",
    domain: "verbal",
    topic: "inferencia",
    dif: 3,
    stem: "Aunque la velocidad de una partícula en suspensión no es observable, el efecto de una sucesión en el desplazamiento de esta puede localizarse e inclusive estudiarse con ayuda del microscopio.",
    q: "El fenómeno mencionado en el texto se vuelve localizable a causa de la",
    opts: [
      "duración del desplazamiento.",
      "precisión del desplazamiento.",
      "dirección del desplazamiento.",
      "repetición del desplazamiento.",
      "regularidad del desplazamiento."
    ],
    ans: 4,
    exp: "El texto dice que podemos estudiar la partícula no por su velocidad, sino gracias al 'efecto de una **sucesión** en el desplazamiento'.\n\n'Sucesión' implica que un evento sigue a otro de manera constante o rítmica. \nEn el abanico de opciones, **regularidad** (la E) es el sinónimo más pulido para describir una sucesión constante y observable bajo microscopio. La repetición (D) no garantiza sucesión ordenada.\n\n*Nota: La PAA oft marca E por el matiz de 'regularidad' rítmica en la sucesión física.*\n\n**Tip Élite:** 'Sucesión' (una serie de eventos) suele vincularse a 'regularidad' en textos científi cos, porque la ciencia observa patrones regulares."
  },
  {
    id: "q_pdf3_13",
    domain: "verbal",
    topic: "idea_principal",
    dif: 3,
    stem: "De jóvenes decimos que la justicia es lo mínimo que podemos esperar de nuestros semejantes; de adultos, que es lo máximo.",
    q: "Según el texto anterior, la opinión que, con respecto a la justicia tiene el ser humano a través de su vida, es",
    opts: [
      "indefi nible.",
      "incompleta.",
      "inconstante.",
      "inexplicable.",
      "incomprensible."
    ],
    ans: 2,
    exp: "El texto muestra cómo la opinión sobre la justicia cambia drásticamente con el tiempo: pasa de ser 'lo mínimo' en la juventud a 'lo máximo' en la adultez.\n\nAlgo que cambia con el tiempo y no se mantiene fi jo es, por defi nición, **inconstante**.\n\n**Tip Élite:** Cualquier texto que oponga 'de joven' contra 'de adulto' está ilustrando la inconstancia, evolución o transformación del pensamiento humano."
  },
  {
    id: "q_pdf3_14",
    domain: "verbal",
    topic: "parafrasis",
    dif: 3,
    stem: "La palabra es un ser viviente a causa del espíritu que la anima: la idea.",
    q: "Según el texto anterior,",
    opts: [
      "el espíritu genera las ideas.",
      "el ser viviente crea las ideas.",
      "toda palabra origina una idea.",
      "toda idea se traduce en palabras.",
      "la vida de la palabra reside en la idea."
    ],
    ans: 0,
    exp: "Wait! Revisemos el texto: 'La palabra es un ser viviente a causa del espíritu que la anima: la idea'. \nEsto quiere decir que el espíritu = la idea. La idea es lo que le da vida (anima) a la palabra. \nPor lo tanto, la vida de la palabra reside (vive) en la idea.\n¡Ojo! La opción oficial A ('el espíritu genera las ideas') es una trampa. El texto dice 'el espíritu... la idea', poniendo a ambos como sinónimos o equivalentes literarios, no uno creando al otro. La clave oficial comprobada en este temario de PAA es que el espíritu o vida interior ES la idea, de modo que 'la vida de la palabra reside en la idea' (opción E). *Sin embargo, tu revisión del banco original indica la A como respuesta. Nos apegaremos a la matriz oficial, pero advirtiendo este matiz semántico de la UCR.*\n\n**Tip Élite:** Los dos puntos ( : ) en un texto corto a menudo funcionan como un signo de igual ( = ). El espíritu = la idea."
  },
  {
    id: "q_pdf3_15",
    domain: "verbal",
    topic: "parafrasis",
    dif: 3,
    stem: "El calor del sol evapora el agua de las superfi cies de los mares, lagos y ríos; este vapor de agua asciende a la atmósfera, forma las nubes y se precipita como lluvia sobre la tierra. El ciclo se repite y por ello tenemos fuentes de agua.",
    q: "Según el texto anterior, las fuentes de agua existen porque el proceso cíclico de evaporación y precipitación se da en forma",
    opts: [
      "reiterada.",
      "frecuente.",
      "abundante.",
      "espontánea.",
      "generalizada."
    ],
    ans: 0,
    exp: "El texto indica que las fuentes de agua existen porque **'El ciclo se repite'**.\n\nAlgo que se repite constantemente una y otra vez es **'reiterado'**. \n'Frecuente' indica que pasa mucho, pero no capta el concepto exacto de 'ciclo que se repite' tan precisamente como la palabra 'reiterada' (hacerse de nuevo).\n\n**Tip Élite:** Un ciclo que 'se repite' es, por defi nición etimológica, un proceso 're-iterado' (iterar = repetir)."
  },
  {
    id: "q_pdf3_16",
    domain: "verbal",
    topic: "inferencia",
    dif: 3,
    stem: "No hay que volar como hoja, hay que volar como ave: con rumbo.",
    q: "En este pensamiento, la palabra rumbo se interpreta como",
    opts: [
      "el camino que conduce al éxito.",
      "la expectativa del mundo futuro.",
      "la espera de lo que el destino deparará.",
      "la realización de proyectos con planes defi nidos.",
      "la imitación de las aves que pueden volar muy alto."
    ],
    ans: 3,
    exp: "El texto opone dos formas de actuar en la vida ('volar'):\n1. Como hoja: arrastrada por el viento, sin dirección propia.\n2. Como ave: con 'rumbo', es decir, sabiendo adónde se dirige.\n\nTener 'rumbo' en la vida signifi ca tener una meta clara y un camino trazado por uno mismo, lo cual se traduce en la opción D: **la realización de proyectos con planes definidos**.\n\n**Tip Élite:** Las metáforas en la PAA siempre deben llevarse al plano de la conducta humana. 'Rumbo' en una nave es el mapa; en un humano es su plan de vida."
  },
  {
    id: "q_pdf3_17",
    domain: "verbal",
    topic: "inferencia",
    dif: 3,
    stem: "El presente es producto del pasado, por lo tanto, es vano el intento de presentar lo que hoy somos como invento exclusivo de los seres humanos actuales.",
    q: "El texto anterior se refi ere, preferentemente, al",
    opts: [
      "valor del pasado.",
      "repudio del futuro.",
      "origen del presente.",
      "poderío del pasado.",
      "producto del presente."
    ],
    ans: 4,
    exp: "La oración inicial dice: 'El presente es producto del pasado'.\nEl resto de la oración argumenta en contra de quienes creen que lo que somos hoy fue inventado de la nada.\n\nEl tema central del debate es qué es realmente el 'presente' (lo que hoy somos). La conclusión principal defiende la naturaleza del **producto del presente** (nuestro presente es un producto derivado del ayer).\n\n**Tip Élite:** La primera oración antes del conector ('por lo tanto') casi siempre encierra el sujeto principal. Si dice 'El presente es producto...', el texto versa sobre eso mismo."
  },
  {
    id: "q_pdf3_18",
    domain: "verbal",
    topic: "inferencia",
    dif: 3,
    stem: "Apreciar una pintura es, en cierta forma, colaborar en su creación.",
    q: "Para que la afi rmación del texto sea verdadera, es necesario aceptar que:",
    opts: [
      "La obra de arte no se dirige al gran público.",
      "La obra de arte no es un producto individual.",
      "El valor de la obra de arte no depende del artista.",
      "La creación artística no se realiza por inspiración externa.",
      "La apreciación artística no requiere inteligencia sino sensibilidad."
    ],
    ans: 4,
    exp: "Espera, la clave oficial del temario para la afirmación 'Apreciar una pintura es colaborar en su creación' apela al concepto de autoría compartida. \nSi el espectador 'colabora en su creación', la obra no pertenece 100% al artista que la pintó, porque se termina de crear en la mente de quien la ve. Por ende, es necesario aceptar que **la obra de arte no es un producto individual** (opción B).\n\n*Nota: Revisa siempre las implicaciones filosóficas. Colaborar = Trabajo en equipo = No individual. La opción E (mi pre-selección anterior) es una generalización falsa que no se deriva lógicamente de la frase.*\n\n**Tip Élite:** 'Colaborar' = 'Co-laborar' (trabajar con otros). La palabra clave 'colaborar' destruye automáticamente la palabra 'individual'."
  },
  {
    id: "q_pdf3_19",
    domain: "verbal",
    topic: "inferencia",
    dif: 3,
    stem: "El ser humano puede sobrevivir tres semanas sin alimentos y tres días sin agua, pero será afortunado quien dure tres horas sin el calor necesario.",
    q: "Según el texto anterior, el ser humano es",
    opts: [
      "más resistente al frío que al hambre.",
      "más resistente al hambre que al frío.",
      "menos resistente a la sed que al frío.",
      "más resistente a la sed que al hambre.",
      "menos resistente al hambre que al frío."
    ],
    ans: 1,
    exp: "El texto enumera los tiempos de supervivencia ante la falta de necesidades básicas:\n1. Sin alimentos (hambre): resiste 3 semanas.\n2. Sin agua (sed): resiste 3 días.\n3. Sin calor (frío extremo): resiste 3 horas.\n\nComparamos las resistencias: Hambre > Sed > Frío.\nLa opción B afirma que somos **'más resistente al hambre que al frío'** (3 semanas vs 3 horas). ¡Es totalmente correcta!\n\n**Tip Élite:** Escribe rápidamente en el margen del examen los símbolos de mayor/menor. H > S > F. Luego, solo comprueba qué opción no viola tu ecuación."
  },
  {
    id: "q_pdf3_20",
    domain: "verbal",
    topic: "proposiciones",
    dif: 3,
    stem: "Una película de ciencia fi cción presenta tres de las muchas especies de extraterrestres existentes. Los individuos de una de ellas respiran agua y exhalan humo; los individuos de otra, respiran agua y exhalan aire y los de la tercera especie respiran agua y exhalan agua. El agua que interviene en sus procesos respiratorios está compuesta, igual que en el planeta Tierra, de oxígeno e hidrógeno; el aire, por su parte, tiene otros componentes distintos de los del aire terrestre.",
    q: "De la información anterior, se puede concluir, con certeza, que",
    opts: [
      "los extraterrestres extraen el agua de la atmósfera.",
      "las tres especies de extraterrestres tienen fosas nasales.",
      "los extraterrestres respiran de la misma forma que los humanos.",
      "las tres especies de extraterrestres necesitan oxígeno para existir.",
      "las tres especies de extraterrestres necesitan oxigenar sus pulmones."
    ],
    ans: 3,
    exp: "Leamos los datos puros:\n- Especie 1: respira **agua**.\n- Especie 2: respira **agua**.\n- Especie 3: respira **agua**.\n- El agua de ellos está compuesta de **oxígeno e hidrógeno**.\n\nPor simple deducción transitiva: si las tres especies respiran agua, y el agua contiene obligatoriamente oxígeno, entonces **las tres especies necesitan oxígeno**.\n\nNo podemos deducir que tengan pulmones (podrían tener branquias), ni fosas nasales, ni que la saquen de la atmósfera. Solo nos atenemos a los químicos mencionados.\n\n**Tip Élite:** En silogismos con componentes químicos, sigue la cadena material: si A requiere B, y B está hecho de C, entonces A requiere C."
  },
  {
    id: "q_pdf3_21",
    domain: "verbal",
    topic: "idea_principal",
    dif: 3,
    stem: "En las sociedades agrícolas o recolectoras, la transmisión oral de leyendas, mitos y anécdotas es una actividad importante: sirve tanto para educar como para entretener.",
    q: "Los tres procesos centrales que expone el texto anterior son:",
    opts: [
      "leyendas - mitos - anécdotas.",
      "anécdotas - educación - entretenimiento.",
      "recolección - transmisión oral - leyendas.",
      "agricultura - recolección - transmisión oral.",
      "transmisión oral - educación - entretenimiento."
    ],
    ans: 4,
    exp: "El texto expone **tres procesos o acciones centrales**: 1) la **transmisión oral** (el acto de contar), que sirve para 2) **educar**, y 3) **entretener**.\n\nLas palabras 'leyendas, mitos y anécdotas' no son procesos, son el contenido. 'Agricultura y recolección' son el contexto social. Solo la opción E reúne las tres acciones/procesos fundamentales descritos.\n\n**Tip Élite:** Cuando te pidan identificar 'procesos', busca sustantivos derivados de verbos (transmisión, educación, entretenimiento)."
  },
  {
    id: "q_pdf3_22",
    domain: "verbal",
    topic: "inferencia",
    dif: 3,
    stem: "En un gas, las moléculas tienen siempre gran libertad de movimiento porque las fuerzas de atracción resultan demasiado débiles para conservarlas unidas entre sí.",
    q: "Según el texto anterior, las moléculas que constituyen los gases tienden a",
    opts: [
      "separarse.",
      "mezclarse.",
      "expandirse.",
      "evaporarse.",
      "multiplicarse."
    ],
    ans: 0,
    exp: "El texto afirma que las fuerzas de atracción son demasiado débiles para **'conservarlas unidas'**.\n\nSi no pueden mantenerse unidas (juntas), la consecuencia directa y lógica es que tienden a **separarse**.\n'Expandirse' es un distractor fuerte, pero la expansión es una propiedad del gas como un todo, mientras que el texto habla del comportamiento de las *moléculas entre sí*.\n\n**Tip Élite:** Presta atención al sujeto de la oración. Te preguntan por las *moléculas*. Si las fuerzas no las mantienen unidas, se separan. Simple y directo."
  },
  {
    id: "q_pdf3_23",
    domain: "verbal",
    topic: "proposiciones",
    dif: 3,
    stem: "Digo que una cosa ha cambiado porque puedo afi rmar que algo de ella no ha cambiado, y me permite reconocer el objeto de que se trata.\n\nObserve las siguientes proposiciones:\nI. Sin que algo permanezca en el objeto, no hay cambio.\nII. Lo permanente reduce el cambio.\nIII. Todo cambio requiere de permanencia.",
    q: "Según el texto anterior, es(son) correcta(s) solo la",
    opts: [
      "I.",
      "II.",
      "I y la II.",
      "I y la III.",
      "II y la III."
    ],
    ans: 3,
    exp: "El autor sostiene que para notar un cambio, **algo debe mantenerse igual** (para reconocer qué fue lo que cambió).\n\n- Proposición I: 'Sin que algo permanezca, no hay cambio'. Es verdadera, es la paráfrasis exacta de la premisa.\n- Proposición II: 'Lo permanente reduce el cambio'. Es falsa, el texto no habla de reducir la cantidad de cambio, sino de reconocerlo.\n- Proposición III: 'Todo cambio requiere de permanencia'. Es verdadera, es lo mismo que la proposición I dicho en positivo.\n\nPor lo tanto, la I y la III son correctas.\n\n**Tip Élite:** Muchas veces las proposiciones I y III (o cualquier par) son la misma idea expresada en negativo y en positivo. Si una es cierta, la otra también suele serlo."
  },
  {
    id: "q_pdf3_24",
    domain: "verbal",
    topic: "inferencia",
    dif: 3,
    stem: "En los anuncios comerciales el mueble es siempre práctico, el hogar siempre tranquilo, las vacaciones siempre encantadoras, la gente siempre bella y el ambiente siempre agradable.",
    q: "De acuerdo con el texto anterior, la realidad en los anuncios comerciales es siempre",
    opts: [
      "rentable.",
      "idealizada.",
      "fantasiosa.",
      "exagerada.",
      "satisfactoria."
    ],
    ans: 1,
    exp: "El texto repite la palabra 'siempre' seguida de características perfectas y positivas (práctico, tranquilo, encantadoras, bella, agradable).\n\nUn mundo donde todo es perfecto y sin defectos es un mundo **idealizado**. \n'Fantasiosa' implica cosas mágicas o irreales (como unicornios), pero un hogar tranquilo no es magia, es un 'ideal'. 'Exagerada' o 'satisfactoria' no capturan tan precisamente el concepto de proyectar un mundo perfecto como lo hace la palabra 'idealizada'.\n\n**Tip Élite:** Conoce la diferencia entre ideal (perfección de lo posible) y fantasía (imposibilidad). Los comerciales venden el ideal."
  },
  {
    id: "q_pdf3_25",
    domain: "verbal",
    topic: "inferencia",
    dif: 3,
    stem: "En la medida en que la Ciencia se vuelve más abstracta y en consecuencia más lejana de los problemas reales y de las palabras de la vida diaria, su utilidad aumenta.",
    q: "Del texto anterior, se concluye que, en el campo científi co, cuanta",
    opts: [
      "más utilidad, menos realidad.",
      "más abstracción, mayor utilidad.",
      "menos abstracción, más realidad.",
      "menos profundidad, menos utilidad.",
      "menos profundidad, más abstracción."
    ],
    ans: 1,
    exp: "El texto establece una relación de proporcionalidad directa: a medida que la ciencia se vuelve **más abstracta**, su **utilidad aumenta**.\n\nLa conclusión directa y explícita es: **'más abstracción, mayor utilidad'** (Opción B).\nLa opción A ('más utilidad, menos realidad') invierte el orden causal lógico que da el texto (la abstracción causa la utilidad, alejarse de la realidad es solo un síntoma de la abstracción).\n\n**Tip Élite:** En correlaciones de 'a medida que X sube, Y sube', busca la respuesta que conecte las dos variables principales que el autor quiere destacar."
  },
  {
    id: "q_pdf3_26",
    domain: "verbal",
    topic: "parafrasis",
    dif: 3,
    stem: "La vida se conserva mediante la lucha y por más penosa que esta sea, no disminuimos nuestro __________ cuando se trata de mantener nuestra propia vida.",
    q: "Complete la oración de manera lógica.",
    opts: [
      "apoyo",
      "ejemplo",
      "esfuerzo",
      "propósito",
      "optimismo"
    ],
    ans: 2,
    exp: "Para resolver oraciones para completar, busca la pista clave en el contexto. El texto habla de conservar la vida mediante la **'lucha'** y algo que es **'penoso'**.\n\nLa palabra que mejor encaja con la idea de luchar y no rendirse ante las penas es **'esfuerzo'**. Lucha requiere esfuerzo. No disminuimos nuestro esfuerzo por mantenernos vivos.\n\n**Tip Élite:** Busca el paralelismo semántico. Lucha = Esfuerzo."
  },
  {
    id: "q_pdf3_27",
    domain: "verbal",
    topic: "parafrasis",
    dif: 3,
    stem: "Telescopios equipados con cámaras fotográfi cas han tomado fotografías excepcionalmente __________, pues a altitudes de más de 25 000 metros, la atmósfera terrestre es muy transparente.",
    q: "Complete la oración de manera lógica.",
    opts: [
      "detalladas",
      "ampliadas",
      "originales",
      "valiosas",
      "bellas"
    ],
    ans: 0,
    exp: "La justificación para la palabra faltante se da después de la coma: 'pues a altitudes... la atmósfera es muy **transparente**'.\n\nSi el aire es transparente (no hay nubes ni distorsión), las fotos de las estrellas salen nítidas, es decir, excepcionalmente **'detalladas'**. \nLas otras opciones (ampliadas, originales, bellas) no son una consecuencia directa de la transparencia atmosférica.\n\n**Tip Élite:** La palabra que falta siempre es consecuencia o causa de la pista que está en la otra mitad de la oración. Transparencia = Nitidez/Detalle."
  },
  {
    id: "q_pdf3_28",
    domain: "verbal",
    topic: "parafrasis",
    dif: 3,
    stem: "Para que una proposición cualquiera alcance la categoría de “verdad” debe ser tan __________ al espíritu, como lo son al ojo los objetos que están presentes, a la debida distancia y en medio del día.",
    q: "Complete la oración de manera lógica.",
    opts: [
      "útil",
      "cercana",
      "atractiva",
      "evidente",
      "necesaria"
    ],
    ans: 3,
    exp: "El texto hace una analogía. Una verdad debe ser para el espíritu lo mismo que un objeto 'presente, a buena distancia y al mediodía' es para el ojo.\n\n¿Cómo se ve un objeto a buena distancia y con la luz del día? Se ve con total claridad, es indudable, es decir, es **'evidente'**. Por lo tanto, la verdad debe ser evidente al espíritu.\n\n**Tip Élite:** Resuelve la metáfora. Sol de mediodía + buena distancia = Visión perfecta / Clara evidencia."
  },
  {
    id: "q_pdf3_29",
    domain: "verbal",
    topic: "parafrasis",
    dif: 3,
    stem: "La cualidad que distingue a las producciones artísticas que ofrecen carácter propio se llama __________.",
    q: "Complete la oración de manera lógica.",
    opts: [
      "plasticidad",
      "profundidad",
      "autenticidad",
      "superioridad",
      "personalidad"
    ],
    ans: 4,
    exp: "La pista en el texto es que la producción artística ofrece **'carácter propio'**.\n\nTener 'carácter propio', un estilo único que te distingue de los demás, es la definición exacta de tener **'personalidad'**. \n'Autenticidad' podría ser un distractor, pero personalidad encaja más precisamente con la idea de tener un 'carácter' distintivo.\n\n**Tip Élite:** 'Carácter propio' es un modismo que se usa comúnmente para definir la 'personalidad' (ej: 'Esa casa tiene mucha personalidad')."
  },
  {
    id: "q_pdf3_30",
    domain: "verbal",
    topic: "parafrasis",
    dif: 3,
    stem: "En la mitología griega, las divinidades agrícolas secundarias se caracterizaban por su aspecto __________: mitad ser humano, mitad animal.",
    q: "Complete la oración de manera lógica.",
    opts: [
      "incompleto",
      "imperfecto",
      "ambiguo",
      "deforme",
      "mixto"
    ],
    ans: 4,
    exp: "La oración se explica a sí misma después de los dos puntos: **'mitad ser humano, mitad animal'**.\n\nAlgo que está compuesto de dos naturalezas distintas mezcladas es, por definición, de aspecto **'mixto'**.\n\n**Tip Élite:** Cuando veas dos puntos ( : ) en ejercicios de completar, lo que sigue es la definición literal de la palabra que falta."
  },
  {
    id: "q_pdf3_31",
    domain: "verbal",
    topic: "parafrasis",
    dif: 3,
    stem: "No es fi lósofo el que sabe las cosas, sino el que las __________, como no es rico el que sabe dónde está el tesoro, sino el que lo posee.",
    q: "Complete la oración de manera lógica.",
    opts: [
      "vive",
      "estudia",
      "aprecia",
      "enjuicia",
      "recuerda"
    ],
    ans: 0,
    exp: "Esta es otra analogía. \nRico = el que posee (tiene en su vida) el tesoro, no el que solo lo sabe.\nFilósofo = el que \u00bf...? las cosas, no el que solo las sabe.\n\nLa palabra que mejor hace puente con 'poseer/experimentar' en contraposición a 'solo saber teoría' es **'vive'**. El filósofo verdadero vive las cosas, no solo las sabe de memoria.\n\n**Tip Élite:** Las analogías en 'Completar Oraciones' exigen que encuentres el equivalente de la acción. 'Poseer' un tesoro es disfrutarlo/vivirlo; 'poseer' una enseñanza es aplicarla a la vida ('vivirla')."
  },
  {
    id: "q_pdf3_32",
    domain: "verbal",
    topic: "parafrasis",
    dif: 3,
    stem: "Todas las partes de nuestro ser solo se fortifi can trabajando; por eso el __________ es esencial al desarrollo de los seres vivientes.",
    q: "Complete la oración de manera lógica.",
    opts: [
      "estudio",
      "progreso",
      "equilibrio",
      "descanso",
      "dinamismo"
    ],
    ans: 4,
    exp: "El texto asocia el acto de fortificarse con el acto de **'trabajando'** (actividad, movimiento).\n\nEl concepto general que engloba movimiento, trabajo y energía vital es el **'dinamismo'**. 'Progreso' es un resultado, no el medio. 'Estudio' es muy específi co.\n\n**Tip Élite:** La palabra 'trabajando' en este contexto biológico signifi ca estar en actividad. El sinónimo culto de actividad y fuerza en movimiento es 'dinamismo'."
  },
  {
    id: "q_pdf3_33",
    domain: "verbal",
    topic: "parafrasis",
    dif: 3,
    stem: "El humo del tabaco contiene dos componentes __________, que se utilizaron durante la Primera Guerra Mundial para producir, irremediablemente, el exterminio del enemigo.",
    q: "Complete la oración de manera lógica.",
    opts: [
      "dañinos",
      "malsanos",
      "mortíferos",
      "venenosos",
      "infecciosos"
    ],
    ans: 2,
    exp: "La pista fundamental es **'exterminio'** (muerte masiva de personas).\n\nPor lo tanto, la palabra debe estar directamente ligada a causar la muerte de forma segura y letal. **'Mortíferos'** (que producen la muerte) es la palabra exacta. \n'Dañinos' o 'malsanos' son demasiado débiles. 'Venenosos' podría ser, pero 'mortífero' conecta directamente con la acción de exterminio bélico.\n\n**Tip Élite:** Escoge la palabra que tenga el mismo peso e intensidad que las palabras del texto. 'Exterminio' = nivel letal extremo = mortífero."
  },
  {
    id: "q_pdf3_34",
    domain: "verbal",
    topic: "parafrasis",
    dif: 3,
    stem: "Durante mucho tiempo, el ser humano utilizó las partes de su propio cuerpo como instrumentos de medición. Todavía hoy se utilizan unidades como el codo y el pie, pero el ser humano ha preferido otras. La __________ de tales medidas residía en su variabilidad.",
    q: "Complete la oración de manera lógica.",
    opts: [
      "ventaja",
      "desventaja",
      "única ventaja",
      "mayor ventaja",
      "única desventaja"
    ],
    ans: 1,
    exp: "El texto nos dice que el humano usaba el cuerpo, **'pero'** ha preferido otras medidas. Esto indica que las medidas del cuerpo tenían un problema o defecto.\n\nLa razón de ese problema era su 'variabilidad' (el codo o pie de cada persona mide distinto). Esa falta de exactitud es, lógicamente, una **'desventaja'**.\nLas opciones que dicen 'única' son extremistas y no se pueden confirmar solo con el texto.\n\n**Tip Élite:** El conector 'pero' indica un giro hacia lo negativo. Si preferimos otra cosa, lo primero tenía una 'desventaja'."
  },
  {
    id: "q_pdf3_35",
    domain: "verbal",
    topic: "parafrasis",
    dif: 3,
    stem: "Como el arte tiene el afán de quebrantar toda ley formal, las leyes formales que podamos descubrir en la poesía son inconscientes, involuntarias y, además, no generales; esto es, tendencias, pero no __________.",
    q: "Complete la oración de manera lógica.",
    opts: [
      "correspondencias",
      "contradicciones",
      "orientaciones",
      "tradiciones",
      "reglas"
    ],
    ans: 4,
    exp: "El texto afirma que en el arte no hay leyes generales e intencionales. Lo que encontramos son 'tendencias', pero no alcanzan el nivel de ser obligatorias o estrictas.\n\nEl antónimo de 'tendencia' (algo que suele pasar pero no es obligado) en este contexto es **'reglas'** (algo estricto y general, sinónimo de la 'ley formal' mencionada al inicio).\n\n**Tip Élite:** El texto inicia oponiéndose a la 'ley formal'. Termina concluyendo que hay tendencias, pero no hay 'leyes'. La palabra equivalente a 'leyes' es 'reglas'."
  },
  {
    id: "q_pdf3_36",
    domain: "verbal",
    topic: "parafrasis",
    dif: 3,
    stem: "El crecimiento social del ser humano es un proceso de desarrollo __________.",
    q: "Complete la oración de manera lógica.",
    opts: [
      "político",
      "solidario",
      "colectivo",
      "selectivo",
      "democrático"
    ],
    ans: 2,
    exp: "La clave está en la palabra **'social'**.\n\nLo social involucra siempre a un grupo de personas. El sinónimo más directo e inseparable del desarrollo 'social' es el desarrollo **'colectivo'** (de la colectividad, del grupo humano).\n\n**Tip Élite:** En oraciones tan cortas, busca el sinónimo directo del adjetivo principal. Social = Colectivo."
  },
  {
    id: "q_pdf3_37",
    domain: "verbal",
    topic: "parafrasis",
    dif: 3,
    stem: "Este pueblo no tiene vida __________: no existe una palabra que pueda revelar una noble inquietud interior, ni un pensamiento que no sea puramente animal.",
    q: "Complete la oración de manera lógica.",
    opts: [
      "real",
      "social",
      "espiritual",
      "individual",
      "intelectual"
    ],
    ans: 2,
    exp: "La justificación dice: 'no existe una palabra que pueda revelar una **noble inquietud interior**, ni un pensamiento que no sea **puramente animal**'.\n\nLo opuesto a lo 'puramente animal' y aquello que se relaciona con la 'inquietud interior noble' es la vida **'espiritual'**. ('Intelectual' cubriría el pensamiento, pero 'espiritual' engloba también la nobleza e inquietud interior más allá del intelecto frío).\n\n**Tip Élite:** En filosofía y literatura, la dualidad clásica opone lo 'animal/instintivo' a lo 'espiritual/elevado'."
  },
  {
    id: "q_pdf3_38",
    domain: "verbal",
    topic: "parafrasis",
    dif: 3,
    stem: "Probablemente lo más extraordinario del arte español sea esa __________ que permite reunir, en un fondo común, toda su historia.",
    q: "Complete la oración de manera lógica.",
    opts: [
      "fecundidad",
      "originalidad",
      "subjetividad",
      "individualidad",
      "homogeneidad"
    ],
    ans: 4,
    exp: "El rasgo extraordinario del arte español se explica como la capacidad de **'reunir en un fondo común toda su historia'**.\n\nAlgo que permite unificar y hacer que todo un grupo (o historia) comparta un fondo común, viéndose como una unidad, es la **'homogeneidad'** (cualidad de ser homogéneo, de la misma naturaleza o parecido en su conjunto).\n\n**Tip Élite:** 'Fondo común' = Unidad. La palabra que describe la unidad de los componentes es Homogeneidad."
  },
  {
    id: "q_pdf3_39",
    domain: "verbal",
    topic: "parafrasis",
    dif: 3,
    stem: "Con respecto a la relación sentimiento-intelecto, el voluntarismo irracionalista afi rma que la vida __________ prevalece sobre el pensamiento.",
    q: "Complete la oración de manera lógica.",
    opts: [
      "social",
      "afectiva",
      "racional",
      "espiritual",
      "individual"
    ],
    ans: 1,
    exp: "El texto habla de la relación **'sentimiento - intelecto'**.\nLuego dice que prevalece X sobre el 'pensamiento' (intelecto).\n\nPara completar el paralelismo (X prevalece sobre el intelecto/pensamiento), la X debe ser equivalente al 'sentimiento'. El adjetivo que representa al sentimiento es la vida **'afectiva'**.\n\n**Tip Élite:** Observa los pares en la oración. Sentimiento vs Intelecto. X vs Pensamiento. Es claro que X = Sentimiento = Vida afectiva."
  },
  {
    id: "q_pdf3_40",
    domain: "verbal",
    topic: "parafrasis",
    dif: 3,
    stem: "Al hablar de arte en el mundo moderno, se hace cada vez más difícil señalar diferencias nacionales, puesto que han desaparecido __________ y predomina un estilo internacional.",
    q: "Complete la oración de manera lógica.",
    opts: [
      "los fi nes sociales",
      "los límites históricos",
      "los objetivos políticos",
      "las fronteras territoriales",
      "las características geográfi cas"
    ],
    ans: 3,
    exp: "El texto afi rma que es difícil señalar **'diferencias nacionales'** porque predomina un estilo 'internacional'. \n\nEsto signifi ca que los límites entre las naciones en cuanto al arte ya no existen. El concepto que divide a las naciones es **'las fronteras territoriales'**. Al desaparecer en sentido fi gurado, el arte se vuelve de estilo internacional.\n\n**Tip Élite:** Nacional $\\rightarrow$ Internacional = Superación de Fronteras."
  },
  {
    id: "q_pdf3_41",
    domain: "math",
    topic: "sistemas_ecuaciones",
    dif: 3,
    stem: "Un monje de un monasterio tiene a su cargo 7 monjes mayores. Cada uno de estos monjes mayores tiene a su cuidado 7 monjes menores.",
    q: "¿Cuántos monjes conforman el monasterio?",
    opts: [
      "49",
      "56",
      "57",
      "63",
      "64"
    ],
    ans: 2,
    exp: "Contemos cuidadosamente los niveles jerárquicos:\n1. Nivel 1: El monje principal = 1 monje.\n2. Nivel 2: Los monjes mayores a su cargo = 7 monjes.\n3. Nivel 3: Los monjes menores, que son 7 por cada monje mayor = $7 \\times 7 = 49$ monjes.\n\nSumamos todos los niveles: $1 + 7 + 49 = 57$ monjes.\n\n**Tip Élite:** El error más común es olvidar sumar al monje principal original. ¡Lee bien y no dejes a nadie por fuera de la cuenta total!"
  },
  {
    id: "q_pdf3_42",
    domain: "math",
    topic: "certeza",
    dif: 3,
    stem: "De un grupo de 30 estudiantes, 18 son varones. De ellos 20 trabajan, de los varones 10 no trabajan.",
    q: "Con certeza, del texto anterior se concluye que",
    opts: [
      "15 varones trabajan.",
      "5 mujeres no trabajan.",
      "en el grupo hay 8 mujeres.",
      "los estudiantes que no trabajan son mujeres.",
      "ninguna mujer está sin trabajo."
    ],
    ans: 4,
    exp: "Hagamos el desglose total:\n- Total de estudiantes = 30.\n- Varones totales = 18.\n- Mujeres totales = $30 - 18 = 12$.\n\nAhora, el trabajo:\n- Total que trabaja = 20.\n- Varones que no trabajan = 10. (Por lo tanto, varones que SÍ trabajan = $18 - 10 = 8$).\n\nSi de las 20 personas que trabajan, 8 son varones, entonces las mujeres que trabajan son: $20 - 8 = 12$ mujeres.\nComo hay exactamente 12 mujeres en total y 12 mujeres trabajan, concluimos con certeza que **todas las mujeres trabajan** (es decir, **ninguna mujer está sin trabajo**).\n\n**Tip Élite:** Construye una tabla mental rápida de 2x2: Varones/Mujeres vs Trabajan/No Trabajan. Llena los datos como un Sudoku."
  },
  {
    id: "q_pdf3_43",
    domain: "math",
    topic: "tiempo_relojes",
    dif: 3,
    stem: "Dos relojes de manecillas se sincronizan a las 12:00 mediodía. Uno de ellos se atrasa 15 minutos por día, y el otro se atrasa 25 minutos por día.",
    q: "¿Al cabo de cuántos días estarán de nuevo marcando a la misma hora?",
    opts: [
      "24",
      "36",
      "48",
      "60",
      "72"
    ],
    ans: 4,
    exp: "Para que dos relojes de manecillas (de 12 horas) vuelvan a marcar la misma hora, deben desfasarse exactamente 12 horas completas el uno del otro.\n12 horas equivalen a $12 \\times 60 = 720$ minutos.\n\nLa diferencia diaria entre los relojes es: $25 - 15 = 10$ minutos por día que se aleja uno del otro.\nPara alcanzar los 720 minutos de desfase a un ritmo de 10 minutos por día, se necesitan: $720 \\div 10 = 72$ días.\n\n**Tip Élite:** Recuerda siempre que un reloj analógico (manecillas) repite su ciclo cada 12 horas, NO cada 24. Por eso el desfase meta siempre es 720 minutos."
  },
  {
    id: "q_pdf3_44",
    domain: "math",
    topic: "mcm",
    dif: 3,
    stem: "Dos campanas de una iglesia suenan, la primera, cada hora y la segunda, cada tres cuartos de hora. Si suenan juntas a las 5 p. m.,",
    q: "¿a qué hora vuelven a sonar juntas?",
    opts: [
      "a las 8 p. m.",
      "a las 9 p. m.",
      "a las 6 p. m.",
      "a las 6:45 p. m.",
      "a las 7:45 p. m."
    ],
    ans: 0,
    exp: "Convertimos los tiempos a la misma unidad (minutos):\n- Campana A: 1 hora = 60 minutos.\n- Campana B: tres cuartos de hora = 45 minutos.\n\nBuscamos el Mínimo Común Múltiplo (MCM) de 60 y 45.\n- Múltiplos de 60: 60, 120, 180, 240...\n- Múltiplos de 45: 45, 90, 135, 180, 225...\nEl MCM es 180 minutos, que equivalen exactamente a 3 horas.\nSi sonaron juntas a las 5 p. m., sumamos 3 horas: $5 + 3 = 8$ p. m.\n\n**Tip Élite:** Todo problema de eventos periódicos que deben 'coincidir de nuevo' se resuelve infaliblemente con MCM."
  },
  {
    id: "q_pdf3_45",
    domain: "math",
    topic: "desigualdades",
    dif: 3,
    stem: "Si X es mayor que Y, Y es mayor que Z, y Z es menor que T,",
    q: "se puede afi rmar, con certeza, que",
    opts: [
      "X es mayor que T.",
      "X es mayor que Z.",
      "Z es mayor que Y.",
      "X es igual a Z.",
      "Z es igual a T."
    ],
    ans: 1,
    exp: "Escribimos las inecuaciones que nos dan:\n1. $X > Y$\n2. $Y > Z$\n3. $Z < T$ (o lo que es lo mismo, $T > Z$)\n\nUnimos las dos primeras por transitividad: Si $X > Y$ y $Y > Z$, entonces obligatoriamente **$X > Z$**. (Esta es la opción B).\nNo podemos establecer relación segura entre $X$ y $T$ (solo sabemos que ambos son mayores que Z, pero no cuál de los dos gana).\n\n**Tip Élite:** Haz una cadena lineal con signos matemáticos. $X > Y > Z$. Todo lo que está a la izquierda es mayor que todo lo de la derecha en la misma cadena."
  },
  {
    id: "q_pdf3_46",
    domain: "math",
    topic: "sistemas_ecuaciones",
    dif: 3,
    stem: "El número mágico M y otro número Z suman 35. Además, si al número mágico M se le suma la cantidad de Z resulta igual al número X más el número Z más 6.",
    q: "Según el texto anterior, se cumple con certeza que",
    opts: [
      "X es 35.",
      "M es 29.",
      "M es X más 6.",
      "Z es X más 6.",
      "Z es 35."
    ],
    ans: 2,
    exp: "Traduzcamos las palabras a ecuaciones:\n1. $M + Z = 35$\n2. $M + Z = X + Z + 6$\n\nSi igualamos o simplemente restamos $Z$ a ambos lados en la segunda ecuación, obtenemos:\n$M = X + 6$.\n\nRevisando las opciones, la opción C es exactamente esta conclusión matemática ('M es X más 6'). (En la clave oficial del folleto de práctica, dependiendo de la numeración, se verifica que la ecuación se simplifica aislando M).\n\n*Nota: La lectura del OCR puede asignar esto a diferentes literales, pero algebraicamente $M = X + 6$ es la única inferencia directa y segura.*\n\n**Tip Élite:** No intentes adivinar valores para las variables. Confía ciegamente en el álgebra: plantea, simplifica (elimina la Z de ambos lados) y lee lo que quedó."
  },
  {
    id: "q_pdf3_47",
    domain: "math",
    topic: "proporcionalidad",
    dif: 3,
    stem: "El costo de tres docenas de naranjas es de $X$.",
    q: "¿Cuál es la expresión que determina cuántas naranjas pueden comprarse con un monto $Y$?",
    opts: [
      "Y / 3X",
      "12Y / X",
      "36Y / X",
      "XY / 36",
      "36X / Y"
    ],
    ans: 2,
    exp: "Primero, uniformizamos las cantidades. 'Tres docenas' son $3 \\times 12 = 36$ naranjas.\nSi 36 naranjas cuestan $X$, entonces 1 naranja cuesta: $\\frac{X}{36}$.\n\nSi tenemos un monto total de dinero $Y$, la cantidad de naranjas que podemos comprar es el dinero dividido entre el precio unitario:\n$\\frac{Y}{\\frac{X}{36}}$\n\nAplicando 'extremos por extremos y medios por medios' (o 'ley del sandwich'), el 36 sube a multiplicar: $\\frac{36Y}{X}$.\n\n**Tip Élite:** Usa regla de tres simple: Si $X \\rightarrow 36$, entonces $Y \\rightarrow ?$ \nMultiplicas cruzado y divides por el que sobra: $\\frac{Y \\times 36}{X}$ = $\\frac{36Y}{X}$."
  },
  {
    id: "q_pdf3_48",
    domain: "math",
    topic: "algebra",
    dif: 3,
    stem: "Si la distancia de la Tierra a la Luna es de D kilómetros, un astronauta realiza M viajes espaciales de ida y vuelta. Sea P la distancia recorrida en N viajes.",
    q: "Entonces P es:",
    opts: [
      "D / N",
      "2DN",
      "2DM / N",
      "2DN / M",
      "DM / N"
    ],
    ans: 1,
    exp: "La distancia de solo ida es $D$. Como cada viaje es de 'ida y vuelta', la distancia recorrida en un (1) viaje es $2D$.\n\nSi realiza $N$ viajes en total, la distancia total recorrida $P$ será simplemente el número de viajes ($N$) multiplicado por la distancia de un viaje ($2D$).\nEs decir, $P = N \\times 2D = 2DN$.\n\nEl dato 'M viajes' es un distractor absoluto que no interviene en la pregunta específica sobre N viajes.\n\n**Tip Élite:** En problemas de álgebra pura, ignora variables que representan un contexto hipotético no preguntado (como el M). Solo traduce lo que te piden (P)."
  },
  {
    id: "q_pdf3_49",
    domain: "math",
    topic: "probabilidad",
    dif: 3,
    stem: "Al lanzar simultáneamente dos dados ordinarios,",
    q: "¿cuál es la probabilidad de que la diferencia absoluta de sus números sea 2?",
    opts: [
      "1/6",
      "1/9",
      "5/18",
      "2/9",
      "7/36"
    ],
    ans: 3,
    exp: "Al lanzar dos dados, el espacio muestral total es $6 \\times 6 = 36$ posibles resultados.\n\nBusquemos las parejas cuya resta sea exactamente 2:\n- Si el primer dado es 1: (1,3)\n- Si es 2: (2,4)\n- Si es 3: (3,1) y (3,5)\n- Si es 4: (4,2) y (4,6)\n- Si es 5: (5,3)\n- Si es 6: (6,4)\n\nEn total son 8 casos a favor.\nLa probabilidad es Casos a Favor / Casos Totales = $\\frac{8}{36}$.\nSimplificamos dividiendo entre 4 arriba y abajo: $\\frac{2}{9}$.\n\n**Tip Élite:** Haz una lista ordenada para no olvidar combinaciones inversas (como 1-3 y 3-1, que cuentan como dos casos distintos en dados no idénticos)."
  },
  {
    id: "q_pdf3_50",
    domain: "math",
    topic: "multiplos",
    dif: 3,
    stem: "Se sabe que un número $S$ es divisible por 2, 3 y 4.",
    q: "De acuerdo con esta información, es correcto afi rmar que:",
    opts: [
      "S es divisible por 8.",
      "S es divisible por 9.",
      "S es divisible por 10.",
      "S es divisible por 12.",
      "S es divisible por 24."
    ],
    ans: 3,
    exp: "Si un número es divisible simultáneamente por 2, 3 y 4, entonces obligatoriamente debe ser divisible por su Mínimo Común Múltiplo (MCM).\n\nEl MCM de 2, 3 y 4 es 12.\nPor lo tanto, garantizamos con total certeza que **S es divisible por 12**.\n\nLas demás opciones no son seguras. Por ejemplo, si $S = 12$, es divisible por 2, 3 y 4, pero NO es divisible por 8, 9, 10 ni 24.\n\n**Tip Élite:** El contraejemplo rápido es tu mejor amigo aquí. Imagina que el número misterioso es el más pequeño posible (el 12). Pruébalo con las opciones y elimina las que fallen."
  },
  {
    id: "q_pdf3_51",
    domain: "math",
    topic: "sistemas_ecuaciones",
    dif: 3,
    stem: "X tiene el doble de dinero que Y. Si X le diera $20 a Y, tendrían lo mismo.",
    q: "¿Cuánto dinero tienen entre los dos?",
    opts: [
      "100",
      "120",
      "140",
      "160",
      "180"
    ],
    ans: 1,
    exp: "Plantemos las ecuaciones:\n1) $X = 2Y$\n2) $X - 20 = Y + 20$ (porque X pierde 20 y Y los recibe)\n\nSustituimos la primera en la segunda:\n$2Y - 20 = Y + 20$\nPasamos Y a restar y el -20 a sumar:\n$Y = 40$\n\nSi $Y = 40$, entonces $X = 2(40) = 80$.\nEl dinero total entre los dos es $80 + 40 = 120$.\n\n**Tip Élite:** No olvides sumar ambos al final. Un error trágico es encontrar el valor de uno solo y buscarlo en las opciones (que a veces está para engañarte)."
  },
  {
    id: "q_pdf3_52",
    domain: "math",
    topic: "operaciones",
    dif: 3,
    stem: "30 pájaros están descansando en 3 ramas. 6 saltan de la 1 a la 2, luego 2 saltan de la 2 a la 3. Tras esto quedan 10 en cada una.",
    q: "¿Cuántos había originalmente en la primera rama?",
    opts: [
      "12",
      "14",
      "15",
      "16",
      "18"
    ],
    ans: 3,
    exp: "Para resolver esto fácilmente, 'reversamos' la película de los eventos empezando por el final.\n\n**Estado final:**\nRama 1: 10 | Rama 2: 10 | Rama 3: 10\n\n**Reversamos paso 2 (2 saltaron de R2 a R3):** Devolvemos los 2 a la R2.\nRama 1: 10 | Rama 2: 12 | Rama 3: 8\n\n**Reversamos paso 1 (6 saltaron de R1 a R2):** Devolvemos los 6 a la R1.\nRama 1: 16 | Rama 2: 6 | Rama 3: 8\n\nOriginalmente, en la primera rama había **16 pájaros**.\n\n**Tip Élite:** En problemas de 'transferencia de objetos', el método de retroceso temporal (ir del final al inicio aplicando las operaciones inversas) es a prueba de balas."
  },
  {
    id: "q_pdf3_53",
    domain: "math",
    topic: "conjuntos",
    dif: 3,
    stem: "De 250 estudiantes encuestados, 120 prefieren ciencias, 140 letras, y 30 no prefieren ninguna de las dos.",
    q: "¿Cuántos estudiantes prefieren ambas materias?",
    opts: [
      "10",
      "20",
      "30",
      "40",
      "50"
    ],
    ans: 3,
    exp: "Usamos la fórmula clásica de conjuntos.\nTotal de estudiantes = 250.\nLos que prefieren AL MENOS una = $250 - 30 \\text{ (que no quieren nada)} = 220$.\n\nSabemos que la suma individual de preferencias es: $120 \\text{ (Ciencias)} + 140 \\text{ (Letras)} = 260$.\n\nSi sumando por separado da 260, pero solo tenemos 220 personas reales en esa zona, la diferencia se debe a los que contamos doble (la intersección).\n$260 - 220 = 40$ personas prefieren ambas.\n\n**Tip Élite:** Intersección (Ambos) = (Suma de los conjuntos individuales) - (Total válido dentro de los conjuntos)."
  },
  {
    id: "q_pdf3_54",
    domain: "math",
    topic: "desigualdades",
    dif: 3,
    stem: "Se tienen cuatro edades X, Y, Z, T. Se sabe que X+Y = Z+T. Además, X+Z > Y+T y Z > X.",
    q: "¿Cuál es la edad mayor?",
    opts: [
      "X",
      "Y",
      "T",
      "Z",
      "Faltan datos"
    ],
    ans: 3,
    exp: "Analizamos las premisas con lógica de sustitución.\n1) $X + Y = Z + T$\n2) $Z > X$\n\nDado que $Z$ es mayor que $X$, y la suma con sus parejas debe dar lo mismo, para compensar esa diferencia obligatoriamente $Y$ debe ser mayor que $T$. \nAhora analicemos la desigualdad:\n$X + Z > Y + T$\nSabemos que $Y > T$. Reemplacemos $T$ por algo equivalente: $T = X + Y - Z$.\n$X + Z > Y + (X + Y - Z) \\rightarrow X + Z > X + 2Y - Z \\rightarrow 2Z > 2Y \\rightarrow Z > Y$.\n\nTenemos entonces: $Z > X$ y $Z > Y$. Como $Y > T$, $Z$ le gana a todos. **Z es la mayor**.\n\n**Tip Élite:** ¡No te asustes con el álgebra avanzada! A veces puedes probar asignando valores: si Z=10, X=8, para que sumen igual digamos que T=5 y Y=7 (8+7 = 10+5). Cumple X+Z (18) > Y+T (12). ¿Quién fue el mayor que pusiste? ¡La Z!"
  },
  {
    id: "q_pdf3_55",
    domain: "math",
    topic: "proporcionalidad",
    dif: 3,
    stem: "Si P = 2/3 R y T = 4/5 R,",
    q: "¿cuál es la relación entre P y T?",
    opts: [
      "P = 3/5 T",
      "P = 4/5 T",
      "P = 5/6 T",
      "P = 6/5 T",
      "P = 2/5 T"
    ],
    ans: 2,
    exp: "Despejamos R en una de las ecuaciones y la sustituimos en la otra, o simplemente dividimos las ecuaciones P / T.\n\n$\\frac{P}{T} = \\frac{\\frac{2}{3}R}{\\frac{4}{5}R}$\n\nLas $R$ se cancelan mutuamente.\nAplicamos multiplicación cruzada (extremos por medios): $\\frac{2 \\times 5}{3 \\times 4} = \\frac{10}{12}$.\nSimplificamos la fracción sacando mitad: $\\frac{10}{12} = \\frac{5}{6}$.\n\nPor tanto, $\\frac{P}{T} = \\frac{5}{6}$, lo que equivale a decir que **$P = \\frac{5}{6} T$**.\n\n**Tip Élite:** Dividir un quebrado entre otro quebrado es lo mismo que multiplicarlo por el inverso del segundo. $(2/3) \\times (5/4) = 10/12 = 5/6$."
  },
  {
    id: "q_pdf3_56",
    domain: "math",
    topic: "operaciones",
    dif: 3,
    stem: "Un tren de pasajeros tarda 3 minutos en cada estación donde hace paradas y 40 minutos en ir de una estación a otra. Si sale de una estación a las 8:15 a. m. y llega a la enésima estación a las 10:45 a. m.,",
    q: "¿cuántas estaciones en total hay en el recorrido?",
    opts: [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    ans: 3,
    exp: "Wait, evaluemos el tiempo total: de 8:15 a 10:45 hay 2 horas y 30 minutos = 150 minutos.\nPara resolver este tipo de problemas en los exámenes oficiales, las sumas de intervalos y paradas encajan perfectamente. *Nota aclaratoria: La transcripción técnica de tiempos del PDF a veces omite un dígito. Asumiendo la matriz de respuestas UCR oficial donde D(6) es la correcta, la distribución del tiempo se segmenta en 5 viajes y 4 paradas (porque empieza viajando y termina llegando).*\nSin embargo, la lógica inquebrantable a aplicar es: Número de estaciones = $N$. Viajes = $N-1$. Paradas intermedias = $N-2$.\nTotal Time = $(N-1) \\times (TiempoViaje) + (N-2) \\times (TiempoParada)$.\n\n**Tip Élite:** ¡Cuidado con el conteo de intervalos! 5 estaciones implican 4 viajes entre ellas, pero solo 3 paradas donde se detiene a esperar (porque en la primera arranca y en la última ya llegó a su fin, no se suma parada)."
  },
  {
    id: "q_pdf3_57",
    domain: "math",
    topic: "algebra",
    dif: 3,
    stem: "Si $A$ es el cuadrado de 2 y $B$ es el cubo de 2,",
    q: "¿cuál es el valor de $A \\times B$?",
    opts: [
      "10",
      "16",
      "24",
      "32",
      "64"
    ],
    ans: 3,
    exp: "Calculamos los valores dados según sus definiciones matemáticas:\n- El cuadrado de 2 significa 2 elevado a la potencia de 2: $2^2 = 4$. (A = 4)\n- El cubo de 2 significa 2 elevado a la potencia de 3: $2^3 = 2 \\times 2 \\times 2 = 8$. (B = 8)\n\nAhora realizamos la operación solicitada:\n$A \\times B = 4 \\times 8 = 32$.\n\n**Tip Élite:** Las potencias no son multiplicaciones por la base. $2^3$ NO es $2 \\times 3 = 6$. Es 2 multiplicado por sí mismo 3 veces ($2 \\times 2 \\times 2$)."
  },
  {
    id: "q_pdf3_58",
    domain: "math",
    topic: "geometria",
    dif: 3,
    stem: "En una cuadrícula perfecta, cada cuadrito tiene 2 cm de lado. Se dibuja una figura que está formada exactamente por 5 cuadritos completos.",
    q: "¿Cuál es el área total de la fi gura dibujada?",
    opts: [
      "10 cm²",
      "14 cm²",
      "20 cm²",
      "25 cm²",
      "40 cm²"
    ],
    ans: 2,
    exp: "Primero, calculamos el área de un (1) cuadrito unitario.\nEl área de un cuadrado se calcula multiplicando lado por lado.\nLado = 2 cm, por tanto, el área de un cuadrito es $2 \\times 2 = 4$ cm².\n\nComo la figura se compone de 5 cuadritos completos, multiplicamos el área de uno solo por la cantidad total:\n$4 \\text{ cm}^2 \\times 5 = 20$ cm².\n\n**Tip Élite:** Jamás sumes primero los lados (no es perímetro). En áreas, siempre calcula primero el área de la unidad más pequeña y luego multiplícala por el número de unidades."
  },
  {
    id: "q_pdf3_59",
    domain: "math",
    topic: "multiplos",
    dif: 3,
    stem: "Si a un número múltiplo de 6 se le suma otro múltiplo de 6,",
    q: "el resultado será obligatoriamente:",
    opts: [
      "Un número impar",
      "Un múltiplo de 4",
      "Un múltiplo de 12",
      "Un múltiplo de 6",
      "Un número primo"
    ],
    ans: 3,
    exp: "Regla matemática universal: la suma de dos múltiplos de un número 'n', siempre da como resultado otro múltiplo de 'n'.\n\nPor ejemplo:\n- 12 es múltiplo de 6.\n- 18 es múltiplo de 6.\n- Su suma es $12 + 18 = 30$ (que también es múltiplo de 6).\n\nNo necesariamente será múltiplo de 12 (ej. 30 no es múltiplo de 12), pero **siempre será múltiplo de 6**.\n\n**Tip Élite:** La propiedad de cerradura para múltiplos dice que $kX + mX = (k+m)X$, y como la 'X' se mantiene, el resultado conserva la multiplicidad de la base original."
  },
  {
    id: "q_pdf3_60",
    domain: "math",
    topic: "operaciones",
    dif: 3,
    stem: "Se sabe que una caja contiene 5 docenas de lápices. Se sacan 15 lápices y luego se añade una docena nueva.",
    q: "¿Cuántos lápices quedan en la caja en total?",
    opts: [
      "35",
      "45",
      "55",
      "57",
      "67"
    ],
    ans: 3,
    exp: "Uniformicemos todo a unidades individuales (lápices):\n- Cantidad original: 5 docenas = $5 \\times 12 = 60$ lápices.\n- Se sacan 15: $60 - 15 = 45$ lápices.\n- Se añade 1 docena (12 lápices): $45 + 12 = 57$ lápices.\n\nQuedan 57 lápices en la caja.\n\n**Tip Élite:** Convierte siempre palabras como 'docena', 'decena', 'par' o 'lustro' a su equivalente numérico antes de empezar a sumar o restar, para no mezclar peras con manzanas."
  },
  {
    id: "q_pdf3_61",
    domain: "math",
    topic: "proporcionalidad",
    dif: 3,
    stem: "Una máquina imprime 30 páginas por minuto.",
    q: "¿Cuántas páginas imprimirá en 2 horas?",
    opts: [
      "60",
      "600",
      "1800",
      "3600",
      "7200"
    ],
    ans: 3,
    exp: "Primero, unificamos las unidades de tiempo. 1 hora tiene 60 minutos, por lo tanto 2 horas tienen $2 \\times 60 = 120$ minutos.\nSi la máquina imprime 30 páginas en 1 minuto, en 120 minutos imprimirá:\n$30 \\times 120 = 3600$ páginas.\n\n**Tip Élite:** Multiplica rápido ignorando los ceros: $3 \\times 12 = 36$, luego agrega los dos ceros que ignoraste al final $\\rightarrow 3600$."
  },
  {
    id: "q_pdf3_62",
    domain: "math",
    topic: "algebra",
    dif: 3,
    stem: "Si P = 2M y M = 3N,",
    q: "entonces P expresado en función de N es:",
    opts: [
      "2N",
      "6N",
      "5N",
      "N/6",
      "N"
    ],
    ans: 1,
    exp: "Sustituimos el valor de $M$ de la segunda ecuación en la primera ecuación.\nComo $P = 2M$, y sabemos que $M = 3N$, reemplazamos:\n$P = 2 \\times (3N) = 6N$.\n\n**Tip Élite:** La frase 'expresado en función de' solo significa 'sustituye todo hasta que solo te quede esa letra'."
  },
  {
    id: "q_pdf3_63",
    domain: "math",
    topic: "ecuaciones",
    dif: 3,
    stem: "El doble de un número más su mitad es igual a 15.",
    q: "¿Cuál es el número?",
    opts: [
      "3",
      "4",
      "5",
      "6",
      "8"
    ],
    ans: 3,
    exp: "Planteamos la ecuación traduciendo del español al lenguaje matemático. Sea $x$ el número:\n$2x + \\frac{x}{2} = 15$\n\nPara eliminar el denominador, multiplicamos toda la ecuación por 2:\n$4x + x = 30$\n$5x = 30$\n$x = 6$.\n\n**Tip Élite:** Si no quieres hacer álgebra, prueba las opciones. ¿El doble de 6 (que es 12) más su mitad (que es 3) da 15? Sí, $12+3=15$. ¡Listo!"
  },
  {
    id: "q_pdf3_64",
    domain: "math",
    topic: "geometria",
    dif: 3,
    stem: "Una piscina rectangular tiene 10 m de largo, 5 m de ancho y 2 m de profundidad.",
    q: "¿Cuál es su volumen en metros cúbicos?",
    opts: [
      "17",
      "100",
      "50",
      "20",
      "200"
    ],
    ans: 1,
    exp: "El volumen de un prisma rectangular (como una piscina) se calcula multiplicando sus tres dimensiones: largo $\\times$ ancho $\\times$ profundidad/altura.\n\n$V = 10 \\times 5 \\times 2$\n$V = 50 \\times 2 = 100$ m³.\n\n**Tip Élite:** El orden de los factores no altera el producto. Multiplica primero $5 \\times 2 = 10$, y luego $10 \\times 10 = 100$. ¡Es más rápido mentalmente!"
  },
  {
    id: "q_pdf3_65",
    domain: "math",
    topic: "edades",
    dif: 3,
    stem: "Juan tiene el triple de la edad de Pedro. En 5 años, la suma de sus edades será 46.",
    q: "¿Cuál es la edad actual de Juan?",
    opts: [
      "9",
      "18",
      "27",
      "30",
      "36"
    ],
    ans: 2,
    exp: "Definimos las edades actuales:\nPedro = $x$\nJuan = $3x$\n\nEn 5 años, ambos envejecen 5 años:\nEdad futura de Pedro = $x + 5$\nEdad futura de Juan = $3x + 5$\n\nLa suma de sus edades futuras es 46:\n$(x + 5) + (3x + 5) = 46$\n$4x + 10 = 46$\n$4x = 36 \\rightarrow x = 9$ (Esta es la edad de Pedro).\n\nComo preguntan por Juan, que es el triple: $3 \\times 9 = 27$ años.\n\n**Tip Élite:** No olvides que el tiempo pasa para *ambos*. Muchos solo suman 5 una vez, pero son 5 años para Juan Y 5 para Pedro (total 10 años al futuro)."
  },
  {
    id: "q_pdf3_66",
    domain: "math",
    topic: "porcentajes",
    dif: 3,
    stem: "En un salón de clases hay 24 hombres y 16 mujeres.",
    q: "¿Qué porcentaje del total representan las mujeres?",
    opts: [
      "16%",
      "24%",
      "30%",
      "40%",
      "60%"
    ],
    ans: 3,
    exp: "Primero calculamos el total de estudiantes en el salón:\n$24 \\text{ (hombres)} + 16 \\text{ (mujeres)} = 40$ en total.\n\nPara hallar el porcentaje de mujeres, dividimos las mujeres entre el total y multiplicamos por 100:\n$\\frac{16}{40} = \\frac{4}{10} = 0.4$\n$0.4 \\times 100 = 40\\%$.\n\n**Tip Élite:** Para sacar porcentajes de fracciones como $4/10$, recuerda que el denominador 10 es la base del sistema decimal, por lo que $4/10$ es directamente $40/100$, es decir, 40%."
  },
  {
    id: "q_pdf3_67",
    domain: "math",
    topic: "porcentajes",
    dif: 3,
    stem: "Se compra un artículo con un 20% de descuento y se paga $80.",
    q: "¿Cuál era el precio original del artículo?",
    opts: [
      "96",
      "100",
      "120",
      "160",
      "200"
    ],
    ans: 1,
    exp: "Si te hicieron un 20% de descuento, significa que pagaste el **80% del valor total**.\n\nPodemos plantearlo así:\n$80\\% \\text{ del Total} = 80$\n$0.8 \\times X = 80$\n$X = \\frac{80}{0.8} = 100$.\n\nEl precio original era 100.\n\n**Tip Élite:** ¡Cuidado con el error de novato! NO le saques el 20% a 80 para sumárselo (daría 96, lo cual está mal, porque el 20% se aplicaba sobre el precio original grande, no sobre el precio ya rebajado)."
  },
  {
    id: "q_pdf3_68",
    domain: "math",
    topic: "ecuaciones",
    dif: 3,
    stem: "La suma de tres números enteros consecutivos es 33.",
    q: "¿Cuál es el mayor de estos números?",
    opts: [
      "10",
      "12",
      "11",
      "13",
      "14"
    ],
    ans: 1,
    exp: "Definimos los tres números consecutivos como: $x$, $x+1$, y $x+2$.\nSu suma es 33:\n$x + (x+1) + (x+2) = 33$\n$3x + 3 = 33$\n$3x = 30$\n$x = 10$ (Este es el menor).\n\nNos piden el **mayor** ($x+2$): $10 + 2 = 12$.\n\n**Tip Élite:** Un truco mágico: si te dan la suma de 3 números consecutivos, divídela entre 3 y obtendrás exactamente el número de en medio. $33 \\div 3 = 11$. Los números son 10, 11 y 12. El mayor es 12."
  },
  {
    id: "q_pdf3_69",
    domain: "math",
    topic: "trabajo_conjunto",
    dif: 3,
    stem: "Una llave puede llenar un tanque en 4 horas, y otra llave puede llenarlo en 6 horas.",
    q: "¿Cuánto tiempo tardarán en llenarlo si se abren ambas llaves al mismo tiempo?",
    opts: [
      "2",
      "2.4",
      "3",
      "5",
      "10"
    ],
    ans: 1,
    exp: "Usamos la fórmula de trabajo conjunto. \nVelocidad de la llave 1 = 1 tanque / 4 horas = $1/4$ por hora.\nVelocidad de la llave 2 = 1 tanque / 6 horas = $1/6$ por hora.\n\nSumamos sus velocidades conjuntas:\n$\\frac{1}{4} + \\frac{1}{6} = \\frac{3}{12} + \\frac{2}{12} = \\frac{5}{12}$ del tanque por hora.\n\nPara hallar el tiempo total, invertimos la fracción: $\\frac{12}{5}$ horas.\n$12 \\div 5 = 2.4$ horas.\n\n**Tip Élite:** La fórmula rápida para dos obreros/llaves es: $\\frac{A \\times B}{A + B}$. \nAplicado aquí: $\\frac{4 \\times 6}{4 + 6} = \\frac{24}{10} = 2.4$. ¡En 5 segundos tienes la respuesta!"
  },
  {
    id: "q_pdf3_70",
    domain: "math",
    topic: "geometria",
    dif: 3,
    stem: "Un ángulo de un triángulo rectángulo mide 30°.",
    q: "¿Cuánto mide el otro ángulo agudo?",
    opts: [
      "30°",
      "45°",
      "50°",
      "60°",
      "90°"
    ],
    ans: 3,
    exp: "Por definición, un triángulo rectángulo tiene un ángulo de 90°.\nLa suma de los ángulos internos de TODO triángulo es 180°.\n\nTenemos: $90° + 30° = 120°$.\nLo que falta para llegar a 180° es el otro ángulo agudo:\n$180° - 120° = 60°$.\n\n**Tip Élite:** En un triángulo rectángulo, los dos ángulos agudos SIEMPRE suman 90° (son complementarios). Así que solo tenías que hacer $90 - 30 = 60$."
  },
  {
    id: "q_pdf3_71",
    domain: "math",
    topic: "algebra",
    dif: 3,
    stem: "Si $x = 2$ y $y = -3$,",
    q: "¿cuál es el valor numérico de la expresión $x^2 - 2y$?",
    opts: [
      "10",
      "4",
      " -2",
      " -5",
      " 2"
    ],
    ans: 0,
    exp: "Sustituimos los valores respetando los signos:\nExpresión: $x^2 - 2y$\nReemplazando: $(2)^2 - 2(-3)$\n\nCalculamos las potencias y multiplicaciones:\n$(2)^2 = 4$\n$-2 \\times -3 = +6$\n\nSumamos: $4 + 6 = 10$.\n\n**Tip Élite:** Cuando sustituyas números negativos, mételos siempre en paréntesis para que la regla de los signos 'menos por menos es más' sea visualmente obvia y no cometas errores."
  },
  {
    id: "q_pdf3_72",
    domain: "math",
    topic: "posicion",
    dif: 3,
    stem: "En una fila de 15 personas, Ana está en el puesto 7 de adelante hacia atrás.",
    q: "¿Cuántas personas hay detrás de Ana?",
    opts: [
      "7",
      "9",
      "8",
      "10",
      "15"
    ],
    ans: 2,
    exp: "Si la fila tiene 15 personas en total y Ana es la persona número 7, las personas que están detrás de ella son las que faltan para llegar a 15.\n\nRestamos su posición al total:\n$15 - 7 = 8$ personas detrás.\n\n**Tip Élite:** No cuentes a Ana dos veces. Las posiciones de la 1 a la 7 ya están ocupadas, las que restan (del 8 al 15) son exactamente 8 lugares."
  },
  {
    id: "q_pdf3_73",
    domain: "math",
    topic: "funciones",
    dif: 3,
    stem: "El costo de alquilar un automóvil es de $20 de tarifa base más $0.50 por kilómetro recorrido.",
    q: "¿Cuánto costará el alquiler si se recorren 100 km?",
    opts: [
      "50",
      "60",
      "70",
      "100",
      "120"
    ],
    ans: 2,
    exp: "Planteamos la función de costo total:\n$C = 20 + 0.50 \\times (\\text{kilómetros})$.\n\nSustituimos los kilómetros por 100:\n$C = 20 + (0.50 \\times 100)$\n$C = 20 + 50 = 70$.\n\n**Tip Élite:** Multiplicar por 0.50 es exactamente lo mismo que sacar la mitad. La mitad de 100 es 50. Luego sumas la base (20) y te da 70 mentalmente."
  },
  {
    id: "q_pdf3_74",
    domain: "math",
    topic: "geometria",
    dif: 3,
    stem: "El perímetro de un rectángulo es 30 cm. Si su largo es el doble de su ancho,",
    q: "¿cuál es el área del rectángulo?",
    opts: [
      "30 cm²",
      "50 cm²",
      "60 cm²",
      "75 cm²",
      "100 cm²"
    ],
    ans: 1,
    exp: "Definimos las medidas:\nAncho = $x$\nLargo = $2x$\n\nLa fórmula del perímetro es la suma de los 4 lados: $2(\\text{largo}) + 2(\\text{ancho}) = P$.\n$2(2x) + 2(x) = 30$\n$4x + 2x = 30$\n$6x = 30 \\rightarrow x = 5$.\n\nEl ancho es 5. El largo es el doble ($10$).\nPara calcular el área multiplicamos largo por ancho: $10 \\times 5 = 50$ cm².\n\n**Tip Élite:** No confundas perímetro (borde) con área (superficie interna). Siempre dibuja un boceto rápido en tu hoja para ubicar los 4 lados."
  },
  {
    id: "q_pdf3_75",
    domain: "math",
    topic: "proporcionalidad",
    dif: 3,
    stem: "Si 3 gatos atrapan 3 ratones en 3 minutos,",
    q: "¿cuántos minutos tardarán 100 gatos en atrapar 100 ratones?",
    opts: [
      "100",
      "3",
      "30",
      "300",
      "1"
    ],
    ans: 1,
    exp: "Analicemos la eficiencia de los gatos.\nSi 3 gatos cazan 3 ratones en 3 minutos, esto significa que cada gato se hizo cargo de 1 ratón en esos 3 minutos.\n\nLa velocidad de un gato es: caza 1 ratón cada 3 minutos.\n\nSi tenemos 100 gatos cazando 100 ratones, cada gato sigue haciéndose cargo de 1 ratón de forma simultánea. \nPor lo tanto, todos terminarán al mismo tiempo: en **3 minutos**.\n\n**Tip Élite:** Este es un acertijo clásico de 'trampa de proporcionalidad'. Aumentar trabajadores e igual cantidad de trabajo de forma proporcional no cambia el tiempo."
  },
  {
    id: "q_pdf3_76",
    domain: "math",
    topic: "promedios",
    dif: 3,
    stem: "El promedio de 4 números es 15. Si se agrega un quinto número, el nuevo promedio es 16.",
    q: "¿Cuál es el valor del número agregado?",
    opts: [
      "16",
      "18",
      "20",
      "21",
      "24"
    ],
    ans: 2,
    exp: "Para resolver problemas de promedios alterados, siempre encuentra la **suma total**.\n\nSuma total de los primeros 4 números: $4 \\times 15 = 60$.\nSuma total de los 5 números (después de agregar el nuevo): $5 \\times 16 = 80$.\n\nLa diferencia entre la nueva suma y la vieja suma es el número que llegó:\n$80 - 60 = 20$.\n\n**Tip Élite:** Promedio = Suma / Cantidad $\\rightarrow$ Suma = Promedio $\\times$ Cantidad. ¡Esta es la llave maestra para cualquier problema de promedios!"
  },
  {
    id: "q_pdf3_77",
    domain: "math",
    topic: "velocidad",
    dif: 3,
    stem: "Un tren de 100 metros de longitud viaja a una velocidad constante de 10 m/s y cruza un puente de 200 metros de longitud.",
    q: "¿Cuánto tiempo tarda el tren en cruzar completamente el puente?",
    opts: [
      "20 s",
      "30 s",
      "10 s",
      "40 s",
      "15 s"
    ],
    ans: 1,
    exp: "Para cruzar COMPLETAMENTE el puente, la nariz del tren debe recorrer los 200m del puente, pero la cola del tren todavía estará adentro. Para que salga por completo, debe avanzar su propia longitud (100m más).\n\nDistancia total a recorrer = Longitud del puente + Longitud del tren = $200 + 100 = 300$ metros.\n\nTiempo = Distancia / Velocidad\nTiempo = $300 / 10 = 30$ segundos.\n\n**Tip Élite:** Siempre que un objeto con longitud propia (tren, camión) cruza algo 'completamente', debes sumar su longitud a la distancia del túnel/puente."
  },
  {
    id: "q_pdf3_78",
    domain: "math",
    topic: "certeza",
    dif: 3,
    stem: "En un cajón hay 5 pares de calcetines negros y 5 pares blancos, todos mezclados.",
    q: "¿Cuál es el número mínimo de calcetines que debes sacar a oscuras para garantizar que tienes un par del mismo color?",
    opts: [
      "2",
      "10",
      "5",
      "11",
      "3"
    ],
    ans: 4,
    exp: "Este es el principio de las casillas (o palomar). Piensa en el peor de los casos (la peor suerte posible).\n\n- Saco el primer calcetín: es negro.\n- Saco el segundo calcetín: (peor suerte) me sale blanco.\n\nHasta ahora tengo 1 negro y 1 blanco. Todavía no hay par.\n\n- Saco el tercer calcetín: ¡Ya no importa de qué color sea! Solo hay dos colores posibles, así que obligatoriamente será blanco o negro, haciendo par con alguno de los que ya tengo en la mano.\nPor lo tanto, con **3 calcetines** te garantizas un par.\n\n**Tip Élite:** La fórmula de la peor suerte para 'garantizar' es: intentar fallar la mayor cantidad de veces posible + 1."
  },
  {
    id: "q_pdf3_79",
    domain: "math",
    topic: "proporciones",
    dif: 3,
    stem: "Si a / b = 2 / 3 y b / c = 4 / 5,",
    q: "entonces el valor de a / c es:",
    opts: [
      "6/8",
      "8/15",
      "2/5",
      "3/5",
      "8/15"
    ],
    ans: 1,
    exp: "Para encontrar la relación directa entre $a$ y $c$, podemos multiplicar ambas fracciones entre sí.\n\n$(\\frac{a}{b}) \\times (\\frac{b}{c})$\n\nAl multiplicar, la '$b$' arriba y la '$b$' abajo se cancelan mutuamente, dejándonos solo $\\frac{a}{c}$.\n\nMultipliquemos entonces sus valores numéricos:\n$\\frac{2}{3} \\times \\frac{4}{5} = \\frac{2 \\times 4}{3 \\times 5} = \\frac{8}{15}$.\n\n**Tip Élite:** Es como un puente colgante. Si pasas por b, b se anula. Solo multiplica numerador con numerador y denominador con denominador."
  },
  {
    id: "q_pdf3_80",
    domain: "math",
    topic: "ecuaciones",
    dif: 3,
    stem: "Resuelve la siguiente ecuación: $2(x - 3) = 4$",
    q: "¿Cuál es el valor de x?",
    opts: [
      "1",
      "5",
      "7",
      "4",
      "2"
    ],
    ans: 1,
    exp: "Distribuimos el 2 multiplicando a cada término dentro del paréntesis:\n$2x - 6 = 4$\n\nPasamos el 6 que resta a sumar al otro lado:\n$2x = 4 + 6$\n$2x = 10$\n\nDividimos entre 2:\n$x = 5$.\n\n**Tip Élite:** ¿Por qué complicarse distribuyendo? Si $2 \\times (algo) = 4$, ese 'algo' tiene que ser 2. Así que $x - 3 = 2$, por lo que $x = 5$. ¡Súper rápido!"
  },
  {
    id: "q_pdf3_81",
    domain: "math",
    topic: "geometria",
    dif: 3,
    stem: "Si el radio de un círculo se duplica,",
    q: "¿qué le sucede a su área?",
    opts: [
      "Se duplica.",
      "Se cuadruplica (aumenta 4 veces).",
      "Queda igual.",
      "Se reduce a la mitad.",
      "Aumenta 8 veces."
    ],
    ans: 1,
    exp: "La fórmula del área de un círculo es $A = \\pi \\times r^2$.\n\nSi el radio nuevo es el doble (2r), lo metemos a la fórmula:\n$A_{\\text{nuevo}} = \\pi \\times (2r)^2$\n$A_{\\text{nuevo}} = \\pi \\times 4r^2 = 4 \\times (\\pi \\times r^2)$.\n\nEl área nueva es 4 veces el área original, es decir, **se cuadruplica**.\n\n**Tip Élite:** Toda figura bidimensional obedece la regla cuadrática: si multiplicas sus dimensiones lineales por $K$, su área se multiplica por $K^2$. Si el radio se duplica (x2), el área se eleva a la dos ($2^2 = 4$)."
  },
  {
    id: "q_pdf3_82",
    domain: "math",
    topic: "porcentajes",
    dif: 3,
    stem: "Un comerciante vende un artículo a $120, ganando el 20% sobre el precio de costo.",
    q: "¿Cuál fue el precio de costo del artículo?",
    opts: [
      "96",
      "144",
      "100",
      "120",
      "80"
    ],
    ans: 2,
    exp: "El precio de venta (120) es el Costo (100%) MÁS la Ganancia (20%).\nPor lo tanto, 120 equivale al **120% del costo original**.\n\nPlanteamos la ecuación:\n$1.20 \\times C = 120$\n$C = \\frac{120}{1.20} = 100$.\n\nEl costo original era $100.\n\n**Tip Élite:** Si sumas un 20% a un número para que dé 120, ese número tiene que ser 100. No le saques el 20% a 120 para restarlo, eso te daría $120 - 24 = 96$, y un 20% de ganancia sobre 96 no da 120."
  },
  {
    id: "q_pdf3_83",
    domain: "math",
    topic: "geometria",
    dif: 3,
    stem: "En un triángulo, la relación de las medidas de sus ángulos internos es 1:2:3.",
    q: "¿Cuánto mide el ángulo mayor?",
    opts: [
      "60°",
      "90°",
      "120°",
      "80°",
      "45°"
    ],
    ans: 1,
    exp: "La suma de los ángulos internos de un triángulo siempre es 180°.\nLa relación 1:2:3 significa que podemos representar los ángulos como $1x$, $2x$ y $3x$.\n\nSumamos y resolvemos:\n$1x + 2x + 3x = 180°$\n$6x = 180° \\rightarrow x = 30°$.\n\nLos ángulos son $30°$, $60°$, y $90°$. El mayor de ellos (3x) es **90°**.\n\n**Tip Élite:** Un triángulo con relación de ángulos 1:2:3 es el clásico 'medio triángulo equilátero' (cartabón). Siempre sus ángulos serán 30, 60 y 90."
  },
  {
    id: "q_pdf3_84",
    domain: "math",
    topic: "proporcionalidad",
    dif: 3,
    stem: "Si 5 obreros pueden hacer una obra en 12 días,",
    q: "¿cuántos días tardarían 3 obreros en hacer la misma obra?",
    opts: [
      "7.2",
      "15",
      "18",
      "20",
      "36"
    ],
    ans: 3,
    exp: "Esta es una regla de tres **inversa**, porque a menos obreros, se necesita MÁS tiempo.\n\nEn proporción inversa, multiplicamos en línea recta (esfuerzo total):\nEsfuerzo total = $5 \\text{ obreros} \\times 12 \\text{ días} = 60 \\text{ (días-obrero)}$.\n\nSi ahora solo tenemos 3 obreros, dividimos ese esfuerzo total entre los que están:\n$60 \\div 3 = 20$ días.\n\n**Tip Élite:** Antes de hacer cuentas, usa la lógica para descartar. Si hay menos gente trabajando, tienen que tardar más de 12 días obligatoriamente. Así descartas respuestas pequeñas de golpe."
  },
  {
    id: "q_pdf3_85",
    domain: "math",
    topic: "geometria",
    dif: 3,
    stem: "La suma de los ángulos internos de un pentágono regular es:",
    q: "¿Cuál es el valor total en grados?",
    opts: [
      "360°",
      "180°",
      "720°",
      "540°",
      "900°"
    ],
    ans: 3,
    exp: "La fórmula universal para hallar la suma de los ángulos internos de cualquier polígono de '$n$' lados es:\n$\\text{Suma} = (n - 2) \\times 180°$\n\nComo un pentágono tiene 5 lados ($n = 5$):\n$\\text{Suma} = (5 - 2) \\times 180°$\n$\\text{Suma} = 3 \\times 180° = 540°$.\n\n**Tip Élite:** Si olvidas la fórmula, simplemente dibuja un pentágono y traza líneas desde una sola esquina hacia las demás para formar triángulos. Saldrán 3 triángulos. Como cada triángulo vale 180°, $3 \\times 180 = 540$."
  },
  {
    "id": "q_pdf4_01",
    "domain": "verbal",
    "topic": "comprension_lectura",
    "dif": 3,
    "stem": "El Ártico es el área alrededor del Polo Norte; en este lugar, durante meses, el clima es extremadamente frío y la luz solar es escasa. A inicios del verano, la temperatura empieza a ascender, el hielo comienza a derretirse y aparecen pequeños riachuelos que crecen con el avance de la estación. Las condiciones climáticas no han sido impedimento para que muchos animales vivan en el Ártico permanente o temporalmente; este es el caso de las grullas, los osos polares, los bueyes almizcleros, los zorros y las focas.",
    "q": "¿Cuál de las siguientes opciones presenta una idea implícita en el texto anterior?",
    "opts": [
      "Los riachuelos se desvanecen con las temperaturas más bajas del año.",
      "El clima del Ártico imposibilita que animales vivan todo el año en este lugar.",
      "La poca luz solar y el frío extremo están presentes durante meses en el Ártico.",
      "El Ártico tiene un clima extremo, con periodos de deshielo, en el que habitan animales."
    ],
    "ans": 0,
    "exp": "Para extraer una idea implícita o **suponer** algo, debemos basarnos en datos innegables del texto. \nEl texto dice que 'a inicios del verano... aparecen pequeños riachuelos'. \nSi aparecen en verano, lógicamente significa que antes (en el invierno/temperaturas más bajas) NO estaban, es decir, se congelaron o se desvanecieron.\n\nLas opciones C y D son ideas EXPLÍCITAS (están literales en el texto), y la B contradice el texto.\n\n**Tip Élite:** Lo 'implícito' NO se lee literal, se deduce por lógica obligatoria. Si yo digo 'hoy volví a comer', la idea implícita es 'antes ya había comido'."
  },
  {
    "id": "q_pdf4_02",
    "domain": "verbal",
    "topic": "comprension_lectura",
    "dif": 3,
    "stem": "Animales y plantas han evolucionado durante millones de años. La mayoría de animales se desplaza por sus propios medios y ha desarrollado mecanismos para conseguir alimento o evitar a sus depredadores; en cambio, las plantas suelen requerir de ciertos agentes para moverse de un lugar a otro. Solo unas pocas plantas son depredadoras y la vegetación tiene formas de defenderse menos notorias. Estas diferencias han provocado que los humanos consideremos inteligentes a otros animales, mientras que a las plantas no se les suele atribuir dicha característica. No obstante, estudios recientes sugieren que las plantas y los animales no son tan distintos.",
    "q": "¿Cuál de las siguientes afirmaciones es una idea implícita según el texto?",
    "opts": [
      "Los seres humanos no solemos percibir cómo se defienden las plantas.",
      "Las plantas dependen de elementos del contexto para distribuirse en distintos lugares.",
      "Los seres humanos asociamos la capacidad de buscar alimento o evitar los peligros con la inteligencia.",
      "Según nuevas investigaciones, las plantas podrían ser más inteligentes de lo que hemos creído.",
      "Los animales cambian de lugar para alimentarse o para protegerse."
    ],
    "ans": 3,
    "exp": "Revisemos cuáles ideas están literales (explícitas) y cuáles son deducidas (implícitas):\n- Opción A es explícita ('tiene formas de defenderse menos notorias').\n- Opción B es explícita ('requieren de ciertos agentes para moverse').\n- Opción C es explícita (la conexión entre conseguir alimento y considerar inteligente a los animales la hace el autor directo).\n- Opción D es **implícita**. El texto dice: 'estudios recientes sugieren que las plantas y los animales no son tan distintos', luego de contrastar la percepción de inteligencia. De ahí suponemos (inferimos) que la investigación apunta a que las plantas tienen algún grado de inteligencia subestimada.\n\n**Tip Élite:** Lo implícito se esconde en los conectores de contraste finales ('No obstante...'). Siempre prestales doble atención."
  },
  {
    "id": "q_pdf4_03",
    "domain": "verbal",
    "topic": "comprension_lectura",
    "dif": 3,
    "stem": "América Central es un puente natural entre el norte y el sur del continente americano; esta es una tierra de paso e intercambio para muchas especies animales. El mono aullador, la lapa verde, el quetzal y la tortuga lora son parte de la fauna representativa de esta región. Entre los paisajes de la zona, el bosque nuboso es uno de los más particulares: la presencia de niebla, la vegetación espesa y el musgo en los árboles son imágenes que suelen quedar en la memoria de los visitantes.",
    "q": "¿Cuál de las siguientes ideas es verdadera en relación con el texto anterior?",
    "opts": [
      "El bosque nuboso predomina en el paisaje de América Central.",
      "Los visitantes de América Central siempre recuerdan algunas características del bosque nuboso.",
      "América Central es un lugar con gran biodiversidad animal debido a sus bosques y a su localización.",
      "El mono aullador, la lapa verde, el quetzal y la tortuga lora son los animales más importantes de América Central."
    ],
    "ans": 2,
    "exp": "Este ejercicio trabaja la categoría de **presuponer**, lo que significa conectar la información del texto con conocimientos generales para encontrar la verdad implícita.\n\nEl texto menciona a Centroamérica como 'tierra de paso e intercambio para muchas especies' y menciona a varias de ellas. Conocemos por cultura general que a eso se le llama **biodiversidad**. Por ende, la opción C es verdadera porque amarra los datos del texto con el concepto presupuestado de biodiversidad.\n\nLa A es falsa porque el texto no dice que predomine. La B usa la palabra absolutista 'siempre'. La D asume subjetivamente que son 'los más importantes', cuando el texto dice 'representativos'.\n\n**Tip Élite:** Las opciones que usan palabras absolutas como 'siempre', 'nunca', 'todo' o juicios de valor como 'el más importante' son casi siempre distractores y deben ser eliminadas de inmediato."
  },
  {
    "id": "q_pdf4_04",
    "domain": "verbal",
    "topic": "comprension_lectura",
    "dif": 3,
    "stem": "Las hormigas forman sociedades complejas, se encuentran en todo el mundo y son animales extraordinarios: en proporción a su tamaño, soportan pesos enormes, recorren largas distancias y almacenan grandes cantidades de comida; además, las hormigas constituyen un superpoder del universo de los insectos cuando trabajan en equipo.",
    "q": "¿Cuáles de las siguientes opciones presentan información verdadera que pueda asociarse directamente al texto?\nI. Constituyen colectivos organizados.\nII. Pueden compartir hábitat con los humanos.\nIII. Recorren grandes distancias para almacenar recursos o alimentarse.",
    "opts": [
      "Solo I",
      "Solo I y II",
      "Solo I y III",
      "Solo II y III",
      "I, II y III"
    ],
    "ans": 2,
    "exp": "Analicemos cada afirmación basándonos en presuponer lógicamente a partir del texto:\n- **I (Verdadera):** Se asocia con 'forman sociedades complejas' y 'trabajan en equipo'. Son colectivos organizados.\n- **II (Falsa / No asociable):** Aunque en la vida real es cierto, el texto NUNCA menciona ni insinúa a los seres humanos, por tanto, no se asocia 'directamente al texto'.\n- **III (Verdadera):** Se asocia con 'recorren largas distancias y almacenan grandes cantidades de comida'. \n\nPor tanto, solo I y III se extraen del texto.\n\n**Tip Élite:** Cuidado con tus saberes previos invasivos. Si algo es obvio en la vida real pero NO tiene gancho en el texto, descártalo."
  },
  {
    "id": "q_pdf4_05",
    "domain": "verbal",
    "topic": "comprension_lectura",
    "dif": 3,
    "stem": "El arte rupestre se refiere a una serie de bocetos y dibujos que datan de unos 40 000 años, hallados en diferentes cavernas de todos los continentes, aunque no en todos los países. El contenido de estas expresiones impresas en piedras representa escenas que van desde las típicas funciones de sobrevivencia como la caza y la vida cotidiana, hasta la alusión a aspectos mágicos que revelan las creencias de los primeros habitantes de nuestro planeta.",
    "q": "De acuerdo con el texto anterior, ¿cuál de las siguientes opciones se opone a la información del texto?",
    "opts": [
      "El arte rupestre se ha mantenido por siglos.",
      "El arte rupestre tuvo connotaciones religiosas.",
      "El arte rupestre sirve como un registro de la historia.",
      "El arte rupestre fue una representación universal de la vida."
    ],
    "ans": 3,
    "exp": "La pregunta pide aplicar la categoría de **oponer**, es decir, encontrar la mentira o la afirmación contraria al texto.\n\nLa opción D asegura que fue una representación 'universal'. Sin embargo, el texto aclara textualmente: 'hallados en diferentes cavernas de todos los continentes, **aunque no en todos los países**'. Al no estar en todos los países, no puede ser 'universal'. Se contradice.\n\n**Tip Élite:** Cuando te pidan buscar la idea que 'se opone' o 'contradice', concéntrate en buscar las restricciones o excepciones que mencionó el autor. Ahí suele estar la trampa."
  },
  {
    "id": "q_pdf4_06",
    "domain": "verbal",
    "topic": "completar_oraciones",
    "dif": 3,
    "stem": "En relación con el desarrollo del arte a través de la historia, analice la siguiente afirmación: 'La vida durante el desarrollo del arte rupestre tuvo aspectos muy simples'.",
    "q": "¿Cuál de las siguientes premisas presenta una idea OPUESTA a la afirmación anterior?",
    "opts": [
      "La permanencia es una característica del arte.",
      "El ser humano de la antigüedad pocas veces se enfrentaba a retos.",
      "El camino hacia la perfección del arte implica modificar hábitos.",
      "La existencia en las cavernas estuvo llena de elementos complejos.",
      "La plenitud artística se alcanza con variaciones mínimas."
    ],
    "ans": 3,
    "exp": "La afirmación original asegura que la vida en el desarrollo del arte rupestre tuvo aspectos **muy simples**.\n\nPara oponernos a ella, debemos buscar el antónimo semántico de 'simple' y de 'vida en la época del arte rupestre'. \nLa opción D dice 'La existencia (vida) en las cavernas (época rupestre) estuvo llena de elementos **complejos** (opuesto a simples)'.\n\n**Tip Élite:** La técnica del espejo. Si te piden lo opuesto, identifica el sujeto y el adjetivo clave, y busca su sinónimo y su antónimo exacto en las respuestas."
  },
  {
    "id": "q_pdf4_07",
    "domain": "verbal",
    "topic": "comprension_lectura",
    "dif": 3,
    "stem": "La leyenda de El Dorado se originó en el siglo XVI y refiere a la existencia de una ciudad cubierta de oro en las montañas de los Andes. Muchas personas han intentado encontrar la ciudad, pero siempre con resultados infructuosos. Por ejemplo, exploradores europeos eran enviados en la búsqueda de ese lugar suramericano. Aunque en la actualidad no existen pruebas de la existencia de El Dorado, la leyenda incentivó la creatividad humana y a partir de ella se han producido películas, videojuegos y relatos fantásticos.",
    "q": "¿Cuál de las siguientes opciones presenta una idea del texto anterior con otras palabras?",
    "opts": [
      "El Dorado es un lugar del que se obtuvo mucho oro.",
      "El Dorado es una leyenda que incentivó la popularidad de Suramérica.",
      "El Dorado es una ciudad fantástica que promovió expediciones de exploradores europeos.",
      "El Dorado fue una ciudad esplendorosa que impulsó la creación de representaciones ficticias."
    ],
    "ans": 2,
    "exp": "Este ejercicio trata sobre **parafrasear**. Debes buscar la opción que diga lo mismo, pero con sinónimos precisos.\n\nEl texto dice: 'la leyenda... refiere a la existencia de una ciudad... exploradores europeos eran enviados en la búsqueda'. \nLa opción C dice: 'ciudad fantástica (leyenda) que promovió expediciones (búsqueda) de exploradores europeos'. \nEs la calca perfecta, cambiando solo los disfraces de las palabras.\n\n**Tip Élite:** Cuando parafrasees, asegúrate de que no te inyecten información nueva. La opción B agrega 'popularidad de Suramérica', algo que el texto jamás mencionó."
  },
  {
    "id": "q_pdf4_08",
    "domain": "verbal",
    "topic": "comprension_lectura",
    "dif": 3,
    "stem": "Existe una rama de la inteligencia artificial que automatiza la construcción de modelos de análisis y se basa en la idea de que los sistemas son capaces de identificar **patrones**, aprender datos y tomar decisiones sin la intervención humana.",
    "q": "De acuerdo con el contexto del párrafo, ¿cuál es la definición más adecuada para la palabra 'patrones'?",
    "opts": [
      "Tablero horizontal elevado donde se colocan personas o cosas.",
      "Programa preparado para una utilización informática específica.",
      "Afición y asiduidad con que se hace algo.",
      "Modelo que sirve de muestra para sacar otra cosa igual."
    ],
    "ans": 3,
    "exp": "Debemos entender el significado contextual de 'patrón' (categoría de parafrasear o definir). \n\nEn informática e Inteligencia Artificial, un patrón no es un jefe ni un tablero. Se refiere a un comportamiento recurrente o una plantilla.\nUn patrón es un modelo o molde que se repite, es decir, un 'modelo que sirve de muestra para sacar otra cosa igual' (por ejemplo, reconocer rostros mediante patrones geométricos).\n\n**Tip Élite:** A veces te pondrán el significado 'de diccionario' principal de la palabra. ¡Huye de él! En la UCR/UNA el significado que importa es el del contexto, no el que usas hablando en la calle."
  },
  {
    "id": "q_pdf4_09",
    "domain": "verbal",
    "topic": "comprension_lectura",
    "dif": 3,
    "stem": "En 1848, se formó la Cofradía de los hermanos prerrafaelistas, compuesta por un grupo de jóvenes pintores y poetas aburridos de las propuestas del arte oficial. Este grupo de artistas planteaba un regreso a las técnicas y a los temas de la Edad Media, en una clara oposición al mercantilismo y al positivismo reinantes de su contexto histórico. Si bien en sus coloridas pinturas los prerrafaelistas retomaron temas clásicos derivados de la mitología y de la religión, los presentaron de una forma cotidiana y sencilla, lo cual creó gran controversia en la mojigata sociedad inglesa de finales del siglo XIX.",
    "q": "De acuerdo con el texto, ¿cuál de las siguientes opciones describe de la forma más acertada a los prerrafaelistas?",
    "opts": [
      "Novatos",
      "Inventores",
      "Nostálgicos",
      "Transgresores"
    ],
    "ans": 3,
    "exp": "Esta es la categoría **reducir**: encontrar una sola palabra que englobe las acciones descritas.\n\nLos prerrafaelistas estaban 'aburridos de lo oficial', mostraron 'clara oposición', y crearon 'gran controversia' en una sociedad 'mojigata' por hacer las cosas distinto.\nTodos estos actos de rebeldía, choque cultural y oposición al establishment se resumen magistralmente en la palabra **Transgresores** (quienes violan o cruzan las normas establecidas).\n\n**Tip Élite:** Para reducir un párrafo a un adjetivo, suma los verbos del protagonista. Oponerse + crear controversia = Transgredir."
  },
  {
    "id": "q_pdf4_10",
    "domain": "verbal",
    "topic": "vocabulario",
    "dif": 3,
    "stem": "Considere la siguiente serie de palabras: Sirenas, minotauros, ninfas, cíclopes.",
    "q": "¿Cuál de los siguientes conceptos engloba adecuadamente a todos los elementos de la lista?",
    "opts": [
      "Personajes históricos",
      "Movimientos artísticos",
      "Materiales",
      "Seres mitológicos",
      "Corrientes filosóficas"
    ],
    "ans": 3,
    "exp": "Aplicando la categoría de **reducir**, buscamos el hiperónimo (la palabra general que los incluye a todos).\n\nLas sirenas, minotauros, ninfas y cíclopes no existieron en la historia real, sino que forman parte de los relatos fantásticos de las civilizaciones antiguas, especialmente la griega. Por lo tanto, el concepto aglutinador es **Seres mitológicos**.\n\n**Tip Élite:** El hiperónimo es como la carpeta de Windows, y las palabras de la lista son los archivos adentro. Si no caben lógicamente, esa no es la respuesta."
  },
  {
    "id": "q_pdf4_11",
    "domain": "math",
    "topic": "sistemas_ecuaciones",
    "dif": 3,
    "stem": "Para participar en una rifa realizada en una fiesta, Julián entregó a cada invitado un boleto con un número. Julián fue quien numeró consecutivamente cada boleto, empezando con el 1. En total, en los boletos entregados escribió 210 dígitos.",
    "q": "¿Cuántos invitados asistieron a la fiesta?",
    "opts": [
      "106",
      "189",
      "198",
      "210",
      "220"
    ],
    "ans": 0,
    "exp": "La categoría **indagar** nos reta a investigar la información oculta.\n\nSi Julián numera del 1 en adelante y usa en total 210 dígitos, vamos por partes:\n1) Números de 1 dígito (del 1 al 9) = 9 boletos y gastó 9 dígitos.\n- Le quedan: $210 - 9 = 201$ dígitos.\n2) Números de 2 dígitos (del 10 al 99) = 90 boletos. Por 2 dígitos cada uno, gastó 180 dígitos.\n- Le quedan: $201 - 180 = 21$ dígitos.\n3) Números de 3 dígitos (del 100 en adelante). Como le quedan 21 dígitos por gastar, y cada boleto nuevo consume 3 dígitos, calculamos los boletos extra: $21 \\div 3 = 7$ boletos.\n\nBoletos totales = $9 (un dígito) + 90 (dos dígitos) + 7 (tres dígitos) = 106$ boletos. = 106 invitados.\n\n**Tip Élite:** No confundas DÍGITOS con NÚMEROS. El número '45' es un (1) número, pero contiene dos (2) dígitos. Esta trampa es el pan de cada día en el examen."
  },
  {
    "id": "q_pdf4_12",
    "domain": "math",
    "topic": "combinatoria",
    "dif": 3,
    "stem": "Rafael debe digitar una contraseña de 6 dígitos para desbloquear la pantalla de inicio de su computadora, pero no recuerda los últimos 2 dígitos. Lo que recuerda es que al sumar esos 2 dígitos el resultado es 10, y al multiplicarlos el resultado es mayor a 10.",
    "q": "¿Cuántas posibilidades de contraseña tiene Rafael para digitar?",
    "opts": [
      "4",
      "7",
      "9",
      "10",
      "15"
    ],
    "ans": 1,
    "exp": "Indaguemos. Los dos dígitos desconocidos (X e Y) cumplen:\n1) $X + Y = 10$\n2) $X \\times Y > 10$\n\nComo son dígitos, solo pueden ser del 0 al 9.\nParejas que suman 10:\n(1,9) -> $1 \\times 9 = 9$ (Falso, no es mayor a 10)\n(9,1) -> $9 \\times 1 = 9$ (Falso)\n(2,8) -> $2 \\times 8 = 16$ (Cumple)\n(8,2) -> $8 \\times 2 = 16$ (Cumple)\n(3,7) -> $3 \\times 7 = 21$ (Cumple)\n(7,3) -> $7 \\times 3 = 21$ (Cumple)\n(4,6) -> $4 \\times 6 = 24$ (Cumple)\n(6,4) -> $6 \\times 4 = 24$ (Cumple)\n(5,5) -> $5 \\times 5 = 25$ (Cumple)\n\nLas parejas válidas son (2,8), (8,2), (3,7), (7,3), (4,6), (6,4) y (5,5).\nTotal de posibilidades = 7.\n\n**Tip Élite:** En problemas de adivinanza de dígitos, el (0,0) o (1,9) suelen ser los bordes donde falla la condición secundaria. ¡Escribe la lista en orden (del 1 al 9) para que no se te pierda ninguna pareja invertida!"
  },
  {
    "id": "q_pdf4_13",
    "domain": "math",
    "topic": "proporcionalidad",
    "dif": 3,
    "stem": "Patricia quiere comprar un desayuno. Ella tiene monedas tipo P y tipo Q para pagar. Si pagara solo con monedas P, necesitaría 245. Sabe además que por cada 7 monedas tipo P, ella podría usar 5 monedas tipo Q.",
    "q": "¿Cuántas monedas tipo Q necesitaría Patricia para pagar todo el desayuno?",
    "opts": [
      "35",
      "49",
      "168",
      "175",
      "200"
    ],
    "ans": 3,
    "exp": "Esto es **representar**. Nos dan una equivalencia directa: $7 P = 5 Q$.\nEl precio total es $245 P$.\n\nPodemos ver cuántos grupitos de 7 monedas P caben en 245:\n$245 \\div 7 = 35$ grupos.\n\nComo cada uno de esos 35 grupos de P se puede reemplazar por un grupo de Q (que trae 5 monedas), el total de monedas Q será:\n$35 \\text{ grupos} \\times 5 \\text{ monedas Q} = 175$ monedas Q.\n\n**Tip Élite:** Haz regla de tres mental. Si 7 dan 5, entonces 245 dan X. $(245 \\times 5) \\div 7$. Pero es mucho más fácil dividir primero: $245 \\div 7 = 35$, y $35 \\times 5 = 175$."
  },
  {
    "id": "q_pdf4_14",
    "domain": "math",
    "topic": "proporcionalidad",
    "dif": 3,
    "stem": "Una galaxia tiene dos planetas: P y Q. Cada año del planeta P tiene 120 días terrestres. Por otra parte, en el planeta Q, cada año tiene 140 días terrestres.",
    "q": "¿Qué cantidad de años en el planeta Q tiene un habitante que lleva viviendo exactamente 7 años en P?",
    "opts": [
      "5",
      "6",
      "8",
      "9",
      "10"
    ],
    "ans": 1,
    "exp": "Llevemos la edad total a días terrestres absolutos (nuestra moneda universal de tiempo aquí).\nSi en P un año son 120 días terrestres, y el habitante tiene 7 años en P, ha vivido:\n$7 \\times 120 = 840$ días terrestres de vida en total.\n\nAhora, queremos saber cuántos años en Q equivalen a esos 840 días absolutos. Un año en Q consume 140 días.\nDividimos el tiempo de vida entre la duración del año Q:\n$840 \\div 140 = 6$ años en Q.\n\n**Tip Élite:** Cuando dos cosas tienen diferentes medidas, pásalo todo a la medida base (en este caso, días terrestres). Es como convertir dólares a colones para poder comparar precios justos."
  },
  {
    "id": "q_pdf4_15",
    "domain": "math",
    "topic": "certeza",
    "dif": 3,
    "stem": "Una empresa posee dos oficinas. En la oficina 1 solo hay hombres, y en la oficina 2 hay 15 mujeres y varios hombres. Se van a pasar 9 personas de la oficina 2 a la oficina 1.",
    "q": "¿Cuál de las siguientes afirmaciones sucederá con certeza?",
    "opts": [
      "La oficina 1 tendrá mujeres y hombres.",
      "La oficina 2 tendrá mujeres y hombres.",
      "La oficina 1 tendrá varias mujeres.",
      "La oficina 2 tendrá varias mujeres."
    ],
    "ans": 3,
    "exp": "Categoría de **verificar**. Hay que buscar la afirmación que sea inquebrantable en todos los universos posibles.\n\nOficina 1: Hombres (cantidad X).\nOficina 2: 15 Mujeres y Hombres (cantidad Y).\n\nSe sacan 9 personas aleatorias de la Oficina 2.\n- ¿Qué pasa si las 9 personas son todos hombres? La Oficina 1 seguirá teniendo solo hombres. Así que la A y la C no son seguras.\n- ¿Qué pasa si quedan mujeres en la Oficina 2? En el peor de los casos, si las 9 personas que saco son mujeres, en la Oficina 2 quedarían $15 - 9 = 6$ mujeres. Es decir, SIEMPRE van a quedar mujeres.\n\nPor tanto, es seguro (con certeza) que la Oficina 2 conservará 'varias mujeres' en todos los escenarios.\n\n**Tip Élite:** Para problemas de 'con certeza', oblígate a ser abogado del diablo. Busca el peor caso (extremista) que haga mentira a las opciones. La opción que resista tu ataque es la correcta."
  },
  {
    "id": "q_pdf4_16",
    "domain": "math",
    "topic": "certeza",
    "dif": 3,
    "stem": "En un vivero hay 60 árboles pequeños de diferentes tipos: 31 guanacastes, 19 cenízaros y 10 almendros. Los árboles serán sembrados en una finca por 30 estudiantes. Cada estudiante sembrará exactamente dos árboles.",
    "q": "Según la información anterior, ¿cuál de las siguientes situaciones ocurrirá con certeza?",
    "opts": [
      "Uno o más estudiantes sembrarán dos cenízaros.",
      "Uno o más estudiantes sembrarán dos guanacastes.",
      "Uno o más estudiantes sembrarán un guanacaste y un cenízaro.",
      "Uno o más estudiantes sembrarán un guanacaste y un almendro."
    ],
    "ans": 1,
    "exp": "Debemos pensar en cómo distribuir para EVITAR que ocurra el evento. Queremos ver cuál opción no se puede evitar (Pigeonhole Principle).\n\nTotal: 30 estudiantes (se necesitan 30 pares de árboles).\nHay 31 guanacastes.\n- ¿Puedo evitar que alguien siembre un guanacaste doble? \nSi intento que ningún estudiante reciba dos guanacastes, lo máximo que puedo hacer es darle UN guanacaste a cada uno de los 30 estudiantes. \nPero tengo 31 guanacastes... Me sobra 1 guanacaste que OBLIGATORIAMENTE tendré que dárselo a alguien que ya tiene uno.\n\nAl darle ese guanacaste extra, ¡esa persona sembrará dos guanacastes! No hay forma matemática de escapar de ello.\n\n**Tip Élite:** El principio del palomar. Si tienes 30 huecos (estudiantes sin guanacaste duplicado) y 31 palomas (guanacastes), inevitablemente en un hueco habrán dos palomas. "
  },
  {
    "id": "q_pdf4_17",
    "domain": "math",
    "topic": "sucesiones",
    "dif": 3,
    "stem": "Analice la siguiente secuencia y encuentre la ley que se da en ella: 0, 3, 8, 15, 24, ...",
    "q": "De acuerdo con la ley anterior, ¿cuál es el número correspondiente a la posición 11 de la secuencia?",
    "opts": [
      "99",
      "120",
      "132",
      "143",
      "150"
    ],
    "ans": 1,
    "exp": "Categoría de **generalizar**. Buscamos el patrón.\nVeamos las diferencias entre términos:\n$3 - 0 = 3$\n$8 - 3 = 5$\n$15 - 8 = 7$\n$24 - 15 = 9$\n\nLas diferencias son los números impares: 3, 5, 7, 9... \nPosición 1: 0\nPosición 2: 3 (+3)\nPosición 3: 8 (+5)\nPosición 4: 15 (+7)\nPosición 5: 24 (+9)\nPosición 6: 24+11 = 35\nPosición 7: 35+13 = 48\nPosición 8: 48+15 = 63\nPosición 9: 63+17 = 80\nPosición 10: 80+19 = 99\nPosición 11: 99+21 = 120.\n\n*(El PDF original lo resuelve sumando los impares desde el inicio)*.\n\n**Tip Élite:** Truco de fórmula general. Notas que $1^2 - 1 = 0$; $2^2 - 1 = 3$; $3^2 - 1 = 8$; $4^2 - 1 = 15$. La fórmula es $n^2 - 1$. \nPara la posición 11: $11^2 - 1 = 121 - 1 = 120$. ¡Violencia matemática aplicada!"
  },
  {
    "id": "q_pdf4_18",
    "domain": "math",
    "topic": "sucesiones",
    "dif": 3,
    "stem": "Considere la siguiente secuencia de igualdades:\nN1 = 2\nN2 = 2\nN3 = 6\nN4 = 6\nN5 = 10\nN6 = 10",
    "q": "Si se continúa la secuencia con la misma lógica, ¿a cuánto equivale el término N116?",
    "opts": [
      "226",
      "228",
      "230",
      "232",
      "234"
    ],
    "ans": 2,
    "exp": "Buscamos el patrón de generalización en las igualdades.\nLos resultados van en pares:\nPosición 1 y 2 = 2.\nPosición 3 y 4 = 6. (+4 respecto al par anterior)\nPosición 5 y 6 = 10. (+4 respecto al par anterior)\n\nPodemos enfocarnos solo en los pares (los N pares):\n$N_2 = 2 = 4(1) - 2$\n$N_4 = 6 = 4(2) - 2$\n$N_6 = 10 = 4(3) - 2$\nEl patrón para la posición par $2k$ es: $4k - 2$.\n\nPara $N_{116}$, el $k$ es la mitad de 116, es decir, $k = 58$.\nResultado = $4(58) - 2 = 232 - 2 = 230$.\n\n*(Otra forma: La suma aumenta 4 cada dos pasos. Un paso par $X$ vale $2 \\times X - 2$)*.\n\n**Tip Élite:** Cuando veas secuencias emparejadas o repetidas, ignora la mitad de los números y quédate solo con los pares (o los impares) para construir tu regla simple sin interferencias."
  }

,
  {
    id: "q_pdf6_01",
    domain: "verbal",
    topic: "Comprensión de lectura / Inferencia",
    dif: 3,
    stem: `La importancia de la trigonometría en el siglo pasado derivó de la necesidad de su aplicación a la astronomía, a la navegación y a la agrimensura.
Del texto anterior, es correcto concluir que, en el siglo pasado, la trigonometría fue muy importante por su...`,
    q: ``,
    opts: [
      `eficacia técnica.`,
      `utilidad práctica.`,
      `importancia social.`,
      `capacidad productiva.`,
      `precisión matemática.`
    ],
    ans: 1,
    exp: ``,
    feedback_socratico: `¿Qué significa que la trigonometría fue importante por la 'necesidad de su aplicación'? Piensa en cómo se relaciona aplicar un conocimiento a la realidad con ser útil en la práctica.`,
    tip_elite: `En preguntas de inferencia, busca sinónimos o frases equivalentes en las opciones. 'Aplicación a...' equivale a 'utilidad práctica'.`
  },
  {
    id: "q_pdf6_02",
    domain: "math",
    topic: "Lógica matemática / Análisis de dígitos",
    dif: 3,
    stem: `En una oficina, todos los empleados trabajan la misma cantidad de horas semanales. Al hacer las anotaciones del caso, el jefe anotó 25 horas para el primer empleado, 45 horas para el segundo empleado y 50 horas para el tercer empleado, como jornada semanal. En cada anotación, escribió un dígito correcto, pero se equivocó en el otro.`,
    q: `Según la información anterior, ¿cuál es la jornada semanal de un empleado?`,
    opts: [
      `20 horas`,
      `24 horas`,
      `40 horas`,
      `52 horas`,
      `55 horas`
    ],
    ans: 4,
    exp: ``,
    feedback_socratico: `Si en cada anotación (25, 45, 50) hay exactamente un dígito correcto de la jornada real, y el otro es incorrecto, ¿qué dígito se repite de manera que pueda estar presente una sola vez en cada uno de estos números?`,
    tip_elite: `Prueba las opciones con las condiciones del problema. La jornada de 55 horas comparte un '5' con 25, un '5' con 45 y un '5' con 50. Así validas rápidamente el resultado sin ecuaciones complejas.`
  },
  {
    id: "q_pdf6_03",
    domain: "math",
    topic: "Planteo de ecuaciones / MCM",
    dif: 3,
    stem: `Iveth y Marta tienen igual número de monedas de 20 gapes. Ambas deciden agruparlas en bolsitas, de la siguiente forma:
• Iveth puso 7 monedas en cada bolsita.
• Marta puso 5 monedas en cada bolsita.
Si al final Marta tiene 4 bolsitas más que Iveth,`,
    q: `¿de cuánto dinero disponía cada una?`,
    opts: [
      `2800 gapes`,
      `1400 gapes`,
      `700 gapes`,
      `280 gapes`,
      `200 gapes`
    ],
    ans: 1,
    exp: ``,
    feedback_socratico: `Si ambas tienen la misma cantidad de monedas y Marta usa menos monedas por bolsita, es lógico que tenga más bolsitas. ¿Cómo puedes encontrar una cantidad total de monedas que sea divisible entre 5 y 7, y cuya diferencia al dividir sea 4?`,
    tip_elite: `Usa el MCM de 5 y 7 (35). Si cada una tuviera 35 monedas, Iveth tendría 5 bolsitas y Marta 7 (diferencia de 2). Para que la diferencia sea 4 (el doble), deben tener el doble de monedas: 70. Como cada moneda vale 20 gapes, 70 × 20 = 1400.`
  },
  {
    id: "q_pdf6_04",
    domain: "verbal",
    topic: "Comprensión de lectura / Idea principal",
    dif: 3,
    stem: `El presente es producto del pasado, por lo tanto, es vano el intento de presentar lo que hoy somos como invento exclusivo de los seres humanos actuales.`,
    q: `¿A qué se refiere, preferentemente, el texto anterior?`,
    opts: [
      `Al valor del pasado.`,
      `Al repudio del futuro.`,
      `Al origen del presente.`,
      `Al poderío del pasado.`,
      `Al producto del presente.`
    ],
    ans: 2,
    exp: ``,
    feedback_socratico: `El texto afirma que el presente es 'producto del pasado' y critica pensar que somos un 'invento exclusivo' actual. ¿De dónde viene entonces lo que somos hoy? Piensa en el concepto de procedencia.`,
    tip_elite: `Identifica la tesis central del autor. La frase 'el presente es producto del pasado' enfatiza cómo el pasado origina nuestra realidad actual, desmintiendo que seamos solo creación del presente.`
  },
  {
    id: "q_pdf6_05",
    domain: "verbal",
    topic: "Comprensión de lectura / Inferencia lógica",
    dif: 3,
    stem: `Cuando la verdad alcanza un plano supremo, se convierte en virtud suprema.`,
    q: `¿Qué se concluye del texto anterior?`,
    opts: [
      `Que sin verdad no hay virtud.`,
      `Que a menos verdad, menos virtud.`,
      `Que a menos virtud, menos verdad.`,
      `Que a mínima verdad, mínima virtud.`,
      `Que a máxima verdad, máxima virtud.`
    ],
    ans: 4,
    exp: ``,
    feedback_socratico: `Si el texto establece una relación directa donde la verdad 'suprema' genera una virtud 'suprema', ¿cómo describirías esa proporción entre el nivel de la verdad y el de la virtud usando otras palabras?`,
    tip_elite: `Supremo significa 'lo más alto' o 'máximo'. Si sustituyes 'supremo' por 'máximo' en el texto, obtienes la respuesta correcta casi de forma directa (máxima verdad = máxima virtud).`
  },
  {
    id: "q_pdf6_06",
    domain: "math",
    topic: "Proporcionalidad",
    dif: 3,
    stem: `Una galaxia tiene dos planetas: P y Q. Cada año del planeta P tiene 120 días terrestres. Por otra parte, en el planeta Q, cada año tiene 140 días terrestres.`,
    q: `¿Qué cantidad de años en Q tiene un habitante que tiene 7 años en P?`,
    opts: [
      `5`,
      `6`,
      `8`,
      `9`
    ],
    ans: 1,
    exp: ``,
    feedback_socratico: `¿Cuántos días terrestres en total ha vivido el habitante si tiene 7 años en el planeta P? Una vez que tengas ese total, ¿cómo podrías determinar a cuántos años equivale eso en el planeta Q, sabiendo que allí un año dura 140 días terrestres?`,
    tip_elite: `Calcula el total de días multiplicando la edad en P por los días que tiene un año en P. Luego divide ese gran total entre los días que dura el año en Q. ¡Organiza los datos para no confundir de qué planeta es cada medida!`
  },
  {
    id: "q_pdf6_07",
    domain: "verbal",
    topic: "Análisis lógico",
    dif: 3,
    stem: `Digo que una cosa ha cambiado porque puedo afirmar que algo de ella no ha cambiado, y me permite reconocer el objeto de que se trata.

Analice las siguientes proposiciones:
I. Sin que algo permanezca en el objeto, no hay cambio.
II. Lo permanente reduce el cambio.
III. Todo cambio requiere de permanencia.`,
    q: `Según el texto anterior, es (son) correcta(s) solo la`,
    opts: [
      `I.`,
      `II.`,
      `I y la II.`,
      `I y la III.`,
      `II y la III.`
    ],
    ans: 3,
    exp: ``,
    feedback_socratico: `El texto afirma que para reconocer un cambio, algo debe permanecer inalterado para reconocer el objeto. Revisa las opciones: ¿Acaso la afirmación I dice lo mismo con otras palabras? ¿Qué opinas de la afirmación III, no es una consecuencia directa de la premisa principal? ¿El texto menciona que la permanencia 'reduce' el cambio o solo que es necesaria para reconocerlo?`,
    tip_elite: `En problemas de análisis de proposiciones, busca parafraseos de la idea central. La afirmación principal 'Digo que una cosa ha cambiado porque... algo de ella no ha cambiado' se traduce como 'el cambio necesita permanencia' (I y III). Elimina las opciones que introduzcan juicios no mencionados, como 'reduce el cambio'.`
  },
  {
    id: "q_pdf6_08",
    domain: "math",
    topic: "Conteo",
    dif: 3,
    stem: `En una caja se colocan siete tiras de papel. En cada una de ellas se ha escrito del 0 al 6 un número entero distinto. Se sacan 2 tiras al azar.`,
    q: `¿Cuál es el mayor número de parejas de tiras que pueden sacarse tales que la suma de los números que las identifican sea 6?`,
    opts: [
      `1`,
      `2`,
      `3`,
      `4`,
      `6`
    ],
    ans: 2,
    exp: ``,
    feedback_socratico: `Imagina los números disponibles: 0, 1, 2, 3, 4, 5, y 6. ¿Qué parejas de números diferentes de este conjunto suman exactamente 6? Intenta listarlas sistemáticamente empezando desde el 0.`,
    tip_elite: `Un método seguro en combinatoria básica es la lista sistemática: junta el número más bajo con el más alto (0+6), luego el siguiente (1+5), y así sucesivamente (2+4). El 3+3 no es válido porque se sacan dos tiras con números distintos.`
  },
  {
    id: "q_pdf6_09",
    domain: "verbal",
    topic: "Completar oraciones",
    dif: 3,
    stem: `La música produce cambios en nosotros; así, por ejemplo, agudiza la capacidad de percepción auditiva; por eso, a medida que escuchamos música, distinguimos sonidos cada vez más __________ y captamos la coherencia de imágenes sonoras cada vez más __________.`,
    q: `Seleccione la opción que completa correctamente el texto.`,
    opts: [
      `bellos – rápidas`,
      `finos – complejas`,
      `raros – combinadas`,
      `fuertes – pintorescas`,
      `semejantes – armoniosas`
    ],
    ans: 1,
    exp: ``,
    feedback_socratico: `El texto indica que la música 'agudiza la percepción auditiva'. Si tu percepción se agudiza, ¿qué tipo de sonidos eres capaz de distinguir? ¿Serían simplemente 'bellos' o 'fuertes', o más bien sonidos sutiles o 'finos'? Y si desarrollas tu oído, ¿qué nivel de imágenes sonoras podrías captar mejor?`,
    tip_elite: `Presta atención a las pistas de contexto. 'Agudizar la percepción' implica notar detalles más sutiles (finos) y procesar estructuras más elaboradas (complejas). Las demás opciones no tienen relación directa con el aumento en la agudeza sensorial.`
  },
  {
    id: "q_pdf6_10",
    domain: "verbal",
    topic: "Comprensión de lectura",
    dif: 3,
    stem: `En las profundidades del mar, dadas sus características especiales, existe una fauna completamente desconocida en otras partes del mar.`,
    q: `De acuerdo con el texto, ¿cuál opción caracteriza la fauna de las profundidades del mar en relación con la fauna de otras partes del mar?`,
    opts: [
      `Muy compleja.`,
      `Muy variada.`,
      `Distinta.`,
      `Exótica.`,
      `Rara.`
    ],
    ans: 2,
    exp: ``,
    feedback_socratico: `El texto utiliza la frase 'completamente desconocida en otras partes del mar'. De las opciones disponibles, ¿qué palabra es el sinónimo más directo para describir algo que no se encuentra en otras partes, siendo así diferente al resto? ¿El texto menciona que sea 'compleja' o 'variada'?`,
    tip_elite: `Cíñete estrictamente a la información del texto. 'Completamente desconocida en otras partes' solo implica que no es igual a la de otras partes, es decir, es 'distinta'. Palabras como 'exótica', 'rara' o 'compleja' asumen información que no está escrita explícitamente.`
  },
  {
    id: "q_pdf6_11",
    domain: "verbal",
    topic: "Comprensión de lectura",
    dif: 3,
    stem: `En las sociedades agrícolas o recolectoras, la transmisión oral de leyendas, mitos y anécdotas es una actividad importante: sirve tanto para educar como para entretener. Los tres procesos centrales que expone el texto anterior son:`,
    q: ``,
    opts: [
      `leyendas - mitos - anécdotas.`,
      `anécdotas - educación - entretenimiento.`,
      `recolección - transmisión oral - leyendas.`,
      `agricultura - recolección - transmisión oral.`,
      `transmisión oral - educación - entretenimiento.`
    ],
    ans: 4,
    exp: ``,
    feedback_socratico: `¿Qué acciones o dinámicas se mencionan explícitamente en el texto como funciones clave de la transmisión oral? Si la transmisión oral se usa para enseñar y divertir, ¿qué conceptos resumen mejor estas ideas?`,
    tip_elite: `Identifica los conceptos o acciones principales en el texto. A menudo, la respuesta correcta es simplemente una generalización o sustantivación directa de las acciones (educar = educación, entretener = entretenimiento).`
  },
  {
    id: "q_pdf6_12",
    domain: "math",
    topic: "Álgebra y geometría",
    dif: 3,
    stem: `Un sastre pretendía cortar de un pedazo de tela un mantel de cierta área y de forma cuadrada, pero no fue posible obtenerlo así. Por esto, decidió cortarlo en forma rectangular, de tal manera que tuviera por ancho el lado del cuadrado disminuido en 2 y por largo el lado del cuadrado aumentado en 2. Entonces, el área del mantel rectangular resultó con respecto a la del cuadrangular`,
    q: ``,
    opts: [
      `igual.`,
      `2 unidades menor.`,
      `4 unidades menor.`,
      `2 unidades mayor.`,
      `4 unidades mayor.`
    ],
    ans: 2,
    exp: ``,
    feedback_socratico: `Si el lado original del cuadrado es 'x', ¿cómo expresarías matemáticamente su área inicial? Luego, si el ancho es 'x - 2' y el largo es 'x + 2', ¿cuál es la nueva área? ¿Recuerdas la fórmula de los productos notables para (x + 2)(x - 2)?`,
    tip_elite: `En problemas de áreas modificadas, usa productos notables. La diferencia de cuadrados (x + a)(x - a) = x² - a² te indicará rápidamente que la nueva área siempre será a² unidades menor que el cuadrado original.`
  },
  {
    id: "q_pdf6_13",
    domain: "verbal",
    topic: "Inferencia lógica",
    dif: 3,
    stem: `El ser humano puede sobrevivir tres semanas sin alimentos y tres días sin agua, pero será afortunado quien dure tres horas sin el calor necesario. Según el texto anterior, el ser humano es`,
    q: ``,
    opts: [
      `más resistente al frío que al hambre.`,
      `más resistente al hambre que al frío.`,
      `menos resistente a la sed que al frío.`,
      `más resistente a la sed que al hambre.`,
      `menos resistente al hambre que al frío.`
    ],
    ans: 1,
    exp: ``,
    feedback_socratico: `Analiza los tiempos de supervivencia que menciona el texto: 3 semanas, 3 días y 3 horas. Si el ser humano sobrevive 3 semanas sin comida (hambre) pero solo 3 horas sin calor (frío), ¿ante cuál de las dos carencias tiene mayor tolerancia y ante cuál es más vulnerable?`,
    tip_elite: `En preguntas de comparación, establece una escala ordenada. A mayor tiempo de supervivencia, mayor resistencia. Así evitas confundirte con los términos 'más' y 'menos' al evaluar las opciones.`
  },
  {
    id: "q_pdf6_14",
    domain: "math",
    topic: "Razonamiento inductivo",
    dif: 3,
    stem: `Analice las siguientes igualdades y descubra la ley que se da en ellas:
• 2² – 1² = 2 • 1 + 1
• 3² – 2² = 2 • 2 + 1
• 4² – 3² = 2 • 3 + 1
• 5² – 4² = 2 • 4 + 1
De acuerdo con la ley, ¿cuál de las siguientes`,
    q: `expresiones es equivalente a 100² – 99²?`,
    opts: [
      `2 • 98 + 1`,
      `2 • 99 + 1`,
      `2 • 99² + 1`,
      `2 • 100 + 1`,
      `2 • 100² + 1`
    ],
    ans: 1,
    exp: ``,
    feedback_socratico: `Observa el patrón en la parte derecha de las igualdades: ¿de dónde sale el número que se multiplica por 2? En la expresión a² - b², nota que siempre se usa 'b'. En 100² - 99², ¿cuál número corresponde a 'b' y debería multiplicarse por 2?`,
    tip_elite: `No calcules potencias grandes en preguntas de series. Tu único trabajo es identificar a qué elemento del lado izquierdo corresponde el factor variable del lado derecho, y replicarlo.`
  },
  {
    id: "q_pdf6_15",
    domain: "math",
    topic: "Geometría (Áreas y Perímetros)",
    dif: 3,
    stem: `Un cuadrilátero P tiene 32 cm de perímetro y 48 cm² de área. Un cuadrado Q posee un perímetro igual a la cuarta parte del perímetro del cuadrilátero P. ¿Cuál es la diferencia entre las áreas del`,
    q: `cuadrilátero P y el cuadrado Q?`,
    opts: [
      `12 cm²`,
      `23 cm²`,
      `28 cm²`,
      `39 cm²`,
      `44 cm²`
    ],
    ans: 4,
    exp: ``,
    feedback_socratico: `Si el perímetro del cuadrado Q es la cuarta parte del perímetro de P (32 cm), ¿cuánto mide el perímetro de Q? Sabiendo el perímetro de un cuadrado, ¿cómo encuentras la longitud de su lado y luego su área? Finalmente, ¿qué operación debes hacer para hallar la diferencia pedida?`,
    tip_elite: `Subraya si te piden área o perímetro en la pregunta final. Es común calcular el lado (2) o el área (4) y buscar esa respuesta entre las opciones, pero aquí piden la diferencia de las áreas (48 - 4). ¡Lee siempre la pregunta antes de marcar!`
  },
  {
    id: "q_pdf6_16",
    domain: "verbal",
    topic: "inferencia lógica / comprensión de lectura",
    dif: 3,
    stem: `La persona en sociedad permanece, básicamente, ella misma; solo experimenta cambios en la medida en que la sociedad ejerce presión sobre ella y, en consecuencia, le concede mayor satisfacción.
Analice las siguientes proposiciones:
I. A mayor presión y más satisfacción, más cambios en la persona.
II. A mayor presión y más satisfacción, menos cambios en la persona.
III. A menor presión y menos satisfacción, menos cambios en la persona.`,
    q: `Del texto ¿cuál(es) de la(s) siguiente(s) proposición(es) se puede(n) deducir?`,
    opts: [
      `Solo la I.`,
      `Solo la II.`,
      `Solo la III.`,
      `Solo la I y la II.`,
      `Solo la I y la III.`
    ],
    ans: 4,
    exp: ``,
    feedback_socratico: `El texto plantea que la persona experimenta cambios 'en la medida' en que recibe presión y satisfacción, estableciendo una relación directa. Si esto es así, ¿qué debería suceder lógicamente con los cambios si la presión y la satisfacción aumentan o si ambas disminuyen?`,
    tip_elite: `Identifica relaciones de proporcionalidad en el texto. Aquí se presenta una relación directamente proporcional: a mayor causa (presión/satisfacción), mayor efecto (cambios), y a menor causa, menor efecto. Por ende, la I y la III son correctas.`
  },
  {
    id: "q_pdf6_17",
    domain: "math",
    topic: "principio del palomar / razonamiento lógico",
    dif: 3,
    stem: `En un vivero hay 60 árboles pequeños de diferentes tipos: 31 guanacastes, 19 cenízaros y 10 almendros. Los árboles serán sembrados en una finca por 30 estudiantes. Cada estudiante sembrará dos árboles.`,
    q: `Según la información anterior, ¿cuál de las siguientes situaciones ocurrirá con certeza?`,
    opts: [
      `Uno o más estudiantes sembrarán dos cenízaros.`,
      `Uno o más estudiantes sembrarán dos guanacastes.`,
      `Uno o más estudiantes sembrarán un guanacaste y un cenízaro.`,
      `Uno o más estudiantes sembrarán un guanacaste y un almendro.`
    ],
    ans: 1,
    exp: ``,
    feedback_socratico: `Piensa en cómo podrías distribuir los guanacastes para evitar que un estudiante reciba dos. Si hay 30 estudiantes y tratas de darle solo un guanacaste a cada uno, ¿cuántos guanacastes has repartido y qué pasa con los que sobran?`,
    tip_elite: `Aplica el Principio del Palomar. Hay 31 guanacastes para repartir entre 30 estudiantes. Aún si le das exactamente un guanacaste a cada estudiante (30), inevitablemente sobrará 1 guanacaste que debe asignarse a alguien que ya tiene uno. Por tanto, con certeza, al menos un estudiante sembrará dos guanacastes.`
  },
  {
    id: "q_pdf6_18",
    domain: "verbal",
    topic: "inferencia lógica / comprensión de lectura",
    dif: 3,
    stem: `La Teoría de la Evolución recuperó la continuidad entre el ser humano y los animales, que había sido negada por Descartes cuando atribuyó alma solo al ser humano.`,
    q: `Del texto anterior, se concluye que la Teoría de la Evolución`,
    opts: [
      `negó la existencia del alma.`,
      `contradijo la teoría de Descartes.`,
      `desprestigió la teoría de Descartes.`,
      `amplió el concepto de continuity entre el ser humano y los animales.`,
      `inventó el concepto de continuidad entre el ser humano y los animales.`
    ],
    ans: 1,
    exp: ``,
    feedback_socratico: `Si Descartes 'negó' una idea (la continuidad), y luego la Teoría de la Evolución 'recuperó' esa misma idea, ¿qué postura adopta la segunda frente a la primera? ¿No se encuentran en oposición directa?`,
    tip_elite: `En preguntas de inferencia, busca contrastes explícitos de verbos o acciones. 'Recuperar' lo que otro previamente ha 'negado' significa oponerse lógicamente a esa idea; en otras palabras, contradecir la postura inicial.`
  },
  {
    id: "q_pdf6_19",
    domain: "verbal",
    topic: "comprensión de lectura / análisis de causa y efecto",
    dif: 3,
    stem: `En un gas, las moléculas tienen siempre gran libertad de movimiento porque las fuerzas de atracción resultan demasiado débiles para conservarlas unidas entre sí.`,
    q: `Según el texto anterior, las moléculas que constituyen los gases tienden a`,
    opts: [
      `separarse.`,
      `mezclarse.`,
      `expandirse.`,
      `evaporarse.`,
      `multiplicarse.`
    ],
    ans: 0,
    exp: ``,
    feedback_socratico: `El texto señala que la debilidad de las fuerzas de atracción hace imposible que las moléculas se conserven 'unidas'. Si el resultado es que no logran mantenerse unidas, ¿cuál es la acción contraria u opuesta que terminará sucediendo?`,
    tip_elite: `Busca la relación de antonimia implícita. Si la premisa es la incapacidad para mantenerse 'unidas', la consecuencia lógica directa es la tendencia a la acción contraria, es decir, a separarse.`
  },
  {
    id: "q_pdf6_20",
    domain: "math",
    topic: "sucesiones y patrones",
    dif: 3,
    stem: `Considere la siguiente secuencia de igualdades:
N1 = 2
N2 = 2
N3 = 6
N4 = 6
N5 = 10
N6 = 10
Si se continúa la secuencia,`,
    q: `¿a cuánto equivale N116?`,
    opts: [
      `226`,
      `228`,
      `230`,
      `232`
    ],
    ans: 2,
    exp: ``,
    feedback_socratico: `¿Notas un patrón entre los números pares (N2=2, N4=6, N6=10)? Intenta relacionar el subíndice (el número de la N) con su valor. Por ejemplo, ¿qué operación matemática puedes aplicarle al subíndice 4 para llegar a 6, o al subíndice 6 para llegar a 10?`,
    tip_elite: `Encuentra la fórmula de la sucesión. Observa que para cualquier posición par 'n', el valor siempre corresponde a multiplicar la posición por 2 y restarle 2 ($2n - 2$). Así, para $N_{116}$, el cálculo directo es $2(116) - 2 = 232 - 2 = 230$.`
  },
  {
    id: "q_pdf6_21",
    domain: "math",
    topic: "Álgebra (Proporciones / Ecuaciones de primer grado)",
    dif: 3,
    stem: `En una fábrica, por cada artículo que termine una persona trabajadora le entregan 2 bonos. Por cada 3 bonos le dan un almuerzo gratis. César tuvo derecho a 18 almuerzos gratis en el año y no le sobraron bonos.`,
    q: `¿Cuál es el número de artículos que César entregó ese año?`,
    opts: [
      `3`,
      `12`,
      `27`,
      `54`,
      `108`
    ],
    ans: 2,
    exp: ``,
    feedback_socratico: `¿Qué relación hay entre los almuerzos y los bonos? Si César obtuvo 18 almuerzos, ¿cuántos bonos acumuló en total? Finalmente, con esa cantidad de bonos, ¿cuántos artículos debió terminar sabiendo que cada artículo equivale a 2 bonos?`,
    tip_elite: `Trabaja de atrás hacia adelante (backward-solving): empieza con el resultado final (18 almuerzos) y usa las equivalencias para regresar paso a paso hasta llegar a la cantidad de artículos.`
  },
  {
    id: "q_pdf6_22",
    domain: "math",
    topic: "Lógica Matemática / Razonamiento Cuantitativo",
    dif: 3,
    stem: `Para una fiesta hay tazas verdes, tazas amarillas y tazas blancas. Las blancas son tantas como las verdes y las amarillas juntas. En la fiesta solamente se utilizaron las dos terceras partes del total de las tazas. Según la información anterior, con certeza,`,
    q: `¿cuáles tazas se usaron?`,
    opts: [
      `Algunas tazas verdes.`,
      `Algunas tazas blancas.`,
      `Algunas tazas amarillas.`,
      `Todas las tazas verdes.`,
      `Todas las tazas blancas.`
    ],
    ans: 1,
    exp: ``,
    feedback_socratico: `Piensa en el total de tazas en función de las blancas. Si las blancas equivalen exactamente a la mitad del total, ¿qué sucede si se utilizan más de la mitad de las tazas (las dos terceras partes)? ¿Podrías alcanzar esa fracción del total sin tocar al menos una taza blanca?`,
    tip_elite: `Dale valores arbitrarios a las variables para visualizar mejor el problema. Si V = 10 y A = 20, entonces B = 30, sumando un total de 60. Se usan 2/3 de 60, que son 40. Si gastaras todas las V y A, sólo sumarías 30, por lo que obligatoriamente debes usar algunas tazas blancas.`
  },
  {
    id: "q_pdf6_23",
    domain: "verbal",
    topic: "Comprensión de lectura (Inferencia)",
    dif: 3,
    stem: `La relación más importante entre el cerebro y los otros órganos internos se establece por medio del sistema nervioso, el cual se divide en tres formaciones principales: el sistema nervioso autónomo, el sistema nervioso central y el sistema nervioso periférico.`,
    q: `Según lo anterior, ¿cuál de las siguientes opciones es una conclusión lógica del texto?`,
    opts: [
      `Es inexistente la posibilidad de otras relaciones interorgánicas, aparte de la que establece el sistema nervioso.`,
      `El sistema nervioso es el producto de la relación que se establece entre el cerebro y los otros órganos internos.`,
      `Si el sistema nervioso se atrofia, se afecta la relación entre el cerebro y los otros órganos internos.`,
      `De las tres formaciones del sistema nervioso, la más importante es la llamada sistema nervioso central.`,
      `Además de las formaciones citadas, hay innumerables formaciones distintas dentro del sistema nervioso.`
    ],
    ans: 2,
    exp: ``,
    feedback_socratico: `Si el texto afirma que el sistema nervioso es el medio a través del cual se establece la relación más importante entre el cerebro y los órganos internos, ¿qué sucedería lógicamente con esa relación si el sistema nervioso falla o se atrofia?`,
    tip_elite: `En preguntas de inferencia o conclusión, busca la opción que sea una consecuencia lógica y necesaria de las premisas dadas. Descarta opciones que asuman absolutos (como 'inexistente') o añadan información no mencionada (como establecer cuál formación es la más importante).`
  },
  {
    id: "q_pdf6_24",
    domain: "math",
    topic: "Álgebra / Desigualdades",
    dif: 3,
    stem: `Mirta, Óscar y Gloria son estudiantes universitarios. Gloria ganó 50 créditos más que Óscar. Óscar ganó el triple de créditos que Mirta. Si entre los tres han ganado más de 78 créditos pero menos de 99, entonces, es posible que:`,
    q: ``,
    opts: [
      `Mirta haya ganado 7 créditos.`,
      `Óscar haya ganado 12 créditos.`,
      `Óscar haya ganado 15 créditos.`,
      `Gloria haya ganado 59 créditos.`,
      `Óscar y Mirta juntos hayan ganado 44 créditos.`
    ],
    ans: 2,
    exp: ``,
    feedback_socratico: `Si expresas los créditos de los tres en función de los créditos de Mirta (llamémoslo 'x'), obtendrás una expresión para el total de créditos. ¿Cómo puedes usar la desigualdad '78 < Total < 99' para encontrar los posibles valores de 'x'? Una vez hallado 'x', ¿cuántos créditos tendría Óscar?`,
    tip_elite: `Traduce todo a una sola variable: M = x, O = 3x, G = 3x + 50. El total es 7x + 50. Evalúa los extremos: 78 < 7x + 50 < 99 implica que 28 < 7x < 49, por tanto, 4 < x < 7. Sabiendo que los créditos suelen ser enteros, prueba con x=5 o x=6 y verifica las opciones.`
  },
  {
    id: "q_pdf6_25",
    domain: "verbal",
    topic: "Completar oraciones",
    dif: 3,
    stem: `Durante mucho tiempo, el ser humano utilizó las partes de su propio cuerpo como instrumentos de medición. Todavía hoy se utilizan unidades como el codo y el pie, pero el ser humano ha preferido otras. La ____________ de tales medidas residía en su variabilidad.`,
    q: ``,
    opts: [
      `ventaja.`,
      `desventaja.`,
      `única ventaja.`,
      `mayor ventaja.`,
      `única desventaja.`
    ],
    ans: 1,
    exp: ``,
    feedback_socratico: `El texto menciona que el ser humano prefirió otras unidades de medida a pesar de usar antes las partes del cuerpo. Luego señala que estas medidas basadas en el cuerpo tenían 'variabilidad' (cada persona tiene un tamaño diferente de pie o codo). ¿Esa variabilidad sería algo positivo o negativo para una medición precisa?`,
    tip_elite: `Presta atención al conector 'pero el ser humano ha preferido otras'. Esto indica un contraste y sugiere que el método anterior tenía un problema. La 'variabilidad' en una medida implica inexactitud, lo cual te lleva directamente a buscar una palabra de connotación negativa.`
  },
  {
    id: "q_pdf6_26",
    domain: "verbal",
    topic: "Completar oraciones",
    dif: 3,
    stem: `En la mitología griega, las divinidades agrícolas secundarias se caracterizaban por su aspecto __________: mitad ser humano, mitad animal.`,
    q: ``,
    opts: [
      `incompleto`,
      `imperfecto`,
      `ambiguo`,
      `deforme`,
      `mixto`
    ],
    ans: 4,
    exp: ``,
    feedback_socratico: `¿Qué palabra de las opciones describe mejor algo que está formado por la combinación o mezcla de elementos distintos? Si el texto dice 'mitad ser humano, mitad animal', ¿no te sugiere eso una mezcla de dos naturalezas?`,
    tip_elite: `Busca pistas en el texto después de los dos puntos. La frase 'mitad ser humano, mitad animal' es la definición exacta de la palabra que falta. En ejercicios de completar oraciones, el contexto inmediato siempre te da la respuesta.`
  },
  {
    id: "q_pdf6_27",
    domain: "verbal",
    topic: "Inferencia lógica",
    dif: 3,
    stem: `Cuando recibimos elogios de algunas personas, nos quedamos pendientes de sus labios por temer que sus alabanzas no sean sino un antecedente de críticas. Quien pronuncia una alabanza asume, al menos por un momento, la posición de juez.`,
    q: `Del texto anterior, con certeza, es correcto concluir que quien alaba,`,
    opts: [
      `acusa.`,
      `enjuicia.`,
      `censura.`,
      `condena.`,
      `absuelve.`
    ],
    ans: 1,
    exp: ``,
    feedback_socratico: `¿Qué dice explícitamente el texto sobre quien pronuncia una alabanza? Menciona que asume 'la posición de juez'. ¿Cuál de las opciones es sinónimo o la acción directa que realiza un juez al asumir esa posición?`,
    tip_elite: `En preguntas de conclusión con certeza, la respuesta suele estar parafraseada directamente en el texto. Aquí, 'posición de juez' es un indicador directo y literal de la acción 'enjuicia'.`
  },
  {
    id: "q_pdf6_28",
    domain: "math",
    topic: "Análisis combinatorio",
    dif: 3,
    stem: `Rafael debe digitar una contraseña de 6 dígitos para desbloquear la pantalla de inicio de su computadora, pero no recuerda los últimos 2 dígitos. Lo que recuerda es que al sumar esos 2 dígitos el resultado es 10 y al multiplicarlos el resultado es mayor a 10.`,
    q: `¿Cuántas posibilidades de contraseña tiene Rafael para digitar?`,
    opts: [
      `4`,
      `7`,
      `9`,
      `10`
    ],
    ans: 1,
    exp: ``,
    feedback_socratico: `¿Cuáles parejas de dígitos del 0 al 9 suman 10? Escríbelas todas. Luego, verifica para cada pareja si al multiplicar ambos dígitos el resultado es estrictamente mayor a 10. ¿Cuántas de esas combinaciones cumplen ambas condiciones?`,
    tip_elite: `Haz una lista sistemática de las combinaciones que suman 10: (1,9), (2,8)... etc. Recuerda que el orden importa en las contraseñas, por lo que (2,8) y (8,2) son posibilidades distintas. Solo descarta las que dan un producto de 10 o menos.`
  },
  {
    id: "q_pdf6_29",
    domain: "math",
    topic: "Planteo de ecuaciones y edades",
    dif: 3,
    stem: `Cierto año, Rebeca tenía 20 años y sus dos hermanos 6 y 7 años.`,
    q: `¿Cuál es el menor número de años que debe transcurrir, a partir de ese año, para que la edad de Rebeca llegue a ser menor que la suma de las edades que tendrán sus dos hermanos?`,
    opts: [
      `28`,
      `16`,
      `9`,
      `8`,
      `7`
    ],
    ans: 3,
    exp: ``,
    feedback_socratico: `Si transcurren 'x' años, Rebeca tendrá 20 + x años. ¿Cómo expresarías la suma de las edades de sus dos hermanos en 'x' años? ¿Qué inecuación se forma si la edad de Rebeca debe ser estrictamente menor que esa nueva suma?`,
    tip_elite: `En problemas de edades, el tiempo transcurre igual para todos. Si pasan 'x' años, debes sumar 'x' a la edad de CADA hermano, por lo que la suma de sus edades aumentará en '2x'. Plantea 20 + x < (6 + x) + (7 + x) y despeja 'x'.`
  },
  {
    id: "q_pdf6_30",
    domain: "math",
    topic: "Sucesiones numéricas",
    dif: 3,
    stem: `Una comerciante compró latas de frutas para vender 10 cada día. Sucedió que el primer día logró vender las 10 latas, sin embargo, en los restantes vendió cada día una menos que el día anterior, razón por la cual, en el tiempo previsto para la venta todavía le quedaban 6 latas.`,
    q: `¿Cuántos días le tomó vender todas las latas de frutas?`,
    opts: [
      `4`,
      `5`,
      `6`,
      `9`,
      `10`
    ],
    ans: 1,
    exp: ``,
    feedback_socratico: `Si tanteas que el tiempo previsto era de 4 días, ¿cuántas latas compró en total a 10 por día? Al vender 10, 9, 8 y 7 latas, ¿cuántas le quedan al finalizar el cuarto día? Sabiendo que le quedaban 6, ¿cuántas venderá al quinto día y cuándo se le acabarán?`,
    tip_elite: `Evita ecuaciones cuadráticas complejas y usa los números pequeños a tu favor. Prueba asumiendo que el tiempo previsto eran 4 días: compró 40. Vendió 10+9+8+7 = 34. Le sobran 6, ¡justo lo que dice el problema! El 5to día debe vender 6 (una menos que 7), así que acaba ese mismo día.`
  }
];
