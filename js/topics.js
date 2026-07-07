window.PAA_TOPICS = [];

/* Helpers de temario */
window.PAA_TOPIC_BY_ID = window.PAA_TOPICS.reduce((m, t) => (m[t.id] = t, m), {});
window.PAA_DOMAINS = {
  verbal: { name: "Razonamiento verbal", short: "Verbal", color: "var(--verbal)" },
  math: { name: "Razonamiento matemático", short: "Matemático", color: "var(--math)" }
};
