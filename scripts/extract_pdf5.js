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
  console.log("Could not find the PDF text in transcript.");
  process.exit(1);
}

// Extract the OCR blocks
const ocrBlocks = [];
const regex = /==Start of OCR for page \d+==([\s\S]*?)==End of OCR for page \d+==/g;
let match;
while ((match = regex.exec(latestText)) !== null) {
  ocrBlocks.push(match[1]);
}

const pdfContent = ocrBlocks.join('\n');
console.log("PDF length:", pdfContent.length);

const ansKey = {
  1: 3, 2: 1, 3: 2, 4: 2, 5: 4, 6: 4, 7: 3, 8: 0, 9: 1, 10: 2,
  11: 3, 12: 3, 13: 4, 14: 1, 15: 4, 16: 0, 17: 4, 18: 1, 19: 0, 20: 1,
  21: 1, 22: 1, 23: 2, 24: 3, 25: 2, 26: 1, 27: 2, 28: 4, 29: 4, 30: 4,
  31: 2, 32: 3, 33: 3, 34: 2, 35: 2, 36: 3, 37: 4, 38: 4, 39: 4, 40: 2,
  41: 2, 42: 3, 43: 1, 44: 2, 45: 3, 46: 1, 47: 4, 48: 2, 49: 1, 50: 1,
  51: 3, 52: 1, 53: 1, 54: 0, 55: 2, 56: 0, 57: 0, 58: 1, 59: 2, 60: 4,
  61: 1, 62: 1, 63: 2, 64: 1, 65: 2, 66: 1, 67: 3, 68: 1, 69: 4, 70: 2,
  71: 3, 72: 0, 73: 1, 74: 2, 75: 0
};

const questions = [];
let currentQ = null;

const linesText = pdfContent.split('\n');
let i = 0;

while (i < linesText.length) {
  const line = linesText[i].trim();
  const matchNum = line.match(/^Pregunta (\d+)\.?$/);
  
  if (matchNum) {
    if (currentQ) {
      questions.push(currentQ);
    }
    const qNum = parseInt(matchNum[1]);
    currentQ = {
      id: `q_pdf5_${qNum.toString().padStart(2, '0')}`,
      domain: qNum <= 40 ? "verbal" : "math",
      topic: qNum <= 40 ? "comprension_lectura" : "operaciones",
      dif: 3,
      stem: "",
      q: "",
      opts: [],
      ans: ansKey[qNum] !== undefined ? ansKey[qNum] : 0,
      exp: ""
    };
    i++;
    
    // Leer el stem y las opciones
    while (i < linesText.length) {
      const nextLine = linesText[i].trim();
      if (nextLine.match(/^Pregunta \d+\.?$/) || nextLine.startsWith("==Screenshot")) {
        break; // Rompe para ir a la siguiente pregunta
      }
      
      if (nextLine.match(/^[A-E]\.\s/)) {
        currentQ.opts.push(nextLine.replace(/^[A-E]\.\s*/, '').trim());
      } else if (nextLine !== "") {
        if (!nextLine.match(/^\d+$/)) {
          // Ignorar los números de página
          currentQ.stem += nextLine + " \n";
        }
      }
      i++;
    }
  } else {
    i++;
  }
}

if (currentQ) {
  questions.push(currentQ);
}

// Limpiar un poco el stem y asignar "q" si hay interrogación al final
questions.forEach(q => {
  q.stem = q.stem.trim();
  const parts = q.stem.split('\n');
  const lastPart = parts[parts.length - 1].trim();
  if (lastPart.includes('?')) {
     q.q = lastPart;
     parts.pop();
     q.stem = parts.join('\n').trim();
  }
});

console.log("Extracted:", questions.length, "questions");

fs.writeFileSync('temp_chunks/raw_pdf5.json', JSON.stringify(questions, null, 2));

// Split into chunks of 5
const chunkSize = 5;
for (let j = 0; j < questions.length; j += chunkSize) {
  const chunk = questions.slice(j, j + chunkSize);
  const chunkIndex = Math.floor(j / chunkSize);
  fs.writeFileSync(`temp_chunks/chunk_5_${chunkIndex}.json`, JSON.stringify(chunk, null, 2));
}

console.log("Chunks created.");
