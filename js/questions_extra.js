/* ============================================================
   PAASAU — Banco de preguntas EXTRA (originales, estilo PAA UCR/UNA 2026)
   Se suman al banco base de questions.js. Mismo esquema:
   { id, domain:'verbal'|'math', topic, dif:1|2|3, stem, q, opts:[a,b,c,d],
     ans:índice 0-3, exp }
   Formato 2026: 4 opciones (A-D), una sola correcta.
   Son preguntas NUEVAS, no copiadas de ningún folleto: material fresco.
   ============================================================ */
window.PAA_QUESTIONS_EXTRA = [

  /* ===================== VERBAL ===================== */

  /* -- Finalidad -- */
  { id:"v_fin_4", domain:"verbal", topic:"finalidad", dif:2,
    stem:"La municipalidad colocó basureros de reciclaje en cada parque con el fin de separar mejor los desechos.",
    q:"Según el texto, ¿cuál es la finalidad de los basureros de reciclaje?",
    opts:["Embellecer los parques","Separar mejor los desechos","Dar empleo a recolectores","Reducir el tamaño de los parques"],
    ans:1, exp:"El texto lo dice: se colocan 'con el fin de separar mejor los desechos'. Esa es la finalidad; lo demás no aparece como propósito." },
  { id:"v_fin_5", domain:"verbal", topic:"finalidad", dif:2,
    stem:"Antes de salir de viaje, Lucía anotó en una lista todo lo que debía llevar para no olvidar nada.",
    q:"¿Cuál es la finalidad de hacer la lista?",
    opts:["Presumir su organización","Evitar olvidar lo necesario","Gastar menos dinero","Llegar más rápido"],
    ans:1, exp:"El para qué de la lista es 'no olvidar nada': evitar olvidar lo necesario." },
  { id:"v_fin_6", domain:"verbal", topic:"finalidad", dif:3,
    stem:"El gobierno reduce los impuestos a los carros eléctricos para incentivar su compra y disminuir la contaminación.",
    q:"¿Cuál es la finalidad de reducir esos impuestos?",
    opts:["Recaudar más dinero","Promover vehículos menos contaminantes","Encarecer los carros de gasolina","Construir más carreteras"],
    ans:1, exp:"El propósito es incentivar la compra de carros eléctricos y bajar la contaminación: promover vehículos menos contaminantes." },
  { id:"v_fin_7", domain:"verbal", topic:"finalidad", dif:2, stem:"Pedro programa tres alarmas con cinco minutos de diferencia cada mañana. Dice que no lo hace porque le guste el ruido, sino porque sabe que con una sola se volvería a dormir y llegaría tarde.", q:"¿Cuál es la finalidad de poner varias alarmas?", opts:["Disfrutar el sonido de las alarmas","Asegurarse de despertar y no llegar tarde","Despertar a toda la casa","Cumplir una costumbre sin sentido"], ans:1, exp:"El para qué es despertar a tiempo y no llegar tarde; el texto descarta lo del ruido." },

  /* -- Comportamiento -- */
  { id:"v_com_4", domain:"verbal", topic:"comportamiento", dif:2,
    stem:"Cuando alguien lo contradice, Daniel sube la voz y no deja hablar a los demás.",
    q:"¿Cómo se comporta Daniel ante quien lo contradice?",
    opts:["Escucha con atención","Reacciona de forma intolerante","Cambia de opinión","Se queda callado"],
    ans:1, exp:"Subir la voz e impedir que otros hablen es una reacción intolerante." },
  { id:"v_com_5", domain:"verbal", topic:"comportamiento", dif:2,
    stem:"Ante un examen difícil, Sofía respira, lee con calma y resuelve primero lo que sabe.",
    q:"¿Cómo se comporta Sofía frente al examen difícil?",
    opts:["Se bloquea por los nervios","Actúa con calma y estrategia","Abandona el examen","Copia a sus compañeros"],
    ans:1, exp:"Respirar, leer con calma y empezar por lo conocido describe una conducta calmada y estratégica." },
  { id:"v_com_6", domain:"verbal", topic:"comportamiento", dif:2, stem:"Cuando su equipo va perdiendo, en vez de bajar los brazos, la capitana habla con sus compañeras, reacomoda las posiciones y las anima a seguir intentándolo hasta el último minuto.", q:"¿Cómo se comporta la capitana cuando van perdiendo?", opts:["Se rinde y deja de jugar","Asume el liderazgo y motiva al equipo","Culpa a sus compañeras","Discute con la árbitra"], ans:1, exp:"Reorganizar y animar al equipo en la adversidad es asumir el liderazgo y motivar." },
  { id:"v_com_7", domain:"verbal", topic:"comportamiento", dif:2,
    stem:"Cada vez que pierde un partido, el jugador felicita al rival y agradece a su equipo.",
    q:"¿Cómo se comporta el jugador ante la derrota?",
    opts:["Con resentimiento","Con deportividad","Con indiferencia","Con desesperación"],
    ans:1, exp:"Felicitar al rival y agradecer al equipo tras perder es actuar con deportividad." },

  /* -- Causa y consecuencia -- */
  { id:"v_cau_5", domain:"verbal", topic:"causa_consecuencia", dif:2,
    stem:"Como no regaron las plantas durante semanas, el jardín se secó.",
    q:"Según el texto, ¿cuál fue la causa de que el jardín se secara?",
    opts:["El exceso de agua","La falta de riego","El frío del invierno","La sombra de los árboles"],
    ans:1, exp:"El conector 'como' introduce la causa: no regar las plantas (falta de riego)." },
  { id:"v_cau_6", domain:"verbal", topic:"causa_consecuencia", dif:2,
    stem:"El aumento del precio del combustible provocó que muchos productos se encarecieran.",
    q:"Según el texto, ¿cuál es una consecuencia del aumento del combustible?",
    opts:["Los productos bajaron de precio","Muchos productos se encarecieron","El combustible se agotó","Los salarios subieron"],
    ans:1, exp:"El efecto que 'provocó' el aumento del combustible fue que los productos se encarecieran." },
  { id:"v_cau_7", domain:"verbal", topic:"causa_consecuencia", dif:2,
    stem:"Gracias a que estudió con constancia todo el año, Karla aprobó el examen de admisión.",
    q:"¿Cuál fue la causa de que Karla aprobara?",
    opts:["La suerte","El estudio constante","La facilidad del examen","La ayuda de sus amigos"],
    ans:1, exp:"'Gracias a que estudió con constancia' señala la causa del resultado." },
  { id:"v_cau_8", domain:"verbal", topic:"causa_consecuencia", dif:3,
    stem:"La tala de las montañas dejó el suelo sin raíces que lo sostuvieran; por eso, con las lluvias, ocurrieron deslizamientos.",
    q:"Según el texto, ¿cuál es la causa de los deslizamientos?",
    opts:["Las lluvias por sí solas","La tala que debilitó el suelo","La construcción de casas","La falta de lluvia"],
    ans:1, exp:"El texto encadena: la tala dejó el suelo sin raíces y 'por eso' hubo deslizamientos. La causa de fondo es la tala." },
  { id:"v_cau_9", domain:"verbal", topic:"causa_consecuencia", dif:2,
    stem:"El uso responsable del agua permite que haya reservas durante la época seca.",
    q:"¿Qué relación de causa y consecuencia plantea el texto?",
    opts:["Cuidar el agua asegura reservas para la sequía","La sequía produce más agua","El agua no se puede almacenar","La época seca no afecta a nadie"],
    ans:0, exp:"La causa (usar el agua de forma responsable) tiene como consecuencia tener reservas en la época seca." },

  /* -- Simple y complejo -- */
  { id:"v_sim_4", domain:"verbal", topic:"simple_complejo", dif:2,
    stem:"Encender una vela requiere solo un fósforo; en cambio, poner en marcha una central eléctrica implica turbinas, controles y un equipo de ingenieros.",
    q:"¿En qué se diferencian ambas acciones?",
    opts:["En su antigüedad","En la cantidad de elementos y procesos","En su color","En su precio"],
    ans:1, exp:"El contraste es entre algo de un solo paso (simple) y algo de muchos componentes y procesos (complejo)." },
  { id:"v_sim_5", domain:"verbal", topic:"simple_complejo", dif:2,
    stem:"Un triciclo tiene pocas piezas fáciles de armar; un automóvil moderno integra miles de componentes mecánicos y electrónicos.",
    q:"¿Cómo es el automóvil frente al triciclo?",
    opts:["Más simple","Más complejo","Más lento","Más barato"],
    ans:1, exp:"Por su gran cantidad de componentes, el automóvil se presenta como más complejo." },
  { id:"v_sim_6", domain:"verbal", topic:"simple_complejo", dif:2, stem:"Saludar con la mano es un gesto que casi cualquiera hace sin pensar. Aprender lengua de señas, en cambio, exige memorizar cientos de gestos, expresiones faciales y reglas gramaticales propias.", q:"¿Cómo se presenta aprender lengua de señas frente a saludar con la mano?", opts:["Como algo más simple","Como algo más complejo","Como algo más antiguo","Como algo inútil"], ans:1, exp:"Aprender lengua de señas reúne muchos elementos y reglas: es más complejo que un saludo." },
  { id:"v_sim_7", domain:"verbal", topic:"simple_complejo", dif:3,
    stem:"Freír un huevo tiene básicamente un paso; organizar un banquete de varios tiempos exige planear, coordinar y cocinar decenas de platos a la vez.",
    q:"El banquete, frente al huevo frito, se presenta como algo:",
    opts:["Igual de simple","Más complejo","Menos nutritivo","Más rápido"],
    ans:1, exp:"El banquete reúne muchas tareas interrelacionadas: es más complejo que la acción de un solo paso." },

  /* -- Conceptualización -- */
  { id:"v_con_5", domain:"verbal", topic:"conceptualizacion", dif:2,
    stem:"Encontró una billetera con dinero y la devolvió completa a su dueño, aunque nadie lo habría sabido.",
    q:"¿Qué palabra describe su actitud?",
    opts:["Honradez","Astucia","Timidez","Indiferencia"],
    ans:0, exp:"Devolver lo ajeno aun sin ser visto se resume en el concepto de honradez." },
  { id:"v_con_6", domain:"verbal", topic:"conceptualizacion", dif:2,
    stem:"Trabajó horas extra, sin quejarse, para entregar el proyecto en la fecha acordada.",
    q:"¿Cómo se describe, en una palabra, su actitud?",
    opts:["Pereza","Compromiso","Vanidad","Suerte"],
    ans:1, exp:"Esforzarse para cumplir lo acordado refleja compromiso." },
  { id:"v_con_7", domain:"verbal", topic:"conceptualizacion", dif:2,
    stem:"Escuchó el problema de su amiga y se puso en su lugar para comprender lo que sentía.",
    q:"¿Qué palabra resume esa actitud?",
    opts:["Empatía","Envidia","Curiosidad","Orgullo"],
    ans:0, exp:"Ponerse en el lugar del otro para comprender lo que siente es empatía." },
  { id:"v_con_8", domain:"verbal", topic:"conceptualizacion", dif:2,
    stem:"No presumió de sus logros y reconoció abiertamente la ayuda de los demás.",
    q:"¿Cómo se caracteriza, en una palabra, a esta persona?",
    opts:["Soberbia","Humildad","Frialdad","Pereza"],
    ans:1, exp:"No presumir y reconocer la ayuda ajena describe humildad." },
  { id:"v_con_9", domain:"verbal", topic:"conceptualizacion", dif:3,
    stem:"Siguió intentando resolver el problema, sin perder la calma, aunque ya había fallado diez veces.",
    q:"¿Qué palabra resume su actitud?",
    opts:["Tenacidad","Pereza","Suerte","Distracción"],
    ans:0, exp:"Insistir con calma pese a los fracasos repetidos se conceptualiza como tenacidad." },

  /* -- Orden y desorden -- */
  { id:"v_ord_4", domain:"verbal", topic:"orden_desorden", dif:2,
    stem:"El taller estaba lleno de herramientas tiradas por el suelo; tras la limpieza, cada una quedó colgada en su gancho rotulado.",
    q:"¿Qué cambio experimentó el taller?",
    opts:["Del orden al desorden","Del desorden al orden","De lo nuevo a lo viejo","De lo grande a lo pequeño"],
    ans:1, exp:"Pasó de herramientas tiradas (desorden) a cada una en su lugar rotulado (orden)." },
  { id:"v_ord_5", domain:"verbal", topic:"orden_desorden", dif:2, stem:"En la biblioteca, cada libro tiene un código, está ubicado por materia y por autor, y siempre se devuelve al mismo estante; así cualquiera encuentra lo que busca en segundos.", q:"¿Cómo puede describirse esa biblioteca?", opts:["Desordenada","Ordenada","Improvisada","Abandonada"], ans:1, exp:"Códigos, ubicación por criterio y todo en su sitio describen una biblioteca ordenada." },
  { id:"v_ord_6", domain:"verbal", topic:"orden_desorden", dif:2,
    stem:"Después de la fiesta, platos, vasos y sillas quedaron regados por toda la casa.",
    q:"¿Cómo quedó la casa?",
    opts:["En orden","En desorden","Limpia","Vacía"],
    ans:1, exp:"Cosas regadas por todas partes describen desorden." },
  { id:"v_ord_7", domain:"verbal", topic:"orden_desorden", dif:3,
    stem:"El archivo digital pasó de carpetas sin nombre y documentos sueltos a un sistema con categorías claras y bien rotuladas.",
    q:"¿Qué describe ese cambio?",
    opts:["Un aumento del desorden","Una organización del desorden previo","Una pérdida de archivos","Un cambio de colores"],
    ans:1, exp:"Pasar de documentos sueltos a categorías claras es organizar lo que estaba en desorden." },

  /* -- Orden temporal -- */
  { id:"v_tmp_4", domain:"verbal", topic:"orden_temporal", dif:2,
    stem:"Primero se lava la ropa, luego se tiende, después se plancha y, por último, se guarda.",
    q:"Según el texto, ¿qué se hace inmediatamente antes de guardar la ropa?",
    opts:["Tenderla","Plancharla","Lavarla","Comprarla"],
    ans:1, exp:"La secuencia es lavar → tender → planchar → guardar. Justo antes de guardar se plancha." },
  { id:"v_tmp_5", domain:"verbal", topic:"orden_temporal", dif:2, stem:"Para publicar el video, Sofía primero lo graba, luego lo edita cortando los errores, después le agrega subtítulos y, finalmente, lo sube a la plataforma.", q:"¿Qué hace Sofía justo después de editar el video?", opts:["Grabarlo","Agregarle subtítulos","Subirlo a la plataforma","Borrarlo"], ans:1, exp:"El orden es grabar, editar, subtítulos y subir. Después de editar, agrega los subtítulos." },
  { id:"v_tmp_6", domain:"verbal", topic:"orden_temporal", dif:2,
    stem:"El albañil mezcla el cemento, levanta la pared y, al final, la pinta.",
    q:"¿Qué ocurre después de levantar la pared?",
    opts:["Mezclar el cemento","Pintarla","Comprar ladrillos","Cavar la zanja"],
    ans:1, exp:"La secuencia es mezclar → levantar → pintar. Después de levantar la pared, se pinta." },
  { id:"v_tmp_7", domain:"verbal", topic:"orden_temporal", dif:3,
    stem:"En la función: se abren las cortinas, se presenta el primer acto, hay un intermedio y luego viene el segundo acto.",
    q:"¿Qué ocurre inmediatamente antes del segundo acto?",
    opts:["El primer acto","El intermedio","La apertura de cortinas","Los aplausos finales"],
    ans:1, exp:"La secuencia es cortinas → primer acto → intermedio → segundo acto. Justo antes del segundo acto está el intermedio." },

  /* -- Esencia -- */
  { id:"v_ese_4", domain:"verbal", topic:"esencia", dif:3,
    stem:"Lo propio de un buen médico es escuchar al paciente, examinarlo con cuidado y recetar lo apropiado.",
    q:"De acuerdo con la lógica del texto, ¿qué sería propio de un buen mecánico?",
    opts:["Escuchar al cliente, revisar el vehículo y reparar lo necesario","Cobrar lo más posible","Cambiar todas las piezas siempre","Trabajar sin revisar nada"],
    ans:0, exp:"Por lógica paralela, las tres acciones del médico (escuchar, examinar, dar lo apropiado) se trasladan al mecánico: escuchar, revisar y reparar lo necesario." },
  { id:"v_ese_5", domain:"verbal", topic:"esencia", dif:2,
    stem:"Una característica esencial del hielo es estar frío y en estado sólido.",
    q:"Según el texto, ¿cuál es una característica esencial del hielo?",
    opts:["Su precio","Estar frío y sólido","Su tamaño","Su marca"],
    ans:1, exp:"Lo propio del hielo, según el texto, es estar frío y sólido." },
  { id:"v_ese_6", domain:"verbal", topic:"esencia", dif:3,
    stem:"Lo propio de un reloj es marcar el paso del tiempo.",
    q:"Por la misma lógica, ¿qué es lo propio de un termómetro?",
    opts:["Marcar la hora","Medir la temperatura","Pesar objetos","Medir distancias"],
    ans:1, exp:"Si lo propio del reloj es medir el tiempo, lo propio del termómetro es medir la temperatura." },
  { id:"v_ese_7", domain:"verbal", topic:"esencia", dif:2,
    stem:"Lo esencial de una llave es abrir y cerrar una cerradura determinada.",
    q:"Según el texto, ¿qué es lo propio de una llave?",
    opts:["Su color","Abrir y cerrar su cerradura","Su material","Su tamaño"],
    ans:1, exp:"Lo característico de una llave es su función: abrir y cerrar su cerradura." },

  /* -- Perspectiva -- */
  { id:"v_per_4", domain:"verbal", topic:"perspectiva", dif:2,
    stem:"El mismo invierno que entristece al turista alegra al dueño de la tienda de abrigos.",
    q:"¿Qué muestra esta diferencia?",
    opts:["Que el invierno es siempre malo","Que un mismo hecho se valora distinto según quién lo viva","Que el turista tiene razón","Que nadie disfruta el invierno"],
    ans:1, exp:"Un mismo hecho (el invierno) se valora de modo distinto según la perspectiva de cada quien." },
  { id:"v_per_5", domain:"verbal", topic:"perspectiva", dif:2,
    stem:"Para el niño, la montaña es un lugar de aventura; para el anciano, un esfuerzo agotador.",
    q:"¿Qué idea expresa el texto?",
    opts:["La montaña no debe visitarse","La misma montaña se percibe distinto según la persona","Los niños no se cansan","Los ancianos no caminan"],
    ans:1, exp:"La valoración depende del observador: niño y anciano viven la misma montaña de modo distinto." },
  { id:"v_per_6", domain:"verbal", topic:"perspectiva", dif:3,
    stem:"Reprobar un examen puede verse como un fracaso o como una oportunidad para descubrir qué reforzar.",
    q:"¿Qué plantea el texto?",
    opts:["Que reprobar no tiene solución","Que un mismo hecho admite distintas lecturas","Que los exámenes son injustos","Que nadie aprende de los errores"],
    ans:1, exp:"El mismo hecho (reprobar) se interpreta de dos formas según la mirada: admite distintas lecturas." },
  { id:"v_per_7", domain:"verbal", topic:"perspectiva", dif:2,
    stem:"Lo que para una persona es música a buen volumen, para la vecina puede ser un ruido molesto.",
    q:"¿Qué idea expresa el texto?",
    opts:["La música siempre molesta","Un mismo sonido se valora distinto según quién lo escuche","Nadie debe oír música","La vecina tiene mal gusto"],
    ans:1, exp:"El mismo sonido se percibe distinto según quién lo escuche: es cuestión de perspectiva." },
  { id:"v_per_8", domain:"verbal", topic:"perspectiva", dif:2,
    stem:"El mismo comentario directo puede parecer sincero a unos y grosero a otros.",
    q:"¿Qué expresa el texto?",
    opts:["Que hay que mentir siempre","Que la interpretación depende de quién recibe el mensaje","Que nadie debe opinar","Que la sinceridad es grosera"],
    ans:1, exp:"Un mismo comentario se interpreta distinto según quién lo reciba: depende de la perspectiva." },

  /* -- Idea implícita -- */
  { id:"v_imp_6", domain:"verbal", topic:"idea_implicita", dif:2,
    stem:"Cada vez que come en ese restaurante, a Luis le duele el estómago.",
    q:"¿Cuál es una idea implícita en el texto?",
    opts:["A Luis no le gusta comer","Algo de esa comida le hace daño","El restaurante es caro","Luis nunca come"],
    ans:1, exp:"Que siempre le duela el estómago tras comer ahí implica que algo de esa comida le cae mal." },
  { id:"v_imp_7", domain:"verbal", topic:"idea_implicita", dif:2,
    stem:"La biblioteca siempre se llena durante la época de exámenes.",
    q:"¿Cuál es una idea implícita?",
    opts:["La biblioteca es muy pequeña","En época de exámenes la gente estudia más","Nadie usa la biblioteca","Los libros son gratis"],
    ans:1, exp:"Si se llena justo en exámenes, se infiere que en esa época la gente estudia más." },
  { id:"v_imp_8", domain:"verbal", topic:"idea_implicita", dif:2,
    stem:"Antes de salir, Juan tomó paraguas, botas de hule y un abrigo grueso.",
    q:"¿Qué idea está implícita en el texto?",
    opts:["Iba a una fiesta","Esperaba mal tiempo","Vendía ropa","Hacía mucho calor"],
    ans:1, exp:"Llevar paraguas, botas y abrigo implica que esperaba lluvia y frío: mal tiempo." },
  { id:"v_imp_9", domain:"verbal", topic:"idea_implicita", dif:3, stem:"Llegué a la casa y todo estaba como lo había dejado: el periódico del lunes seguía en la entrada, el tazón del desayuno sin lavar y las luces apagadas en pleno día.", q:"¿Qué se puede deducir con seguridad?", opts:["Hubo una fiesta la noche anterior","Nadie había estado en la casa desde el lunes","Acababan de limpiar la casa","Había mucha gente adentro"], ans:1, exp:"El periódico del lunes intacto y todo igual indican que nadie estuvo allí desde entonces." },
  { id:"v_imp_10", domain:"verbal", topic:"idea_implicita", dif:2,
    stem:"Marta revisa tres veces que la puerta esté cerrada antes de dormir.",
    q:"¿Cuál es una idea implícita?",
    opts:["Marta es descuidada","Marta es precavida con la seguridad","Marta no duerme nunca","La puerta está rota"],
    ans:1, exp:"Revisar varias veces la cerradura sugiere que Marta es precavida con la seguridad." },
  { id:"v_imp_11", domain:"verbal", topic:"idea_implicita", dif:3,
    stem:"Aunque le ofrecieron más sueldo en otra empresa, decidió quedarse donde estaba.",
    q:"¿Qué idea está implícita?",
    opts:["El dinero es lo único que le importa","Valora algo más que el salario","No sabe tomar decisiones","La otra empresa cerró"],
    ans:1, exp:"Rechazar más sueldo para quedarse implica que valora algo más que el dinero (ambiente, estabilidad, etc.)." },

  /* -- Idea principal / tema -- */
  { id:"v_pri_4", domain:"verbal", topic:"idea_principal", dif:2,
    stem:"El reciclaje reduce la basura, ahorra recursos naturales y disminuye la contaminación.",
    q:"¿Cuál es la idea principal del texto?",
    opts:["Los beneficios del reciclaje","La historia de la basura","El precio de los recursos","La contaminación del aire"],
    ans:0, exp:"Los tres puntos enumeran ventajas: la idea general es los beneficios del reciclaje." },
  { id:"v_pri_5", domain:"verbal", topic:"idea_principal", dif:2,
    stem:"Las abejas polinizan cultivos, producen miel y ayudan a mantener el equilibrio de muchos ecosistemas.",
    q:"¿Cuál es el tema central del texto?",
    opts:["La importancia de las abejas","El sabor de la miel","El tamaño de las abejas","El peligro de las abejas"],
    ans:0, exp:"Los tres rasgos apuntan a un mismo tema: la importancia de las abejas." },
  { id:"v_pri_6", domain:"verbal", topic:"idea_principal", dif:2,
    stem:"Leer mejora el vocabulario, ejercita la memoria y abre la mente a nuevas ideas.",
    q:"¿Cuál es la idea principal?",
    opts:["Los beneficios de la lectura","El precio de los libros","La dificultad de leer","La historia de la escritura"],
    ans:0, exp:"El texto enumera ventajas de leer: su idea general son los beneficios de la lectura." },
  { id:"v_pri_7", domain:"verbal", topic:"idea_principal", dif:3,
    stem:"El río nace en la montaña, cruza el valle dando agua a los cultivos y desemboca en el mar, sosteniendo la vida a su paso.",
    q:"¿Cuál es el tema central del texto?",
    opts:["El color del agua","El recorrido del río y su aporte a la vida","La altura de la montaña","La pesca en el mar"],
    ans:1, exp:"Todo el texto sigue el recorrido del río y lo que aporta: ese es el tema central." },
  { id:"v_pri_8", domain:"verbal", topic:"idea_principal", dif:2,
    stem:"Dormir bien mejora la memoria, fortalece las defensas y estabiliza el estado de ánimo.",
    q:"¿Cuál es la idea principal?",
    opts:["La importancia de dormir bien","Los tipos de camas","Las horas de trabajo","Las pesadillas comunes"],
    ans:0, exp:"Los beneficios enumerados apuntan a la importancia de dormir bien." },
  { id:"v_pri_9", domain:"verbal", topic:"idea_principal", dif:3,
    stem:"En Costa Rica conviven el español, el bribri y el inglés criollo limonense, reflejo de su diversidad cultural.",
    q:"¿Cuál es el tema central del texto?",
    opts:["La diversidad lingüística de Costa Rica","La gramática del español","La población de Limón","La enseñanza del inglés"],
    ans:0, exp:"El texto usa las tres lenguas como muestra de la diversidad cultural y lingüística del país." },

  /* -- Paráfrasis -- */
  { id:"v_par_4", domain:"verbal", topic:"parafrasis", dif:3, stem:"El conocimiento que no se comparte termina por desvanecerse, como el agua estancada se pudre.", q:"¿Cuál opción expresa la misma idea?", opts:["El conocimiento es inútil","El saber se mantiene vivo cuando se comparte","El agua estancada es saludable","Compartir es una pérdida de tiempo"], ans:1, exp:"La comparación sugiere que el saber, como el agua, se echa a perder si no circula: se mantiene vivo al compartirlo." },
  { id:"v_par_5", domain:"verbal", topic:"parafrasis", dif:2, stem:"La crítica, cuando es honesta, no busca herir, sino ayudar a mejorar.", q:"¿Cuál opción conserva el sentido?", opts:["Toda crítica busca herir","Una crítica honesta tiene la intención de ayudar","Hay que evitar toda crítica","Mejorar es imposible"], ans:1, exp:"El texto distingue la crítica honesta: su fin no es herir, sino ayudar a mejorar." },
  { id:"v_par_6", domain:"verbal", topic:"parafrasis", dif:3, stem:"El hecho de que algo sea muy popular no garantiza que sea bueno.", q:"¿Cuál opción dice lo mismo con otras palabras?", opts:["Lo popular siempre es bueno","La popularidad no asegura la calidad","Nada bueno llega a ser popular","Hay que seguir siempre a la mayoría"], ans:1, exp:"Que algo sea popular no implica que sea bueno: la popularidad no garantiza calidad." },
  { id:"v_par_7", domain:"verbal", topic:"parafrasis", dif:3,
    stem:"La libertad de uno termina donde empieza la del otro.",
    q:"¿Cuál opción expresa la misma idea?",
    opts:["Nadie es realmente libre","La libertad propia tiene como límite la de los demás","La libertad no tiene ningún límite","Solo una persona puede ser libre"],
    ans:1, exp:"La frase dice que mi libertad llega hasta donde empieza la del otro: tiene como límite la libertad ajena." },
  { id:"v_par_8", domain:"verbal", topic:"parafrasis", dif:3, stem:"Quien ignora los pequeños problemas de hoy suele enfrentarse a grandes problemas mañana.", q:"¿Cuál opción reproduce la idea?", opts:["Los problemas pequeños no importan","Descuidar lo pequeño hoy trae problemas mayores después","Mañana no existirán los problemas","Lo mejor es ignorar todo"], ans:1, exp:"El texto advierte que descuidar lo pequeño hoy lleva a problemas grandes después." },

  /* -- Proposiciones -- */
  { id:"v_pro_4", domain:"verbal", topic:"proposiciones", dif:3,
    stem:"Todos los metales conducen la electricidad. Analice las proposiciones:\nI. El cobre, que es un metal, conduce electricidad.\nII. Ningún metal conduce electricidad.\nIII. Hay metales que no conducen electricidad.",
    q:"¿Cuál(es) proposición(es) se deduce(n) del texto?",
    opts:["Solo la I","Solo la II","La II y la III","Las tres"],
    ans:0, exp:"Si todos los metales conducen, el cobre (metal) conduce: I se deduce. II y III contradicen el texto." },
  { id:"v_pro_5", domain:"verbal", topic:"proposiciones", dif:3,
    stem:"Toda persona inscrita debe presentar su cédula. Analice las proposiciones:\nI. Quien no presenta la cédula no cumple lo exigido.\nII. La cédula es opcional.\nIII. Una persona inscrita sin cédula no cumple el requisito.",
    q:"¿Cuáles proposiciones concuerdan con el texto?",
    opts:["Solo la II","La I y la III","Solo la III","Las tres"],
    ans:1, exp:"I y III reformulan la obligación de presentar cédula; II la contradice." },
  { id:"v_pro_6", domain:"verbal", topic:"proposiciones", dif:2,
    stem:"Cuando llueve, la cancha se moja. Analice las proposiciones:\nI. La lluvia moja la cancha.\nII. La cancha se moja sola, sin lluvia.\nIII. La lluvia seca la cancha.",
    q:"¿Cuál proposición se deduce del texto?",
    opts:["Solo la I","Solo la II","Solo la III","La I y la III"],
    ans:0, exp:"El texto dice que la lluvia moja la cancha: I se deduce. II y III no se siguen del texto." },
  { id:"v_pro_7", domain:"verbal", topic:"proposiciones", dif:3,
    stem:"Ningún estudiante aprobó sin entregar el proyecto. Analice las proposiciones:\nI. Entregar el proyecto fue necesario para aprobar.\nII. Algún estudiante aprobó sin entregar el proyecto.\nIII. Quien no entregó el proyecto no aprobó.",
    q:"¿Cuáles proposiciones se deducen del texto?",
    opts:["Solo la I","La I y la III","Solo la II","Las tres"],
    ans:1, exp:"'Ninguno aprobó sin entregar' equivale a que entregar era necesario (I) y a que quien no entregó no aprobó (III). II lo contradice." },
  { id:"v_pro_8", domain:"verbal", topic:"proposiciones", dif:2,
    stem:"Todas las aves tienen plumas. Analice las proposiciones:\nI. El gorrión, que es un ave, tiene plumas.\nII. Existen aves sin plumas.\nIII. El gorrión no tiene plumas.",
    q:"¿Cuál proposición se deduce del texto?",
    opts:["Solo la I","Solo la II","La II y la III","Las tres"],
    ans:0, exp:"Si todas las aves tienen plumas, el gorrión (ave) las tiene: I se deduce. II y III contradicen el texto." },

  /* ===================== MATEMÁTICO ===================== */

  /* -- Aritmética -- */
  { id:"m_ari_6", domain:"math", topic:"aritmetica", dif:2,
    stem:"En una soda, un casado cuesta ₡2 500 y un fresco ₡900. Marta pide 3 casados y 2 frescos, y paga con ₡10 000.",
    q:"¿Cuánto recibe de vuelto?",
    opts:["₡600","₡700","₡800","₡900"],
    ans:1, exp:"3·2 500 = 7 500 y 2·900 = 1 800; total 9 300. Vuelto: 10 000 − 9 300 = 700." },
  { id:"m_ari_7", domain:"math", topic:"aritmetica", dif:3, stem:"Considere la operación con fracciones: 3/4 − 2/3 + 1/2.", q:"¿Cuál es el resultado?", opts:["7/12","1/12","5/12","2/3"], ans:0, exp:"Con común denominador 12: 9/12 − 8/12 + 6/12 = 7/12." },
  { id:"m_ari_8", domain:"math", topic:"aritmetica", dif:2, stem:"Considere la operación: 5 + 2 × (8 − 3)² ÷ 5.", q:"¿Cuál es el resultado?", opts:["15","27","20","11"], ans:0, exp:"Primero el paréntesis: 8 − 3 = 5; al cuadrado: 25. Luego 2 × 25 = 50; 50 ÷ 5 = 10; 5 + 10 = 15." },
  { id:"m_ari_9", domain:"math", topic:"aritmetica", dif:2,
    stem:"En una finca hay 240 árboles y 3/8 de ellos son de naranja.",
    q:"¿Cuántos árboles de naranja hay?",
    opts:["64","80","96","90"],
    ans:3, exp:"240 ÷ 8 = 30; 30 × 3 = 90 árboles de naranja." },
  { id:"m_ari_10", domain:"math", topic:"aritmetica", dif:2,
    stem:"Considere la operación con enteros: (−6) + (−4) − (−10) + 2.",
    q:"¿Cuál es el resultado?",
    opts:["−2","0","2","−12"],
    ans:2, exp:"(−6) + (−4) = −10; −10 − (−10) = 0; 0 + 2 = 2." },

  /* -- MCM y MCD -- */
  { id:"m_mcm_5", domain:"math", topic:"mcm_mcd", dif:2,
    stem:"Dos luces parpadean: una cada 8 segundos y la otra cada 10 segundos. En este momento parpadean juntas.",
    q:"¿Dentro de cuántos segundos vuelven a parpadear juntas por primera vez?",
    opts:["18 s","40 s","80 s","20 s"],
    ans:1, exp:"Coinciden en el MCM(8, 10). 8 = 2³ y 10 = 2·5, así que MCM = 2³·5 = 40 s." },
  { id:"m_mcm_6", domain:"math", topic:"mcm_mcd", dif:2, stem:"Se quieren repartir 24 lápices y 36 borradores en bolsas iguales, usando la mayor cantidad de bolsas posible y sin que sobre nada.", q:"¿Cuántas bolsas se forman?", opts:["12","6","72","4"], ans:0, exp:"La mayor cantidad de bolsas iguales es el MCD(24, 36) = 12." },
  { id:"m_mcm_7", domain:"math", topic:"mcm_mcd", dif:3,
    stem:"Se reparten 36 lápices y 48 cuadernos en paquetes iguales, con la mayor cantidad posible de paquetes y sin que sobre nada.",
    q:"¿Cuántos paquetes se forman?",
    opts:["6","8","12","4"],
    ans:2, exp:"La mayor cantidad de paquetes iguales es el MCD(36, 48). 36 = 2²·3² y 48 = 2⁴·3, así que MCD = 2²·3 = 12 paquetes." },

  /* -- Relaciones de orden -- */
  { id:"m_rel_4", domain:"math", topic:"relaciones_orden", dif:2,
    stem:"En una fila, Marta está delante de Luis, Luis delante de Sara y Pedro está detrás de Sara.",
    q:"¿Quién va de último en la fila?",
    opts:["Marta","Luis","Sara","Pedro"],
    ans:3, exp:"De adelante hacia atrás: Marta, Luis, Sara, Pedro. El último es Pedro." },
  { id:"m_rel_5", domain:"math", topic:"relaciones_orden", dif:2, stem:"Se sabe que A es mayor que B, B es mayor que C y C es mayor que D.", q:"¿Quién es el menor de todos?", opts:["A","B","C","D"], ans:3, exp:"La cadena es A > B > C > D, así que el menor es D." },
  { id:"m_rel_6", domain:"math", topic:"relaciones_orden", dif:3, stem:"Considere los valores 0,4 ; 0,47 ; 0,6 ; 0,55.", q:"¿Cuál está más cerca de 1/2?", opts:["0,4","0,47","0,6","0,55"], ans:1, exp:"1/2 = 0,50. Distancias: 0,10 ; 0,03 ; 0,10 ; 0,05. La menor es 0,03, o sea 0,47." },
  { id:"m_rel_7", domain:"math", topic:"relaciones_orden", dif:3,
    stem:"De tres cajas, A pesa más que B, y C pesa menos que B.",
    q:"¿Cuál afirmación es correcta?",
    opts:["C es la más pesada","A es la más pesada","B es la más liviana","A y C pesan igual"],
    ans:1, exp:"Como A > B y B > C, el orden es A > B > C. La más pesada es A." },

  /* -- Conteo intuitivo -- */
  { id:"m_cnt_4", domain:"math", topic:"conteo", dif:3, stem:"Un restaurante ofrece 3 entradas, 4 platos fuertes y 2 postres.", q:"¿Cuántos menús distintos de entrada, plato fuerte y postre se pueden armar?", opts:["24","9","12","14"], ans:0, exp:"Principio multiplicativo: 3 × 4 × 2 = 24 menús." },
  { id:"m_cnt_5", domain:"math", topic:"conteo", dif:3,
    stem:"En una gaveta, a oscuras, hay 6 medias negras y 8 blancas mezcladas.",
    q:"¿Cuántas medias hay que sacar como mínimo para asegurar un par del mismo color?",
    opts:["3","4","9","2"],
    ans:0, exp:"En el peor caso se sacan 2 de distinto color; la tercera forzosamente repite color y forma un par. Mínimo: 3." },
  { id:"m_cnt_6", domain:"math", topic:"conteo", dif:2,
    stem:"Se forman placas de 3 letras distintas usando solo A, B, C y D (sin repetir letras).",
    q:"¿Cuántas placas distintas se pueden formar?",
    opts:["12","24","64","18"],
    ans:1, exp:"Primera letra: 4 opciones; segunda: 3; tercera: 2. Total 4·3·2 = 24." },
  { id:"m_cnt_7", domain:"math", topic:"conteo", dif:3,
    stem:"En una bolsa hay 5 bolas rojas y 7 azules.",
    q:"¿Cuántas bolas hay que sacar como mínimo, sin ver, para asegurar 2 rojas?",
    opts:["7","8","9","2"],
    ans:2, exp:"En el peor caso salen las 7 azules antes que rojas; luego se necesitan 2 rojas. Total 7 + 2 = 9." },

  /* -- Permutaciones -- */
  { id:"m_per_4", domain:"math", topic:"permutaciones", dif:2, stem:"Se quieren ordenar en fila las 5 letras de la palabra LIBRO (todas distintas).", q:"¿Cuántos ordenamientos distintos hay?", opts:["120","60","25","100"], ans:0, exp:"Ordenar 5 elementos distintos: 5! = 5·4·3·2·1 = 120." },
  { id:"m_per_5", domain:"math", topic:"permutaciones", dif:2,
    stem:"De un grupo de 6 personas se debe elegir un presidente y un secretario (cargos distintos).",
    q:"¿De cuántas formas se pueden elegir?",
    opts:["11","30","36","720"],
    ans:1, exp:"Presidente: 6 opciones; secretario: 5 restantes. Total 6 × 5 = 30." },
  { id:"m_per_6", domain:"math", topic:"permutaciones", dif:2,
    stem:"Se quieren ordenar en fila las 4 letras distintas de la palabra ROMA.",
    q:"¿Cuántos ordenamientos distintos hay?",
    opts:["12","24","16","8"],
    ans:1, exp:"Son 4 letras distintas: 4! = 4·3·2·1 = 24." },

  /* -- Geometría -- */
  { id:"m_geo_5", domain:"math", topic:"geometria", dif:2,
    stem:"Un rectángulo tiene un área de 48 cm² y su base mide 8 cm.",
    q:"¿Cuánto mide su altura?",
    opts:["6 cm","5 cm","40 cm","12 cm"],
    ans:0, exp:"Área = base × altura, así que altura = 48 ÷ 8 = 6 cm." },
  { id:"m_geo_6", domain:"math", topic:"geometria", dif:3, stem:"El área de un cuadrado es 49 cm².", q:"¿Cuál es su perímetro?", opts:["28 cm","14 cm","49 cm","21 cm"], ans:0, exp:"Si el área es lado² = 49, el lado es 7 cm. Perímetro = 4 × 7 = 28 cm." },
  { id:"m_geo_7", domain:"math", topic:"geometria", dif:2,
    stem:"Un triángulo tiene un área de 24 cm² y su base mide 6 cm.",
    q:"¿Cuánto mide su altura?",
    opts:["4 cm","8 cm","6 cm","12 cm"],
    ans:1, exp:"Área = base × altura ÷ 2, entonces 24 = 6 × altura ÷ 2 = 3·altura, así que altura = 8 cm." },
  { id:"m_geo_8", domain:"math", topic:"geometria", dif:3,
    stem:"Un círculo tiene un radio de 7 cm. Use π ≈ 22/7.",
    q:"¿Cuál es su área?",
    opts:["44 cm²","154 cm²","154 cm","308 cm²"],
    ans:1, exp:"Área = π·r² = (22/7)·7² = (22/7)·49 = 22·7 = 154 cm²." },

  /* -- Sucesiones -- */
  { id:"m_suc_6", domain:"math", topic:"sucesiones", dif:3, stem:"Observe la sucesión: 3, 6, 12, 24, …", q:"¿Cuál es el séptimo término?", opts:["192","96","144","240"], ans:0, exp:"Cada término se multiplica por 2: 3, 6, 12, 24, 48, 96, 192. El séptimo es 192." },
  { id:"m_suc_7", domain:"math", topic:"sucesiones", dif:3, stem:"Observe la sucesión: 5, 9, 13, 17, …", q:"¿Qué posición ocupa el número 41?", opts:["10","9","11","12"], ans:0, exp:"Es aritmética con d = 4: aₙ = 5 + (n−1)·4. Igualando a 41: (n−1)·4 = 36 → n = 10." },
  { id:"m_suc_8", domain:"math", topic:"sucesiones", dif:3,
    stem:"Observe la sucesión: 1, 2, 4, 7, 11, 16, …",
    q:"¿Cuál es el siguiente número?",
    opts:["20","21","22","23"],
    ans:2, exp:"Las diferencias crecen: +1, +2, +3, +4, +5. El siguiente suma +6: 16 + 6 = 22." },
  { id:"m_suc_9", domain:"math", topic:"sucesiones", dif:3, stem:"Observe la sucesión: 1, 3, 7, 15, 31, …", q:"¿Cuál es el siguiente término?", opts:["63","47","62","51"], ans:0, exp:"Cada término se obtiene multiplicando por 2 y sumando 1: 31 × 2 + 1 = 63." },

  /* -- Datos y probabilidad -- */
  { id:"m_dat_5", domain:"math", topic:"datos_probabilidad", dif:3, stem:"Un estudiante tiene 7, 8 y 6 en tres exámenes y hará un cuarto.", q:"¿Qué nota necesita en el cuarto para que el promedio de los cuatro sea 7,5?", opts:["9","8","7,5","10"], ans:0, exp:"Para promediar 7,5 la suma debe ser 4 × 7,5 = 30. Lleva 7+8+6 = 21, así que necesita 30 − 21 = 9." },
  { id:"m_dat_6", domain:"math", topic:"datos_probabilidad", dif:2,
    stem:"En una urna hay 3 bolas verdes, 5 rojas y 2 azules. Se saca una al azar.",
    q:"¿Cuál es la probabilidad de que sea azul?",
    opts:["1/5","1/2","2/5","1/10"],
    ans:0, exp:"Hay 10 bolas en total y 2 azules: 2/10 = 1/5." },
  { id:"m_dat_7", domain:"math", topic:"datos_probabilidad", dif:2, stem:"Se lanza un dado común de 6 caras.", q:"¿Cuál es la probabilidad de obtener un número primo?", opts:["1/2","1/3","2/3","1/6"], ans:0, exp:"Los primos del 1 al 6 son 2, 3 y 5 (el 1 no es primo): 3 casos de 6, o sea 1/2." },
  { id:"m_dat_8", domain:"math", topic:"datos_probabilidad", dif:3,
    stem:"El promedio de 4 números es 15. Tres de ellos son 12, 18 y 10.",
    q:"¿Cuál es el cuarto número?",
    opts:["15","18","20","25"],
    ans:2, exp:"La suma total es 4·15 = 60. Los tres dados suman 40, así que el cuarto es 60 − 40 = 20." },

  /* -- Notación algebraica -- */
  { id:"m_not_4", domain:"math", topic:"algebra_notacion", dif:2,
    stem:"Considere la frase: 'la mitad de un número, aumentada en 7'.",
    q:"¿Cuál expresión la representa?",
    opts:["x/2 + 7","2x + 7","(x + 7)/2","7 − x/2"],
    ans:0, exp:"La mitad del número es x/2; aumentada en 7 es x/2 + 7." },
  { id:"m_not_5", domain:"math", topic:"algebra_notacion", dif:2,
    stem:"Ana tiene n años. Su mamá tiene 4 años menos que el triple de la edad de Ana.",
    q:"¿Qué expresión representa la edad de la mamá?",
    opts:["3n − 4","3(n − 4)","4 − 3n","n/3 − 4"],
    ans:0, exp:"El triple de Ana es 3n; '4 menos que eso' es 3n − 4." },
  { id:"m_not_6", domain:"math", topic:"algebra_notacion", dif:2,
    stem:"Considere la frase: 'el cuadrado de la suma de un número y 3'.",
    q:"¿Cuál expresión la representa?",
    opts:["x² + 3","(x + 3)²","x² + 9","2(x + 3)"],
    ans:1, exp:"Primero la suma (x + 3) y luego su cuadrado: (x + 3)². Es distinto de x² + 9." },

  /* -- Relaciones algebraicas y paridad -- */
  { id:"m_alr_4", domain:"math", topic:"algebra_relaciones", dif:3, stem:"Se sabe que 3(x − 2) = 18.", q:"¿Cuánto vale x + 5?", opts:["13","8","6","11"], ans:0, exp:"3(x−2)=18 → x−2=6 → x=8. Entonces x+5 = 13." },
  { id:"m_alr_5", domain:"math", topic:"algebra_relaciones", dif:3,
    stem:"Sea n un número entero cualquiera.",
    q:"¿Cuál de las siguientes expresiones representa siempre un número impar?",
    opts:["2n","n + 2","2n + 1","n²"],
    ans:2, exp:"2n es par para todo entero, así que 2n + 1 es siempre impar. Las otras dependen de n." },
  { id:"m_alr_6", domain:"math", topic:"algebra_relaciones", dif:3, stem:"El producto de dos números enteros es par.", q:"¿Qué se puede afirmar con certeza?", opts:["Los dos son impares","Al menos uno de los dos es par","Los dos son pares","Ambos son negativos"], ans:1, exp:"Un producto es par si al menos uno de los factores es par. No tienen que ser los dos pares (par × impar también es par)." },

  /* -- Unidades de medida -- */
  { id:"m_uni_5", domain:"math", topic:"unidades_medida", dif:2, stem:"Una película dura 2 horas y 35 minutos.", q:"¿Cuántos minutos dura en total?", opts:["155","235","135","150"], ans:0, exp:"2 horas = 120 minutos; más 35: 120 + 35 = 155 minutos." },
  { id:"m_uni_6", domain:"math", topic:"unidades_medida", dif:3,
    stem:"Un tren viaja a una velocidad constante de 120 km/h.",
    q:"¿Qué distancia recorre en 15 minutos?",
    opts:["30 km","60 km","8 km","20 km"],
    ans:0, exp:"15 min = 1/4 de hora. Distancia = 120 × 1/4 = 30 km." },
  { id:"m_uni_7", domain:"math", topic:"unidades_medida", dif:3, stem:"Una jarra contiene 1,5 litros de jugo y se sirven 3 vasos de 250 ml cada uno.", q:"¿Cuántos mililitros de jugo quedan en la jarra?", opts:["750 ml","1 250 ml","500 ml","250 ml"], ans:0, exp:"1,5 L = 1 500 ml. Se sirven 3 × 250 = 750 ml. Quedan 1 500 − 750 = 750 ml." },

  /* -- Razón y proporción -- */
  { id:"m_raz_5", domain:"math", topic:"razon_proporcion", dif:2,
    stem:"Cuatro obreros pintan una casa en 9 días, trabajando al mismo ritmo.",
    q:"¿Cuántos días tardarían 6 obreros en pintar la misma casa?",
    opts:["6 días","13 días","4 días","12 días"],
    ans:0, exp:"Proporción inversa: 4·9 = 36 obrero-días. Con 6 obreros: 36 ÷ 6 = 6 días." },
  { id:"m_raz_6", domain:"math", topic:"razon_proporcion", dif:2, stem:"Una receta para 6 porciones usa 450 g de harina.", q:"¿Cuánta harina se necesita para 10 porciones, manteniendo la proporción?", opts:["750 g","600 g","900 g","720 g"], ans:0, exp:"Por porción: 450 ÷ 6 = 75 g. Para 10 porciones: 75 × 10 = 750 g." },
  { id:"m_raz_7", domain:"math", topic:"razon_proporcion", dif:3,
    stem:"Un auto recorre 240 km con 16 litros de gasolina.",
    q:"¿Cuántos litros necesita para recorrer 90 km al mismo rendimiento?",
    opts:["5 L","6 L","8 L","7,5 L"],
    ans:1, exp:"Rendimiento: 240 ÷ 16 = 15 km por litro. Para 90 km: 90 ÷ 15 = 6 litros." },

  /* ===================== LOTE 2 — 50 preguntas nuevas ===================== */

  /* -- Verbal: finalidad -- */
  { id:"v_fin_8", domain:"verbal", topic:"finalidad", dif:2,
    stem:"Una empresa ofrece capacitaciones gratuitas a sus empleados para mejorar su desempeño.",
    q:"¿Cuál es la finalidad de las capacitaciones?",
    opts:["Gastar el presupuesto","Mejorar el desempeño de los empleados","Contratar más personal","Reducir los salarios"],
    ans:1, exp:"Se ofrecen 'para mejorar su desempeño': esa es la finalidad." },
  { id:"v_fin_9", domain:"verbal", topic:"finalidad", dif:3, stem:"La biblioteca amplió su horario hasta la medianoche durante la época de exámenes. El director aclaró que no busca que los estudiantes duerman menos, sino ofrecerles un lugar tranquilo para estudiar cuando en casa no pueden.", q:"¿Cuál es la finalidad de ampliar el horario?", opts:["Que los estudiantes duerman menos","Ofrecer un espacio tranquilo para estudiar","Gastar más en electricidad","Competir con otras bibliotecas"], ans:1, exp:"El fin es dar un lugar tranquilo para estudiar; el texto descarta expresamente lo de dormir menos." },

  /* -- Verbal: comportamiento -- */
  { id:"v_com_8", domain:"verbal", topic:"comportamiento", dif:2,
    stem:"Ante un examen sorpresa, varios estudiantes se ponen nerviosos y se quedan en blanco.",
    q:"¿Cómo se comportan esos estudiantes?",
    opts:["Se concentran mejor","Se bloquean por los nervios","Lo celebran","Se duermen"],
    ans:1, exp:"La conducta descrita es bloquearse por los nervios." },
  { id:"v_com_9", domain:"verbal", topic:"comportamiento", dif:2,
    stem:"Ante una opinión distinta, Marcos escucha, pregunta y luego responde con respeto.",
    q:"¿Cómo se comporta Marcos?",
    opts:["Se ofende","Dialoga con respeto","Se va molesto","Ignora al otro"],
    ans:1, exp:"Escuchar, preguntar y responder con respeto es dialogar." },

  /* -- Verbal: causa y consecuencia -- */
  { id:"v_cau_10", domain:"verbal", topic:"causa_consecuencia", dif:2,
    stem:"Debido a las fuertes lluvias, se canceló el partido de fútbol.",
    q:"¿Cuál fue la causa de la cancelación?",
    opts:["El cansancio de los jugadores","Las fuertes lluvias","La falta de público","Un error del árbitro"],
    ans:1, exp:"'Debido a' introduce la causa: las fuertes lluvias." },
  { id:"v_cau_11", domain:"verbal", topic:"causa_consecuencia", dif:2,
    stem:"Estudió toda la noche; por eso, al día siguiente estaba agotado.",
    q:"¿Cuál es la consecuencia de estudiar toda la noche?",
    opts:["Estaba descansado","Estaba agotado","No fue a clase","Aprobó sin estudiar"],
    ans:1, exp:"'Por eso' marca la consecuencia: el agotamiento." },
  { id:"v_cau_12", domain:"verbal", topic:"causa_consecuencia", dif:3,
    stem:"El uso constante de protector solar reduce el riesgo de quemaduras en la piel.",
    q:"¿Qué relación de causa y consecuencia plantea el texto?",
    opts:["El protector causa quemaduras","Usar protector reduce el riesgo de quemaduras","El sol no daña la piel","Las quemaduras son inevitables"],
    ans:1, exp:"La causa (usar protector) tiene como consecuencia menos quemaduras." },

  /* -- Verbal: simple y complejo -- */
  { id:"v_sim_8", domain:"verbal", topic:"simple_complejo", dif:2,
    stem:"Armar un sándwich lleva dos o tres pasos; preparar un pastel de bodas implica recetas, tiempos de horneado y decoración detallada.",
    q:"¿Cómo es el pastel frente al sándwich?",
    opts:["Más simple","Más complejo","Más barato","Más rápido"],
    ans:1, exp:"El pastel reúne muchos pasos y partes: es más complejo." },
  { id:"v_sim_9", domain:"verbal", topic:"simple_complejo", dif:2, stem:"Hervir agua es una tarea de un solo paso. Cocinar un menú de tres tiempos para veinte invitados exige planear las compras, calcular los tiempos de cada plato y coordinar varias preparaciones a la vez.", q:"¿Cómo es cocinar ese menú frente a hervir agua?", opts:["Más simple","Más complejo","Más rápido","Más barato"], ans:1, exp:"El menú reúne muchas tareas que hay que coordinar: es más complejo." },

  /* -- Verbal: conceptualización -- */
  { id:"v_con_10", domain:"verbal", topic:"conceptualizacion", dif:2,
    stem:"Repartió su almuerzo con un compañero que había olvidado el suyo, sin que se lo pidieran.",
    q:"¿Qué palabra describe su actitud?",
    opts:["Solidaridad","Envidia","Pereza","Orgullo"],
    ans:0, exp:"Ayudar de forma espontánea se conceptualiza como solidaridad." },
  { id:"v_con_11", domain:"verbal", topic:"conceptualizacion", dif:2,
    stem:"Llegó puntual a cada cita durante todo el año, sin faltar ni una vez.",
    q:"¿Qué palabra resume su conducta?",
    opts:["Puntualidad","Distracción","Pereza","Desorden"],
    ans:0, exp:"Cumplir siempre con la hora acordada es puntualidad." },

  /* -- Verbal: orden y desorden -- */
  { id:"v_ord_8", domain:"verbal", topic:"orden_desorden", dif:2,
    stem:"Las herramientas pasaron de estar tiradas por el piso a colgar ordenadas por tamaño en la pared.",
    q:"¿Qué cambio ocurrió?",
    opts:["Del orden al desorden","Del desorden al orden","De grande a pequeño","De nuevo a viejo"],
    ans:1, exp:"De tiradas (desorden) a colgadas por criterio (orden)." },
  { id:"v_ord_9", domain:"verbal", topic:"orden_desorden", dif:2, stem:"El escritorio digital de Ana pasó de tener decenas de archivos sueltos con nombres como documento1 y nuevo (2), a un sistema de carpetas por proyecto, cada una con su fecha y su tema.", q:"¿Qué cambio describe el texto?", opts:["Del orden al desorden","Del desorden al orden","De carpetas a archivos sueltos","No hubo ningún cambio"], ans:1, exp:"De archivos sueltos y mal nombrados (desorden) a carpetas claras por proyecto (orden)." },

  /* -- Verbal: orden temporal -- */
  { id:"v_tmp_8", domain:"verbal", topic:"orden_temporal", dif:2,
    stem:"Para hacer café: se hierve el agua, se agrega el café, se cuela y se sirve.",
    q:"¿Qué se hace justo antes de servir?",
    opts:["Hervir el agua","Colar","Agregar el café","Lavar la taza"],
    ans:1, exp:"La secuencia es hervir → agregar → colar → servir. Antes de servir se cuela." },
  { id:"v_tmp_9", domain:"verbal", topic:"orden_temporal", dif:2,
    stem:"El atleta calienta, corre la carrera y luego estira para relajar los músculos.",
    q:"¿Qué hace después de correr?",
    opts:["Calentar","Estirar","Inscribirse","Dormir"],
    ans:1, exp:"Después de correr, estira." },

  /* -- Verbal: esencia -- */
  { id:"v_ese_8", domain:"verbal", topic:"esencia", dif:3,
    stem:"Lo propio de una brújula es señalar el norte.",
    q:"Por la misma lógica, ¿qué es lo propio de un termómetro?",
    opts:["Señalar el norte","Medir la temperatura","Medir el peso","Marcar la hora"],
    ans:1, exp:"Si la brújula sirve para orientarse, el termómetro sirve para medir la temperatura." },
  { id:"v_ese_9", domain:"verbal", topic:"esencia", dif:2,
    stem:"Una característica esencial de un puente es unir dos puntos separados por un obstáculo.",
    q:"Según el texto, ¿qué es lo propio de un puente?",
    opts:["Su color","Unir dos puntos separados","Su antigüedad","Su material"],
    ans:1, exp:"Lo característico de un puente es su función: unir dos puntos." },

  /* -- Verbal: perspectiva -- */
  { id:"v_per_9", domain:"verbal", topic:"perspectiva", dif:3,
    stem:"El mismo silencio que relaja a quien busca paz incomoda a quien teme a la soledad.",
    q:"¿Qué muestra el texto?",
    opts:["El silencio es siempre malo","Un mismo hecho se vive distinto según la persona","Nadie disfruta el silencio","El silencio no existe"],
    ans:1, exp:"El silencio se valora distinto según quién lo viva: es cuestión de perspectiva." },
  { id:"v_per_10", domain:"verbal", topic:"perspectiva", dif:2,
    stem:"Para el turista la nieve es una novedad encantadora; para el habitante del lugar, una molestia diaria.",
    q:"¿Qué idea expresa el texto?",
    opts:["La nieve es peligrosa","La misma nieve se valora distinto según quién la viva","La nieve no cae nunca","El turista exagera"],
    ans:1, exp:"Un mismo hecho (la nieve) se percibe distinto según la persona." },

  /* -- Verbal: idea implícita -- */
  { id:"v_imp_12", domain:"verbal", topic:"idea_implicita", dif:2,
    stem:"Cada vez que riega sus plantas con esa agua, las hojas se ponen amarillas.",
    q:"¿Cuál es una idea implícita?",
    opts:["Las plantas no necesitan agua","Algo en esa agua les hace daño","El sol las quema","Las plantas están sanas"],
    ans:1, exp:"Si se amarillan al regarlas con esa agua, se infiere que algo en el agua les hace daño." },
  { id:"v_imp_13", domain:"verbal", topic:"idea_implicita", dif:3, stem:"El restaurante abrió hace apenas un mes, pero ya hay que reservar con una semana de anticipación y la fila para entrar sin reserva da vuelta a la esquina.", q:"¿Qué se puede deducir del texto?", opts:["El restaurante va a cerrar pronto","El restaurante se volvió muy popular","La comida es de mala calidad","Nadie quiere ir a ese lugar"], ans:1, exp:"Reservas con una semana y filas largas en tan poco tiempo implican que se volvió muy popular." },
  { id:"v_imp_14", domain:"verbal", topic:"idea_implicita", dif:3, stem:"Aunque nunca menciona sus logros, su oficina está repleta de diplomas y reconocimientos acumulados durante veinte años de trabajo.", q:"¿Qué se puede deducir del texto?", opts:["No ha logrado nada importante","Tiene una trayectoria destacada, aunque no la presuma","Compró los diplomas","Acaba de empezar a trabajar"], ans:1, exp:"Veinte años de diplomas indican una trayectoria destacada; que no los mencione sugiere que es modesto." },

  /* -- Verbal: idea principal -- */
  { id:"v_pri_10", domain:"verbal", topic:"idea_principal", dif:2,
    stem:"El agua potable es escasa: hay que tratarla, distribuirla con cuidado y no desperdiciarla.",
    q:"¿Cuál es la idea principal?",
    opts:["El cuidado del agua potable","El color del agua","El precio del agua","La lluvia"],
    ans:0, exp:"Todo el texto gira en torno a cuidar el agua potable." },
  { id:"v_pri_11", domain:"verbal", topic:"idea_principal", dif:2,
    stem:"El ejercicio, una dieta balanceada y el buen descanso forman la base de una vida sana.",
    q:"¿Cuál es la idea principal?",
    opts:["Los pilares de una vida sana","Los tipos de ejercicio","Las dietas de moda","Las horas de sueño"],
    ans:0, exp:"Los tres elementos apuntan al tema: los pilares de una vida sana." },
  { id:"v_pri_12", domain:"verbal", topic:"idea_principal", dif:3,
    stem:"El volcán Arenal atrae turistas, genera empleo en la zona y es un símbolo natural de Costa Rica.",
    q:"¿Cuál es el tema central?",
    opts:["La importancia del volcán Arenal","La altura del volcán","El clima de la zona","Los hoteles del país"],
    ans:0, exp:"Los tres rasgos apuntan a la importancia del volcán Arenal." },

  /* -- Verbal: paráfrasis -- */
  { id:"v_par_9", domain:"verbal", topic:"parafrasis", dif:3, stem:"Responder a cada provocación solo le da más fuerza; a veces el mejor gesto es el silencio.", q:"¿Cuál opción expresa la misma idea?", opts:["Hay que responder a toda provocación","A veces callar ante la provocación es lo más sabio","El silencio siempre es cobardía","Provocar a los demás es positivo"], ans:1, exp:"El texto sugiere que reaccionar alimenta la provocación; por eso, a veces callar es lo más sensato." },
  { id:"v_par_10", domain:"verbal", topic:"parafrasis", dif:3, stem:"Los logros importantes rara vez son fruto del talento solo; casi siempre exigen constancia.", q:"¿Cuál opción conserva el sentido?", opts:["El talento es lo único que importa","La constancia es clave para los grandes logros","Sin talento no se logra nada","El esfuerzo no sirve de nada"], ans:1, exp:"El texto resta protagonismo al talento solo y destaca la constancia como clave de los logros." },
  { id:"v_par_11", domain:"verbal", topic:"parafrasis", dif:3,
    stem:"Roma no se construyó en un día.",
    q:"¿Cuál opción expresa la misma idea?",
    opts:["Todo se hace al instante","Las cosas grandes toman tiempo","Roma no existe","Construir es fácil"],
    ans:1, exp:"El refrán dice que los logros grandes requieren tiempo." },

  /* -- Verbal: proposiciones -- */
  { id:"v_pro_9", domain:"verbal", topic:"proposiciones", dif:3,
    stem:"Todos los que aprobaron entregaron la tarea. Analice las proposiciones:\nI. Quien no entregó la tarea no aprobó.\nII. Hay quienes aprobaron sin entregar la tarea.\nIII. Entregar la tarea fue necesario para aprobar.",
    q:"¿Cuáles proposiciones se deducen del texto?",
    opts:["Solo la II","La I y la III","Solo la I","Las tres"],
    ans:1, exp:"'Todos los aprobados entregaron' equivale a que entregar era necesario (III) y a que quien no entregó no aprobó (I). II lo contradice." },
  { id:"v_pro_10", domain:"verbal", topic:"proposiciones", dif:2,
    stem:"Cuando hay sol, la ropa se seca. Analice las proposiciones:\nI. El sol seca la ropa.\nII. La ropa se seca siempre, aun sin sol.\nIII. El sol moja la ropa.",
    q:"¿Cuál proposición se deduce del texto?",
    opts:["Solo la I","Solo la II","La II y la III","Solo la III"],
    ans:0, exp:"El texto dice que el sol seca la ropa: I. II y III no se siguen." },

  /* -- Mate: aritmética -- */
  { id:"m_ari_11", domain:"math", topic:"aritmetica", dif:2, stem:"Considere la operación: 7 × 8 − 6 × 5 + 12 ÷ 4.", q:"¿Cuál es el resultado?", opts:["29","23","56","20"], ans:0, exp:"Primero × y ÷: 7×8=56, 6×5=30, 12÷4=3. Luego 56 − 30 + 3 = 29." },
  { id:"m_ari_12", domain:"math", topic:"aritmetica", dif:2, stem:"En una soda, un combo cuesta ₡3 200. Una familia pide 4 combos y, además, deja ₡1 000 de propina.", q:"¿Cuánto paga en total?", opts:["₡13 800","₡12 800","₡14 000","₡13 200"], ans:0, exp:"4 × 3 200 = 12 800; más la propina: 12 800 + 1 000 = 13 800." },
  { id:"m_ari_13", domain:"math", topic:"aritmetica", dif:2,
    stem:"Un tanque está a 3/4 de su capacidad y se usa 1/2 del total.",
    q:"¿Qué fracción del tanque queda?",
    opts:["1/4","1/2","1/3","3/8"],
    ans:0, exp:"3/4 − 1/2 = 3/4 − 2/4 = 1/4." },

  /* -- Mate: MCM y MCD -- */
  { id:"m_mcm_8", domain:"math", topic:"mcm_mcd", dif:2,
    stem:"Dos campanas suenan: una cada 6 minutos y otra cada 9 minutos. Ahora sonaron juntas.",
    q:"¿En cuántos minutos vuelven a sonar juntas?",
    opts:["12","18","54","15"],
    ans:1, exp:"Coinciden en el MCM(6, 9). 6 = 2·3 y 9 = 3², así que MCM = 2·3² = 18." },

  /* -- Mate: relaciones de orden -- */
  { id:"m_rel_8", domain:"math", topic:"relaciones_orden", dif:3, stem:"Considere los valores 0,7 ; 3/4 ; 0,72.", q:"Al ordenarlos de menor a mayor, ¿cuál queda en el medio?", opts:["0,7","0,72","3/4","Los tres son iguales"], ans:1, exp:"En decimales: 0,70 ; 0,75 ; 0,72. Ordenados: 0,70 < 0,72 < 0,75. En el medio queda 0,72." },
  { id:"m_rel_9", domain:"math", topic:"relaciones_orden", dif:3, stem:"Se sabe que x es un número entero y que −5 < x < −2.", q:"¿Cuál de los siguientes valores SÍ puede ser x?", opts:["−5","−4","−2","−1"], ans:1, exp:"x está estrictamente entre −5 y −2, así que solo puede ser −4 o −3. De las opciones, la válida es −4 (−5 y −2 quedan excluidos y −1 es mayor que −2)." },

  /* -- Mate: conteo -- */
  { id:"m_cnt_8", domain:"math", topic:"conteo", dif:3, stem:"Para ir de A a B hay 3 caminos, de B a C hay 4 y de C a D hay 2.", q:"¿De cuántas formas se puede ir de A a D pasando por B y C?", opts:["24","9","18","14"], ans:0, exp:"Se multiplican las opciones de cada tramo: 3 × 4 × 2 = 24." },
  { id:"m_cnt_9", domain:"math", topic:"conteo", dif:3,
    stem:"En una caja, a oscuras, hay 4 guantes izquierdos y 4 derechos sueltos.",
    q:"¿Cuántos guantes hay que sacar como mínimo para asegurar una pareja útil (uno izquierdo y uno derecho)?",
    opts:["2","5","4","8"],
    ans:1, exp:"En el peor caso salen los 4 de una misma mano; el siguiente es de la otra. 4 + 1 = 5." },

  /* -- Mate: permutaciones -- */
  { id:"m_per_7", domain:"math", topic:"permutaciones", dif:3,
    stem:"En un concurso con 5 participantes se reparten el 1.°, 2.° y 3.° lugar.",
    q:"¿De cuántas formas distintas pueden quedar esos tres puestos?",
    opts:["15","60","125","10"],
    ans:1, exp:"Se eligen y ordenan 3 de 5: 5 × 4 × 3 = 60." },

  /* -- Mate: geometría -- */
  { id:"m_geo_9", domain:"math", topic:"geometria", dif:2,
    stem:"Un rectángulo mide 12 cm de largo y 7 cm de ancho.",
    q:"¿Cuál es su perímetro?",
    opts:["38 cm","84 cm","19 cm","40 cm"],
    ans:0, exp:"Perímetro = 2·(12 + 7) = 2·19 = 38 cm." },
  { id:"m_geo_10", domain:"math", topic:"geometria", dif:3, stem:"Un rectángulo tiene 48 cm de perímetro y su largo es el doble de su ancho.", q:"¿Cuánto mide el ancho?", opts:["8 cm","16 cm","12 cm","6 cm"], ans:0, exp:"Perímetro: 2·(largo+ancho)=48 → largo+ancho=24. Si largo=2·ancho: 3·ancho=24 → ancho=8 cm." },

  /* -- Mate: sucesiones -- */
  { id:"m_suc_10", domain:"math", topic:"sucesiones", dif:2,
    stem:"Observe la sucesión: 100, 50, 25, … (cada término es la mitad del anterior).",
    q:"¿Cuál es el siguiente término?",
    opts:["10","12,5","20","15"],
    ans:1, exp:"Cada término se divide entre 2: 25 ÷ 2 = 12,5." },
  { id:"m_suc_11", domain:"math", topic:"sucesiones", dif:3, stem:"Observe la sucesión: 1, 8, 27, 64, …", q:"¿Cuál es el siguiente término?", opts:["125","100","81","96"], ans:0, exp:"Son los cubos: 1³, 2³, 3³, 4³… El siguiente es 5³ = 125." },

  /* -- Mate: datos y probabilidad -- */
  { id:"m_dat_9", domain:"math", topic:"datos_probabilidad", dif:2,
    stem:"En una bolsa hay 8 caramelos: 3 de menta y 5 de fresa. Se saca uno al azar.",
    q:"¿Cuál es la probabilidad de que sea de menta?",
    opts:["3/8","5/8","3/5","1/3"],
    ans:0, exp:"Favorables 3 sobre 8 totales: 3/8." },
  { id:"m_dat_10", domain:"math", topic:"datos_probabilidad", dif:3, stem:"El promedio de tres números es 20. Dos de ellos son 15 y 22.", q:"¿Cuál es el tercer número?", opts:["23","20","18","25"], ans:0, exp:"La suma de los tres es 3 × 20 = 60. Como 15 + 22 = 37, el tercero es 60 − 37 = 23." },

  /* -- Mate: notación algebraica -- */
  { id:"m_not_7", domain:"math", topic:"algebra_notacion", dif:2,
    stem:"Considere la frase: 'un número disminuido en 9, todo multiplicado por 2'.",
    q:"¿Cuál expresión la representa?",
    opts:["2(x − 9)","2x − 9","x − 18","2x + 9"],
    ans:0, exp:"Primero la resta (x − 9) y luego se multiplica todo por 2: 2(x − 9)." },

  /* -- Mate: relaciones algebraicas -- */
  { id:"m_alr_7", domain:"math", topic:"algebra_relaciones", dif:3, stem:"Se sabe que 4x + 3 = 2x + 19.", q:"¿Cuál es el valor de x?", opts:["8","11","16","4"], ans:0, exp:"Pasamos las x a un lado: 4x − 2x = 19 − 3 → 2x = 16 → x = 8." },

  /* -- Mate: unidades de medida -- */
  { id:"m_uni_8", domain:"math", topic:"unidades_medida", dif:2,
    stem:"Un recipiente tiene 2 litros de agua y se sirve en vasos de 250 ml.",
    q:"¿Cuántos vasos se llenan?",
    opts:["4","8","5","10"],
    ans:1, exp:"2 L = 2 000 ml. 2 000 ÷ 250 = 8 vasos." },

  /* -- Mate: razón y proporción -- */
  { id:"m_raz_8", domain:"math", topic:"razon_proporcion", dif:2, stem:"Cuatro cuadernos iguales cuestan ₡5 000.", q:"¿Cuánto cuestan 10 cuadernos al mismo precio?", opts:["₡12 500","₡10 000","₡15 000","₡11 250"], ans:0, exp:"Cada cuaderno: 5 000 ÷ 4 = 1 250. Diez cuadernos: 1 250 × 10 = 12 500." },
  { id:"m_raz_9", domain:"math", topic:"razon_proporcion", dif:3,
    stem:"Un grifo llena un tanque en 8 horas.",
    q:"¿Cuánto tardan 2 grifos iguales llenándolo juntos?",
    opts:["4 horas","16 horas","6 horas","10 horas"],
    ans:0, exp:"Proporción inversa: con el doble de grifos, la mitad del tiempo. 8 ÷ 2 = 4 horas." },

  /* ===================== LOTE 3 — 50 preguntas nuevas ===================== */

  /* -- Verbal: finalidad -- */
  { id:"v_fin_10", domain:"verbal", topic:"finalidad", dif:2, stem:"Para reducir la deserción, el colegio abrió un programa de tutorías por las tardes.", q:"¿Cuál es la finalidad del programa?", opts:["Llenar las tardes","Reducir la deserción","Contratar tutores","Alargar el horario"], ans:1, exp:"Se abrió 'para reducir la deserción': esa es la finalidad." },
  { id:"v_fin_11", domain:"verbal", topic:"finalidad", dif:2, stem:"Guarda capturas de cada conversación importante para tener respaldo si surge un malentendido.", q:"¿Cuál es la finalidad de guardar las capturas?", opts:["Llenar su teléfono","Tener respaldo ante un malentendido","Presumir sus chats","Borrar mensajes"], ans:1, exp:"El para qué es contar con respaldo o evidencia." },

  /* -- Verbal: comportamiento -- */
  { id:"v_com_10", domain:"verbal", topic:"comportamiento", dif:2, stem:"Cuando el proyecto falla, en vez de buscar culpables, el líder reúne al equipo y plantea soluciones.", q:"¿Cómo se comporta el líder?", opts:["Culpa a los demás","Actúa de forma constructiva","Abandona el proyecto","Se queda callado"], ans:1, exp:"Buscar soluciones en lugar de culpables es actuar de forma constructiva." },
  { id:"v_com_11", domain:"verbal", topic:"comportamiento", dif:2, stem:"Cada vez que algo le sale mal, Lucía respira, lo analiza y vuelve a intentarlo.", q:"¿Cómo enfrenta Lucía los errores?", opts:["Se rinde enseguida","Con calma y persistencia","Culpando a la suerte","Enojándose con todos"], ans:1, exp:"Respirar, analizar y reintentar es enfrentar los errores con calma y persistencia." },

  /* -- Verbal: causa y consecuencia -- */
  { id:"v_cau_13", domain:"verbal", topic:"causa_consecuencia", dif:2, stem:"Como dejó el helado fuera del congelador, se derritió.", q:"¿Cuál fue la causa de que se derritiera?", opts:["El frío","Dejarlo fuera del congelador","Su sabor","El envase"], ans:1, exp:"'Como' introduce la causa: dejarlo fuera del congelador." },
  { id:"v_cau_14", domain:"verbal", topic:"causa_consecuencia", dif:2, stem:"El aumento de turistas trajo consigo más empleos en la zona costera.", q:"¿Cuál es la consecuencia del aumento de turistas?", opts:["Menos empleos","Más empleos en la zona","Menos turistas","El cierre de hoteles"], ans:1, exp:"El efecto del aumento de turistas fue generar más empleos." },
  { id:"v_cau_15", domain:"verbal", topic:"causa_consecuencia", dif:3, stem:"La sequía prolongada secó los pastos; por eso, el ganado quedó sin alimento.", q:"¿Cuál es la causa de que el ganado quedara sin alimento?", opts:["El exceso de lluvia","La sequía que secó los pastos","La falta de ganado","El frío"], ans:1, exp:"La cadena es: sequía → pastos secos → ganado sin alimento. La causa de fondo es la sequía." },

  /* -- Verbal: simple y complejo -- */
  { id:"v_sim_10", domain:"verbal", topic:"simple_complejo", dif:2, stem:"Sumar dos cifras es directo; balancear el presupuesto de un país implica miles de variables y decisiones.", q:"¿Cómo es el presupuesto frente a la suma?", opts:["Más simple","Más complejo","Más antiguo","Más barato"], ans:1, exp:"Por su gran cantidad de variables, el presupuesto es más complejo." },
  { id:"v_sim_11", domain:"verbal", topic:"simple_complejo", dif:2, stem:"Un triciclo se arma con unas pocas piezas que encajan a presión. Un automóvil moderno integra miles de componentes mecánicos, eléctricos y electrónicos que deben funcionar en conjunto.", q:"¿Qué caracteriza al automóvil frente al triciclo?", opts:["Su sencillez","Su complejidad","Su bajo precio","Su antigüedad"], ans:1, exp:"Miles de componentes que deben funcionar juntos hacen del automóvil algo complejo." },

  /* -- Verbal: conceptualización -- */
  { id:"v_con_12", domain:"verbal", topic:"conceptualizacion", dif:2, stem:"Reconoció frente a todos que se había equivocado y pidió disculpas.", q:"¿Qué palabra describe su actitud?", opts:["Humildad","Soberbia","Indiferencia","Astucia"], ans:0, exp:"Admitir el error y disculparse refleja humildad." },
  { id:"v_con_13", domain:"verbal", topic:"conceptualizacion", dif:2, stem:"Dedica horas a cuidar animales abandonados sin recibir pago alguno.", q:"¿Qué palabra resume su actitud?", opts:["Altruismo","Egoísmo","Pereza","Ambición"], ans:0, exp:"Ayudar sin esperar nada a cambio es altruismo." },

  /* -- Verbal: orden y desorden -- */
  { id:"v_ord_10", domain:"verbal", topic:"orden_desorden", dif:2, stem:"El cuarto pasó de tener ropa por todos lados a quedar con todo guardado en cajones rotulados.", q:"¿Qué cambio ocurrió?", opts:["Del orden al desorden","Del desorden al orden","De limpio a sucio","De grande a chico"], ans:1, exp:"De ropa regada (desorden) a todo guardado y rotulado (orden)." },
  { id:"v_ord_11", domain:"verbal", topic:"orden_desorden", dif:2, stem:"La bodega solía ser un caos: cajas sin marcar apiladas hasta el techo y productos vencidos mezclados con los nuevos. Hoy todo está clasificado por tipo, con etiquetas y fechas a la vista.", q:"¿Qué cambio experimentó la bodega?", opts:["Del orden al desorden","Del desorden al orden","De grande a pequeña","De llena a vacía"], ans:1, exp:"De cajas sin marcar y productos mezclados (desorden) a todo clasificado y etiquetado (orden)." },

  /* -- Verbal: orden temporal -- */
  { id:"v_tmp_10", domain:"verbal", topic:"orden_temporal", dif:2, stem:"Se siembra la semilla, se riega cada día, brota la planta y, al final, se cosecha.", q:"¿Qué ocurre justo antes de cosechar?", opts:["Sembrar la semilla","Que brote la planta","Regar la semilla","Comprar semillas"], ans:1, exp:"La secuencia es sembrar → regar → brotar → cosechar. Antes de cosechar, brota la planta." },
  { id:"v_tmp_11", domain:"verbal", topic:"orden_temporal", dif:2, stem:"Primero se reúnen los materiales, luego se arma la estructura y, por último, se pinta.", q:"¿Qué se hace justo después de reunir los materiales?", opts:["Pintar","Armar la estructura","Reunir más materiales","Limpiar todo"], ans:1, exp:"Después de reunir los materiales se arma la estructura." },

  /* -- Verbal: esencia -- */
  { id:"v_ese_10", domain:"verbal", topic:"esencia", dif:3, stem:"Lo propio de un mapa es representar un territorio a escala.", q:"Por la misma lógica, ¿qué es lo propio de un reloj?", opts:["Representar un territorio","Marcar el paso del tiempo","Medir el peso","Indicar la temperatura"], ans:1, exp:"Si el mapa representa un territorio, lo propio del reloj es marcar el tiempo." },
  { id:"v_ese_11", domain:"verbal", topic:"esencia", dif:2, stem:"Una característica esencial de una semilla es contener lo necesario para dar origen a una planta.", q:"Según el texto, ¿qué es lo propio de una semilla?", opts:["Su color","Poder dar origen a una planta","Su tamaño","Su precio"], ans:1, exp:"Lo característico de la semilla es su capacidad de generar una planta." },

  /* -- Verbal: perspectiva -- */
  { id:"v_per_11", domain:"verbal", topic:"perspectiva", dif:2, stem:"El mismo precio que a uno le parece caro, a otro con más ingresos le resulta accesible.", q:"¿Qué idea expresa el texto?", opts:["El precio es siempre alto","Un mismo precio se valora distinto según la persona","Nadie puede comprar","El precio no importa"], ans:1, exp:"La valoración del precio depende de quién lo mire: es cuestión de perspectiva." },
  { id:"v_per_12", domain:"verbal", topic:"perspectiva", dif:3, stem:"La misma noticia alegra a los seguidores de un equipo y entristece a los del rival.", q:"¿Qué muestra el texto?", opts:["La noticia es falsa","Un hecho se vive distinto según el punto de vista","El deporte no importa","Todos sienten lo mismo"], ans:1, exp:"Un mismo hecho provoca reacciones opuestas según el punto de vista." },

  /* -- Verbal: idea implícita -- */
  { id:"v_imp_15", domain:"verbal", topic:"idea_implicita", dif:2, stem:"Llegó con el paraguas chorreando y los zapatos empapados.", q:"¿Cuál es una idea implícita?", opts:["Hacía calor","Estaba lloviendo","Venía de la playa","Era de noche"], ans:1, exp:"Paraguas chorreando y zapatos empapados implican que estaba lloviendo." },
  { id:"v_imp_16", domain:"verbal", topic:"idea_implicita", dif:2, stem:"Desde que cambió de entrenador, el equipo no ha vuelto a perder.", q:"¿Cuál es una idea implícita?", opts:["El equipo siempre pierde","El cambio de entrenador mejoró al equipo","Ya no juegan","El entrenador anterior era mejor"], ans:1, exp:"Que dejaran de perder tras el cambio sugiere que el nuevo entrenador mejoró al equipo." },
  { id:"v_imp_17", domain:"verbal", topic:"idea_implicita", dif:3, stem:"Pidió la cuenta apenas terminó de comer y ni siquiera esperó el postre.", q:"¿Cuál es una idea implícita?", opts:["Quería comer más","Tenía prisa por irse","Odiaba el lugar","No probó la comida"], ans:1, exp:"Pedir la cuenta de inmediato y no esperar el postre sugiere prisa por irse." },

  /* -- Verbal: idea principal -- */
  { id:"v_pri_13", domain:"verbal", topic:"idea_principal", dif:2, stem:"Reciclar, usar transporte público y ahorrar energía son acciones que ayudan al planeta.", q:"¿Cuál es la idea principal?", opts:["Acciones para cuidar el planeta","El precio del transporte","La historia del reciclaje","El consumo de energía"], ans:0, exp:"Los tres ejemplos apuntan al tema: acciones para cuidar el planeta." },
  { id:"v_pri_14", domain:"verbal", topic:"idea_principal", dif:2, stem:"El sueño, la alimentación y el manejo del estrés influyen en la salud mental.", q:"¿Cuál es la idea principal?", opts:["Factores que influyen en la salud mental","Las horas de sueño","Los tipos de comida","El estrés laboral"], ans:0, exp:"Los tres elementos apuntan a los factores que influyen en la salud mental." },
  { id:"v_pri_15", domain:"verbal", topic:"idea_principal", dif:3, stem:"La marimba acompaña fiestas, transmite tradición y representa la identidad de Centroamérica.", q:"¿Cuál es el tema central?", opts:["La importancia cultural de la marimba","El precio de la marimba","Cómo se fabrica una marimba","Las fiestas en general"], ans:0, exp:"Los tres rasgos apuntan a la importancia cultural de la marimba." },

  /* -- Verbal: paráfrasis -- */
  { id:"v_par_12", domain:"verbal", topic:"parafrasis", dif:3, stem:"Mantener la calma en los momentos difíciles suele abrir mejores soluciones que dejarse llevar por el enojo.", q:"¿Cuál opción dice lo mismo?", opts:["El enojo resuelve los problemas","La calma ayuda a encontrar mejores soluciones","Los momentos difíciles no tienen salida","Conviene no pensar en los problemas"], ans:1, exp:"El texto contrapone calma y enojo: la calma favorece mejores soluciones." },
  { id:"v_par_13", domain:"verbal", topic:"parafrasis", dif:2, stem:"Posponer una y otra vez las tareas no las elimina: solo las acumula y las vuelve más pesadas.", q:"¿Cuál opción reproduce la idea?", opts:["Posponer hace desaparecer las tareas","Aplazar las tareas solo las acumula","Las tareas se resuelven solas","Mañana es mejor momento que hoy"], ans:1, exp:"El texto dice que posponer no quita las tareas, las junta y agrava: aplazar solo las acumula." },
  { id:"v_par_14", domain:"verbal", topic:"parafrasis", dif:3, stem:"Camarón que se duerme, se lo lleva la corriente.", q:"¿Cuál opción dice lo mismo con otras palabras?", opts:["Dormir es muy saludable","Quien se descuida pierde oportunidades","Los camarones nadan rápido","Hay que dormir más"], ans:1, exp:"El refrán advierte que descuidarse hace perder oportunidades." },

  /* -- Verbal: proposiciones -- */
  { id:"v_pro_11", domain:"verbal", topic:"proposiciones", dif:3, stem:"Toda sustancia ácida cambia el color del papel tornasol. Analice las proposiciones:\nI. Si una sustancia no cambia el color del papel, no es ácida.\nII. Ninguna sustancia ácida afecta el papel tornasol.\nIII. El vinagre, que es ácido, cambia el color del papel.", q:"¿Cuáles proposiciones se deducen del texto?", opts:["Solo la II","La I y la III","Solo la I","Las tres"], ans:1, exp:"I es la contrapositiva (válida) y III es un caso particular. II contradice el texto." },
  { id:"v_pro_12", domain:"verbal", topic:"proposiciones", dif:2, stem:"Si un animal es mamífero, respira con pulmones. Analice las proposiciones:\nI. La ballena, que es mamífero, respira con pulmones.\nII. Los mamíferos no tienen pulmones.\nIII. Ningún mamífero respira.", q:"¿Cuál proposición se deduce del texto?", opts:["Solo la I","Solo la II","La II y la III","Las tres"], ans:0, exp:"Si todo mamífero respira con pulmones, la ballena (mamífero) también: I. II y III contradicen el texto." },

  /* -- Mate: aritmética -- */
  { id:"m_ari_14", domain:"math", topic:"aritmetica", dif:2, stem:"Considere la operación: 100 − (45 + 15) ÷ 6 × 2.", q:"¿Cuál es el resultado?", opts:["80","90","70","60"], ans:0, exp:"Paréntesis: 45 + 15 = 60. Luego 60 ÷ 6 = 10 y 10 × 2 = 20. Por último 100 − 20 = 80." },
  { id:"m_ari_15", domain:"math", topic:"aritmetica", dif:2, stem:"Un paquete trae 24 galletas. En una fiesta, 6 niños se reparten en partes iguales 3 paquetes completos.", q:"¿Cuántas galletas recibe cada niño?", opts:["12","8","4","18"], ans:0, exp:"3 paquetes son 3 × 24 = 72 galletas. 72 ÷ 6 = 12 por niño." },
  { id:"m_ari_16", domain:"math", topic:"aritmetica", dif:2, stem:"Considere la operación con decimales: 2,5 + 1,75 − 0,25.", q:"¿Cuál es el resultado?", opts:["4","4,5","3,5","4,25"], ans:0, exp:"2,5 + 1,75 = 4,25; luego 4,25 − 0,25 = 4." },

  /* -- Mate: MCM y MCD -- */
  { id:"m_mcm_9", domain:"math", topic:"mcm_mcd", dif:3, stem:"Se quieren cortar dos listones de 24 cm y 30 cm en trozos iguales lo más largos posible, sin desperdicio.", q:"¿Cuánto mide cada trozo?", opts:["6 cm","12 cm","3 cm","2 cm"], ans:0, exp:"El trozo más largo que divide a ambos es el MCD(24, 30) = 6 cm." },

  /* -- Mate: relaciones de orden -- */
  { id:"m_rel_10", domain:"math", topic:"relaciones_orden", dif:3, stem:"Considere los valores 3/5 ; 0,58 ; 2/3 ; 0,6.", q:"¿Cuál es el mayor?", opts:["3/5","0,58","2/3","0,6"], ans:2, exp:"En decimales: 0,60 ; 0,58 ; 0,666… ; 0,60. El mayor es 2/3 ≈ 0,67." },
  { id:"m_rel_11", domain:"math", topic:"relaciones_orden", dif:3, stem:"Se sabe que −x > 0.", q:"¿Qué se puede concluir del número x?", opts:["x es positivo","x es negativo","x es igual a cero","No se puede saber"], ans:1, exp:"Si el opuesto de x es positivo, entonces x es negativo (por ejemplo, si x=−3, −x=3>0)." },

  /* -- Mate: conteo -- */
  { id:"m_cnt_10", domain:"math", topic:"conteo", dif:2, stem:"Un helado se arma eligiendo 1 sabor (de 5) y 1 topping (de 3).", q:"¿Cuántas combinaciones distintas se pueden armar?", opts:["8","15","5","10"], ans:1, exp:"Principio multiplicativo: 5 × 3 = 15." },
  { id:"m_cnt_11", domain:"math", topic:"conteo", dif:3, stem:"En una urna hay 6 fichas numeradas del 1 al 6 (tres pares y tres impares).", q:"¿Cuántas fichas se deben sacar como mínimo para asegurar que dos de ellas sumen un número par?", opts:["2","3","4","6"], ans:1, exp:"Dos números suman par si son del mismo tipo (par+par o impar+impar). Hay 2 tipos: con 3 fichas, por fuerza dos comparten tipo y su suma es par." },

  /* -- Mate: permutaciones -- */
  { id:"m_per_8", domain:"math", topic:"permutaciones", dif:2, stem:"Se quieren ordenar en fila 4 cuadros distintos en una pared.", q:"¿De cuántas maneras se pueden ordenar?", opts:["12","24","16","8"], ans:1, exp:"Ordenar 4 elementos distintos: 4! = 24." },

  /* -- Mate: geometría -- */
  { id:"m_geo_11", domain:"math", topic:"geometria", dif:3, stem:"Un triángulo tiene un área de 24 cm² y una altura de 6 cm.", q:"¿Cuánto mide su base?", opts:["8 cm","4 cm","12 cm","6 cm"], ans:0, exp:"Área = base × altura ÷ 2 → 24 = base × 6 ÷ 2 = 3·base → base = 8 cm." },
  { id:"m_geo_12", domain:"math", topic:"geometria", dif:3, stem:"Una pizza circular tiene radio de 10 cm. Use π ≈ 3,14.", q:"¿Cuál es su área aproximada?", opts:["314 cm²","31,4 cm²","62,8 cm²","100 cm²"], ans:0, exp:"Área = π·r² = 3,14 × 10² = 3,14 × 100 = 314 cm²." },

  /* -- Mate: sucesiones -- */
  { id:"m_suc_12", domain:"math", topic:"sucesiones", dif:3, stem:"Observe la sucesión: 2, 6, 12, 20, 30, …", q:"¿Cuál es el siguiente término?", opts:["42","40","38","44"], ans:0, exp:"Las diferencias crecen: +4, +6, +8, +10. La siguiente es +12: 30 + 12 = 42. (También n·(n+1): 6·7 = 42.)" },
  { id:"m_suc_13", domain:"math", topic:"sucesiones", dif:2, stem:"Observe la sucesión: 1, 1, 2, 3, 5, 8, 13, …", q:"¿Cuál es el siguiente término?", opts:["21","18","16","20"], ans:0, exp:"Cada término es la suma de los dos anteriores (Fibonacci): 8 + 13 = 21." },

  /* -- Mate: datos y probabilidad -- */
  { id:"m_dat_11", domain:"math", topic:"datos_probabilidad", dif:2, stem:"En una rifa hay 200 números y una persona compró 8 de ellos.", q:"¿Cuál es la probabilidad de que gane (que salga uno de sus números)?", opts:["1/25","8/100","1/8","1/200"], ans:0, exp:"Tiene 8 favorables de 200 posibles: 8/200, que simplificado es 1/25." },
  { id:"m_dat_12", domain:"math", topic:"datos_probabilidad", dif:3, stem:"El promedio de 5 notas es 8. Cuatro de ellas son 7, 9, 8 y 6.", q:"¿Cuál es la quinta nota?", opts:["8","9","10","12"], ans:2, exp:"La suma total es 5·8 = 40. Las cuatro dadas suman 30, así que la quinta es 40 − 30 = 10." },

  /* -- Mate: notación algebraica -- */
  { id:"m_not_8", domain:"math", topic:"algebra_notacion", dif:2, stem:"Considere la frase: 'el triple de un número, aumentado en 6'.", q:"¿Cuál expresión la representa?", opts:["3x + 6","3(x + 6)","x/3 + 6","6 − 3x"], ans:0, exp:"El triple del número es 3x; aumentado en 6 es 3x + 6." },

  /* -- Mate: relaciones algebraicas -- */
  { id:"m_alr_8", domain:"math", topic:"algebra_relaciones", dif:3, stem:"La mitad de un número, aumentada en 7, es igual a 16.", q:"¿Cuál es el número?", opts:["18","9","23","32"], ans:0, exp:"x/2 + 7 = 16 → x/2 = 9 → x = 18." },

  /* -- Mate: unidades de medida -- */
  { id:"m_uni_9", domain:"math", topic:"unidades_medida", dif:3, stem:"Un ciclista avanza a 20 km/h de forma constante.", q:"¿Cuánto tarda en recorrer 5 km?", opts:["15 min","20 min","25 min","10 min"], ans:0, exp:"Tiempo = distancia ÷ velocidad = 5 ÷ 20 = 1/4 de hora = 15 minutos." },

  /* -- Mate: razón y proporción -- */
  { id:"m_raz_10", domain:"math", topic:"razon_proporcion", dif:3, stem:"Con 5 litros de pintura se cubren 60 m² de pared.", q:"¿Cuántos litros se necesitan para cubrir 84 m²?", opts:["7 L","6 L","8 L","9 L"], ans:0, exp:"Rendimiento: 60 ÷ 5 = 12 m² por litro. Para 84 m²: 84 ÷ 12 = 7 litros." },
  { id:"m_raz_11", domain:"math", topic:"razon_proporcion", dif:3, stem:"Cinco máquinas iguales hacen un trabajo en 6 horas.", q:"¿Cuánto tardan 3 máquinas en el mismo trabajo?", opts:["10 horas","3,6 horas","8 horas","18 horas"], ans:0, exp:"Proporción inversa: 5·6 = 30 máquina-horas. Con 3 máquinas: 30 ÷ 3 = 10 horas." },

  /* ===================== LOTE 4 — nivel examen (más difíciles) ===================== */
  { id:"v_fin_12", domain:"verbal", topic:"finalidad", dif:3, stem:"Una ley obliga a etiquetar el contenido calórico de los alimentos no para prohibir su consumo, sino para que cada persona decida con información.", q:"¿Cuál es la finalidad de la ley, según el texto?", opts:["Prohibir los alimentos calóricos","Que las personas decidan con información","Subir el precio de los alimentos","Cerrar los restaurantes"], ans:1, exp:"El texto contrapone: no para prohibir, sino para que cada persona decida con información. Esa es la finalidad." },
  { id:"v_com_12", domain:"verbal", topic:"comportamiento", dif:3, stem:"Aunque el mundo insista en apurarme, yo elijo detenerme a mirar el árbol, la nube, el instante que nadie más nota.", q:"¿Qué actitud refleja el autor?", opts:["Apresurada","Contemplativa","Indiferente","Agresiva"], ans:1, exp:"Detenerse a contemplar lo que otros no notan refleja una actitud contemplativa." },
  { id:"v_cau_16", domain:"verbal", topic:"causa_consecuencia", dif:3, stem:"La erosión del suelo no es solo consecuencia de la lluvia: ocurre porque, al talar los árboles, se elimina la red de raíces que lo sujetaba.", q:"¿Qué señala el texto como causa de fondo de la erosión?", opts:["Únicamente la lluvia","La tala, que elimina las raíces que sujetan el suelo","El exceso de árboles","El viento"], ans:1, exp:"El texto aclara que la causa de fondo no es solo la lluvia, sino la tala que quita las raíces." },
  { id:"v_con_14", domain:"verbal", topic:"conceptualizacion", dif:3, stem:"Sabía que decir la verdad le costaría el puesto, pero aun así la dijo.", q:"¿Qué palabra describe mejor su actitud?", opts:["Integridad","Conveniencia","Cobardía","Indiferencia"], ans:0, exp:"Actuar conforme a la verdad aun a costa de un perjuicio propio es integridad." },
  { id:"v_ese_12", domain:"verbal", topic:"esencia", dif:3, stem:"Así como el termómetro no cambia la fiebre sino que la mide, el examen no crea el conocimiento: solo lo evidencia.", q:"¿Qué idea sostiene el texto?", opts:["El examen crea el conocimiento","El examen solo evidencia el conocimiento, no lo genera","El termómetro cura la fiebre","Los exámenes son inútiles"], ans:1, exp:"La analogía deja claro que el examen mide o evidencia el conocimiento, igual que el termómetro mide la fiebre sin cambiarla." },
  { id:"v_per_13", domain:"verbal", topic:"perspectiva", dif:3, stem:"Para el historiador, la ruina es un documento; para el turista, una postal; para el vecino, un estorbo.", q:"¿Qué muestra el texto?", opts:["La ruina debe demolerse","El valor de algo depende de la mirada de cada quien","Los turistas no entienden la historia","Las ruinas no sirven"], ans:1, exp:"Un mismo objeto adquiere distinto valor según quién lo observe: es cuestión de perspectiva." },
  { id:"v_imp_18", domain:"verbal", topic:"idea_implicita", dif:3, stem:"El político prometió exactamente lo mismo que hace cuatro años, y la plaza, esta vez, quedó medio vacía.", q:"¿Cuál es una idea implícita?", opts:["La plaza es muy pequeña","La gente perdió interés o confianza en él","Hacía mal clima","El político renunció"], ans:1, exp:"Repetir las mismas promesas y que ahora vaya menos gente sugiere pérdida de interés o confianza." },
  { id:"v_imp_19", domain:"verbal", topic:"idea_implicita", dif:3, stem:"Ningún alumno entregó la tarea; el profesor sonrió: no tendría nada que revisar esa noche.", q:"¿Qué se deduce del texto?", opts:["El profesor estaba furioso","Al no haber entregas, no tendrá trabajo que revisar","Todos los alumnos aprobaron","El profesor renunció"], ans:1, exp:"Si nadie entregó, no hay tareas que corregir; por eso sonríe. Es la inferencia directa." },
  { id:"v_pri_16", domain:"verbal", topic:"idea_principal", dif:3, stem:"El bosque no es un conjunto de árboles aislados: bajo la tierra, sus raíces se conectan con hongos que intercambian agua y nutrientes, formando una red que sostiene a todo el ecosistema.", q:"¿Cuál es la idea principal del texto?", opts:["Los árboles compiten entre sí","El bosque funciona como una red interconectada","Los hongos son dañinos para los árboles","Las raíces no cumplen ninguna función"], ans:1, exp:"Todo el texto describe conexiones subterráneas que sostienen el ecosistema: el bosque es una red interconectada." },
  { id:"v_par_15", domain:"verbal", topic:"parafrasis", dif:3, stem:"La libertad sin responsabilidad no es libertad, sino mero capricho.", q:"¿Cuál opción expresa la misma idea?", opts:["La libertad no tiene ningún límite","Ser verdaderamente libre implica ser responsable","La responsabilidad impide la libertad","El capricho es la forma más alta de libertad"], ans:1, exp:"El texto dice que sin responsabilidad la libertad se degrada en capricho; por tanto, la libertad real conlleva responsabilidad." },
  { id:"v_pro_13", domain:"verbal", topic:"proposiciones", dif:3, stem:"El desarrollo sostenible busca satisfacer las necesidades del presente sin comprometer las de las futuras generaciones. Analice las proposiciones:\nI. Propone no agotar los recursos que necesitarán quienes vengan.\nII. Exige frenar todo progreso.\nIII. Toma en cuenta tanto el presente como el futuro.\nIV. Ignora las necesidades actuales.", q:"¿Cuáles proposiciones son ciertas según el texto?", opts:["I y III","Solo la II","II y IV","Todas"], ans:0, exp:"I y III reformulan la definición. II y IV la contradicen: ni frena el progreso ni ignora el presente." },
  { id:"v_pro_14", domain:"verbal", topic:"proposiciones", dif:3, stem:"La lectura crítica no consiste en aceptar lo que se lee, sino en cuestionarlo con argumentos. Analice las proposiciones:\nI. Leer de forma crítica es dudar con fundamento.\nII. Leer de forma crítica es creer todo lo escrito.\nIII. Implica evaluar los argumentos.\nIV. Consiste en rechazar todo lo que se lee.", q:"¿Cuáles proposiciones se deducen del texto?", opts:["I y III","I y II","III y IV","Solo la IV"], ans:0, exp:"Cuestionar con argumentos equivale a dudar con fundamento (I) y a evaluar argumentos (III). II y IV son extremos que el texto no plantea." },
  { id:"m_ari_17", domain:"math", topic:"aritmetica", dif:3, stem:"Considere los números de dos cifras (del 10 al 99).", q:"¿Cuántos de ellos tienen dígitos que suman 9?", opts:["8","9","10","7"], ans:1, exp:"Son 18, 27, 36, 45, 54, 63, 72, 81 y 90: nueve números en total." },
  { id:"m_cnt_12", domain:"math", topic:"conteo", dif:3, stem:"Tres personas se ordenan en una fila, pero Ana y Beto deben quedar siempre juntos.", q:"¿De cuántas maneras distintas pueden ordenarse?", opts:["4","6","3","12"], ans:0, exp:"Tratá a Ana+Beto como un bloque: hay 2 ordenamientos del bloque con la otra persona, y dentro del bloque puede ir Ana-Beto o Beto-Ana: 2 × 2 = 4." },
  { id:"m_cnt_13", domain:"math", topic:"conteo", dif:3, stem:"Con los dígitos 1, 2, 3, 4 y 5, sin repetir, se forman números de tres cifras.", q:"¿Cuántos de esos números son pares?", opts:["24","60","12","36"], ans:0, exp:"La última cifra debe ser par (2 o 4): 2 opciones. La primera: 4 restantes; la del medio: 3 restantes. 2 × 4 × 3 = 24." },
  { id:"m_suc_14", domain:"math", topic:"sucesiones", dif:3, stem:"Observe la sucesión: 1, 2, 6, 24, 120, …", q:"¿Cuál es el siguiente término?", opts:["240","600","720","360"], ans:2, exp:"Cada término se multiplica por uno más: ×2, ×3, ×4, ×5… El siguiente es 120 × 6 = 720." },
  { id:"m_suc_15", domain:"math", topic:"sucesiones", dif:3, stem:"Se cumple que 1 da 2, 2 da 6, 3 da 12 y 4 da 20.", q:"Según ese patrón, ¿qué número corresponde al 5?", opts:["25","30","28","35"], ans:1, exp:"El patrón es n·(n+1): 1·2=2, 2·3=6, 3·4=12, 4·5=20, y 5·6 = 30." },
  { id:"m_rel_12", domain:"math", topic:"relaciones_orden", dif:3, stem:"Sean a y b enteros con a < b < 0.", q:"¿Cuál afirmación es siempre verdadera?", opts:["a² < b²","a² > b²","a² = b²","a + b > 0"], ans:1, exp:"Si a < b < 0, entonces a está más lejos de 0, o sea |a| > |b|. Al elevar al cuadrado, a² > b²." },
  { id:"m_alr_9", domain:"math", topic:"algebra_relaciones", dif:3, stem:"Sea n un entero tal que n² es par.", q:"¿Qué se puede afirmar con certeza de n?", opts:["n es impar","n es par","n es primo","n puede ser cualquiera"], ans:1, exp:"Si n fuera impar, n² sería impar. Como n² es par, n tiene que ser par." },
  { id:"m_raz_12", domain:"math", topic:"razon_proporcion", dif:3, stem:"Una mezcla de 20 litros tiene 30% de jugo y el resto agua.", q:"¿Cuántos litros de jugo hay que agregar para que el jugo sea el 50% de la mezcla?", opts:["8 L","4 L","10 L","6 L"], ans:0, exp:"Jugo inicial: 30% de 20 = 6 L. Agregando x: (6+x)/(20+x) = 0,5 → 6+x = 10+0,5x → 0,5x = 4 → x = 8 L." },
  { id:"m_dat_13", domain:"math", topic:"datos_probabilidad", dif:3, stem:"El promedio de las notas de 10 estudiantes es 7. Se retira un estudiante cuya nota era exactamente 7.", q:"¿Cuál es el nuevo promedio de los 9 que quedan?", opts:["7","6,3","7,5","6"], ans:0, exp:"La suma era 70; al quitar un 7 queda 63, y 63 ÷ 9 = 7. Como el que se fue tenía justo el promedio, este no cambia." },
  { id:"m_geo_13", domain:"math", topic:"geometria", dif:3, stem:"Dentro de un cuadrado de 10 cm de lado se recorta un cuadrado de 6 cm de lado.", q:"¿Cuál es el área de la región que queda (lo sombreado)?", opts:["64 cm²","36 cm²","40 cm²","100 cm²"], ans:0, exp:"Área grande menos área pequeña: 10² − 6² = 100 − 36 = 64 cm²." },
  { id:"m_per_9", domain:"math", topic:"permutaciones", dif:3, stem:"Cuatro personas se sientan en una fila de 4 sillas, pero una persona específica debe quedar en alguno de los dos extremos.", q:"¿De cuántas maneras pueden sentarse?", opts:["12","24","6","8"], ans:0, exp:"La persona fija tiene 2 lugares (los extremos); las otras 3 se ordenan de 3! = 6 formas. 2 × 6 = 12." },
  { id:"m_mcm_10", domain:"math", topic:"mcm_mcd", dif:3, stem:"Tres corredores dan vueltas a una pista y tardan 30, 40 y 60 segundos por vuelta. Salen juntos de la meta.", q:"¿Cada cuántos segundos vuelven a coincidir los tres en la meta?", opts:["120 s","60 s","240 s","90 s"], ans:0, exp:"Coinciden en el MCM(30, 40, 60). 30=2·3·5, 40=2³·5, 60=2²·3·5 → MCM = 2³·3·5 = 120 s." }
];

/* Sumamos las preguntas extra al banco principal y reconstruimos el índice */
window.PAA_QUESTIONS = (window.PAA_QUESTIONS || []).concat(window.PAA_QUESTIONS_EXTRA);
window.PAA_QUESTIONS_BY_TOPIC = window.PAA_QUESTIONS.reduce(function (m, q) {
  (m[q.topic] = m[q.topic] || []).push(q);
  return m;
}, {});
