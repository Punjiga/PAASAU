const fs = require('fs');
const path = require('path');

const questionsFile = path.join(__dirname, '../js/questions.js');

let allQuestions = [];
for (let i = 0; i < 6; i++) {
  const file = path.join(__dirname, `../temp_chunks/done_6_${i}.json`);
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  allQuestions = allQuestions.concat(data);
}

// Convert them to the exact format needed for questions.js
const formattedQuestions = allQuestions.map(q => {
  return `  {
    id: "${q.id}",
    domain: "${q.domain}",
    topic: "${q.topic}",
    dif: ${q.dif},
    stem: \`${q.stem}\`,
    q: \`${q.q}\`,
    opts: [
${q.opts.map(opt => `      \`${opt}\``).join(',\n')}
    ],
    ans: ${q.ans},
    exp: \`${q.exp || ''}\`,
    feedback_socratico: \`${q.feedback_socratico || q.feedback || q["Feedback Socrático"]}\`,
    tip_elite: \`${q.tip_elite || q.tip || q["Tip Élite"]}\`
  }`;
});

let content = fs.readFileSync(questionsFile, 'utf8');

// Insert before the last bracket
const insertPos = content.lastIndexOf('];');
if (insertPos !== -1) {
  let toInsert = formattedQuestions.join(',\n');
  if (!content.substring(0, insertPos).trim().endsWith('[')) {
     toInsert = ',\n' + toInsert;
  }
  const newContent = content.substring(0, insertPos) + toInsert + '\n' + content.substring(insertPos);
  fs.writeFileSync(questionsFile, newContent, 'utf8');
  console.log("Successfully merged 30 questions into questions.js");
} else {
  console.log("Error finding insertion point in questions.js");
}
