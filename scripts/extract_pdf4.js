const fs = require('fs');
const path = require('path');

const questionsFile = path.join(__dirname, '../js/questions.js');

const pdf4Questions = [
  {
    id: "q_pdf4_01",
    domain: "verbal",
    topic: "comprension_lectura",
    dif: 3,
    stem: "El Ártico es el área alrededor del Polo Norte; en este lugar, durante meses, el clima es extremadamente frío y la luz solar es escasa. A inicios del verano, la temperatura empieza a ascender, el hielo comienza a derretirse y aparecen pequeños riachuelos que crecen con el avance de la estación. Las condiciones climáticas no han sido impedimento para que muchos animales vivan en el Ártico permanente o temporalmente; este es el caso de las grullas, los osos polares, los bueyes almizcleros, los zorros y las focas.",
    q: "¿Cuál de las siguientes opciones presenta una idea implícita en el texto anterior?",
    opts: [
      "Los riachuelos se desvanecen con las temperaturas más bajas del año.",
      "El clima del Ártico imposibilita que animales vivan todo el año en este lugar.",
      "La poca luz solar y el frío extremo están presentes durante meses en el Ártico.",
      "El Ártico tiene un clima extremo, con periodos de deshielo, en el que habitan animales."
    ],
    ans: 0,
    exp: "Para extraer una idea implícita o **suponer** algo, debemos basarnos en datos innegables del texto. \nEl texto dice que 'a inicios del verano... aparecen pequeños riachuelos'. \nSi aparecen en verano, lógicamente significa que antes (en el invierno/temperaturas más bajas) NO estaban, es decir, se congelaron o se desvanecieron.\n\nLas opciones C y D son ideas EXPLÍCITAS (están literales en el texto), y la B contradice el texto.\n\n**Tip Élite:** Lo 'implícito' NO se lee literal, se deduce por lógica obligatoria. Si yo digo 'hoy volví a comer', la idea implícita es 'antes ya había comido'."
  },
  {
    id: "q_pdf4_02",
    domain: "verbal",
    topic: "comprension_lectura",
    dif: 3,
    stem: "Animales y plantas han evolucionado durante millones de años. La mayoría de animales se desplaza por sus propios medios y ha desarrollado mecanismos para conseguir alimento o evitar a sus depredadores; en cambio, las plantas suelen requerir de ciertos agentes para moverse de un lugar a otro. Solo unas pocas plantas son depredadoras y la vegetación tiene formas de defenderse menos notorias. Estas diferencias han provocado que los humanos consideremos inteligentes a otros animales, mientras que a las plantas no se les suele atribuir dicha característica. No obstante, estudios recientes sugieren que las plantas y los animales no son tan distintos.",
    q: "¿Cuál de las siguientes afirmaciones es una idea implícita según el texto?",
    opts: [
      "Los seres humanos no solemos percibir cómo se defienden las plantas.",
      "Las plantas dependen de elementos del contexto para distribuirse en distintos lugares.",
      "Los seres humanos asociamos la capacidad de buscar alimento o evitar los peligros con la inteligencia.",
      "Según nuevas investigaciones, las plantas podrían ser más inteligentes de lo que hemos creído.",
      "Los animales cambian de lugar para alimentarse o para protegerse."
    ],
    ans: 3,
    exp: "Revisemos cuáles ideas están literales (explícitas) y cuáles son deducidas (implícitas):\n- Opción A es explícita ('tiene formas de defenderse menos notorias').\n- Opción B es explícita ('requieren de ciertos agentes para moverse').\n- Opción C es explícita (la conexión entre conseguir alimento y considerar inteligente a los animales la hace el autor directo).\n- Opción D es **implícita**. El texto dice: 'estudios recientes sugieren que las plantas y los animales no son tan distintos', luego de contrastar la percepción de inteligencia. De ahí suponemos (inferimos) que la investigación apunta a que las plantas tienen algún grado de inteligencia subestimada.\n\n**Tip Élite:** Lo implícito se esconde en los conectores de contraste finales ('No obstante...'). Siempre prestales doble atención."
  },
  {
    id: "q_pdf4_03",
    domain: "verbal",
    topic: "comprension_lectura",
    dif: 3,
    stem: "América Central es un puente natural entre el norte y el sur del continente americano; esta es una tierra de paso e intercambio para muchas especies animales. El mono aullador, la lapa verde, el quetzal y la tortuga lora son parte de la fauna representativa de esta región. Entre los paisajes de la zona, el bosque nuboso es uno de los más particulares: la presencia de niebla, la vegetación espesa y el musgo en los árboles son imágenes que suelen quedar en la memoria de los visitantes.",
    q: "¿Cuál de las siguientes ideas es verdadera en relación con el texto anterior?",
    opts: [
      "El bosque nuboso predomina en el paisaje de América Central.",
      "Los visitantes de América Central siempre recuerdan algunas características del bosque nuboso.",
      "América Central es un lugar con gran biodiversidad animal debido a sus bosques y a su localización.",
      "El mono aullador, la lapa verde, el quetzal y la tortuga lora son los animales más importantes de América Central."
    ],
    ans: 2,
    exp: "Este ejercicio trabaja la categoría de **presuponer**, lo que significa conectar la información del texto con conocimientos generales para encontrar la verdad implícita.\n\nEl texto menciona a Centroamérica como 'tierra de paso e intercambio para muchas especies' y menciona a varias de ellas. Conocemos por cultura general que a eso se le llama **biodiversidad**. Por ende, la opción C es verdadera porque amarra los datos del texto con el concepto presupuestado de biodiversidad.\n\nLa A es falsa porque el texto no dice que predomine. La B usa la palabra absolutista 'siempre'. La D asume subjetivamente que son 'los más importantes', cuando el texto dice 'representativos'.\n\n**Tip Élite:** Las opciones que usan palabras absolutas como 'siempre', 'nunca', 'todo' o juicios de valor como 'el más importante' son casi siempre distractores y deben ser eliminadas de inmediato."
  },
  {
    id: "q_pdf4_04",
    domain: "verbal",
    topic: "comprension_lectura",
    dif: 3,
    stem: "Las hormigas forman sociedades complejas, se encuentran en todo el mundo y son animales extraordinarios: en proporción a su tamaño, soportan pesos enormes, recorren largas distancias y almacenan grandes cantidades de comida; además, las hormigas constituyen un superpoder del universo de los insectos cuando trabajan en equipo.",
    q: "¿Cuáles de las siguientes opciones presentan información verdadera que pueda asociarse directamente al texto?\nI. Constituyen colectivos organizados.\nII. Pueden compartir hábitat con los humanos.\nIII. Recorren grandes distancias para almacenar recursos o alimentarse.",
    opts: [
      "Solo I",
      "Solo I y II",
      "Solo I y III",
      "Solo II y III",
      "I, II y III"
    ],
    ans: 2,
    exp: "Analicemos cada afirmación basándonos en presuponer lógicamente a partir del texto:\n- **I (Verdadera):** Se asocia con 'forman sociedades complejas' y 'trabajan en equipo'. Son colectivos organizados.\n- **II (Falsa / No asociable):** Aunque en la vida real es cierto, el texto NUNCA menciona ni insinúa a los seres humanos, por tanto, no se asocia 'directamente al texto'.\n- **III (Verdadera):** Se asocia con 'recorren largas distancias y almacenan grandes cantidades de comida'. \n\nPor tanto, solo I y III se extraen del texto.\n\n**Tip Élite:** Cuidado con tus saberes previos invasivos. Si algo es obvio en la vida real pero NO tiene gancho en el texto, descártalo."
  },
  {
    id: "q_pdf4_05",
    domain: "verbal",
    topic: "comprension_lectura",
    dif: 3,
    stem: "El arte rupestre se refiere a una serie de bocetos y dibujos que datan de unos 40 000 años, hallados en diferentes cavernas de todos los continentes, aunque no en todos los países. El contenido de estas expresiones impresas en piedras representa escenas que van desde las típicas funciones de sobrevivencia como la caza y la vida cotidiana, hasta la alusión a aspectos mágicos que revelan las creencias de los primeros habitantes de nuestro planeta.",
    q: "De acuerdo con el texto anterior, ¿cuál de las siguientes opciones se opone a la información del texto?",
    opts: [
      "El arte rupestre se ha mantenido por siglos.",
      "El arte rupestre tuvo connotaciones religiosas.",
      "El arte rupestre sirve como un registro de la historia.",
      "El arte rupestre fue una representación universal de la vida."
    ],
    ans: 3,
    exp: "La pregunta pide aplicar la categoría de **oponer**, es decir, encontrar la mentira o la afirmación contraria al texto.\n\nLa opción D asegura que fue una representación 'universal'. Sin embargo, el texto aclara textualmente: 'hallados en diferentes cavernas de todos los continentes, **aunque no en todos los países**'. Al no estar en todos los países, no puede ser 'universal'. Se contradice.\n\n**Tip Élite:** Cuando te pidan buscar la idea que 'se opone' o 'contradice', concéntrate en buscar las restricciones o excepciones que mencionó el autor. Ahí suele estar la trampa."
  },
  {
    id: "q_pdf4_06",
    domain: "verbal",
    topic: "completar_oraciones",
    dif: 3,
    stem: "En relación con el desarrollo del arte a través de la historia, analice la siguiente afirmación: 'La vida durante el desarrollo del arte rupestre tuvo aspectos muy simples'.",
    q: "¿Cuál de las siguientes premisas presenta una idea OPUESTA a la afirmación anterior?",
    opts: [
      "La permanencia es una característica del arte.",
      "El ser humano de la antigüedad pocas veces se enfrentaba a retos.",
      "El camino hacia la perfección del arte implica modificar hábitos.",
      "La existencia en las cavernas estuvo llena de elementos complejos.",
      "La plenitud artística se alcanza con variaciones mínimas."
    ],
    ans: 3,
    exp: "La afirmación original asegura que la vida en el desarrollo del arte rupestre tuvo aspectos **muy simples**.\n\nPara oponernos a ella, debemos buscar el antónimo semántico de 'simple' y de 'vida en la época del arte rupestre'. \nLa opción D dice 'La existencia (vida) en las cavernas (época rupestre) estuvo llena de elementos **complejos** (opuesto a simples)'.\n\n**Tip Élite:** La técnica del espejo. Si te piden lo opuesto, identifica el sujeto y el adjetivo clave, y busca su sinónimo y su antónimo exacto en las respuestas."
  },
  {
    id: "q_pdf4_07",
    domain: "verbal",
    topic: "comprension_lectura",
    dif: 3,
    stem: "La leyenda de El Dorado se originó en el siglo XVI y refiere a la existencia de una ciudad cubierta de oro en las montañas de los Andes. Muchas personas han intentado encontrar la ciudad, pero siempre con resultados infructuosos. Por ejemplo, exploradores europeos eran enviados en la búsqueda de ese lugar suramericano. Aunque en la actualidad no existen pruebas de la existencia de El Dorado, la leyenda incentivó la creatividad humana y a partir de ella se han producido películas, videojuegos y relatos fantásticos.",
    q: "¿Cuál de las siguientes opciones presenta una idea del texto anterior con otras palabras?",
    opts: [
      "El Dorado es un lugar del que se obtuvo mucho oro.",
      "El Dorado es una leyenda que incentivó la popularidad de Suramérica.",
      "El Dorado es una ciudad fantástica que promovió expediciones de exploradores europeos.",
      "El Dorado fue una ciudad esplendorosa que impulsó la creación de representaciones ficticias."
    ],
    ans: 2,
    exp: "Este ejercicio trata sobre **parafrasear**. Debes buscar la opción que diga lo mismo, pero con sinónimos precisos.\n\nEl texto dice: 'la leyenda... refiere a la existencia de una ciudad... exploradores europeos eran enviados en la búsqueda'. \nLa opción C dice: 'ciudad fantástica (leyenda) que promovió expediciones (búsqueda) de exploradores europeos'. \nEs la calca perfecta, cambiando solo los disfraces de las palabras.\n\n**Tip Élite:** Cuando parafrasees, asegúrate de que no te inyecten información nueva. La opción B agrega 'popularidad de Suramérica', algo que el texto jamás mencionó."
  },
  {
    id: "q_pdf4_08",
    domain: "verbal",
    topic: "comprension_lectura",
    dif: 3,
    stem: "Existe una rama de la inteligencia artificial que automatiza la construcción de modelos de análisis y se basa en la idea de que los sistemas son capaces de identificar **patrones**, aprender datos y tomar decisiones sin la intervención humana.",
    q: "De acuerdo con el contexto del párrafo, ¿cuál es la definición más adecuada para la palabra 'patrones'?",
    opts: [
      "Tablero horizontal elevado donde se colocan personas o cosas.",
      "Programa preparado para una utilización informática específica.",
      "Afición y asiduidad con que se hace algo.",
      "Modelo que sirve de muestra para sacar otra cosa igual."
    ],
    ans: 3,
    exp: "Debemos entender el significado contextual de 'patrón' (categoría de parafrasear o definir). \n\nEn informática e Inteligencia Artificial, un patrón no es un jefe ni un tablero. Se refiere a un comportamiento recurrente o una plantilla.\nUn patrón es un modelo o molde que se repite, es decir, un 'modelo que sirve de muestra para sacar otra cosa igual' (por ejemplo, reconocer rostros mediante patrones geométricos).\n\n**Tip Élite:** A veces te pondrán el significado 'de diccionario' principal de la palabra. ¡Huye de él! En la UCR/UNA el significado que importa es el del contexto, no el que usas hablando en la calle."
  },
  {
    id: "q_pdf4_09",
    domain: "verbal",
    topic: "comprension_lectura",
    dif: 3,
    stem: "En 1848, se formó la Cofradía de los hermanos prerrafaelistas, compuesta por un grupo de jóvenes pintores y poetas aburridos de las propuestas del arte oficial. Este grupo de artistas planteaba un regreso a las técnicas y a los temas de la Edad Media, en una clara oposición al mercantilismo y al positivismo reinantes de su contexto histórico. Si bien en sus coloridas pinturas los prerrafaelistas retomaron temas clásicos derivados de la mitología y de la religión, los presentaron de una forma cotidiana y sencilla, lo cual creó gran controversia en la mojigata sociedad inglesa de finales del siglo XIX.",
    q: "De acuerdo con el texto, ¿cuál de las siguientes opciones describe de la forma más acertada a los prerrafaelistas?",
    opts: [
      "Novatos",
      "Inventores",
      "Nostálgicos",
      "Transgresores"
    ],
    ans: 3,
    exp: "Esta es la categoría **reducir**: encontrar una sola palabra que englobe las acciones descritas.\n\nLos prerrafaelistas estaban 'aburridos de lo oficial', mostraron 'clara oposición', y crearon 'gran controversia' en una sociedad 'mojigata' por hacer las cosas distinto.\nTodos estos actos de rebeldía, choque cultural y oposición al establishment se resumen magistralmente en la palabra **Transgresores** (quienes violan o cruzan las normas establecidas).\n\n**Tip Élite:** Para reducir un párrafo a un adjetivo, suma los verbos del protagonista. Oponerse + crear controversia = Transgredir."
  },
  {
    id: "q_pdf4_10",
    domain: "verbal",
    topic: "vocabulario",
    dif: 3,
    stem: "Considere la siguiente serie de palabras: Sirenas, minotauros, ninfas, cíclopes.",
    q: "¿Cuál de los siguientes conceptos engloba adecuadamente a todos los elementos de la lista?",
    opts: [
      "Personajes históricos",
      "Movimientos artísticos",
      "Materiales",
      "Seres mitológicos",
      "Corrientes filosóficas"
    ],
    ans: 3,
    exp: "Aplicando la categoría de **reducir**, buscamos el hiperónimo (la palabra general que los incluye a todos).\n\nLas sirenas, minotauros, ninfas y cíclopes no existieron en la historia real, sino que forman parte de los relatos fantásticos de las civilizaciones antiguas, especialmente la griega. Por lo tanto, el concepto aglutinador es **Seres mitológicos**.\n\n**Tip Élite:** El hiperónimo es como la carpeta de Windows, y las palabras de la lista son los archivos adentro. Si no caben lógicamente, esa no es la respuesta."
  },
  {
    id: "q_pdf4_11",
    domain: "math",
    topic: "sistemas_ecuaciones",
    dif: 3,
    stem: "Para participar en una rifa realizada en una fiesta, Julián entregó a cada invitado un boleto con un número. Julián fue quien numeró consecutivamente cada boleto, empezando con el 1. En total, en los boletos entregados escribió 210 dígitos.",
    q: "¿Cuántos invitados asistieron a la fiesta?",
    opts: [
      "106",
      "189",
      "198",
      "210",
      "220"
    ],
    ans: 0,
    exp: "La categoría **indagar** nos reta a investigar la información oculta.\n\nSi Julián numera del 1 en adelante y usa en total 210 dígitos, vamos por partes:\n1) Números de 1 dígito (del 1 al 9) = 9 boletos y gastó 9 dígitos.\n- Le quedan: $210 - 9 = 201$ dígitos.\n2) Números de 2 dígitos (del 10 al 99) = 90 boletos. Por 2 dígitos cada uno, gastó 180 dígitos.\n- Le quedan: $201 - 180 = 21$ dígitos.\n3) Números de 3 dígitos (del 100 en adelante). Como le quedan 21 dígitos por gastar, y cada boleto nuevo consume 3 dígitos, calculamos los boletos extra: $21 \\div 3 = 7$ boletos.\n\nBoletos totales = $9 (un dígito) + 90 (dos dígitos) + 7 (tres dígitos) = 106$ boletos. = 106 invitados.\n\n**Tip Élite:** No confundas DÍGITOS con NÚMEROS. El número '45' es un (1) número, pero contiene dos (2) dígitos. Esta trampa es el pan de cada día en el examen."
  },
  {
    id: "q_pdf4_12",
    domain: "math",
    topic: "combinatoria",
    dif: 3,
    stem: "Rafael debe digitar una contraseña de 6 dígitos para desbloquear la pantalla de inicio de su computadora, pero no recuerda los últimos 2 dígitos. Lo que recuerda es que al sumar esos 2 dígitos el resultado es 10, y al multiplicarlos el resultado es mayor a 10.",
    q: "¿Cuántas posibilidades de contraseña tiene Rafael para digitar?",
    opts: [
      "4",
      "7",
      "9",
      "10",
      "15"
    ],
    ans: 1,
    exp: "Indaguemos. Los dos dígitos desconocidos (X e Y) cumplen:\n1) $X + Y = 10$\n2) $X \\times Y > 10$\n\nComo son dígitos, solo pueden ser del 0 al 9.\nParejas que suman 10:\n(1,9) -> $1 \\times 9 = 9$ (Falso, no es mayor a 10)\n(9,1) -> $9 \\times 1 = 9$ (Falso)\n(2,8) -> $2 \\times 8 = 16$ (Cumple)\n(8,2) -> $8 \\times 2 = 16$ (Cumple)\n(3,7) -> $3 \\times 7 = 21$ (Cumple)\n(7,3) -> $7 \\times 3 = 21$ (Cumple)\n(4,6) -> $4 \\times 6 = 24$ (Cumple)\n(6,4) -> $6 \\times 4 = 24$ (Cumple)\n(5,5) -> $5 \\times 5 = 25$ (Cumple)\n\nLas parejas válidas son (2,8), (8,2), (3,7), (7,3), (4,6), (6,4) y (5,5).\nTotal de posibilidades = 7.\n\n**Tip Élite:** En problemas de adivinanza de dígitos, el (0,0) o (1,9) suelen ser los bordes donde falla la condición secundaria. ¡Escribe la lista en orden (del 1 al 9) para que no se te pierda ninguna pareja invertida!"
  },
  {
    id: "q_pdf4_13",
    domain: "math",
    topic: "proporcionalidad",
    dif: 3,
    stem: "Patricia quiere comprar un desayuno. Ella tiene monedas tipo P y tipo Q para pagar. Si pagara solo con monedas P, necesitaría 245. Sabe además que por cada 7 monedas tipo P, ella podría usar 5 monedas tipo Q.",
    q: "¿Cuántas monedas tipo Q necesitaría Patricia para pagar todo el desayuno?",
    opts: [
      "35",
      "49",
      "168",
      "175",
      "200"
    ],
    ans: 3,
    exp: "Esto es **representar**. Nos dan una equivalencia directa: $7 P = 5 Q$.\nEl precio total es $245 P$.\n\nPodemos ver cuántos grupitos de 7 monedas P caben en 245:\n$245 \\div 7 = 35$ grupos.\n\nComo cada uno de esos 35 grupos de P se puede reemplazar por un grupo de Q (que trae 5 monedas), el total de monedas Q será:\n$35 \\text{ grupos} \\times 5 \\text{ monedas Q} = 175$ monedas Q.\n\n**Tip Élite:** Haz regla de tres mental. Si 7 dan 5, entonces 245 dan X. $(245 \\times 5) \\div 7$. Pero es mucho más fácil dividir primero: $245 \\div 7 = 35$, y $35 \\times 5 = 175$."
  },
  {
    id: "q_pdf4_14",
    domain: "math",
    topic: "proporcionalidad",
    dif: 3,
    stem: "Una galaxia tiene dos planetas: P y Q. Cada año del planeta P tiene 120 días terrestres. Por otra parte, en el planeta Q, cada año tiene 140 días terrestres.",
    q: "¿Qué cantidad de años en el planeta Q tiene un habitante que lleva viviendo exactamente 7 años en P?",
    opts: [
      "5",
      "6",
      "8",
      "9",
      "10"
    ],
    ans: 1,
    exp: "Llevemos la edad total a días terrestres absolutos (nuestra moneda universal de tiempo aquí).\nSi en P un año son 120 días terrestres, y el habitante tiene 7 años en P, ha vivido:\n$7 \\times 120 = 840$ días terrestres de vida en total.\n\nAhora, queremos saber cuántos años en Q equivalen a esos 840 días absolutos. Un año en Q consume 140 días.\nDividimos el tiempo de vida entre la duración del año Q:\n$840 \\div 140 = 6$ años en Q.\n\n**Tip Élite:** Cuando dos cosas tienen diferentes medidas, pásalo todo a la medida base (en este caso, días terrestres). Es como convertir dólares a colones para poder comparar precios justos."
  },
  {
    id: "q_pdf4_15",
    domain: "math",
    topic: "certeza",
    dif: 3,
    stem: "Una empresa posee dos oficinas. En la oficina 1 solo hay hombres, y en la oficina 2 hay 15 mujeres y varios hombres. Se van a pasar 9 personas de la oficina 2 a la oficina 1.",
    q: "¿Cuál de las siguientes afirmaciones sucederá con certeza?",
    opts: [
      "La oficina 1 tendrá mujeres y hombres.",
      "La oficina 2 tendrá mujeres y hombres.",
      "La oficina 1 tendrá varias mujeres.",
      "La oficina 2 tendrá varias mujeres."
    ],
    ans: 3,
    exp: "Categoría de **verificar**. Hay que buscar la afirmación que sea inquebrantable en todos los universos posibles.\n\nOficina 1: Hombres (cantidad X).\nOficina 2: 15 Mujeres y Hombres (cantidad Y).\n\nSe sacan 9 personas aleatorias de la Oficina 2.\n- ¿Qué pasa si las 9 personas son todos hombres? La Oficina 1 seguirá teniendo solo hombres. Así que la A y la C no son seguras.\n- ¿Qué pasa si quedan mujeres en la Oficina 2? En el peor de los casos, si las 9 personas que saco son mujeres, en la Oficina 2 quedarían $15 - 9 = 6$ mujeres. Es decir, SIEMPRE van a quedar mujeres.\n\nPor tanto, es seguro (con certeza) que la Oficina 2 conservará 'varias mujeres' en todos los escenarios.\n\n**Tip Élite:** Para problemas de 'con certeza', oblígate a ser abogado del diablo. Busca el peor caso (extremista) que haga mentira a las opciones. La opción que resista tu ataque es la correcta."
  },
  {
    id: "q_pdf4_16",
    domain: "math",
    topic: "certeza",
    dif: 3,
    stem: "En un vivero hay 60 árboles pequeños de diferentes tipos: 31 guanacastes, 19 cenízaros y 10 almendros. Los árboles serán sembrados en una finca por 30 estudiantes. Cada estudiante sembrará exactamente dos árboles.",
    q: "Según la información anterior, ¿cuál de las siguientes situaciones ocurrirá con certeza?",
    opts: [
      "Uno o más estudiantes sembrarán dos cenízaros.",
      "Uno o más estudiantes sembrarán dos guanacastes.",
      "Uno o más estudiantes sembrarán un guanacaste y un cenízaro.",
      "Uno o más estudiantes sembrarán un guanacaste y un almendro."
    ],
    ans: 1,
    exp: "Debemos pensar en cómo distribuir para EVITAR que ocurra el evento. Queremos ver cuál opción no se puede evitar (Pigeonhole Principle).\n\nTotal: 30 estudiantes (se necesitan 30 pares de árboles).\nHay 31 guanacastes.\n- ¿Puedo evitar que alguien siembre un guanacaste doble? \nSi intento que ningún estudiante reciba dos guanacastes, lo máximo que puedo hacer es darle UN guanacaste a cada uno de los 30 estudiantes. \nPero tengo 31 guanacastes... Me sobra 1 guanacaste que OBLIGATORIAMENTE tendré que dárselo a alguien que ya tiene uno.\n\nAl darle ese guanacaste extra, ¡esa persona sembrará dos guanacastes! No hay forma matemática de escapar de ello.\n\n**Tip Élite:** El principio del palomar. Si tienes 30 huecos (estudiantes sin guanacaste duplicado) y 31 palomas (guanacastes), inevitablemente en un hueco habrán dos palomas. "
  },
  {
    id: "q_pdf4_17",
    domain: "math",
    topic: "sucesiones",
    dif: 3,
    stem: "Analice la siguiente secuencia y encuentre la ley que se da en ella: 0, 3, 8, 15, 24, ...",
    q: "De acuerdo con la ley anterior, ¿cuál es el número correspondiente a la posición 11 de la secuencia?",
    opts: [
      "99",
      "120",
      "132",
      "143",
      "150"
    ],
    ans: 1,
    exp: "Categoría de **generalizar**. Buscamos el patrón.\nVeamos las diferencias entre términos:\n$3 - 0 = 3$\n$8 - 3 = 5$\n$15 - 8 = 7$\n$24 - 15 = 9$\n\nLas diferencias son los números impares: 3, 5, 7, 9... \nPosición 1: 0\nPosición 2: 3 (+3)\nPosición 3: 8 (+5)\nPosición 4: 15 (+7)\nPosición 5: 24 (+9)\nPosición 6: 24+11 = 35\nPosición 7: 35+13 = 48\nPosición 8: 48+15 = 63\nPosición 9: 63+17 = 80\nPosición 10: 80+19 = 99\nPosición 11: 99+21 = 120.\n\n*(El PDF original lo resuelve sumando los impares desde el inicio)*.\n\n**Tip Élite:** Truco de fórmula general. Notas que $1^2 - 1 = 0$; $2^2 - 1 = 3$; $3^2 - 1 = 8$; $4^2 - 1 = 15$. La fórmula es $n^2 - 1$. \nPara la posición 11: $11^2 - 1 = 121 - 1 = 120$. ¡Violencia matemática aplicada!"
  },
  {
    id: "q_pdf4_18",
    domain: "math",
    topic: "sucesiones",
    dif: 3,
    stem: "Considere la siguiente secuencia de igualdades:\nN1 = 2\nN2 = 2\nN3 = 6\nN4 = 6\nN5 = 10\nN6 = 10",
    q: "Si se continúa la secuencia con la misma lógica, ¿a cuánto equivale el término N116?",
    opts: [
      "226",
      "228",
      "230",
      "232",
      "234"
    ],
    ans: 2,
    exp: "Buscamos el patrón de generalización en las igualdades.\nLos resultados van en pares:\nPosición 1 y 2 = 2.\nPosición 3 y 4 = 6. (+4 respecto al par anterior)\nPosición 5 y 6 = 10. (+4 respecto al par anterior)\n\nPodemos enfocarnos solo en los pares (los N pares):\n$N_2 = 2 = 4(1) - 2$\n$N_4 = 6 = 4(2) - 2$\n$N_6 = 10 = 4(3) - 2$\nEl patrón para la posición par $2k$ es: $4k - 2$.\n\nPara $N_{116}$, el $k$ es la mitad de 116, es decir, $k = 58$.\nResultado = $4(58) - 2 = 232 - 2 = 230$.\n\n*(Otra forma: La suma aumenta 4 cada dos pasos. Un paso par $X$ vale $2 \\times X - 2$)*.\n\n**Tip Élite:** Cuando veas secuencias emparejadas o repetidas, ignora la mitad de los números y quédate solo con los pares (o los impares) para construir tu regla simple sin interferencias."
  }
];

const fileContent = fs.readFileSync(questionsFile, 'utf8');
const closingBraceIndex = fileContent.lastIndexOf(']');
const updatedContent = fileContent.slice(0, closingBraceIndex - 1) + ',\n' + JSON.stringify(pdf4Questions, null, 2).slice(2, -1) + '\n];\n';
fs.writeFileSync(questionsFile, updatedContent, 'utf8');
console.log('PDF 4 Questions added successfully!');
