const fs = require('fs');
const path = require('path');

const q1 = fs.readFileSync(path.join(__dirname, '../js/questions.js'), 'utf8');
const q2 = fs.readFileSync(path.join(__dirname, '../js/questions_extra.js'), 'utf8');

const ctx = { window: {} };
try {
  eval(`(function(window){ ${q1} \n ${q2} })(ctx.window);`);
} catch(e) {
  console.error("Eval failed:", e);
  process.exit(1);
}

const allQuestions = [...(ctx.window.PAA_QUESTIONS || []), ...(ctx.window.PAA_QUESTIONS_EXTRA || [])];
console.log("Total questions loaded:", allQuestions.length);

const NUM_CHUNKS = 15;
const chunkSize = Math.ceil(allQuestions.length / NUM_CHUNKS);

for(let i=0; i<NUM_CHUNKS; i++){
  const chunk = allQuestions.slice(i * chunkSize, (i+1) * chunkSize);
  if(chunk.length > 0) {
    fs.writeFileSync(path.join(__dirname, `../temp_chunks/chunk_${i}.json`), JSON.stringify(chunk, null, 2), 'utf8');
    console.log(`chunk_${i}.json written with ${chunk.length} questions.`);
  }
}
