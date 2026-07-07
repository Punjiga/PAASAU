const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('C:\\Users\\Steven\\.gemini\\antigravity\\brain\\5f1aac63-eb77-44db-917d-a6dbc9626928\\media__1783391191536.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('e:\\Gemini Projects\\PAASAU UCR UNA\\paasau\\temp_chunks\\pdf5_text.txt', data.text, 'utf8');
    console.log("PDF 5 text written.");
}).catch(err => {
    console.error(err);
});
