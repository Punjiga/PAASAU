// ============================================================================
// PAASAU - Script de Actualización Masiva (Tutor Socrático Nivel Élite)
// ============================================================================
// Este script lee el banco de preguntas, se conecta a la API de OpenAI (GPT-4o) 
// y reescribe TODAS las preguntas fáciles a nivel de examen de admisión, 
// inyectando el feedback del Tutor Socrático.
//
// REQUISITOS:
// 1. Instalar dependencias: npm install openai dotenv
// 2. Crear un archivo .env en esta carpeta con: OPENAI_API_KEY=tu_llave_aqui
// 3. Ejecutar: node upgrade_tutor.js
// ============================================================================

const fs = require('fs');
const path = require('path');
const { OpenAI } = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const QUESTIONS_FILE = path.join(__dirname, '../js/questions.js');

const SYSTEM_PROMPT = `Eres un tutor de alto rendimiento experto en la Prueba de Aptitud Académica (PAA de la UCR y UNA en Costa Rica). Tu objetivo es preparar a estudiantes de élite.
TU TAREA: Recibirás un objeto JSON representando una pregunta. 
1. Si dif es 1 o 2, eleva su dificultad a 3.
2. Si es matemática, asegúrate de añadir restricciones (ej: enteros positivos) y que los distractores correspondan a errores lógicos.
3. Si es verbal, asegúrate de que el texto permita inferencia compleja.
4. Reescribe el campo 'exp' (explicación) usando el método socrático:
   - Validación y Reto
   - Pregunta Socrática (El Anzuelo)
   - El Camino Lógico
   - Cierre Empoderador (Tip de examen)
NUNCA asumas que el estudiante es tonto, asume que cayó en una trampa del examen.
Devuelve ÚNICAMENTE el objeto JSON modificado, sin markdown adicional.`;

async function upgradeQuestion(questionObj) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: JSON.stringify(questionObj) }
      ],
      temperature: 0.7,
    });
    
    let content = response.choices[0].message.content.trim();
    if (content.startsWith('\`\`\`json')) {
      content = content.replace(/\`\`\`json/g, '').replace(/\`\`\`/g, '').trim();
    }
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error procesando pregunta ${questionObj.id}:`, error.message);
    return questionObj; // Devuelve la original si falla
  }
}

async function run() {
  console.log("Iniciando auditoría y optimización masiva de PAASAU...");
  
  // 1. Leer el archivo original como texto
  let fileContent = fs.readFileSync(QUESTIONS_FILE, 'utf-8');
  
  // 2. Extraer los objetos usando Regex (ya que es un .js con comentarios)
  // Esta regex busca bloques que parezcan objetos de preguntas
  const objectRegex = /{\s*id:\s*"[^"]+".*?}/gs;
  const matches = fileContent.match(objectRegex);
  
  if (!matches) {
    console.log("No se encontraron preguntas para procesar.");
    return;
  }

  console.log(`Se encontraron ${matches.length} preguntas. Procesando... (Esto puede tomar varios minutos)`);

  let newContent = fileContent;
  let processedCount = 0;

  // 3. Procesar secuencialmente para no reventar los rate limits
  for (let match of matches) {
    try {
      // Intentar evaluar el string a un objeto real
      // (Usamos un pequeño truco de new Function para evitar JSON.parse estricto)
      const obj = (new Function(`return ${match}`))();
      
      // Mostrar progreso
      processedCount++;
      console.log(`[${processedCount}/${matches.length}] Optimizando: ${obj.id}...`);
      
      // Llamar a la IA
      const upgradedObj = await upgradeQuestion(obj);
      
      // Convertir de vuelta a string conservando el formato compacto
      const upgradedString = `{ id:"${upgradedObj.id}", domain:"${upgradedObj.domain}", topic:"${upgradedObj.topic}", dif:${upgradedObj.dif},
    stem:${JSON.stringify(upgradedObj.stem)},
    q:${JSON.stringify(upgradedObj.q)},
    opts:${JSON.stringify(upgradedObj.opts)},
    ans:${upgradedObj.ans}, exp:${JSON.stringify(upgradedObj.exp)} }`;

      // Reemplazar en el contenido del archivo
      newContent = newContent.replace(match, upgradedString);

    } catch (e) {
      console.error(`Saltando un match inválido: ${e.message}`);
    }
  }

  // 4. Guardar un backup por seguridad
  fs.writeFileSync(QUESTIONS_FILE + '.backup', fileContent, 'utf-8');
  console.log("Backup guardado en questions.js.backup");

  // 5. Guardar el nuevo banco
  fs.writeFileSync(QUESTIONS_FILE, newContent, 'utf-8');
  console.log("¡Optimización 200% completada! Banco de preguntas Élite generado exitosamente.");
}

run();
