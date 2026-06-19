# PAASAU

**Tu camino a la UCR y la UNA, un día a la vez.**

App web para practicar la **PAA** (Prueba de Aptitud Académica), el examen de admisión que comparten la **UCR** y la **UNA**. Funciona en celular, tablet y computadora. No necesita instalar nada ni compilar: son archivos estáticos.

---

## El examen real (proceso 2026-2027)

Datos oficiales de la PAA (fuente: Instituto de Investigaciones Psicológicas, UCR — paa.iip.ucr.ac.cr):

- **45 ítems** de selección única.
- **4 opciones** por ítem (A–D), una sola correcta.
- **1 hora 50 minutos** (110 min) en total.
- Prueba **integrada**: ítems verbales y matemáticos mezclados (aprox. **59% verbal** y **41% matemático**).
- Aplicación **3 y 4 de octubre de 2026**. No se permite calculadora.

Por eso PAASAU usa preguntas de **4 opciones** y sus simulacros son de **45 ítems / 110 minutos**, con la misma proporción verbal/matemática del examen real.

> Las preguntas son **originales**, escritas con la estructura y el temario de la PAA. No son las del folleto oficial: así tenés material fresco. El banco trae **~190 preguntas** y está hecho para crecer.

---

## Qué incluye

- **Cuenta regresiva** configurable hasta el día de tu examen y **racha** de días seguidos estudiando.
- **Práctica diaria**: el tema que hoy más te conviene + lección corta + preguntas.
- **Práctica libre**: elegís área, tema y **cuántas preguntas** (5, 10, 25, 30 o la cantidad que querás), con **tiempo opcional** al ritmo del examen (≈2 min 27 s por ítem).
- **Mezcla de opciones**: en cada práctica las opciones se barajan, así no se memoriza la posición de la respuesta.
- **Repaso al fallar**: cuando errás, además de la explicación se muestra un repaso corto del tema, y al final te recomienda **qué estudiar** según lo que más fallaste.
- **Temas**: todo el temario (razonamiento verbal y matemático) con barras de progreso.
- **Simulacros**: examen completo de 45 ítems en 110 minutos, mapa de preguntas y revisión por área.
- **Progreso**: aciertos, calendario de actividad, tiempo estudiado, **puntos débiles** y dominio por tema.
- **Sonidos** y **animaciones** (respetan "movimiento reducido" del sistema).
- **Sincronización en la nube** (JSONBin) opcional al iniciar sesión.

---

## Acceso y sincronización

PAASAU es de **acceso abierto**: cualquiera entra con "Empezar a practicar" y tiene **todo** el contenido (práctica, simulacros, temas, progreso). El progreso se guarda en el dispositivo.

El **login con contraseña** (la de `js/config.js`) **no desbloquea contenido**: solo activa la **sincronización** de tu progreso en la nube para tenerlo en varios dispositivos.

---

## Cómo correrlo (local)

Abrí una terminal en la carpeta y levantá un servidor simple:

```bash
python -m http.server 5500
```

Luego entrá a `http://localhost:5500`.

---

## Configuración (`js/config.js`)

| Campo | Para qué sirve |
|---|---|
| `appName`, `tagline` | Nombre y frase de la app. |
| `authPassword` | Contraseña que activa la sincronización. |
| `sync.binId`, `sync.accessKey` | Bin y llave de JSONBin. |
| `examTotalItems` | Ítems por simulacro (oficial: 45). |
| `examMinutes` | Minutos del simulacro (oficial: 110). |
| `examVerbalItems` | Cuántos de esos ítems son verbales (27 → 18 de mate). |
| `practiceCounts` | Botones de cantidad en práctica libre. |
| `secondsPerItem` | Ritmo del examen para el tiempo opcional. |

La **fecha del examen** se define dentro de la app, en **Ajustes**.

---

## Agregar más preguntas

Las preguntas extra van en `js/questions_extra.js`. Cada una es un objeto:

```js
{ id:"v_fin_99", domain:"verbal", topic:"finalidad", dif:1,
  stem:"Texto o situación que da contexto.",
  q:"¿La pregunta concreta?",
  opts:["Opción A","Opción B","Opción C","Opción D"],
  ans:1,            // índice de la opción correcta (0 = A, 1 = B, ...)
  exp:"Por qué esa es la correcta." }
```

- `domain`: `"verbal"` o `"math"`. `topic`: un id de `js/topics.js`. `dif`: 1, 2 o 3. `id`: único.
- Copiás un objeto, le cambiás el `id` y el contenido, y lo sumás al array. La app baraja las opciones sola.

---

## Subir a GitHub + Vercel

Repositorio: `https://github.com/Punjiga/PAASAU`.

1. **GitHub** (desde esta carpeta):
   ```bash
   git init
   git add .
   git commit -m "PAASAU"
   git branch -M main
   git remote add origin https://github.com/Punjiga/PAASAU.git
   git push -u origin main
   ```
2. **Vercel**: "Add New… → Project", importá el repo. Framework Preset **Other**, Build Command vacío, Output Directory raíz. Deploy.

El archivo `vercel.json` ya deja todo como sitio estático.

---

## Estructura

```
PAASAU/
├─ index.html
├─ vercel.json
├─ css/
│  └─ styles.css
└─ js/
   ├─ config.js          ← acceso, examen, sincronización
   ├─ topics.js          ← temario + lecciones
   ├─ questions.js       ← banco base de preguntas
   ├─ questions_extra.js ← preguntas adicionales (estilo PAA 2026)
   ├─ storage.js         ← estado, racha, cronómetro, sync
   └─ app.js             ← interfaz y lógica
```

---

## Nota de seguridad

La contraseña y las llaves de JSONBin viven en el código del sitio, así que **cualquiera que abra el código puede verlas**. No es seguridad real: solo separan tu modo con sincronización del modo local. **No guardes información sensible** detrás de este acceso.
