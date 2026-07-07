const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="nav-desktop"></div><div id="nav-mobile"></div><div id="view"></div></body></html>`);
const window = dom.window;
const document = window.document;

global.window = window;
global.document = document;
global.navigator = {userAgent: 'node.js'};

const tStr = fs.readFileSync('e:/Gemini Projects/PAASAU UCR UNA/paasau/js/topics.js', 'utf8');
const q1 = fs.readFileSync('e:/Gemini Projects/PAASAU UCR UNA/paasau/js/questions.js', 'utf8');
const q2 = fs.readFileSync('e:/Gemini Projects/PAASAU UCR UNA/paasau/js/questions_extra.js', 'utf8');
const store = fs.readFileSync('e:/Gemini Projects/PAASAU UCR UNA/paasau/js/store.js', 'utf8');
const app = fs.readFileSync('e:/Gemini Projects/PAASAU UCR UNA/paasau/js/app.js', 'utf8');

// Mock localStorage
window.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {}
};

try {
  eval(tStr);
  eval(q1);
  eval(q2);
  eval(store);
  eval(app);
  console.log("App loaded successfully without throwing.");
} catch(e) {
  console.error("Error loading app:", e);
}
