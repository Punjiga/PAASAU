/* ============================================================
   PAASAU — Almacenamiento, estado, racha y sincronización
   ============================================================ */
window.Store = (function () {
  const CFG = window.PAA_CONFIG;
  const LS_KEY = "rutaPaa_state_v1";

  /* ---------- Estado por defecto ---------- */
  function emptyState() {
    return {
      version: 2,
      user: null,              // "Punjiga" (login) | "Invitado"
      isGuest: true,
      examDate: null,          // "YYYY-MM-DD"
      examName: CFG.defaultExamName,
      streak: { current: 0, longest: 0, lastDay: null },
      history: {},             // { "YYYY-MM-DD": { minutes, questions, correct } }
      totalSeconds: 0,         // tiempo estudiado: SOLO cuenta dentro de práctica/simulacro
      questionsAnswered: 0,
      correctAnswers: 0,
      perTopic: {},            // { topicId: { answered, correct, studied } }
      simulacros: [],          // { date, score, total, durationSec, byDomain }
      saved: [],               // ids de preguntas guardadas para repasar
      settings: { sound: true },
      studyResetDone: true,    // bandera de migración (estado nuevo ya está "reseteado")
      lastSync: null
    };
  }

  // Migración: resetea el tiempo estudiado una sola vez (datos viejos contaban
  // el tiempo de navegación). También garantiza que existan saved[] y la bandera.
  function migrate(st) {
    if (!st.studyResetDone) {
      st.totalSeconds = 0;
      if (st.history) Object.keys(st.history).forEach(function (k) {
        if (st.history[k]) st.history[k].minutes = 0;
      });
      st.studyResetDone = true;
    }
    if (!Array.isArray(st.saved)) st.saved = [];
    return st;
  }

  let state = load();

  /* ---------- Persistencia local ---------- */
  function load() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return emptyState();
      const parsed = JSON.parse(raw);
      return migrate(Object.assign(emptyState(), parsed));
    } catch (e) {
      console.warn("No se pudo leer el estado local:", e);
      return emptyState();
    }
  }
  function persist() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(state)); }
    catch (e) { console.warn("No se pudo guardar localmente:", e); }
  }

  /* ---------- Utilidades de fecha (fecha local del dispositivo) ---------- */
  function todayKey(d = new Date()) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }
  function daysBetween(aKey, bKey) {
    const a = new Date(aKey + "T00:00:00");
    const b = new Date(bKey + "T00:00:00");
    return Math.round((b - a) / 86400000);
  }

  /* ---------- Cuenta regresiva ---------- */
  function daysUntilExam() {
    if (!state.examDate) return null;
    return daysBetween(todayKey(), state.examDate);
  }
  // Milisegundos hasta el examen (medianoche local del día del examen).
  function msUntilExam() {
    if (!state.examDate) return null;
    return new Date(state.examDate + "T00:00:00").getTime() - Date.now();
  }

  /* ---------- Racha ---------- */
  function markStudiedToday() {
    const t = todayKey();
    const s = state.streak;
    if (s.lastDay === t) return;
    if (s.lastDay && daysBetween(s.lastDay, t) === 1) {
      s.current += 1;
    } else {
      s.current = 1;
    }
    s.lastDay = t;
    if (s.current > s.longest) s.longest = s.current;
    persist();
  }
  function currentStreak() {
    const s = state.streak;
    if (!s.lastDay) return 0;
    const gap = daysBetween(s.lastDay, todayKey());
    if (gap <= 0) return s.current;
    if (gap === 1) return s.current;
    return 0;
  }
  function studiedToday() { return state.streak.lastDay === todayKey(); }

  /* ---------- Registro de respuestas ---------- */
  function recordAnswer(topicId, isCorrect) {
    state.questionsAnswered += 1;
    if (isCorrect) state.correctAnswers += 1;

    const pt = state.perTopic[topicId] || { answered: 0, correct: 0, studied: false };
    pt.answered += 1;
    if (isCorrect) pt.correct += 1;
    state.perTopic[topicId] = pt;

    const t = todayKey();
    const h = state.history[t] || { minutes: 0, questions: 0, correct: 0 };
    h.questions += 1;
    if (isCorrect) h.correct += 1;
    state.history[t] = h;

    if (CFG.minMinutesForStreak === 0) markStudiedToday();
    persist();
  }

  function setTopicStudied(topicId, val) {
    const pt = state.perTopic[topicId] || { answered: 0, correct: 0, studied: false };
    pt.studied = !!val;
    state.perTopic[topicId] = pt;
    persist();
  }

  function saveSimulacro(result) {
    state.simulacros.unshift(result);
    if (state.simulacros.length > 30) state.simulacros.pop();
    markStudiedToday();
    persist();
  }

  /* ---------- Preguntas guardadas para repasar ---------- */
  function isSaved(id) { return state.saved.indexOf(id) !== -1; }
  function toggleSaved(id) {
    const i = state.saved.indexOf(id);
    if (i === -1) state.saved.push(id); else state.saved.splice(i, 1);
    persist();
    return isSaved(id);
  }
  function savedQuestions() {
    const all = window.PAA_QUESTIONS || [];
    const byId = {};
    all.forEach(function (q) { byId[q.id] = q; });
    return state.saved.map(function (id) { return byId[id]; }).filter(Boolean);
  }
  function savedCount() { return state.saved.length; }

  /* ---------- Cronómetro de estudio ----------
     Cuenta SOLO cuando una práctica/simulacro está activa. Lo controlan
     las vistas de quiz (start al entrar a las preguntas, stop al salir/pausar). */
  const Timer = (function () {
    let running = false, last = 0, raf = null;
    function tick() {
      if (!running) return;
      const now = Date.now();
      const dt = (now - last) / 1000;
      last = now;
      state.totalSeconds += dt;
      const t = todayKey();
      const h = state.history[t] || { minutes: 0, questions: 0, correct: 0 };
      h.minutes += dt / 60;
      state.history[t] = h;
      if (Math.floor(state.totalSeconds) % 15 === 0) persist();
      raf = setTimeout(tick, 1000);
    }
    function start() {
      if (running) return;
      running = true; last = Date.now(); tick();
    }
    function stop() {
      running = false;
      if (raf) clearTimeout(raf);
      persist();
    }
    function isRunning() { return running; }
    return { start, stop, isRunning };
  })();

  /* ---------- Sincronización con JSONBin ---------- */
  async function pull() {
    if (!CFG.sync.enabled || state.isGuest) return false;
    try {
      const res = await fetch(`${CFG.sync.base}/${CFG.sync.binId}/latest`, {
        headers: { "X-Access-Key": CFG.sync.accessKey, "X-Bin-Meta": "false" }
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      const remote = data && data[CFG.sync.namespace];
      if (remote && typeof remote === "object") {
        const keepUser = state.user, keepGuest = state.isGuest;
        if (!remote.totalSeconds || remote.totalSeconds >= state.totalSeconds) {
          state = migrate(Object.assign(emptyState(), remote));
        }
        state.user = keepUser; state.isGuest = keepGuest;
        state.lastSync = new Date().toISOString();
        persist();
        return true;
      }
      return false;
    } catch (e) {
      console.warn("Sync (pull) falló:", e.message);
      return false;
    }
  }

  async function push() {
    if (!CFG.sync.enabled || state.isGuest) return false;
    try {
      let record = {};
      try {
        const cur = await fetch(`${CFG.sync.base}/${CFG.sync.binId}/latest`, {
          headers: { "X-Access-Key": CFG.sync.accessKey, "X-Bin-Meta": "false" }
        });
        if (cur.ok) record = await cur.json() || {};
      } catch (_) { record = {}; }

      const payload = Object.assign({}, state);
      delete payload.user; delete payload.isGuest;
      record[CFG.sync.namespace] = payload;

      const res = await fetch(`${CFG.sync.base}/${CFG.sync.binId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", "X-Access-Key": CFG.sync.accessKey },
        body: JSON.stringify(record)
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      state.lastSync = new Date().toISOString();
      persist();
      return true;
    } catch (e) {
      console.warn("Sync (push) falló:", e.message);
      return false;
    }
  }

  /* ---------- Sesión ---------- */
  function login(username) { state.isGuest = false; state.user = username || CFG.defaultUser; persist(); }
  function guest() { state.isGuest = true; state.user = "Invitado"; persist(); }
  function logout() { Timer.stop(); state = emptyState(); persist(); }

  /* ---------- Setters varios ---------- */
  function setExam(dateKey, name) {
    state.examDate = dateKey || state.examDate;
    if (name) state.examName = name;
    persist();
  }
  function toggleSound() { state.settings.sound = !state.settings.sound; persist(); return state.settings.sound; }

  /* ---------- Estadísticas ---------- */
  function accuracy() {
    return state.questionsAnswered ? Math.round(100 * state.correctAnswers / state.questionsAnswered) : 0;
  }
  function topicMastery(topicId) {
    const pt = state.perTopic[topicId];
    if (!pt || !pt.answered) return 0;
    return Math.round(100 * pt.correct / pt.answered);
  }
  function studiedTopicsCount() {
    return window.PAA_TOPICS.filter(t => {
      const pt = state.perTopic[t.id];
      return pt && (pt.studied || pt.answered >= 5);
    }).length;
  }
  function totalMinutes() { return Math.floor(state.totalSeconds / 60); }

  return {
    get: () => state,
    persist, todayKey, daysBetween,
    daysUntilExam, msUntilExam, setExam,
    markStudiedToday, currentStreak, studiedToday,
    recordAnswer, setTopicStudied, saveSimulacro,
    isSaved, toggleSaved, savedQuestions, savedCount,
    Timer, pull, push,
    login, guest, logout, toggleSound,
    accuracy, topicMastery, studiedTopicsCount, totalMinutes
  };
})();
