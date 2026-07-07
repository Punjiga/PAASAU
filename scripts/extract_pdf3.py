import json
import re
import os

transcript_path = r"C:\Users\Steven\.gemini\antigravity\brain\5f1aac63-eb77-44db-917d-a6dbc9626928\.system_generated\logs\transcript_full.jsonl"
out_path = r"e:\Gemini Projects\PAASAU UCR UNA\paasau\temp_chunks\raw_pdf3.json"

pdf_content = ""
found_pdf = False

with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get('type') == 'USER_INPUT' and '==Start of PDF==' in data.get('content', ''):
                content = data['content']
                # Extract OCR blocks
                ocr_blocks = re.findall(r'==Start of OCR for page \d+==(.*?)==End of OCR for page \d+==', content, re.DOTALL)
                if ocr_blocks:
                    pdf_content = "\n".join(ocr_blocks)
                    found_pdf = True
        except Exception as e:
            pass

if not found_pdf:
    print("Could not find PDF OCR in transcript.")
    exit(1)

# Basic cleanup
lines = pdf_content.split('\n')
clean_lines = []
for line in lines:
    line = line.strip()
    if not line:
        continue
    # skip page numbers/headers like "20 Instituto de Investigaciones Psicológicas", "La Prueba de Aptitud Académica 21"
    if re.match(r'^\d+\s+Instituto de Investigaciones Psicológicas$', line):
        continue
    if re.match(r'^La Prueba de Aptitud Académica\s+\d+$', line):
        continue
    if line in ["COMPRENSIÓN DE LECTURA", "COMPLETAR ORACIONES", "MATEMÁTICA", "CONOCIMIENTOS BÁSICOS", "― FIN DE LA PRÁC TI CA ―"]:
        continue
    clean_lines.append(line)

text = "\n".join(clean_lines)

# Now, split by questions. Questions start with "1.", "2.", up to "85."
# Note: "I.", "II.", "III." might exist, so we only split on "\n\d+\.\s"
# We also have to be careful with decimals, but questions usually start on a newline.
# Let's find all indices of "\n\d+\." where the number is consecutive.
questions = []
current_q_text = ""
current_q_num = 1

# We add a newline to the start to match the first question
text = "\n" + text
pattern = re.compile(r'\n(\d+)\.\s')

matches = list(pattern.finditer(text))
for i in range(len(matches)):
    q_num_str = matches[i].group(1)
    q_num = int(q_num_str)
    
    # ensure it's actually the next question (or the first)
    if q_num == current_q_num:
        start_idx = matches[i].end()
        end_idx = matches[i+1].start() if i+1 < len(matches) else len(text)
        q_text = text[start_idx:end_idx].strip()
        questions.append({"num": q_num, "text": q_text})
        current_q_num += 1

print(f"Extracted {len(questions)} questions.")

# Now parse options A, B, C, D, E for each question
parsed_questions = []
for q in questions:
    q_text = q['text']
    # Split stem and options. Options start with " A) " or "A) "
    # We'll use regex to split
    opt_match = re.search(r'\n\s*A\)\s+', q_text)
    if opt_match:
        stem = q_text[:opt_match.start()].strip()
        opts_text = q_text[opt_match.start():]
        # Find B), C), D), E)
        opts = []
        for opt_letter in ['A', 'B', 'C', 'D', 'E']:
            next_letter = chr(ord(opt_letter) + 1)
            start_rx = re.compile(r'\n\s*' + opt_letter + r'\)\s+')
            end_rx = re.compile(r'\n\s*' + next_letter + r'\)\s+')
            
            start_m = start_rx.search(opts_text)
            if start_m:
                end_m = end_rx.search(opts_text)
                opt_start = start_m.end()
                if end_m:
                    opt_end = end_m.start()
                    opts.append(opts_text[opt_start:opt_end].strip())
                else:
                    opts.append(opts_text[opt_start:].strip())
            else:
                opts.append("") # Missing option?
        
        parsed_questions.append({
            "num": q["num"],
            "stem": stem,
            "opts": opts
        })
    else:
        # No options found?
        parsed_questions.append({
            "num": q["num"],
            "stem": q_text,
            "opts": []
        })

# Map answers based on manual extraction from the bubble sheet
# You verified these earlier
answers = {
    1: 2, 2: 4, 3: 2, 4: 2, 5: 4, 6: 3, 7: 0, 8: 1, 9: 2, 10: 1,
    11: 3, 12: 4, 13: 1, 14: 0, 15: 0, 16: 3, 17: 4, 18: 4, 19: 2, 20: 3,
    21: 4, 22: 0, 23: 2, 24: 1, 25: 1, 26: 2, 27: 0, 28: 3, 29: 4, 30: 4,
    31: 0, 32: 3, 33: 2, 34: 1, 35: 4, 36: 2, 37: 2, 38: 4, 39: 1, 40: 3,
    41: 2, 42: 4, 43: 4, 44: 0, 45: 1, 46: 4, 47: 2, 48: 1, 49: 3, 50: 3,
    51: 1, 52: 4, 53: 2, 54: 3, 55: 2, 56: 3, 57: 2, 58: 2, 59: 3, 60: 4,
    61: 3, 62: 1, 63: 3, 64: 1, 65: 2, 66: 3, 67: 1, 68: 1, 69: 1, 70: 3,
    71: 0, 72: 2, 73: 2, 74: 1, 75: 1, 76: 2, 77: 1, 78: 4, 79: 3, 80: 1,
    81: 1, 82: 2, 83: 1, 84: 3, 85: 3
}

for pq in parsed_questions:
    qnum = pq["num"]
    pq["ans"] = answers.get(qnum, 0)
    
    # Assign domain rough guess
    if 1 <= qnum <= 50:
        pq["domain"] = "verbal"
    else:
        pq["domain"] = "math"

# Write to chunks of 20
os.makedirs(os.path.dirname(out_path), exist_ok=True)
import math
chunk_size = 22 # To get exactly 4 chunks for 85 questions
for i in range(math.ceil(len(parsed_questions) / chunk_size)):
    chunk = parsed_questions[i*chunk_size : (i+1)*chunk_size]
    with open(out_path.replace(".json", f"_{i}.json"), 'w', encoding='utf-8') as f:
        json.dump(chunk, f, indent=2, ensure_ascii=False)
        print(f"Wrote chunk {i} with {len(chunk)} questions.")

