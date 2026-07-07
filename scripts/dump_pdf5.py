import json

transcript_path = r"C:\Users\Steven\.gemini\antigravity\brain\5f1aac63-eb77-44db-917d-a6dbc9626928\.system_generated\logs\transcript_full.jsonl"
pdf_content = ""

with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get('type') == 'USER_INPUT' and '==Start of PDF==' in data.get('content', ''):
                pdf_content = data['content']
        except Exception:
            pass

if not pdf_content:
    print("Could not find PDF OCR in transcript.")
    exit(1)

with open(r"e:\Gemini Projects\PAASAU UCR UNA\paasau\temp_chunks\pdf5_text.txt", "w", encoding="utf-8") as f:
    f.write(pdf_content)

print("PDF text dumped successfully!")
