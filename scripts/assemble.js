const fs = require('fs');
const path = require('path');

let allQuestions = [];
for (let i = 0; i < 15; i++) {
  const donePath = path.join(__dirname, `../temp_chunks/chunk_${i}_done.json`);
  const origPath = path.join(__dirname, `../temp_chunks/chunk_${i}.json`);
  
  if (fs.existsSync(donePath)) {
    allQuestions = allQuestions.concat(JSON.parse(fs.readFileSync(donePath, 'utf8')));
    console.log(`Loaded chunk_${i}_done.json`);
  } else if (fs.existsSync(origPath)) {
    console.log(`WARNING: chunk_${i}_done.json not found! Falling back to original chunk_${i}.json`);
    allQuestions = allQuestions.concat(JSON.parse(fs.readFileSync(origPath, 'utf8')));
  }
}

const first88 = allQuestions.slice(0, 88);
const rest = allQuestions.slice(88);

const q1Output = `/* ============================================================
   PAASAU — Banco de preguntas (Nivel Élite - Formato Socrático)
   Base: ${first88.length} preguntas
   ============================================================ */
window.PAA_QUESTIONS = ${JSON.stringify(first88, null, 2)};
`;

const q2Output = `/* ============================================================
   PAASAU — Banco de preguntas extra (Nivel Élite - Formato Socrático)
   Base: ${rest.length} preguntas
   ============================================================ */
window.PAA_QUESTIONS_EXTRA = ${JSON.stringify(rest, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../js/questions.js'), q1Output, 'utf8');
fs.writeFileSync(path.join(__dirname, '../js/questions_extra.js'), q2Output, 'utf8');

console.log("Assembly complete! Total questions:", allQuestions.length);
