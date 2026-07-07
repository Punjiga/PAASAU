const fs = require('fs');

const transcript_path = "C:\\Users\\Steven\\.gemini\\antigravity\\brain\\5f1aac63-eb77-44db-917d-a6dbc9626928\\.system_generated\\logs\\transcript.jsonl";
const out_path = "e:\\Gemini Projects\\PAASAU UCR UNA\\paasau\\temp_chunks\\raw_pdf3";

let pdf_content = "";
const lines_data = fs.readFileSync(transcript_path, 'utf8').split('\n');

for (const line of lines_data) {
  if (!line.trim()) continue;
  try {
    const data = JSON.parse(line);
    if (data.type === 'USER_INPUT' && data.content && data.content.includes('==Start of OCR')) {
      const regex = /==Start of OCR for page \d+==([\s\S]*?)==End of OCR for page \d+==/g;
      let match;
      while ((match = regex.exec(data.content)) !== null) {
        pdf_content += match[1] + "\n";
      }
    }
  } catch(e) {}
}

if (!pdf_content) {
  console.log("Could not find PDF OCR in transcript.");
  process.exit(1);
}

// Basic cleanup
const clean_lines = [];
for (let line of pdf_content.split('\n')) {
  line = line.trim();
  if (!line) continue;
  if (/^\d+\s+Instituto de Investigaciones Psicológicas$/.test(line)) continue;
  if (/^La Prueba de Aptitud Académica\s+\d+$/.test(line)) continue;
  if (["COMPRENSIÓN DE LECTURA", "COMPLETAR ORACIONES", "MATEMÁTICA", "CONOCIMIENTOS BÁSICOS", "― FIN DE LA PRÁC TI CA ―"].includes(line)) continue;
  clean_lines.push(line);
}

const text = "\n" + clean_lines.join("\n");
const questions = [];
let current_q_num = 1;

const pattern = /\n(\d+)\.\s/g;
let matches = [];
let match;
while ((match = pattern.exec(text)) !== null) {
  matches.push({ num: parseInt(match[1]), start: match.index, end: match.index + match[0].length });
}

for (let i = 0; i < matches.length; i++) {
  if (matches[i].num === current_q_num) {
    const start_idx = matches[i].end;
    const end_idx = (i + 1 < matches.length) ? matches[i+1].start : text.length;
    questions.push({ num: current_q_num, text: text.substring(start_idx, end_idx).trim() });
    current_q_num++;
  }
}

console.log(`Extracted ${questions.length} questions.`);

const parsed_questions = [];
for (const q of questions) {
  const opt_match = /\n\s*A\)\s+/.exec("\n" + q.text); // prepend newline to match first line A)
  if (opt_match) {
    const stem = q.text.substring(0, opt_match.index).trim();
    const opts_text = q.text.substring(opt_match.index);
    const opts = [];
    let current_opt = 'A';
    for (let j = 0; j < 5; j++) {
      const next_opt = String.fromCharCode(current_opt.charCodeAt(0) + 1);
      const start_rx = new RegExp('\\n\\s*' + current_opt + '\\)\\s+');
      const end_rx = new RegExp('\\n\\s*' + next_opt + '\\)\\s+');
      
      const start_m = start_rx.exec("\n" + opts_text);
      if (start_m) {
        const end_m = end_rx.exec("\n" + opts_text);
        if (end_m) {
          opts.push(opts_text.substring(start_m.index + start_m[0].length - 1, end_m.index - 1).trim());
        } else {
          opts.push(opts_text.substring(start_m.index + start_m[0].length - 1).trim());
        }
      } else {
        opts.push("");
      }
      current_opt = next_opt;
    }
    parsed_questions.push({ num: q.num, stem, opts });
  } else {
    parsed_questions.push({ num: q.num, stem: q.text, opts: [] });
  }
}

const answers = {
  1: 2, 2: 4, 3: 2, 4: 2, 5: 4, 6: 3, 7: 0, 8: 1, 9: 2, 10: 1,
  11: 3, 12: 4, 13: 1, 14: 0, 15: 0, 16: 3, 17: 4, 18: 4, 19: 2, 20: 3,
  21: 4, 22: 0, 23: 2, 24: 1, 25: 1, 26: 2, 27: 0, 28: 3, 29: 4, 30: 4,
  31: 0, 32: 3, 33: 2, 34: 1, 35: 4, 36: 2, 37: 2, 38: 4, 39: 1, 40: 3,
  41: 2, 42: 4, 43: 4, 44: 0, 45: 1, 46: 4, 47: 2, 48: 1, 49: 3, 50: 3,
  51: 1, 52: 4, 53: 2, 54: 3, 55: 2, 56: 3, 57: 2, 58: 2, 59: 3, 60: 4,
  61: 3, 62: 1, 63: 3, 64: 1, 65: 2, 66: 3, 67: 1, 68: 1, 69: 1, 70: 3,
  71: 0, 72: 2, 73: 2, 74: 1, 75: 1, 76: 2, 77: 1, 78: 4, 79: 3, 80: 1,
  81: 1, 82: 2, 83: 1, 84: 3, 85: 3
};

for (const pq of parsed_questions) {
  pq.ans = answers[pq.num] || 0;
  pq.domain = (pq.num <= 50) ? "verbal" : "math";
  pq.topic = "unknown";
}

const chunk_size = 22;
if (!fs.existsSync(out_path.substring(0, out_path.lastIndexOf('\\')))) {
  fs.mkdirSync(out_path.substring(0, out_path.lastIndexOf('\\')), { recursive: true });
}

for (let i = 0; i < Math.ceil(parsed_questions.length / chunk_size); i++) {
  const chunk = parsed_questions.slice(i * chunk_size, (i + 1) * chunk_size);
  fs.writeFileSync(`${out_path}_${i}.json`, JSON.stringify(chunk, null, 2), 'utf8');
  console.log(`Wrote chunk ${i} with ${chunk.length} questions.`);
}
