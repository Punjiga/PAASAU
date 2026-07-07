window.PAA_QUESTIONS_EXTRA = [];

/* Sumamos las preguntas extra al banco principal y reconstruimos el índice */
window.PAA_QUESTIONS = (window.PAA_QUESTIONS || []).concat(window.PAA_QUESTIONS_EXTRA);
window.PAA_QUESTIONS_BY_TOPIC = window.PAA_QUESTIONS.reduce(function (m, q) {
  (m[q.topic] = m[q.topic] || []).push(q);
  return m;
}, {});
