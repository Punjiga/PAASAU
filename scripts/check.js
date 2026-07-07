const fs = require('fs');

const ctx = { window: {} };
const tStr = fs.readFileSync('e:/Gemini Projects/PAASAU UCR UNA/paasau/js/topics.js', 'utf8');
const q1 = fs.readFileSync('e:/Gemini Projects/PAASAU UCR UNA/paasau/js/questions.js', 'utf8');
const q2 = fs.readFileSync('e:/Gemini Projects/PAASAU UCR UNA/paasau/js/questions_extra.js', 'utf8');

eval(`(function(window) { ${tStr}; ${q1}; ${q2}; })(ctx.window)`);

const allQs = [...(ctx.window.PAA_QUESTIONS || []), ...(ctx.window.PAA_QUESTIONS_EXTRA || [])];
const bad = allQs.filter(q => !ctx.window.TOPIC_BY_ID[q.topic]);
console.log('Total qs:', allQs.length);
console.log('Bad topics count:', bad.length);
if(bad.length > 0) {
  console.log('Some bad topics:', [...new Set(bad.map(q => q.topic))]);
}
