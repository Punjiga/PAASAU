const fs = require('fs');

const transcriptPath = 'C:\\Users\\Steven\\.gemini\\antigravity\\brain\\5f1aac63-eb77-44db-917d-a6dbc9626928\\.system_generated\\logs\\transcript_full.jsonl';
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');

let latestText = "";
for (let i = lines.length - 1; i >= 0; i--) {
  if (!lines[i].trim()) continue;
  try {
    const data = JSON.parse(lines[i]);
    if (data.type === 'USER_INPUT' && data.content && data.content.includes('==Start of PDF==')) {
      latestText = data.content;
      break;
    }
  } catch (e) { }
}

if (!latestText) {
  console.log("Could not find PDF OCR in transcript.");
  process.exit(1);
}

fs.writeFileSync('e:\\Gemini Projects\\PAASAU UCR UNA\\paasau\\temp_chunks\\pdf6_text.txt', latestText, 'utf8');
console.log("PDF text dumped successfully!");
