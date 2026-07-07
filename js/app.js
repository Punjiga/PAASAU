/* ============================================================
   PAASAU — Lógica principal de la aplicación
   Auth · navegación · vistas · motor de quizzes · sonidos · plan
   ============================================================ */
(function () {
  "use strict";

  var CFG = window.PAA_CONFIG;
  var TOPICS = window.PAA_TOPICS;
  var TOPIC_BY_ID = window.PAA_TOPIC_BY_ID;
  var DOMAINS = window.PAA_DOMAINS;
  var QUESTIONS = window.PAA_QUESTIONS;
  var Q_BY_TOPIC = window.PAA_QUESTIONS_BY_TOPIC;

  var state = Store.get();
  var current = "inicio";
  var liveTicker = null;
  var pushTimer = null;
  var quizActive = false, quizPaused = false, heroCountdown = null;

  /* ============================================================
     UTILIDADES
     ============================================================ */
  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    attrs = attrs || {};
    for (var k in attrs) {
      if (!Object.prototype.hasOwnProperty.call(attrs, k)) continue;
      var v = attrs[k];
      if (k === "class") n.className = v;
      else if (k === "html") n.innerHTML = v;
      else if (k === "text") n.textContent = v;
      else if (k.indexOf("on") === 0 && typeof v === "function") {
        n.addEventListener(k.slice(2).toLowerCase(), v);
      } else if (v === true) n.setAttribute(k, "");
      else if (v !== false && v != null) n.setAttribute(k, v);
    }
    if (children == null) children = [];
    if (!Array.isArray(children)) children = [children];
    children.forEach(function (c) {
      if (c == null || c === false) return;
      n.appendChild(typeof c === "string" || typeof c === "number"
        ? document.createTextNode(String(c)) : c);
    });
    return n;
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // ----- Render de matemática (fracciones y división) -----
  // Escapa HTML y convierte marcas a notación clara, para que no haya confusión:
  //   {{a/b}}  -> fracción apilada (a sobre b, con su rayita)
  //   ÷        -> ya se escribe directo en el texto para las divisiones
  // Ejemplos:  "{{2/5}} del libro"  ·  "{{5·4/2}}"  ·  "180 ÷ 6 = 30"
  function escapeHTML(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function mathHTML(s) {
    var out = escapeHTML(s);
    out = out.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    out = out.replace(/\*(.*?)\*/g, '<i>$1</i>');
    out = out.replace(/\n\s*-\s+(.*?)(?=\n|$)/g, '<br>&bull; $1');
    out = out.replace(/\n/g, '<br>');
    out = out.replace(/\{\{\s*([^{}]+?)\s*\/\s*([^{}]+?)\s*\}\}/g, function (_, n, d) {
      return '<span class="frac"><span class="fr-n">' + n + '</span><span class="fr-d">' + d + '</span></span>';
    });
    return out;
  }

  // Selección con sesgo de dificultad: mayoría difícil/media + 1 fácil de calentamiento.
  // Así la práctica "sabe a examen" sin sentirse obvia, pero arranca suave (no abruma).
  function pickMix(pool, n) {
    pool = pool.slice();
    if (n >= pool.length) return shuffle(pool);
    var by = { 1: [], 2: [], 3: [] };
    shuffle(pool).forEach(function (q) { (by[q.dif] || by[2]).push(q); });
    var out = [];
    if (n >= 4) { var warm = by[1].length ? by[1] : (by[2].length ? by[2] : by[3]); if (warm.length) out.push(warm.shift()); }
    var need = n - out.length;
    var n3 = Math.min(by[3].length, Math.round(need * 0.6));
    var n2 = Math.min(by[2].length, need - n3);
    for (var i = 0; i < n3; i++) out.push(by[3].shift());
    for (var j = 0; j < n2; j++) out.push(by[2].shift());
    var rest = by[3].concat(by[2]).concat(by[1]);
    while (out.length < n && rest.length) out.push(rest.shift());
    return shuffle(out);
  }

  function clamp(x, lo, hi) { return Math.max(lo, Math.min(hi, x)); }

  function fmtClock(totalSec) {
    totalSec = Math.max(0, Math.floor(totalSec));
    var h = Math.floor(totalSec / 3600);
    var m = Math.floor((totalSec % 3600) / 60);
    var s = totalSec % 60;
    var mm = String(m).padStart(2, "0");
    var ss = String(s).padStart(2, "0");
    return h > 0 ? h + ":" + mm + ":" + ss : mm + ":" + ss;
  }

  function fmtStudyTime(totalSec) {
    var m = Math.floor(totalSec / 60);
    if (m < 60) return m + " min";
    var h = Math.floor(m / 60);
    var rem = m % 60;
    return h + " h " + (rem ? rem + " min" : "");
  }

  // Reloj con etiqueta (puntito de color + nombre + tiempo). set(seg, peligro).
  function makeTimerChip(label, cls) {
    var box = el("div", { class: "tmr " + cls });
    box.appendChild(el("span", { class: "tmr-dot" }));
    var t = el("span", { class: "tmr-time", text: fmtClock(0) });
    box.appendChild(el("div", { class: "tmr-info" }, [el("span", { class: "tmr-lbl", text: label }), t]));
    return { el: box, set: function (sec, danger) { t.textContent = fmtClock(Math.max(0, sec)); box.classList.toggle("danger", !!danger); } };
  }

  /* Iconos (SVG en línea, estilo lineal) */
  function icon(name) {
    var p = {
      inicio: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>',
      diaria: '<path d="M12 3v18"/><path d="M5 8l7-5 7 5"/><circle cx="12" cy="14" r="4"/>',
      libre: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
      temas: '<path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h10"/>',
      simulacros: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>',
      progreso: '<path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16l3-4 3 2 4-6"/>',
      ajustes: '<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.5-2.4 1a7 7 0 0 0-1.7-1L14.5 2h-5l-.3 2.5a7 7 0 0 0-1.7 1l-2.4-1-2 3.5L2.6 11a7 7 0 0 0 0 2l-2 1.5 2 3.5 2.4-1a7 7 0 0 0 1.7 1L9.5 22h5l.3-2.5a7 7 0 0 0 1.7-1l2.4 1 2-3.5-2-1.5a7 7 0 0 0 .1-1z"/>',
      flame: '<path d="M12 2c1 3-2 4-2 7a2 2 0 0 0 4 0c0-1 0-1 0-1 2 2 3 4 3 6a5 5 0 0 1-10 0c0-3 3-5 5-12z"/>',
      check: '<path d="M5 12l5 5 9-11"/>',
      lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
      play: '<path d="M7 5l11 7-11 7z"/>',
      sync: '<path d="M4 9a8 8 0 0 1 14-3l2 2"/><path d="M20 15a8 8 0 0 1-14 3l-2-2"/><path d="M20 4v4h-4"/><path d="M4 20v-4h4"/>',
      logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/>',
      arrow: '<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>',
      back: '<path d="M19 12H5"/><path d="M11 18l-6-6 6-6"/>',
      clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
      target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
      bookmark: '<path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z"/>',
      pause: '<rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/>',
      heart: '<path d="M12 21s-7-4.6-9.4-8.4A5 5 0 0 1 12 6.5 5 5 0 0 1 21.4 12.6C19 16.4 12 21 12 21z"/>',
      consejos: '<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.8 10.6c.5.4.8 1 .8 1.6v.8h6v-.8c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3z"/>',
      material: '<path d="M4 19V5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z"/><path d="M8 3v13"/><path d="M11 7h5M11 10h5"/>',
      tablas: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>'
    };
    var svg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ' +
      'stroke-linecap="round" stroke-linejoin="round">' + (p[name] || "") + "</svg>";
    var span = document.createElement("span");
    span.className = "ic";
    span.innerHTML = svg;
    return span;
  }

  /* ============================================================
     SONIDO (Web Audio API)
     ============================================================ */
  var Sound = (function () {
    var ctx = null;
    function ensure() {
      if (!ctx) {
        try { ctx = new (window.AudioContext || window.webkitAudioContext)(); }
        catch (e) { ctx = null; }
      }
      if (ctx && ctx.state === "suspended") ctx.resume();
      return ctx;
    }
    function on() { return Store.get().settings.sound; }
    function beep(freq, dur, type, gain, when) {
      var c = ensure(); if (!c) return;
      when = when || 0;
      var o = c.createOscillator();
      var g = c.createGain();
      o.type = type || "sine";
      o.frequency.value = freq;
      var t0 = c.currentTime + when;
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(gain || 0.12, t0 + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      o.connect(g); g.connect(c.destination);
      o.start(t0); o.stop(t0 + dur + 0.02);
    }
    return {
      unlock: function () { ensure(); },
      click: function () { if (on()) beep(420, 0.05, "triangle", 0.05); },
      tick: function () { if (on()) beep(700, 0.04, "square", 0.04); },
      correct: function () { if (!on()) return; beep(660, 0.12, "sine", 0.1, 0); beep(880, 0.16, "sine", 0.1, 0.1); },
      wrong: function () { if (!on()) return; beep(200, 0.18, "sawtooth", 0.09, 0); beep(150, 0.22, "sawtooth", 0.08, 0.08); },
      celebrate: function () {
        if (!on()) return;
        [523, 659, 784, 1046].forEach(function (f, i) { beep(f, 0.18, "triangle", 0.09, i * 0.09); });
      }
    };
  })();

  /* ============================================================
     CONFETI (DOM ligero)
     ============================================================ */
  function confetti(n) {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    n = n || 80;
    var colors = ["#2EE6A6", "#FF9F43", "#C792EA", "#4DA3FF", "#FFD166", "#FF6B6B"];
    var layer = el("div", { class: "confetti-layer" });
    for (var i = 0; i < n; i++) {
      var piece = el("i");
      var c = colors[Math.floor(Math.random() * colors.length)];
      piece.style.left = Math.random() * 100 + "%";
      piece.style.background = c;
      piece.style.animationDelay = (Math.random() * 0.3) + "s";
      piece.style.animationDuration = (1.1 + Math.random() * 0.9) + "s";
      piece.style.transform = "rotate(" + (Math.random() * 360) + "deg)";
      layer.appendChild(piece);
    }
    document.body.appendChild(layer);
    setTimeout(function () { layer.remove(); }, 2600);
  }

  /* ============================================================
     BANCO DE PREGUNTAS / FILTROS
     ============================================================ */
  // Invitado: ve una MUESTRA (~20%) del banco, repartida por tema.
  // Con sesión iniciada (login) ve todo. El simulacro completo queda para login.
  var GUEST_IDS = (function () {
    var set = {}, byTopic = {};
    QUESTIONS.forEach(function (q) { (byTopic[q.topic] = byTopic[q.topic] || []).push(q.id); });
    Object.keys(byTopic).forEach(function (t) {
      var ids = byTopic[t].slice().sort();
      var keep = Math.max(1, Math.round(ids.length * (CFG.guestQuestionRatio || 0.2)));
      for (var i = 0; i < keep; i++) set[ids[Math.floor(i * ids.length / keep)]] = true;
    });
    return set;
  })();
  function guestFilter(qs) {
    if (!state.isGuest) return qs;
    return qs.filter(function (q) { return GUEST_IDS[q.id]; });
  }
  function poolForTopic(id) { return (Q_BY_TOPIC[id] || []).slice(); }

  /* ---- Mezcla de opciones (anti-sesgo + realismo) ----
     Devuelve una copia de la pregunta con las opciones en orden aleatorio
     y el índice de la respuesta recalculado. El topic/dominio no cambian. */
  function shuffleOptions(q) {
    var base = q.opts.map(function (_, i) { return i; });
    var order = shuffle(base);
    if (q.opts.length > 1) {
      var tries = 0;
      while (order.every(function (v, i) { return v === i; }) && tries < 8) { order = shuffle(base); tries++; }
    }
    var newOpts = order.map(function (i) { return q.opts[i]; });
    var newAns = order.indexOf(q.ans);
    var copy = {};
    for (var k in q) { if (Object.prototype.hasOwnProperty.call(q, k)) copy[k] = q[k]; }
    copy.opts = newOpts;
    copy.ans = newAns;
    return copy;
  }
  // Prepara una lista de preguntas para un quiz/simulacro: mezcla sus opciones.
  function prepare(list) { return list.map(shuffleOptions); }

  /* ============================================================
     PLAN DE ESTUDIO
     ============================================================ */
  function priorityList() {
    return TOPICS.map(function (t) {
      var pt = state.perTopic[t.id] || { answered: 0, correct: 0, studied: false };
      var mastery = pt.answered ? pt.correct / pt.answered : 0;
      var score = 0;
      if (!pt.studied && pt.answered < 5) score -= 100; // sin estudiar = prioridad alta
      score += mastery * 60;                            // más débil primero
      score += Math.min(pt.answered, 20);               // menos practicado primero
      return { topic: t, pt: pt, mastery: mastery, score: score };
    }).sort(function (a, b) { return a.score - b.score; });
  }

  function planPreview(days) {
    var pr = priorityList();
    var out = [];
    var today = new Date();
    for (var i = 0; i < days; i++) {
      var d = new Date(today.getTime() + i * 86400000);
      var item = pr[i % pr.length];
      out.push({
        dateKey: Store.todayKey(d),
        date: d,
        topic: item.topic,
        isToday: i === 0
      });
    }
    return out;
  }

  function buildDailyQuiz() {
    var pr = priorityList();
    var focus = pr[0].topic;
    var qs = guestFilter(poolForTopic(focus.id));
    var i = 1;
    while (qs.length < CFG.dailyQuizSize && i < pr.length) {
      var extra = guestFilter(poolForTopic(pr[i].topic.id)).filter(function (q) {
        return qs.indexOf(q) === -1;
      });
      qs = qs.concat(extra);
      i++;
    }
    qs = pickMix(qs, CFG.dailyQuizSize);
    return { focus: focus, questions: qs };
  }

  /* ============================================================
     NAVEGACIÓN
     ============================================================ */
  var ROUTES = [
    { id: "inicio", label: "Inicio", render: renderInicio },
    { id: "diaria", label: "Práctica diaria", render: renderDiaria },
    { id: "libre", label: "Práctica libre", render: renderLibre },
    { id: "tablas", label: "Tablas", render: renderTablas },
    { id: "temas", label: "Temas", render: renderTemas },
    { id: "consejos", label: "Consejos", render: renderConsejos },
    { id: "material", label: "Material", render: renderMaterial },
    { id: "simulacros", label: "Simulacros", render: renderSimulacros },
    { id: "progreso", label: "Progreso", render: renderProgreso },
    { id: "ajustes", label: "Ajustes", render: renderAjustes },
    { id: "apoyo", label: "Apoyar", render: renderApoyo, hidden: true }
  ];
  // En modo invitado, estas secciones están bloqueadas (en desarrollo).
  var GUEST_LOCKED = { libre: 1, temas: 1, simulacros: 1, progreso: 1 };

  function buildNav() {
    ["nav-desktop", "nav-mobile"].forEach(function (navId) {
      var nav = document.getElementById(navId);
      if (!nav) return;
      nav.innerHTML = "";
      ROUTES.filter(function (r) { return !r.hidden; }).forEach(function (r) {
        var btn = el("button", {
          class: "nav-item" + (r.id === current ? " active" : ""),
          "data-route": r.id,
          onclick: function () { go(r.id); }
        }, [icon(r.id), el("span", { class: "nav-label", text: r.label })]);
        nav.appendChild(btn);
      });
    });
  }

  function refreshNav() {
    var items = document.querySelectorAll(".nav-item");
    items.forEach(function (it) {
      it.classList.toggle("active", it.getAttribute("data-route") === current);
    });
  }

  function mount(node, withBanner) {
    var view = document.getElementById("view");
    view.innerHTML = "";
    if (withBanner && state.isGuest) view.appendChild(devBanner());
    var inner = el("div", { class: "view-inner" }, [node]);
    view.appendChild(inner);
    window.scrollTo(0, 0);
    view.scrollTop = 0;
  }

  function go(routeId) {
    current = routeId;
    Sound.click();
    var route = ROUTES.find(function (r) { return r.id === routeId; });
    if (state.isGuest && GUEST_LOCKED[routeId]) {
      mount(lockView(route.label), false);
    } else {
      mount(route.render(), true);
    }
    refreshNav();
  }

  function devBanner() {
    return el("div", { class: "dev-banner", onclick: function () { go("ajustes"); } }, [
      icon("lock"),
      el("div", {}, [
        el("strong", { text: "Muestra (20%) · en desarrollo. " }),
        el("span", { text: "Estás viendo una parte del contenido. Iniciá sesión para acceder a todo PAASAU." })
      ])
    ]);
  }

  /* ============================================================
     BARRA SUPERIOR (cuenta regresiva + racha)
     ============================================================ */
  function refreshTopbar() {
    var days = Store.daysUntilExam();
    var cd = document.getElementById("tb-countdown");
    if (cd) {
      if (days == null) {
        cd.innerHTML = "";
        cd.appendChild(icon("clock"));
        cd.appendChild(el("span", { text: "Definí la fecha del examen" }));
      } else {
        var label = days > 1 ? "días" : (days === 1 ? "día" : (days === 0 ? "¡es hoy!" : "ya pasó"));
        cd.innerHTML = "";
        cd.appendChild(icon("clock"));
        if (days >= 0) {
          cd.appendChild(el("span", { class: "chip-num", text: String(days) }));
          cd.appendChild(el("span", { text: "Quedan " }));
          cd.lastChild.textContent = days === 0 ? "" : "Quedan ";
          cd.appendChild(el("span", { text: label }));
        } else {
          cd.appendChild(el("span", { text: "El examen ya pasó" }));
        }
      }
    }
    var st = document.getElementById("tb-streak");
    if (st) {
      var s = Store.currentStreak();
      st.innerHTML = "";
      var flame = icon("flame");
      flame.classList.add("flame");
      if (s > 0) flame.classList.add("flame-on");
      st.appendChild(flame);
      st.appendChild(el("span", { class: "chip-num", text: String(s) }));
      st.appendChild(el("span", { text: s === 1 ? "día" : "días" }));
    }
  }

  /* ============================================================
     VISTA · INICIO (panel)
     ============================================================ */
  function ring(percent, color, label, sublabel) {
    var R = 34, C = 2 * Math.PI * R;
    var off = C * (1 - clamp(percent, 0, 100) / 100);
    var wrap = el("div", { class: "ring" });
    wrap.innerHTML =
      '<svg viewBox="0 0 80 80">' +
      '<circle cx="40" cy="40" r="' + R + '" class="ring-bg"/>' +
      '<circle cx="40" cy="40" r="' + R + '" class="ring-fg" style="stroke:' + color +
      ';stroke-dasharray:' + C.toFixed(1) + ';stroke-dashoffset:' + off.toFixed(1) + '"/>' +
      '<text x="40" y="45" text-anchor="middle" class="ring-num">' + Math.round(percent) + '%</text>' +
      '</svg>';
    wrap.appendChild(el("div", { class: "ring-label", text: label }));
    if (sublabel) wrap.appendChild(el("div", { class: "ring-sub muted", text: sublabel }));
    return wrap;
  }

  function renderCountdownInto(node) {
    // Días = MISMO número que la barra superior (días de calendario hasta el examen).
    // Horas/min/seg = tiempo hasta la próxima medianoche, cuando ese número baja en 1.
    var d = Store.daysUntilExam();
    if (d == null || d < 0) return;
    var ms = Store.msUntilNextMidnight();
    if (ms < 0) ms = 0;
    var totalSec = Math.floor(ms / 1000);
    var h = Math.floor(totalSec / 3600);
    var m = Math.floor((totalSec % 3600) / 60);
    var sec = totalSec % 60;
    var units = [[d, d === 1 ? "día" : "días"], [h, "horas"], [m, "min"], [sec, "seg"]];
    var prev = node._cd || [];
    node.innerHTML = "";
    units.forEach(function (u, i) {
      var box = el("div", { class: "cd-unit" });
      var num = el("div", { class: "cd-num", text: String(u[0]).padStart(2, "0") });
      if (prev[i] !== u[0]) num.classList.add("tick");
      box.appendChild(num);
      box.appendChild(el("div", { class: "cd-lbl muted", text: u[1] }));
      node.appendChild(box);
    });
    node._cd = units.map(function (u) { return u[0]; });
  }
  function startCountdown(node) {
    if (heroCountdown) { clearInterval(heroCountdown); heroCountdown = null; }
    renderCountdownInto(node);
    heroCountdown = setInterval(function () {
      if (!document.body.contains(node)) { clearInterval(heroCountdown); heroCountdown = null; return; }
      renderCountdownInto(node);
    }, 1000);
  }

  function renderInicio() {
    var frag = el("div", { class: "dash" });

    // Héroe: cuenta regresiva
    var days = Store.daysUntilExam();
    var hero = el("div", { class: "card count-hero" });
    if (days == null) {
      hero.appendChild(el("div", { class: "count-label", text: state.examName }));
      hero.appendChild(el("div", { class: "count-num", text: "—" }));
      hero.appendChild(el("div", { class: "count-sub muted", text: "Definí la fecha de tu examen en Ajustes para activar la cuenta regresiva." }));
      hero.appendChild(el("button", { class: "btn btn-primary", style: "margin-top:14px", onclick: function () { go("ajustes"); } }, "Definir fecha"));
    } else {
      hero.appendChild(el("div", { class: "count-label", text: state.examName }));
      if (days < 0) {
        hero.appendChild(el("div", { class: "count-num", text: "\u2014" }));
        hero.appendChild(el("div", { class: "count-sub", text: "El examen ya pasó. Actualizá la fecha en Ajustes." }));
      } else {
        var cdWrap = el("div", { class: "countdown", id: "hero-countdown" });
        hero.appendChild(cdWrap);
        hero.appendChild(el("div", { class: "count-sub", text: days === 0 ? "¡Es hoy! Respirá y confiá en lo que practicaste." : "para tu examen" }));
        startCountdown(cdWrap);
      }
    }
    frag.appendChild(hero);

    // CTA del día + racha
    var grid2 = el("div", { class: "dash-2" });

    var daily = buildDailyQuiz();
    var ctaCard = el("div", { class: "card cta" });
    ctaCard.appendChild(el("div", { class: "cta-eyebrow muted", text: "Tu enfoque de hoy" }));
    ctaCard.appendChild(el("div", { class: "cta-title", text: daily.focus.name }));
    var dom = DOMAINS[daily.focus.domain];
    ctaCard.appendChild(el("span", { class: "pill pill-" + daily.focus.domain, text: dom.short }));
    ctaCard.appendChild(el("p", { class: "cta-desc muted", text: Store.studiedToday()
      ? "Ya estudiaste hoy, ¡seguí así! Podés reforzar este tema cuando querás."
      : "Una sesión corta hoy mantiene tu racha viva. Empezá con una lección y unas preguntas." }));
    var ctaBtn = el("button", { class: "btn btn-cta", onclick: startDaily }, [icon("play"), el("span", { text: "Empezar práctica del día" })]);
    ctaCard.appendChild(ctaBtn);
    grid2.appendChild(ctaCard);

    // Racha
    var streak = Store.currentStreak();
    var streakCard = el("div", { class: "card streak-card" });
    streakCard.appendChild(el("div", { class: "card-sub muted", text: "Racha actual" }));
    var flameWrap = el("div", { class: "streak-flame-wrap" });
    var fl = icon("flame"); fl.classList.add("flame-big"); if (streak > 0) fl.classList.add("flame-on");
    flameWrap.appendChild(fl);
    flameWrap.appendChild(el("div", { class: "streak-big", text: String(streak) }));
    streakCard.appendChild(flameWrap);
    streakCard.appendChild(el("div", { class: "muted", text: streak === 1 ? "día seguido" : "días seguidos" }));
    streakCard.appendChild(el("div", { class: "streak-record muted", text: "Récord: " + state.streak.longest + (state.streak.longest === 1 ? " día" : " días") }));
    grid2.appendChild(streakCard);

    frag.appendChild(grid2);

    // Anillos de progreso
    var rings = el("div", { class: "card rings-card" });
    rings.appendChild(el("div", { class: "card-title", text: "Tu progreso" }));
    var ringRow = el("div", { class: "rings" });
    var studied = Store.studiedTopicsCount();
    ringRow.appendChild(ring(Store.accuracy(), "var(--brand)", "Aciertos", state.questionsAnswered + " resueltas"));
    ringRow.appendChild(ring(100 * studied / TOPICS.length, "var(--verbal)", "Temas vistos", studied + " de " + TOPICS.length));
    var simBest = state.simulacros.length ? Math.max.apply(null, state.simulacros.map(function (s) { return Math.round(100 * s.score / s.total); })) : 0;
    ringRow.appendChild(ring(simBest, "var(--math)", "Mejor simulacro", state.simulacros.length + " hechos"));
    rings.appendChild(ringRow);

    var stats = el("div", { class: "stat-row" });
    stats.appendChild(stat(fmtStudyTime(state.totalSeconds), "tiempo total", "live-total"));
    stats.appendChild(stat(String(state.questionsAnswered), "preguntas"));
    stats.appendChild(stat(String(state.correctAnswers), "correctas"));
    rings.appendChild(stats);
    frag.appendChild(rings);

    // Apoyar el proyecto
    var supportCta = el("div", { class: "card support-cta" });
    supportCta.appendChild(el("div", { class: "support-cta-info" }, [
      el("div", { class: "card-title", text: "Apoyá PAASAU" }),
      el("div", { class: "muted", text: "Proyecto en desarrollo. Si te sirve, dale una manita 💚" })
    ]));
    supportCta.appendChild(el("button", { class: "btn btn-soft", onclick: function () { go("apoyo"); } }, [icon("heart"), el("span", { text: "Cómo apoyar" })]));
    frag.appendChild(supportCta);

    // Aviso TEC
    var tecNote = el("div", { class: "card tec-note" });
    tecNote.appendChild(el("div", { class: "tec-emoji", text: "🛠️" }));
    tecNote.appendChild(el("div", {}, [
      el("div", { class: "card-title", text: "¿Vas para el TEC?" }),
      el("div", { class: "muted", text: "PAASAU está enfocado en la PAA (UCR y UNA). El examen del TEC es distinto: usa un razonamiento matemático más avanzado y con un enfoque algo diferente (aunque comparte algunas cosas con la PAA). Por eso una versión para el TEC viene pronto, bien hecha. Mientras tanto, practicar verbal y matemática acá te da una base que igual te ayuda muchísimo." })
    ]));
    frag.appendChild(tecNote);

    // Puntos débiles (recomendación persistente de estudio)
    var weakCard = weakTopicsCard();
    if (weakCard) frag.appendChild(weakCard);

    // Vista previa del plan
    if (days != null && days > 0) {
      var planCard = el("div", { class: "card" });
      planCard.appendChild(el("div", { class: "card-title", text: "Plan sugerido" }));
      planCard.appendChild(el("div", { class: "card-sub muted", text: "Temas priorizados según lo que más necesitás reforzar." }));
      var list = el("div", { class: "plan-list" });
      planPreview(Math.min(7, days + 1)).forEach(function (d, idx) {
        var dayName = idx === 0 ? "Hoy" : d.date.toLocaleDateString("es-CR", { weekday: "short", day: "numeric" });
        var row = el("div", { class: "plan-day" + (idx === 0 ? " plan-today" : "") });
        var dot = el("span", { class: "plan-dot" }); dot.style.background = "var(--" + d.topic.domain + ")";
        row.appendChild(dot);
        row.appendChild(el("span", { class: "plan-date", text: dayName }));
        row.appendChild(el("span", { class: "plan-topic", text: d.topic.name }));
        row.appendChild(el("span", { class: "pill pill-" + d.topic.domain, text: DOMAINS[d.topic.domain].short }));
        list.appendChild(row);
      });
      planCard.appendChild(list);
      frag.appendChild(planCard);
    }

    startLiveTicker();
    return frag;
  }

  function stat(num, label, id) {
    var s = el("div", { class: "stat" });
    s.appendChild(el("div", { class: "stat-num", id: id || null, text: num }));
    s.appendChild(el("div", { class: "stat-label muted", text: label }));
    return s;
  }

  function startLiveTicker() {
    if (liveTicker) clearInterval(liveTicker);
    liveTicker = setInterval(function () {
      var node = document.getElementById("live-total");
      if (!node) return;
      node.textContent = fmtStudyTime(Store.get().totalSeconds);
    }, 1000);
  }

  /* ============================================================
     VISTA · PRÁCTICA DIARIA
     ============================================================ */
  function renderDiaria() {
    var frag = el("div", {});
    frag.appendChild(pageHead("Práctica diaria", "Una lección corta y unas preguntas del tema que hoy más te conviene."));

    var daily = buildDailyQuiz();
    var t = daily.focus;
    var card = el("div", { class: "card lesson" });
    card.appendChild(el("span", { class: "pill pill-" + t.domain, text: DOMAINS[t.domain].short }));
    card.appendChild(el("h2", { class: "lesson-title", text: t.name }));
    card.appendChild(el("p", { class: "lesson-body", text: t.teoria }));
    if (t.svg) { var lsv = el("div", { class: "lesson-svg" }); lsv.innerHTML = t.svg; card.appendChild(lsv); }
    card.appendChild(el("button", { class: "btn btn-cta", onclick: startDaily }, [icon("play"), el("span", { text: "Practicar este tema (" + daily.questions.length + " preguntas)" })]));
    frag.appendChild(card);

    // Otros temas débiles
    var weak = priorityList().slice(0, 4);
    var wc = el("div", { class: "card" });
    wc.appendChild(el("div", { class: "card-title", text: "También conviene repasar" }));
    var wl = el("div", { class: "weak-list" });
    weak.forEach(function (w) {
      var row = el("button", { class: "weak-row", onclick: function () { practiceTopic(w.topic); } });
      var dot = el("span", { class: "plan-dot" }); dot.style.background = "var(--" + w.topic.domain + ")";
      row.appendChild(dot);
      row.appendChild(el("span", { class: "weak-name", text: w.topic.name }));
      row.appendChild(el("span", { class: "weak-mastery muted", text: w.pt.answered ? Store.topicMastery(w.topic.id) + "%" : "nuevo" }));
      row.appendChild(icon("arrow"));
      wl.appendChild(row);
    });
    wc.appendChild(wl);
    frag.appendChild(wc);

    return frag;
  }

  function startDaily() {
    Sound.click();
    var daily = buildDailyQuiz();
    if (!daily.questions.length) { alert("No hay preguntas disponibles."); return; }
    practiceQuiz(daily.questions, {
      title: "Práctica del día",
      subtitle: daily.focus.name,
      focusTopic: daily.focus
    });
  }

  function practiceTopic(topic, count) {
    Sound.click();
    var qs = guestFilter(poolForTopic(topic.id));
    if (!qs.length) { alert("Este tema todavía no tiene preguntas."); return; }
    practiceQuiz(shuffle(qs).slice(0, count || 10), { title: "Práctica", subtitle: topic.name, focusTopic: topic });
  }

  function practiceSaved() {
    Sound.click();
    var qs = Store.savedQuestions();
    if (!qs.length) { alert("Todav\u00eda no guardaste preguntas. Tocá Guardar en una pregunta para repasarla luego."); return; }
    practiceQuiz(shuffle(qs.slice()), { title: "Repaso de guardadas", subtitle: qs.length + " preguntas guardadas" });
  }

  /* ============================================================
     VISTA · PRÁCTICA LIBRE
     ============================================================ */
  var libreSel = { domain: "verbal", topic: null, count: 10, timed: false };
  function renderLibre() {
    var frag = el("div", {});
    frag.appendChild(pageHead("Práctica libre", "Elegí qué practicar y cuántas preguntas. Sin presión, a tu ritmo."));

    var card = el("div", { class: "card picker" });

    // Mezcla rápida
    var quick = el("div", { class: "quick-mix" });
    quick.appendChild(el("div", {}, [
      el("div", { class: "card-title", text: "Mezcla rápida" }),
      el("div", { class: "muted", text: "10 preguntas variadas de todo el temario." })
    ]));
    quick.appendChild(el("button", { class: "btn btn-primary", onclick: function () {
      Sound.click();
      var qs = pickMix(guestFilter(QUESTIONS.slice()), 10);
      practiceQuiz(qs, { title: "Mezcla rápida", subtitle: "Temario completo" });
    } }, "Empezar"));
    card.appendChild(quick);

    var savedN = Store.savedCount();
    var savedRow = el("div", { class: "quick-mix" });
    savedRow.appendChild(el("div", {}, [
      el("div", { class: "card-title", text: "Preguntas guardadas" }),
      el("div", { class: "muted", text: savedN ? (savedN + " guardada" + (savedN === 1 ? "" : "s") + " para repasar.") : "Marcá preguntas con Guardar y repasalas acá." })
    ]));
    savedRow.appendChild(el("button", { class: "btn btn-soft" + (savedN ? "" : " disabled"), onclick: function () { if (savedN) practiceSaved(); } }, "Repasar"));
    card.appendChild(savedRow);

    card.appendChild(el("div", { class: "divider" }));

    // Selector por dominio
    card.appendChild(el("label", { class: "field-label", text: "Área" }));
    var segDom = el("div", { class: "seg" });
    ["verbal", "math", "ambas"].forEach(function (d) {
      var name = d === "ambas" ? "Ambas Áreas" : DOMAINS[d].name;
      var b = el("button", {
        class: "seg-btn" + (libreSel.domain === d ? " active" : ""),
        onclick: function () { libreSel.domain = d; libreSel.topic = null; Sound.click(); rerenderLibre(frag); }
      }, name);
      segDom.appendChild(b);
    });
    card.appendChild(segDom);

    // Selector de tema
    if (libreSel.domain !== "ambas") {
      card.appendChild(el("label", { class: "field-label", text: "Tema" }));
      var topicWrap = el("div", { class: "topic-chips" });
      TOPICS.filter(function (t) { return t.domain === libreSel.domain; }).forEach(function (t) {
        var avail = guestFilter(poolForTopic(t.id)).length;
        var b = el("button", {
          class: "chip-btn" + (libreSel.topic === t.id ? " active" : "") + (avail === 0 ? " disabled" : ""),
          onclick: function () { if (avail === 0) return; libreSel.topic = t.id; Sound.click(); rerenderLibre(frag); }
        }, t.name);
        topicWrap.appendChild(b);
      });
      card.appendChild(topicWrap);
    }

    // Cuántas preguntas hay disponibles para la selección actual
    var availPool = guestFilter(libreSel.topic
      ? poolForTopic(libreSel.topic)
      : (libreSel.domain === "ambas" ? QUESTIONS : QUESTIONS.filter(function (q) { return q.domain === libreSel.domain; })));
    var availN = availPool.length;

    // Cantidad
    card.appendChild(el("label", { class: "field-label", text: "Cantidad de preguntas" }));
    var segCount = el("div", { class: "seg seg-wrap" });
    CFG.practiceCounts.forEach(function (c) {
      var b = el("button", {
        class: "seg-btn" + (libreSel.count === c ? " active" : "") + (c > availN ? " disabled" : ""),
        title: c > availN ? "Solo hay " + availN + " disponibles" : "",
        onclick: function () { libreSel.count = c; Sound.click(); rerenderLibre(frag); }
      }, String(c));
      segCount.appendChild(b);
    });
    card.appendChild(segCount);

    // Cantidad personalizada
    var customWrap = el("div", { class: "custom-count" });
    var customInput = el("input", {
      class: "input input-num", type: "number", min: "1", max: String(Math.min(CFG.practiceCountMax, availN)),
      placeholder: "otra…", value: CFG.practiceCounts.indexOf(libreSel.count) === -1 ? String(libreSel.count) : ""
    });
    customInput.addEventListener("change", function () {
      var v = parseInt(customInput.value, 10);
      if (isNaN(v) || v < 1) return;
      libreSel.count = clamp(v, 1, Math.min(CFG.practiceCountMax, availN));
      Sound.click(); rerenderLibre(frag);
    });
    customWrap.appendChild(el("span", { class: "muted custom-label", text: "o escribí una cantidad:" }));
    customWrap.appendChild(customInput);
    customWrap.appendChild(el("span", { class: "muted custom-avail", text: "(hay " + availN + " disponibles)" }));
    card.appendChild(customWrap);

    // Tiempo (opcional, al ritmo del examen real)
    var perItem = CFG.secondsPerItem;
    var estMin = Math.max(1, Math.round(libreSel.count * perItem / 60));
    card.appendChild(el("label", { class: "field-label", text: "Tiempo" }));
    var timeRow = el("div", { class: "switch-row" });
    var tsw = el("button", {
      class: "switch" + (libreSel.timed ? " on" : ""),
      onclick: function () { libreSel.timed = !libreSel.timed; Sound.click(); rerenderLibre(frag); }
    }, el("span", { class: "switch-knob" }));
    timeRow.appendChild(tsw);
    timeRow.appendChild(el("span", { class: "switch-text", text: libreSel.timed
      ? ("Modo examen: termina al acabarse (~" + estMin + " min)")
      : "Sin límite (los relojes son solo guía)" }));
    card.appendChild(timeRow);
    card.appendChild(el("div", { class: "muted timer-hint", text: "Siempre verás dos relojes: el de la pregunta actual y el total, al ritmo del examen (~2:27 por pregunta)." }));

    // Empezar
    var startBtn = el("button", {
      class: "btn btn-cta", style: "margin-top:18px",
      onclick: function () {
        Sound.click();
        var pool = availPool.slice();
        if (!pool.length) { alert("No hay preguntas disponibles para esa selección."); return; }
        var n = Math.min(libreSel.count, pool.length);
        var qs = pickMix(pool, n);
        var label = libreSel.topic ? TOPIC_BY_ID[libreSel.topic].name : DOMAINS[libreSel.domain].name;
        practiceQuiz(qs, {
          title: "Práctica libre", subtitle: label,
          focusTopic: libreSel.topic ? TOPIC_BY_ID[libreSel.topic] : null,
          enforce: libreSel.timed
        });
      }
    }, [icon("play"), el("span", { text: "Empezar práctica" + (libreSel.timed ? " (" + estMin + " min)" : "") })]);
    card.appendChild(startBtn);

    frag.appendChild(card);
    return frag;
  }
  function rerenderLibre(oldFrag) { mount(renderLibre(), true); }

  /* ============================================================
     VISTA · TEMAS
     ============================================================ */
  function renderTemas() {
    var frag = el("div", {});
    frag.appendChild(pageHead("Temas", "Todo el temario de la PAA. Marcá lo que ya dominás y practicá lo que falta."));

    var cols = el("div", { class: "topic-cols" });
    ["verbal", "math"].forEach(function (dom) {
      var col = el("div", { class: "topic-col card" });
      var head = el("div", { class: "domain-h" });
      var dotc = el("span", { class: "domain-dot" }); dotc.style.background = "var(--" + dom + ")";
      head.appendChild(dotc);
      head.appendChild(el("span", { text: DOMAINS[dom].name }));
      col.appendChild(head);

      TOPICS.filter(function (t) { return t.domain === dom; }).forEach(function (t) {
        var pt = state.perTopic[t.id] || { answered: 0, correct: 0, studied: false };
        var mastery = pt.answered ? Store.topicMastery(t.id) : 0;
        var row = el("div", { class: "topic-row" });

        var top = el("div", { class: "topic-row-top" });
        var chk = el("button", {
          class: "chk" + (pt.studied ? " on" : ""),
          title: "Marcar como estudiado",
          onclick: function () {
            Sound.click();
            Store.setTopicStudied(t.id, !pt.studied);
            schedulePush();
            mount(renderTemas(), true);
          }
        });
        if (pt.studied) chk.appendChild(icon("check"));
        top.appendChild(chk);
        top.appendChild(el("span", { class: "topic-name", text: t.name }));
        top.appendChild(el("span", { class: "topic-pct muted", text: pt.answered ? mastery + "%" : "—" }));
        row.appendChild(top);

        var bar = el("div", { class: "bar" });
        var fill = el("div", { class: "bar-fill" });
        fill.style.width = (pt.answered ? mastery : 0) + "%";
        fill.style.background = "var(--" + dom + ")";
        bar.appendChild(fill);
        row.appendChild(bar);

        var actions = el("div", { class: "topic-actions" });
        actions.appendChild(el("button", { class: "btn btn-ghost btn-sm", onclick: function () { openLesson(t); } }, "Lección"));
        actions.appendChild(el("button", { class: "btn btn-soft btn-sm", onclick: function () { practiceTopic(t); } }, "Practicar"));
        row.appendChild(actions);

        col.appendChild(row);
      });
      cols.appendChild(col);
    });
    frag.appendChild(cols);
    return frag;
  }

  function openLesson(t) {
    Sound.click();
    var node = el("div", {});
    node.appendChild(backHead(t.name, function () { go("temas"); }));
    var card = el("div", { class: "card lesson" });
    card.appendChild(el("span", { class: "pill pill-" + t.domain, text: DOMAINS[t.domain].short }));
    card.appendChild(el("h2", { class: "lesson-title", text: t.name }));
    card.appendChild(el("p", { class: "lesson-body", text: t.teoria }));
    if (t.svg) { var lsv = el("div", { class: "lesson-svg" }); lsv.innerHTML = t.svg; card.appendChild(lsv); }
    card.appendChild(el("button", { class: "btn btn-cta", onclick: function () { practiceTopic(t); } }, [icon("play"), el("span", { text: "Practicar ahora" })]));
    node.appendChild(card);
    mount(node, false);
  }

  /* ============================================================
     VISTA · SIMULACROS
     ============================================================ */
  function lockCard(msg) {
    var card = el("div", { class: "card lock-card" });
    card.appendChild(icon("lock"));
    card.appendChild(el("h3", { class: "lock-title", text: "En desarrollo" }));
    card.appendChild(el("p", { class: "muted lock-text", text: (msg || "Esta sección todavía está en desarrollo.") + " Iniciá sesión para acceder a todo, o apoyá el proyecto para impulsarlo." }));
    var row = el("div", { class: "lock-actions" });
    row.appendChild(el("button", { class: "btn btn-cta", onclick: showLogin }, [icon("sync"), el("span", { text: "Iniciar sesión" })]));
    row.appendChild(el("button", { class: "btn btn-soft", onclick: function () { go("apoyo"); } }, [icon("heart"), el("span", { text: "Apoyar el proyecto" })]));
    row.appendChild(el("button", { class: "btn btn-ghost", onclick: function () { go("inicio"); } }, "Volver al inicio"));
    card.appendChild(row);
    return card;
  }

  function lockView(label) {
    var node = el("div", {});
    node.appendChild(pageHead(label, "Sección en desarrollo"));
    node.appendChild(lockCard("La sección «" + label + "» estará disponible al iniciar sesión o cuando PAASAU se abra al público."));
    return node;
  }

  function renderApoyo() {
    var frag = el("div", {});
    frag.appendChild(backHead("Apoyá PAASAU", function () { go("inicio"); }));
    var intro = el("div", { class: "card" });
    intro.appendChild(el("p", { class: "apoyo-intro", text: "PAASAU es un proyecto en desarrollo, hecho con cariño para ayudar a estudiantes de Costa Rica a prepararse para la PAA (UCR y UNA). Es gratis y sigue creciendo. Si te sirve y querés impulsarlo —más preguntas, mejoras y mantenerlo en línea— tu aporte ayuda muchísimo. ¡Gracias!" }));
    frag.appendChild(intro);

    var sinpe = el("div", { class: "card support-card" });
    sinpe.appendChild(el("div", { class: "support-h" }, [el("span", { class: "support-emoji", text: "📱" }), el("span", { text: "SINPE Móvil" })]));
    sinpe.appendChild(el("div", { class: "support-big", text: "89862668" }));
    sinpe.appendChild(el("button", { class: "btn btn-soft btn-sm", onclick: function () {
      try { navigator.clipboard.writeText("89862668"); toast("Número copiado"); } catch (e) { toast("SINPE: 89862668"); }
    } }, "Copiar número"));
    frag.appendChild(sinpe);

    var pp = el("div", { class: "card support-card" });
    pp.appendChild(el("div", { class: "support-h" }, [el("span", { class: "support-emoji", text: "💳" }), el("span", { text: "PayPal" })]));
    pp.appendChild(el("p", { class: "muted", text: "Aporte con tarjeta o saldo PayPal (también desde el extranjero)." }));
    pp.appendChild(el("a", { class: "btn btn-cta", href: "https://paypal.me/punjiga", target: "_blank", rel: "noopener noreferrer" }, "Abrir PayPal"));
    frag.appendChild(pp);

    var cafe = el("div", { class: "card support-card" });
    cafe.appendChild(el("div", { class: "support-h" }, [el("span", { class: "support-emoji", text: "☕" }), el("span", { text: "Invitame un café" })]));
    cafe.appendChild(el("p", { class: "muted", text: "Un cafecito ayuda a seguir agregando preguntas y mejoras. Por SINPE o PayPal, lo que te quede mejor." }));
    frag.appendChild(cafe);

    frag.appendChild(el("p", { class: "muted apoyo-foot", text: "Hecho con cariño para la comunidad estudiantil. ¡Mucho éxito en tu examen!" }));
    return frag;
  }

  var SIM_SLOTS = 7;
  function renderSimulacros() {
    var frag = el("div", {});
    frag.appendChild(pageHead("Simulacros", "Examen completo de " + CFG.examTotalItems + " preguntas con " + (CFG.examMinutes) + " minutos, como el día real (formato PAA 2026)."));

    if (state.isGuest) { frag.appendChild(lockCard("Los simulacros completos están disponibles al iniciar sesión.")); return frag; }

    var grid = el("div", { class: "sim-grid-cards" });
    for (var i = 0; i < SIM_SLOTS; i++) {
      (function (n) {
        var card = el("div", { class: "card sim-card" });
        card.appendChild(el("div", { class: "sim-num", text: "Simulacro " + (n + 1) }));
        var done = state.simulacros[n];
        if (done) {
          var pct = Math.round(100 * done.score / done.total);
          card.appendChild(el("div", { class: "sim-score", text: done.score + "/" + done.total + "  ·  " + pct + "%" }));
          card.appendChild(el("div", { class: "muted sim-when", text: new Date(done.date).toLocaleDateString("es-CR", { day: "numeric", month: "short" }) }));
        } else {
          card.appendChild(el("div", { class: "muted sim-when", text: "Sin hacer" }));
        }
        card.appendChild(el("button", { class: "btn btn-primary btn-sm", onclick: function () { confirmStartSim(n); } }, done ? "Repetir" : "Empezar"));
        grid.appendChild(card);
      })(i);
    }
    frag.appendChild(grid);

    if (state.simulacros.length) {
      var hist = el("div", { class: "card" });
      hist.appendChild(el("div", { class: "card-title", text: "Tus últimos resultados" }));
      var list = el("div", { class: "sim-hist" });
      state.simulacros.slice(0, 8).forEach(function (s) {
        var pct = Math.round(100 * s.score / s.total);
        var row = el("div", { class: "sim-hist-row" });
        row.appendChild(el("span", { class: "muted", text: new Date(s.date).toLocaleDateString("es-CR", { day: "numeric", month: "short" }) }));
        var bar = el("div", { class: "bar bar-thin" });
        var fill = el("div", { class: "bar-fill" }); fill.style.width = pct + "%";
        fill.style.background = pct >= 70 ? "var(--brand)" : (pct >= 50 ? "var(--gold)" : "var(--danger)");
        bar.appendChild(fill); row.appendChild(bar);
        row.appendChild(el("span", { class: "sim-hist-pct", text: pct + "%" }));
        list.appendChild(row);
      });
      hist.appendChild(list);
      frag.appendChild(hist);
    }
    return frag;
  }

  function confirmStartSim(n) {
    Sound.click();
    var node = el("div", { class: "card confirm-card" });
    node.appendChild(el("h2", { text: "Simulacro " + (n + 1) }));
    node.appendChild(el("p", { class: "muted", text: "Vas a empezar un examen de " + CFG.examTotalItems + " preguntas con " + CFG.examMinutes + " minutos de tiempo. Tratá de hacerlo de corrido, como en el examen real. ¿List@?" }));
    var row = el("div", { class: "confirm-actions" });
    row.appendChild(el("button", { class: "btn btn-ghost", onclick: function () { go("simulacros"); } }, "Cancelar"));
    row.appendChild(el("button", { class: "btn btn-cta", onclick: function () { startSim(n); } }, [icon("play"), el("span", { text: "Comenzar ahora" })]));
    node.appendChild(row);
    mount(node, false);
  }

  // Construye un simulacro con la mezcla del examen real: ~59% verbal, ~41% mate.
  function buildSimQuestions(n) {
    var nVerbal = Math.min(CFG.examVerbalItems || Math.round(n * 0.59), n);
    var nMath = n - nVerbal;
    var verbalPool = shuffle(QUESTIONS.filter(function (q) { return q.domain === "verbal"; }));
    var mathPool = shuffle(QUESTIONS.filter(function (q) { return q.domain === "math"; }));
    var repeated = false;
    function take(pool, k) {
      var out = [], i = 0;
      while (out.length < k) {
        if (i >= pool.length) { pool = shuffle(pool); i = 0; repeated = true; }
        out.push(pool[i++]);
      }
      return out;
    }
    var picked = take(verbalPool, nVerbal).concat(take(mathPool, nMath));
    return { questions: shuffle(picked), repeated: repeated };
  }

  /* ============================================================
     MOTOR DE QUIZ · PRÁCTICA (feedback inmediato)
     ============================================================ */
  function practiceQuiz(rawQuestions, opts) {
    opts = opts || {};
    var questions = prepare(rawQuestions);   // opciones mezcladas (anti-sesgo)
    var idx = 0, correct = 0, answered = false;
    var missed = {};                          // topicId -> # de fallos
    var perDom = { verbal: { c: 0, t: 0 }, math: { c: 0, t: 0 } };
    var perQ = CFG.secondsPerItem || 147;     // ritmo del examen 2026 (~2:27 por pregunta)
    var enforce = !!opts.enforce;             // modo examen: termina al llegar a 0
    var qLeft = perQ;                         // tiempo restante de la pregunta actual
    var totLeft = questions.length * perQ;    // tiempo restante de toda la sesión
    var paused = false;
    var clock = null;

    quizActive = true; quizPaused = false;

    var root = el("div", { class: "quiz" });
    var head = el("div", { class: "quiz-head" });
    head.appendChild(el("button", { class: "icon-btn", title: "Salir", onclick: function () { endQuiz(); go(current === "diaria" ? "diaria" : current); } }, icon("back")));
    head.appendChild(el("div", { class: "quiz-head-mid" }, [
      el("div", { class: "quiz-title", text: opts.title || "Práctica" }),
      opts.subtitle ? el("div", { class: "quiz-sub muted", text: opts.subtitle }) : null
    ]));
    var qT = makeTimerChip("Pregunta", "tmr-q");
    var totT = makeTimerChip("Total", "tmr-tot");
    head.appendChild(el("div", { class: "timer-bar" }, [qT.el, totT.el]));
    var pauseBtn = el("button", { class: "icon-btn pause-btn", title: "Pausar / reanudar", onclick: function () { togglePause(); } }, icon("pause"));
    head.appendChild(pauseBtn);
    root.appendChild(head);

    var prog = el("div", { class: "progress" });
    var progFill = el("div", { class: "progress-fill" });
    prog.appendChild(progFill);
    root.appendChild(prog);
    var counter = el("div", { class: "quiz-counter muted" });
    root.appendChild(counter);

    var body = el("div", { class: "quiz-body" });
    root.appendChild(body);

    // Indicador de pausa NO bloqueante: marca que está en pausa pero deja leer la explicación.
    var pauseTag = el("div", { class: "pause-tag", id: "pause-tag", hidden: true }, [
      icon("pause"),
      el("span", { text: "En pausa · cronómetro detenido. Podés leer con calma." })
    ]);
    root.insertBefore(pauseTag, body);

    mount(root, false);
    qT.set(qLeft); totT.set(totLeft);
    draw();
    Store.Timer.start();
    clock = setInterval(function () {
      if (paused) return;
      if (!answered && qLeft > 0) qLeft--;   // la pregunta solo corre hasta que respondés
      if (totLeft > 0) totLeft--;
      qT.set(qLeft, qLeft <= 15);
      totT.set(totLeft, totLeft <= 60);
      if (totLeft <= 0 && enforce) finish(true);
    }, 1000);

    function togglePause() {
      Sound.click();
      paused = !paused; quizPaused = paused;
      var tag = document.getElementById("pause-tag"); if (tag) tag.hidden = !paused;
      pauseBtn.classList.toggle("active", paused);
      pauseBtn.title = paused ? "Reanudar" : "Pausar";
      if (paused) Store.Timer.stop(); else Store.Timer.start();
    }
    function endQuiz() { quizActive = false; quizPaused = false; if (clock) { clearInterval(clock); clock = null; } Store.Timer.stop(); }

    function draw() {
      answered = false;
      qLeft = perQ; qT.set(qLeft);   // reinicia el reloj de la pregunta actual
      var q = questions[idx];
      progFill.style.width = (100 * idx / questions.length) + "%";
      counter.textContent = "Pregunta " + (idx + 1) + " de " + questions.length;
      body.innerHTML = "";

      var topRow = el("div", { class: "q-toprow" });
      var topic = TOPIC_BY_ID[q.topic];
      var tags = el("div", { class: "q-tags" });
      tags.appendChild(el("span", { class: "domain-badge db-" + q.domain }, DOMAINS[q.domain].short));
      if (topic) tags.appendChild(el("span", { class: "pill pill-" + q.domain, text: topic.name }));
      topRow.appendChild(tags);
      var savedNow = Store.isSaved(q.id);
      var saveBtn = el("button", { class: "save-btn" + (savedNow ? " on" : ""), title: "Guardar para repasar" }, [icon("bookmark"), el("span", { text: savedNow ? "Guardada" : "Guardar" })]);
      saveBtn.addEventListener("click", function () {
        var on = Store.toggleSaved(q.id);
        saveBtn.classList.toggle("on", on);
        saveBtn.querySelector("span").textContent = on ? "Guardada" : "Guardar";
        schedulePush();
      });
      topRow.appendChild(saveBtn);
      body.appendChild(topRow);

      if (q.stem) body.appendChild(el("p", { class: "q-stem", html: mathHTML(q.stem) }));
      body.appendChild(el("p", { class: "q-text", html: mathHTML(q.q) }));
      if (q.fig) { var figEl = el("div", { class: "q-fig" }); figEl.innerHTML = q.fig; body.appendChild(figEl); }

      var opts2 = el("div", { class: "opts" });
      var letters = ["A", "B", "C", "D"];
      q.opts.forEach(function (optText, i) {
        var b = el("button", { class: "opt", onclick: function () { choose(i, b, opts2, q); } });
        b.appendChild(el("span", { class: "opt-letter", text: letters[i] }));
        b.appendChild(el("span", { class: "opt-text", html: mathHTML(optText) }));
        opts2.appendChild(b);
      });
      body.appendChild(opts2);

      var expBox = el("div", { class: "q-exp", id: "q-exp", hidden: true });
      body.appendChild(expBox);
      var actions = el("div", { class: "quiz-actions", id: "q-actions" });
      body.appendChild(actions);
    }

    function choose(i, btn, container, q) {
      if (answered || paused) return;
      answered = true;
      var isRight = i === q.ans;
      if (isRight) { correct++; Sound.correct(); }
      else { Sound.wrong(); missed[q.topic] = (missed[q.topic] || 0) + 1; }
      perDom[q.domain].t++; if (isRight) perDom[q.domain].c++;
      Store.recordAnswer(q.topic, isRight);

      var letters = ["A", "B", "C", "D"];
      var allBtns = container.querySelectorAll(".opt");
      allBtns.forEach(function (b, bi) {
        b.disabled = true;
        if (bi === q.ans) b.classList.add("correct");
        if (bi === i && !isRight) b.classList.add("wrong");
      });

      var exp = document.getElementById("q-exp");
      exp.hidden = false;
      exp.innerHTML = "";
      exp.appendChild(el("div", { class: "exp-tag " + (isRight ? "ok" : "no"),
        html: isRight ? "¡Correcto!" : "Respuesta correcta: " + letters[q.ans] + ") " + mathHTML(q.opts[q.ans]) }));
      exp.appendChild(el("div", { class: "exp-why", text: "Tutor IA 🧠" }));
      var expText = el("div", { class: "exp-text" });
      expText.innerHTML = mathHTML(q.exp);
      exp.appendChild(expText);

      var actions = document.getElementById("q-actions");
      actions.innerHTML = "";
      var last = idx === questions.length - 1;
      actions.appendChild(el("button", { class: "btn btn-cta", onclick: next }, last ? "Ver resultados" : "Siguiente"));
      refreshTopbar();
    }

    function next() {
      Sound.click();
      if (idx < questions.length - 1) { idx++; draw(); }
      else finish(false);
    }

    function finish(byTime) {
      endQuiz();
      progFill.style.width = "100%";
      var pct = Math.round(100 * correct / questions.length);
      schedulePush();
      var res = el("div", { class: "result" });
      res.appendChild(el("div", { class: "result-eyebrow muted", text: byTime ? "Se acabó el tiempo · Resultado" : "Resultado" }));
      res.appendChild(el("div", { class: "result-big", text: correct + " / " + questions.length }));
      res.appendChild(el("div", { class: "result-pct", text: pct + "% de aciertos" }));
      var br = el("div", { class: "result-break" });
      ["verbal", "math"].forEach(function (d) {
        if (!perDom[d].t) return;
        var dp = Math.round(100 * perDom[d].c / perDom[d].t);
        var row = el("div", { class: "break-row" });
        var dot = el("span", { class: "domain-dot" }); dot.style.background = "var(--" + d + ")";
        row.appendChild(dot);
        row.appendChild(el("span", { class: "break-name", text: DOMAINS[d].name }));
        var bar = el("div", { class: "bar bar-thin" }); var fill = el("div", { class: "bar-fill" }); fill.style.width = dp + "%"; fill.style.background = "var(--" + d + ")"; bar.appendChild(fill); row.appendChild(bar);
        row.appendChild(el("span", { class: "break-pct", text: perDom[d].c + "/" + perDom[d].t }));
        br.appendChild(row);
      });
      res.appendChild(br);

      var msg = pct >= 80 ? "¡Excelente! Dominás bien este contenido."
        : pct >= 60 ? "Buen trabajo. Un poco más de práctica y lo tenés."
          : "Vas aprendiendo. Repasá las lecciones recomendadas y volvé a intentarlo: se mejora rápido.";
      res.appendChild(el("p", { class: "result-msg muted", text: msg }));

      var acts = el("div", { class: "result-actions" });
      acts.appendChild(el("button", { class: "btn btn-ghost", onclick: function () { go(current); } }, "Volver"));
      if (opts.focusTopic) acts.appendChild(el("button", { class: "btn btn-cta", onclick: function () { practiceTopic(opts.focusTopic, questions.length); } }, "Practicar de nuevo"));
      res.appendChild(acts);

      body.innerHTML = "";
      counter.textContent = "Completado";
      body.appendChild(res);

      var reco = recommendCard(missed);
      if (reco) body.appendChild(reco);

      if (pct >= 60) { Sound.celebrate(); confetti(pct >= 80 ? 110 : 70); }
      refreshTopbar();
    }
  }

  /* Tarjeta de recomendación: temas a repasar según los fallos (objeto topicId->#). */
  function recommendCard(missed) {
    var entries = Object.keys(missed).map(function (id) { return { id: id, n: missed[id] }; })
      .filter(function (e) { return e.n > 0 && TOPIC_BY_ID[e.id]; })
      .sort(function (a, b) { return b.n - a.n; });
    if (!entries.length) return null;
    var top = entries.slice(0, 3);
    var card = el("div", { class: "card reco-card" });
    card.appendChild(el("div", { class: "reco-h" }, [icon("target"), el("span", { text: "Te conviene repasar" })]));
    card.appendChild(el("div", { class: "card-sub muted", text: "Según lo que más se te complicó en esta práctica:" }));
    var list = el("div", { class: "reco-list" });
    top.forEach(function (e) {
      var t = TOPIC_BY_ID[e.id];
      var row = el("div", { class: "reco-row" });
      var dot = el("span", { class: "plan-dot" }); dot.style.background = "var(--" + t.domain + ")";
      row.appendChild(dot);
      row.appendChild(el("div", { class: "reco-info" }, [
        el("span", { class: "reco-name", text: t.name }),
        el("span", { class: "reco-miss muted", text: e.n === 1 ? "1 fallo" : e.n + " fallos" })
      ]));
      row.appendChild(el("button", { class: "btn btn-ghost btn-sm", onclick: function () { openLesson(t); } }, "Lección"));
      row.appendChild(el("button", { class: "btn btn-soft btn-sm", onclick: function () { practiceTopic(t); } }, "Practicar"));
      list.appendChild(row);
    });
    card.appendChild(list);
    return card;
  }

  /* Puntos débiles persistentes: temas con varios intentos y bajo dominio. */
  function weakTopics(minAnswered, maxMastery) {
    return TOPICS.map(function (t) {
      var pt = state.perTopic[t.id] || { answered: 0, correct: 0 };
      return { topic: t, answered: pt.answered, mastery: pt.answered ? Store.topicMastery(t.id) : 100 };
    }).filter(function (x) {
      return x.answered >= (minAnswered || 3) && x.mastery < (maxMastery || 65);
    }).sort(function (a, b) { return a.mastery - b.mastery; });
  }

  function weakTopicsCard() {
    var weak = weakTopics(3, 65).slice(0, 3);
    if (!weak.length) return null;
    var card = el("div", { class: "card reco-card" });
    card.appendChild(el("div", { class: "reco-h" }, [icon("target"), el("span", { text: "Tus puntos débiles" })]));
    card.appendChild(el("div", { class: "card-sub muted", text: "Temas donde tu porcentaje de aciertos va más bajo. Un repaso acá sube rápido tu nota." }));
    var list = el("div", { class: "reco-list" });
    weak.forEach(function (w) {
      var row = el("div", { class: "reco-row" });
      var dot = el("span", { class: "plan-dot" }); dot.style.background = "var(--" + w.topic.domain + ")";
      row.appendChild(dot);
      row.appendChild(el("div", { class: "reco-info" }, [
        el("span", { class: "reco-name", text: w.topic.name }),
        el("span", { class: "reco-miss muted", text: w.mastery + "% de aciertos" })
      ]));
      row.appendChild(el("button", { class: "btn btn-ghost btn-sm", onclick: function () { openLesson(w.topic); } }, "Lección"));
      row.appendChild(el("button", { class: "btn btn-soft btn-sm", onclick: function () { practiceTopic(w.topic); } }, "Practicar"));
      list.appendChild(row);
    });
    card.appendChild(list);
    return card;
  }

  /* ============================================================
     MOTOR DE QUIZ · SIMULACRO (sin feedback, con tiempo)
     ============================================================ */
  function startSim(n) {
    Sound.click();
    var built = buildSimQuestions(CFG.examTotalItems);
    var questions = prepare(built.questions);   // opciones mezcladas
    var answers = new Array(questions.length).fill(null);
    var idx = 0;
    var remaining = CFG.examMinutes * 60;
    var timer = null;
    var finished = false;
    var paused = false;
    quizActive = true; quizPaused = false;

    var root = el("div", { class: "sim" });

    var bar = el("div", { class: "sim-bar" });
    bar.appendChild(el("button", { class: "icon-btn", title: "Salir", onclick: leave }, icon("back")));
    var perQ = CFG.secondsPerItem || 147;
    var qLeft = perQ;
    var simQT = makeTimerChip("Pregunta", "tmr-q");
    var simTotT = makeTimerChip("Total examen", "tmr-tot");
    simQT.set(qLeft); simTotT.set(remaining);
    bar.appendChild(el("div", { class: "timer-bar" }, [simQT.el, simTotT.el]));
    var simPauseBtn = el("button", { class: "icon-btn pause-btn", title: "Pausar / reanudar", onclick: function () { togglePause(); } }, icon("pause"));
    bar.appendChild(simPauseBtn);
    var progTxt = el("div", { class: "sim-progtxt", id: "sim-progtxt" });
    bar.appendChild(progTxt);
    root.appendChild(bar);
    var simPauseTag = el("div", { class: "pause-tag", id: "sim-pause-tag", hidden: true }, [
      icon("pause"),
      el("span", { text: "En pausa · relojes detenidos. Podés leer con calma." })
    ]);
    root.appendChild(simPauseTag);

    if (built.repeated) {
      root.appendChild(el("div", { class: "sim-note muted", text: "Nota: el banco tiene menos de " + CFG.examTotalItems + " preguntas únicas, así que algunas se repiten para completar el examen." }));
    }

    var qbox = el("div", { class: "sim-qbox" });
    root.appendChild(qbox);

    var navRow = el("div", { class: "sim-nav" });
    var prevBtn = el("button", { class: "btn btn-ghost", onclick: function () { Sound.click(); if (idx > 0) { idx--; drawQ(); } } }, [icon("back"), el("span", { text: "Anterior" })]);
    var nextBtn = el("button", { class: "btn btn-soft", onclick: function () { Sound.click(); if (idx < questions.length - 1) { idx++; drawQ(); } } }, [el("span", { text: "Siguiente" }), icon("arrow")]);
    navRow.appendChild(prevBtn);
    navRow.appendChild(nextBtn);
    root.appendChild(navRow);

    // Mapa de preguntas
    var mapWrap = el("div", { class: "card sim-map-card" });
    mapWrap.appendChild(el("div", { class: "card-sub muted", text: "Mapa de preguntas (tocá para ir)" }));
    var map = el("div", { class: "sim-map", id: "sim-map" });
    questions.forEach(function (q, i) {
      var c = el("button", { class: "sim-cell", "data-i": i, onclick: function () { Sound.click(); idx = i; drawQ(); } }, String(i + 1));
      map.appendChild(c);
    });
    mapWrap.appendChild(map);
    root.appendChild(mapWrap);

    var finishBtn = el("button", { class: "btn btn-cta btn-block", style: "margin-top:16px", onclick: function () { confirmFinish(); } }, "Finalizar examen");
    root.appendChild(finishBtn);

    mount(root, false);
    drawQ();
    Store.Timer.start();
    timer = setInterval(function () {
      if (paused) return;
      remaining--;
      if (qLeft > 0) qLeft--;
      simQT.set(qLeft, qLeft <= 15);
      simTotT.set(remaining, remaining <= 60);
      if (remaining <= 0) { doFinish(true); }
    }, 1000);

    function togglePause() {
      Sound.click();
      paused = !paused; quizPaused = paused;
      var tag = document.getElementById("sim-pause-tag"); if (tag) tag.hidden = !paused;
      simPauseBtn.classList.toggle("active", paused);
      simPauseBtn.title = paused ? "Reanudar" : "Pausar";
      if (paused) Store.Timer.stop(); else Store.Timer.start();
    }

    function drawQ() {
      var q = questions[idx];
      qLeft = perQ; simQT.set(qLeft);   // reinicia el reloj de la pregunta
      document.getElementById("sim-progtxt").textContent = (idx + 1) + " / " + questions.length;
      qbox.innerHTML = "";
      var simTags = el("div", { class: "q-tags" });
      simTags.appendChild(el("span", { class: "domain-badge db-" + q.domain }, DOMAINS[q.domain].short));
      if (TOPIC_BY_ID[q.topic]) simTags.appendChild(el("span", { class: "pill pill-" + q.domain, text: TOPIC_BY_ID[q.topic].name }));
      qbox.appendChild(simTags);
      qbox.appendChild(el("div", { class: "sim-qnum muted", text: "Pregunta " + (idx + 1) }));
      if (q.stem) qbox.appendChild(el("p", { class: "q-stem", html: mathHTML(q.stem) }));
      qbox.appendChild(el("p", { class: "q-text", html: mathHTML(q.q) }));
      if (q.fig) { var simFig = el("div", { class: "q-fig" }); simFig.innerHTML = q.fig; qbox.appendChild(simFig); }
      var opts = el("div", { class: "opts" });
      var letters = ["A", "B", "C", "D"];
      q.opts.forEach(function (txt, i) {
        var b = el("button", {
          class: "opt" + (answers[idx] === i ? " chosen" : ""),
          onclick: function () { answers[idx] = i; markCell(); paintOpts(opts, i); }
        });
        b.appendChild(el("span", { class: "opt-letter", text: letters[i] }));
        b.appendChild(el("span", { class: "opt-text", html: mathHTML(txt) }));
        opts.appendChild(b);
      });
      qbox.appendChild(opts);
      prevBtn.disabled = idx === 0;
      nextBtn.disabled = idx === questions.length - 1;
      syncMap();
    }
    function paintOpts(container, sel) {
      Sound.tick();
      container.querySelectorAll(".opt").forEach(function (b, bi) {
        b.classList.toggle("chosen", bi === sel);
      });
    }
    function markCell() { syncMap(); }
    function syncMap() {
      var cells = document.querySelectorAll("#sim-map .sim-cell");
      cells.forEach(function (c, i) {
        c.classList.toggle("answered", answers[i] != null);
        c.classList.toggle("current", i === idx);
      });
    }

    function confirmFinish() {
      Sound.click();
      var blank = answers.filter(function (a) { return a == null; }).length;
      var ok = confirm(blank ? ("Te quedan " + blank + " preguntas sin responder. ¿Querés finalizar igual?") : "¿Finalizar y ver tu resultado?");
      if (ok) doFinish(false);
    }

    function leave() {
      Sound.click();
      if (confirm("Si salís, este simulacro no se guarda. ¿Salir?")) {
        quizActive = false; quizPaused = false;
        if (timer) clearInterval(timer);
        Store.Timer.stop();
        go("simulacros");
      }
    }

    function doFinish(byTime) {
      if (finished) return;
      finished = true;
      quizActive = false; quizPaused = false;
      if (timer) clearInterval(timer);
      Store.Timer.stop();
      var score = 0;
      var byDomain = { verbal: { correct: 0, total: 0 }, math: { correct: 0, total: 0 } };
      var missed = {};
      questions.forEach(function (q, i) {
        var chosen = answers[i];
        var right = chosen === q.ans;
        if (right) score++;
        else missed[q.topic] = (missed[q.topic] || 0) + 1;  // fallo o en blanco
        byDomain[q.domain].total++;
        if (right) byDomain[q.domain].correct++;
        if (chosen != null) Store.recordAnswer(q.topic, right);
      });
      var durationSec = CFG.examMinutes * 60 - remaining;
      Store.saveSimulacro({
        date: new Date().toISOString(),
        score: score, total: questions.length,
        durationSec: durationSec, byDomain: byDomain
      });
      schedulePush();
      reviewSim(questions, answers, score, byDomain, byTime, missed);
    }
  }

  function reviewSim(questions, answers, score, byDomain, byTime, missed) {
    var pct = Math.round(100 * score / questions.length);
    var root = el("div", {});
    var res = el("div", { class: "card result" });
    res.appendChild(el("div", { class: "result-eyebrow muted", text: byTime ? "Se acabó el tiempo · Resultado" : "Simulacro completado" }));
    res.appendChild(el("div", { class: "result-big", text: score + " / " + questions.length }));
    res.appendChild(el("div", { class: "result-pct", text: pct + "% de aciertos" }));

    var br = el("div", { class: "result-break" });
    ["verbal", "math"].forEach(function (d) {
      var bd = byDomain[d];
      var dp = bd.total ? Math.round(100 * bd.correct / bd.total) : 0;
      var row = el("div", { class: "break-row" });
      var dot = el("span", { class: "domain-dot" }); dot.style.background = "var(--" + d + ")";
      row.appendChild(dot);
      row.appendChild(el("span", { class: "break-name", text: DOMAINS[d].short }));
      var bar = el("div", { class: "bar bar-thin" });
      var fill = el("div", { class: "bar-fill" }); fill.style.width = dp + "%"; fill.style.background = "var(--" + d + ")";
      bar.appendChild(fill); row.appendChild(bar);
      row.appendChild(el("span", { class: "break-pct", text: bd.correct + "/" + bd.total }));
      br.appendChild(row);
    });
    res.appendChild(br);

    var acts = el("div", { class: "result-actions" });
    acts.appendChild(el("button", { class: "btn btn-ghost", onclick: function () { go("simulacros"); } }, "Volver a simulacros"));
    var showReview = el("button", { class: "btn btn-soft", onclick: function () { toggleReview(); } }, "Ver revisión");
    acts.appendChild(showReview);
    res.appendChild(acts);
    root.appendChild(res);

    // Recomendación de estudio según los temas más fallados
    var reco = recommendCard(missed || {});
    if (reco) root.appendChild(reco);

    var reviewBox = el("div", { class: "review-box", id: "review-box", hidden: true });
    root.appendChild(reviewBox);

    mount(root, false);
    if (pct >= 60) { Sound.celebrate(); confetti(pct >= 80 ? 120 : 70); }
    else Sound.wrong();
    refreshTopbar();

    var revFilter = "no";  // 'no' incorrectas | 'ok' correctas | 'all' todas
    function buildReviewList() {
      var box = document.getElementById("review-box");
      box.innerHTML = "";
      var letters = ["A", "B", "C", "D"];
      var nNo = questions.filter(function (q, i) { return answers[i] !== q.ans; }).length;
      var nOk = questions.length - nNo;
      var tabs = el("div", { class: "rev-tabs" });
      [["no", "Incorrectas (" + nNo + ")"], ["ok", "Correctas (" + nOk + ")"], ["all", "Todas (" + questions.length + ")"]].forEach(function (t) {
        tabs.appendChild(el("button", { class: "rev-tab" + (revFilter === t[0] ? " active" : ""), onclick: function () { revFilter = t[0]; buildReviewList(); } }, t[1]));
      });
      box.appendChild(tabs);
      var any = false;
      questions.forEach(function (q, i) {
        var right = answers[i] === q.ans;
        if (revFilter === "no" && right) return;
        if (revFilter === "ok" && !right) return;
        any = true;
        var item = el("div", { class: "review-item " + (right ? "ok" : "no") });
        item.appendChild(el("div", { class: "review-qnum muted", text: "Pregunta " + (i + 1) + (TOPIC_BY_ID[q.topic] ? " · " + TOPIC_BY_ID[q.topic].name : "") }));
        if (q.stem) item.appendChild(el("div", { class: "review-stem", html: mathHTML(q.stem) }));
        item.appendChild(el("div", { class: "review-q", html: mathHTML(q.q) }));
        if (q.fig) { var rf = el("div", { class: "q-fig sm" }); rf.innerHTML = q.fig; item.appendChild(rf); }
        item.appendChild(el("div", { class: "review-ans " + (right ? "ok" : "no"), html: "Tu respuesta: " + (answers[i] != null ? letters[answers[i]] + ") " + mathHTML(q.opts[answers[i]]) : "(en blanco)") }));
        if (!right) item.appendChild(el("div", { class: "review-correct", html: "Correcta: " + letters[q.ans] + ") " + mathHTML(q.opts[q.ans]) }));
        var why = el("div", { class: "review-exp" });
        why.appendChild(el("div", { class: "exp-why", text: "Tutor IA 🧠" }));
        var wt = el("div", { class: "exp-text" }); wt.innerHTML = mathHTML(q.exp); why.appendChild(wt);
        item.appendChild(why);
        box.appendChild(item);
      });
      if (!any) box.appendChild(el("div", { class: "muted", style: "text-align:center;padding:20px", text: revFilter === "no" ? "¡No fallaste ninguna! 🎉" : "Nada que mostrar acá." }));
    }
    var built2 = false;
    function toggleReview() {
      Sound.click();
      var box = document.getElementById("review-box");
      if (!built2) { buildReviewList(); built2 = true; box.hidden = false; return; }
      box.hidden = !box.hidden;
    }
  }

  /* ============================================================
     VISTA · PROGRESO
     ============================================================ */
  function renderProgreso() {
    var frag = el("div", {});
    frag.appendChild(pageHead("Progreso", "Mirá cómo vas avanzando. Todo se guarda y se sincroniza entre tus dispositivos."));

    var summary = el("div", { class: "card prog-summary" });
    var s1 = el("div", { class: "prog-stat" });
    s1.appendChild(el("div", { class: "prog-num", text: Store.accuracy() + "%" }));
    s1.appendChild(el("div", { class: "muted", text: "aciertos globales" }));
    var s2 = el("div", { class: "prog-stat" });
    s2.appendChild(el("div", { class: "prog-num", id: "prog-time", text: fmtStudyTime(state.totalSeconds) }));
    s2.appendChild(el("div", { class: "muted", text: "tiempo estudiado" }));
    var s3 = el("div", { class: "prog-stat" });
    s3.appendChild(el("div", { class: "prog-num", text: String(state.streak.longest) }));
    s3.appendChild(el("div", { class: "muted", text: "mejor racha" }));
    var s4 = el("div", { class: "prog-stat" });
    s4.appendChild(el("div", { class: "prog-num", text: String(state.simulacros.length) }));
    s4.appendChild(el("div", { class: "muted", text: "simulacros" }));
    summary.appendChild(s1); summary.appendChild(s2); summary.appendChild(s3); summary.appendChild(s4);
    frag.appendChild(summary);

    // Puntos débiles
    var weakCardP = weakTopicsCard();
    if (weakCardP) frag.appendChild(weakCardP);

    // Calendario de racha
    var calCard = el("div", { class: "card" });
    calCard.appendChild(el("div", { class: "card-title", text: "Actividad reciente" }));
    calCard.appendChild(el("div", { class: "card-sub muted", text: "Cada cuadro es un día. Más verde = más preguntas resueltas." }));
    calCard.appendChild(buildCalendar(70));
    frag.appendChild(calCard);

    // Dominio por tema
    ["verbal", "math"].forEach(function (dom) {
      var card = el("div", { class: "card" });
      var head = el("div", { class: "domain-h" });
      var dot = el("span", { class: "domain-dot" }); dot.style.background = "var(--" + dom + ")";
      head.appendChild(dot); head.appendChild(el("span", { text: DOMAINS[dom].name }));
      card.appendChild(head);
      TOPICS.filter(function (t) { return t.domain === dom; }).forEach(function (t) {
        var pt = state.perTopic[t.id] || { answered: 0, correct: 0 };
        var m = pt.answered ? Store.topicMastery(t.id) : 0;
        var row = el("div", { class: "mastery-row" });
        row.appendChild(el("span", { class: "mastery-name", text: t.name }));
        var bar = el("div", { class: "bar bar-thin" });
        var fill = el("div", { class: "bar-fill" }); fill.style.width = m + "%"; fill.style.background = "var(--" + dom + ")";
        bar.appendChild(fill); row.appendChild(bar);
        row.appendChild(el("span", { class: "mastery-pct muted", text: pt.answered ? m + "%" : "—" }));
        card.appendChild(row);
      });
      frag.appendChild(card);
    });

    startProgTime();
    return frag;
  }

  function startProgTime() {
    if (liveTicker) clearInterval(liveTicker);
    liveTicker = setInterval(function () {
      var node = document.getElementById("prog-time");
      if (!node) return;
      node.textContent = fmtStudyTime(Store.get().totalSeconds);
    }, 1000);
  }

  function buildCalendar(days) {
    var wrap = el("div", { class: "cal-grid" });
    var today = new Date();
    var maxQ = 1;
    for (var key in state.history) {
      if (state.history[key].questions > maxQ) maxQ = state.history[key].questions;
    }
    for (var i = days - 1; i >= 0; i--) {
      var d = new Date(today.getTime() - i * 86400000);
      var key2 = Store.todayKey(d);
      var h = state.history[key2];
      var q = h ? h.questions : 0;
      var level = q === 0 ? 0 : (q >= maxQ * 0.66 ? 3 : (q >= maxQ * 0.33 ? 2 : 1));
      var cell = el("div", { class: "cal-cell lvl-" + level, title: d.toLocaleDateString("es-CR", { day: "numeric", month: "short" }) + ": " + q + " preguntas" });
      wrap.appendChild(cell);
    }
    return wrap;
  }

  /* ============================================================
     VISTA · CONSEJOS
     ============================================================ */
  function renderConsejos() {
    var secciones = [
      { t: "Estrategia general", e: "\ud83c\udfaf", items: [
        "Leé primero la pregunta y después el texto: así sabés qué buscar.",
        "Si una pregunta te traba, marcá tu mejor opción y seguí; no pierdas minutos en una sola.",
        "Eliminá las opciones claramente falsas: muchas veces quedás entre dos y subís tus chances.",
        "Nunca dejés un ítem en blanco: la PAA no penaliza adivinar, así que siempre respondé algo."
      ] },
      { t: "Manejo del tiempo", e: "\u23f1\ufe0f", items: [
        "Son 45 ítems en 110 minutos: tenés cerca de 2 minutos por pregunta.",
        "Primera vuelta: respondé lo fácil. Dejá lo difícil para una segunda pasada.",
        "Guardá unos 5 minutos al final para revisar y rellenar lo que falte."
      ] },
      { t: "Razonamiento verbal", e: "\ud83d\udcd6", items: [
        "La respuesta está en el texto, no en lo que ya sabés del tema.",
        "Desconfiá de opciones con 'siempre', 'nunca' o 'todos', salvo que el texto lo diga.",
        "Para la idea principal, buscá lo que cubre todo el texto, no un detalle.",
        "En paráfrasis, la correcta dice lo mismo con otras palabras, sin exagerar ni invertir."
      ] },
      { t: "Razonamiento matemático", e: "\ud83d\udd22", items: [
        "No necesitás fórmulas avanzadas: es lógica de hasta noveno año.",
        "Estimá antes de calcular: a veces descartás opciones imposibles de una.",
        "Cuidá las unidades (min/horas, cm/m) y el orden de operaciones.",
        "Hacé un dibujo o una tabla rápida para geometría, conteo o lógica.",
        "En sucesiones, mirá la diferencia entre términos; si no, probá multiplicar."
      ] },
      { t: "El día del examen", e: "\ud83d\udcdd", items: [
        "Dormí bien la noche anterior: un cerebro descansado rinde más.",
        "Llevá tu identificación física vigente, lápiz de grafito 2B y borrador.",
        "Desayuná algo y llegá temprano para evitar el estrés de última hora.",
        "Rellená bien el círculo y revisá que el número de pregunta coincida con la hoja."
      ] },
      { t: "Nervios y mente", e: "\ud83e\uddd8", items: [
        "Respirá hondo: 4 segundos inhalando, 4 exhalando. Baja los nervios rápido.",
        "Una pregunta a la vez; no pienses en las 44 restantes.",
        "No te compares con quien termina antes: rápido no es lo mismo que correcto."
      ] }
    ];
    var frag = el("div", {});
    frag.appendChild(pageHead("Consejos", "Trucos reales para rendir mejor en la PAA. Cortos y al grano."));
    secciones.forEach(function (sec) {
      var card = el("div", { class: "card tips-card" });
      card.appendChild(el("div", { class: "tips-h" }, [el("span", { class: "tips-emoji", text: sec.e }), el("span", { text: sec.t })]));
      var ul = el("ul", { class: "tips-list" });
      sec.items.forEach(function (it) { ul.appendChild(el("li", { text: it })); });
      card.appendChild(ul);
      frag.appendChild(card);
    });
    return frag;
  }

  /* ============================================================
     VISTA · TABLAS DE MULTIPLICAR
     ============================================================ */
  var tablaSel = 2;
  var tablaMode = "opciones";
  var TABLA_MODES = [
    { id: "opciones", name: "Opciones", desc: "Elegí la respuesta entre 4." },
    { id: "escribir", name: "Escribí vos", desc: "Tecleá el resultado, sin opciones." },
    { id: "contra", name: "Contrarreloj", desc: "60 s. ¿Cuántas pegás de seguido?" }
  ];
  function renderTablas() {
    var frag = el("div", {});
    frag.appendChild(pageHead("Tablas de multiplicar", "Mejorá tu cálculo mental para la parte de matemática. Elegí el modo y la tabla."));
    var card = el("div", { class: "card" });

    card.appendChild(el("label", { class: "field-label", text: "Modo de juego" }));
    var modeGrid = el("div", { class: "mode-grid" });
    TABLA_MODES.forEach(function (m) {
      var b = el("button", { class: "mode-btn" + (tablaMode === m.id ? " active" : ""), onclick: function () { tablaMode = m.id; Sound.click(); mount(renderTablas(), true); } }, [
        el("span", { class: "mode-name", text: m.name }),
        el("span", { class: "mode-desc muted", text: m.desc })
      ]);
      modeGrid.appendChild(b);
    });
    card.appendChild(modeGrid);

    card.appendChild(el("label", { class: "field-label", style: "margin-top:18px", text: "Elegí qué tabla practicar" }));
    var grid = el("div", { class: "tabla-grid" });
    [2, 3, 4, 5, 6, 7, 8, 9, 10, 0].forEach(function (nn) {
      var b = el("button", { class: "tabla-btn" + (tablaSel === nn ? " active" : ""), onclick: function () { tablaSel = nn; Sound.click(); mount(renderTablas(), true); } }, nn === 0 ? "Mezcla" : ("Tabla del " + nn));
      grid.appendChild(b);
    });
    card.appendChild(grid);

    var cta = tablaMode === "contra" ? "Empezar contrarreloj (60 s)" : "Empezar reto (10 preguntas)";
    card.appendChild(el("button", { class: "btn btn-cta", style: "margin-top:18px", onclick: function () { startTablaReto(tablaSel, tablaMode); } }, [icon("play"), el("span", { text: cta })]));
    frag.appendChild(card);

    var tip = el("div", { class: "card" });
    tip.appendChild(el("div", { class: "muted", text: "Dominar las tablas te hace mucho más rápido en el examen. La del 1 no la incluimos porque ya te la sabés. En “Escribí vos” pensás la respuesta en vez de adivinarla; en “Contrarreloj” sumás racha contra el tiempo." }));
    frag.appendChild(tip);
    return frag;
  }

  // Genera un par [a, b] según la tabla elegida (0 = mezcla 2 al 10)
  function tablaPair(tabla) {
    var a = tabla === 0 ? (2 + Math.floor(Math.random() * 9)) : tabla;
    var b = 2 + Math.floor(Math.random() * 9);
    return [a, b];
  }
  function tablaSubt(tabla) { return tabla === 0 ? "Mezcla (2 al 10)" : ("Tabla del " + tabla); }
  function startTablaReto(tabla, mode) {
    if (mode === "escribir") return startTablasEscribir(tabla);
    if (mode === "contra") return startTablasContra(tabla);
    return startTablas(tabla);
  }
  // Pantalla de resultados compartida para los retos de 10 preguntas
  function tablaFinish(body, counter, progFill, eyebrow, correct, total, best, again) {
    progFill.style.width = "100%";
    Store.markStudiedToday(); schedulePush();
    var pct = Math.round(100 * correct / total);
    var res = el("div", { class: "result" });
    res.appendChild(el("div", { class: "result-eyebrow muted", text: eyebrow }));
    res.appendChild(el("div", { class: "result-big", text: correct + " / " + total }));
    res.appendChild(el("div", { class: "result-pct", text: "Mejor racha: " + best }));
    var msg = pct >= 90 ? "¡Crack! Tenés las tablas dominadas." : (pct >= 60 ? "¡Bien! Un poco más de práctica y volás." : "Seguí practicando, se mejora rapidísimo.");
    res.appendChild(el("p", { class: "result-msg muted", text: msg }));
    var acts = el("div", { class: "result-actions" });
    acts.appendChild(el("button", { class: "btn btn-ghost", onclick: function () { go("tablas"); } }, "Volver"));
    acts.appendChild(el("button", { class: "btn btn-cta", onclick: again }, "Otra vez"));
    res.appendChild(acts);
    body.innerHTML = ""; counter.textContent = "Completado"; body.appendChild(res);
    if (pct >= 60) { Sound.celebrate(); confetti(pct >= 90 ? 110 : 60); }
  }

  function startTablas(tabla) {
    Sound.click();
    var N = 10, idx = 0, correct = 0, streak = 0, best = 0, answered = false;
    var qs = [];
    for (var i = 0; i < N; i++) {
      var a = tabla === 0 ? (2 + Math.floor(Math.random() * 9)) : tabla;
      var b = 2 + Math.floor(Math.random() * 9);
      qs.push([a, b]);
    }
    var root = el("div", { class: "quiz" });
    var head = el("div", { class: "quiz-head" });
    head.appendChild(el("button", { class: "icon-btn", title: "Salir", onclick: function () { go("tablas"); } }, icon("back")));
    head.appendChild(el("div", { class: "quiz-head-mid" }, [
      el("div", { class: "quiz-title", text: "Reto de tablas" }),
      el("div", { class: "quiz-sub muted", text: tabla === 0 ? "Mezcla (2 al 10)" : ("Tabla del " + tabla) })
    ]));
    head.appendChild(el("div", { class: "tmr tmr-q" }, [el("span", { class: "tmr-dot" }), el("div", { class: "tmr-info" }, [el("span", { class: "tmr-lbl", text: "Racha" }), el("span", { class: "tmr-time", id: "tabla-streak", text: "0" })])]));
    root.appendChild(head);
    var prog = el("div", { class: "progress" }); var progFill = el("div", { class: "progress-fill" }); prog.appendChild(progFill); root.appendChild(prog);
    var counter = el("div", { class: "quiz-counter muted" }); root.appendChild(counter);
    var body = el("div", { class: "quiz-body" }); root.appendChild(body);
    mount(root, false);
    draw();

    function draw() {
      answered = false;
      var a = qs[idx][0], b = qs[idx][1], ans = a * b;
      progFill.style.width = (100 * idx / N) + "%";
      counter.textContent = "Pregunta " + (idx + 1) + " de " + N;
      document.getElementById("tabla-streak").textContent = String(streak);
      body.innerHTML = "";
      body.appendChild(el("div", { class: "tabla-q", text: a + " \u00d7 " + b }));
      var seen = {}; seen[ans] = true; var options = [ans];
      while (options.length < 4) {
        var d = ans + (Math.floor(Math.random() * 11) - 5);
        if (d > 0 && !seen[d]) { seen[d] = true; options.push(d); }
      }
      options = shuffle(options);
      var opts2 = el("div", { class: "opts opts-grid" });
      options.forEach(function (val) {
        var bn = el("button", { class: "opt opt-center", onclick: function () { choose(val, bn, opts2, ans); } }, String(val));
        opts2.appendChild(bn);
      });
      body.appendChild(opts2);
    }

    function choose(val, btn, container, ans) {
      if (answered) return; answered = true;
      var ok = val === ans;
      if (ok) { correct++; streak++; if (streak > best) best = streak; Sound.correct(); btn.classList.add("correct"); }
      else {
        streak = 0; Sound.wrong(); btn.classList.add("wrong");
        container.querySelectorAll(".opt").forEach(function (b2) { if (b2.textContent === String(ans)) b2.classList.add("correct"); });
      }
      document.getElementById("tabla-streak").textContent = String(streak);
      container.querySelectorAll(".opt").forEach(function (b2) { b2.disabled = true; });
      setTimeout(function () { if (idx < N - 1) { idx++; draw(); } else finish(); }, ok ? 450 : 900);
    }

    function finish() {
      progFill.style.width = "100%";
      Store.markStudiedToday(); schedulePush();
      var pct = Math.round(100 * correct / N);
      var res = el("div", { class: "result" });
      res.appendChild(el("div", { class: "result-eyebrow muted", text: "Reto de tablas" }));
      res.appendChild(el("div", { class: "result-big", text: correct + " / " + N }));
      res.appendChild(el("div", { class: "result-pct", text: "Mejor racha: " + best }));
      var msg = pct >= 90 ? "¡Crack! Tenés las tablas dominadas." : (pct >= 60 ? "¡Bien! Un poco más de práctica y volás." : "Seguí practicando, se mejora rapidísimo.");
      res.appendChild(el("p", { class: "result-msg muted", text: msg }));
      var acts = el("div", { class: "result-actions" });
      acts.appendChild(el("button", { class: "btn btn-ghost", onclick: function () { go("tablas"); } }, "Volver"));
      acts.appendChild(el("button", { class: "btn btn-cta", onclick: function () { startTablas(tabla); } }, "Otra vez"));
      res.appendChild(acts);
      body.innerHTML = ""; counter.textContent = "Completado"; body.appendChild(res);
      if (pct >= 60) { Sound.celebrate(); confetti(pct >= 90 ? 110 : 60); }
    }
  }

  /* MODO ESCRIBIR · tecleás el resultado con un teclado numérico (sin opciones) */
  function startTablasEscribir(tabla) {
    Sound.click();
    var N = 10, idx = 0, correct = 0, streak = 0, best = 0, answered = false, entry = "";
    var qs = []; for (var i = 0; i < N; i++) qs.push(tablaPair(tabla));
    var root = el("div", { class: "quiz" });
    var head = el("div", { class: "quiz-head" });
    head.appendChild(el("button", { class: "icon-btn", title: "Salir", onclick: function () { go("tablas"); } }, icon("back")));
    head.appendChild(el("div", { class: "quiz-head-mid" }, [
      el("div", { class: "quiz-title", text: "Escribí el resultado" }),
      el("div", { class: "quiz-sub muted", text: tablaSubt(tabla) })
    ]));
    head.appendChild(el("div", { class: "tmr tmr-q" }, [el("span", { class: "tmr-dot" }), el("div", { class: "tmr-info" }, [el("span", { class: "tmr-lbl", text: "Racha" }), el("span", { class: "tmr-time", id: "tabla-streak", text: "0" })])]));
    root.appendChild(head);
    var prog = el("div", { class: "progress" }); var progFill = el("div", { class: "progress-fill" }); prog.appendChild(progFill); root.appendChild(prog);
    var counter = el("div", { class: "quiz-counter muted" }); root.appendChild(counter);
    var body = el("div", { class: "quiz-body" }); root.appendChild(body);
    mount(root, false);
    draw();

    function draw() {
      answered = false; entry = "";
      var a = qs[idx][0], b = qs[idx][1];
      progFill.style.width = (100 * idx / N) + "%";
      counter.textContent = "Pregunta " + (idx + 1) + " de " + N;
      document.getElementById("tabla-streak").textContent = String(streak);
      body.innerHTML = "";
      body.appendChild(el("div", { class: "tabla-q", text: a + " × " + b }));
      body.appendChild(el("div", { class: "tabla-entry", id: "tabla-entry", text: "?" }));
      body.appendChild(el("div", { class: "tabla-fb", id: "tabla-fb" }));
      var pad = el("div", { class: "numpad" });
      ["1", "2", "3", "4", "5", "6", "7", "8", "9"].forEach(function (d) {
        pad.appendChild(el("button", { class: "numpad-key", onclick: function () { typeDigit(d); } }, d));
      });
      pad.appendChild(el("button", { class: "numpad-key numpad-del", title: "Borrar", onclick: del }, "⌫"));
      pad.appendChild(el("button", { class: "numpad-key", onclick: function () { typeDigit("0"); } }, "0"));
      pad.appendChild(el("button", { class: "numpad-key numpad-ok", title: "Comprobar", onclick: submit }, icon("check")));
      body.appendChild(pad);
    }
    function typeDigit(d) { if (answered || entry.length >= 4) return; entry += d; updateDisp(); Sound.click(); }
    function del() { if (answered) return; entry = entry.slice(0, -1); updateDisp(); }
    function updateDisp() { var e = document.getElementById("tabla-entry"); if (e) { e.textContent = entry || "?"; e.classList.toggle("filled", !!entry); } }

    function submit() {
      if (answered || entry === "") return;
      answered = true;
      var a = qs[idx][0], b = qs[idx][1], ans = a * b;
      var ok = parseInt(entry, 10) === ans;
      var disp = document.getElementById("tabla-entry");
      var fb = document.getElementById("tabla-fb");
      if (ok) { correct++; streak++; if (streak > best) best = streak; Sound.correct(); disp.classList.add("ok"); fb.textContent = "¡Correcto!"; fb.className = "tabla-fb ok"; }
      else { streak = 0; Sound.wrong(); disp.classList.add("no"); fb.textContent = "Era " + a + " × " + b + " = " + ans; fb.className = "tabla-fb no"; }
      document.getElementById("tabla-streak").textContent = String(streak);
      setTimeout(function () { if (idx < N - 1) { idx++; draw(); } else tablaFinish(body, counter, progFill, "Escribí el resultado", correct, N, best, function () { startTablasEscribir(tabla); }); }, ok ? 600 : 1150);
    }
  }

  /* MODO CONTRARRELOJ · 60 s para sumar la mayor racha de respuestas correctas */
  function startTablasContra(tabla) {
    Sound.click();
    var TIME = 60, left = TIME, score = 0, streak = 0, best = 0, answered = false, ended = false, clock = null, ans = 0;
    var root = el("div", { class: "quiz" });
    var head = el("div", { class: "quiz-head" });
    head.appendChild(el("button", { class: "icon-btn", title: "Salir", onclick: function () { stop(); go("tablas"); } }, icon("back")));
    head.appendChild(el("div", { class: "quiz-head-mid" }, [
      el("div", { class: "quiz-title", text: "Contrarreloj" }),
      el("div", { class: "quiz-sub muted", text: tablaSubt(tabla) })
    ]));
    var timeChip = el("div", { class: "tmr tmr-q" }, [el("span", { class: "tmr-dot" }), el("div", { class: "tmr-info" }, [el("span", { class: "tmr-lbl", text: "Tiempo" }), el("span", { class: "tmr-time", id: "contra-time", text: fmtClock(TIME) })])]);
    head.appendChild(timeChip);
    root.appendChild(head);
    root.appendChild(el("div", { class: "contra-stats" }, [
      el("div", { class: "contra-stat" }, [el("span", { class: "contra-num", id: "contra-score", text: "0" }), el("span", { class: "contra-lbl muted", text: "puntos" })]),
      el("div", { class: "contra-stat" }, [el("span", { class: "contra-num", id: "contra-streak", text: "0" }), el("span", { class: "contra-lbl muted", text: "racha" })])
    ]));
    var body = el("div", { class: "quiz-body" }); root.appendChild(body);
    mount(root, false);
    draw();
    clock = setInterval(function () {
      left--;
      var t = document.getElementById("contra-time"); if (t) t.textContent = fmtClock(Math.max(0, left));
      timeChip.classList.toggle("danger", left <= 10);
      if (left <= 0) finish();
    }, 1000);

    function stop() { ended = true; if (clock) { clearInterval(clock); clock = null; } }

    function draw() {
      answered = false;
      var p = tablaPair(tabla), a = p[0], b = p[1]; ans = a * b;
      body.innerHTML = "";
      body.appendChild(el("div", { class: "tabla-q", text: a + " × " + b }));
      var seen = {}; seen[ans] = true; var options = [ans];
      while (options.length < 4) {
        var d = ans + (Math.floor(Math.random() * 11) - 5);
        if (d > 0 && !seen[d]) { seen[d] = true; options.push(d); }
      }
      options = shuffle(options);
      var opts2 = el("div", { class: "opts opts-grid" });
      options.forEach(function (val) {
        var bn = el("button", { class: "opt opt-center", onclick: function () { choose(val, bn, opts2); } }, String(val));
        opts2.appendChild(bn);
      });
      body.appendChild(opts2);
    }

    function choose(val, btn, container) {
      if (answered || ended) return; answered = true;
      var ok = val === ans;
      if (ok) { score++; streak++; if (streak > best) best = streak; Sound.correct(); btn.classList.add("correct"); }
      else {
        streak = 0; Sound.wrong(); btn.classList.add("wrong");
        container.querySelectorAll(".opt").forEach(function (b2) { if (b2.textContent === String(ans)) b2.classList.add("correct"); });
      }
      document.getElementById("contra-score").textContent = String(score);
      document.getElementById("contra-streak").textContent = String(streak);
      container.querySelectorAll(".opt").forEach(function (b2) { b2.disabled = true; });
      setTimeout(function () { if (!ended) draw(); }, ok ? 280 : 600);
    }

    function finish() {
      if (ended) return;
      stop();
      Store.markStudiedToday(); schedulePush();
      var res = el("div", { class: "result" });
      res.appendChild(el("div", { class: "result-eyebrow muted", text: "Contrarreloj · " + tablaSubt(tabla) }));
      res.appendChild(el("div", { class: "result-big", text: String(score) }));
      res.appendChild(el("div", { class: "result-pct", text: "puntos · mejor racha: " + best }));
      var msg = score >= 25 ? "¡Velocidad de crack! Tu cálculo mental vuela." : (score >= 15 ? "¡Muy bien! Cada vez más rápido." : "Buen inicio. Con práctica vas a volar.");
      res.appendChild(el("p", { class: "result-msg muted", text: msg }));
      var acts = el("div", { class: "result-actions" });
      acts.appendChild(el("button", { class: "btn btn-ghost", onclick: function () { go("tablas"); } }, "Volver"));
      acts.appendChild(el("button", { class: "btn btn-cta", onclick: function () { startTablasContra(tabla); } }, "Otra vez"));
      res.appendChild(acts);
      body.innerHTML = ""; body.appendChild(res);
      if (score >= 15) { Sound.celebrate(); confetti(score >= 25 ? 110 : 60); }
    }
  }

  /* ============================================================
     VISTA · MATERIAL DE APOYO
     ============================================================ */
  function renderMaterial() {
    var frag = el("div", {});
    frag.appendChild(pageHead("Material de apoyo", "Repaso rápido de fórmulas y estrategias para la PAA. Tenelo a mano antes de practicar."));

    var mat = el("div", { class: "card" });
    mat.appendChild(el("div", { class: "card-title", text: "Fórmulas clave de matemática" }));
    var shapes = el("div", { class: "mat-svg" });
    shapes.innerHTML = '<svg viewBox="0 0 340 96" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="26" width="74" height="46" fill="rgba(77,163,255,.14)" stroke="var(--math)" stroke-width="2"/><text x="22" y="88" fill="currentColor" font-size="11">Rectángulo</text><polygon points="150,72 110,72 130,28" fill="rgba(46,230,166,.14)" stroke="var(--brand)" stroke-width="2"/><text x="106" y="88" fill="currentColor" font-size="11">Triángulo</text><circle cx="222" cy="49" r="23" fill="rgba(199,146,234,.14)" stroke="var(--verbal)" stroke-width="2"/><text x="202" y="88" fill="currentColor" font-size="11">Círculo</text><rect x="280" y="29" width="42" height="42" fill="rgba(255,209,102,.14)" stroke="var(--gold)" stroke-width="2"/><text x="282" y="88" fill="currentColor" font-size="11">Cuadrado</text></svg>';
    mat.appendChild(shapes);
    var fxs = [
      ["Rectángulo", "área = base × altura · perímetro = 2 × (base + altura)"],
      ["Cuadrado", "área = lado × lado · perímetro = 4 × lado"],
      ["Triángulo", "área = base × altura ÷ 2"],
      ["Círculo", "área = π × radio² · circunferencia = 2 × π × radio  (π ≈ 3,14 o {{22/7}})"],
      ["Porcentaje", "el x % de N = N × x ÷ 100"],
      ["Regla de tres", "si a → b, entonces c → b × c ÷ a"],
      ["Probabilidad", "casos favorables ÷ casos totales"],
      ["Promedio", "suma de los datos ÷ cantidad de datos"],
      ["Velocidad", "distancia ÷ tiempo"]
    ];
    var fl = el("div", { class: "mat-list" });
    fxs.forEach(function (f) {
      var row = el("div", { class: "mat-row" });
      row.appendChild(el("span", { class: "mat-key", text: f[0] }));
      row.appendChild(el("span", { class: "mat-val", html: mathHTML(f[1]) }));
      fl.appendChild(row);
    });
    mat.appendChild(fl);
    frag.appendChild(mat);

    var verb = el("div", { class: "card" });
    verb.appendChild(el("div", { class: "card-title", text: "Cómo abordar cada tipo de verbal" }));
    var vs = [
      ["Idea principal", "Elegí la opción que ABARCA todo el texto, no un detalle suelto."],
      ["Idea implícita", "Lo que se DEDUCE aunque no esté escrito. Ojo con lo que el texto NO dice."],
      ["Paráfrasis", "La opción que dice LO MISMO con otras palabras, ni más ni menos."],
      ["Proposiciones", "Revisá una por una cuál se deduce; descartá las que afirman de más."],
      ["Perspectiva", "Un mismo hecho se ve distinto según quién lo mira y qué le interesa."],
      ["Causa y consecuencia", "Qué pasó primero (causa) y qué resultó (consecuencia). Coincidir no es causar."],
      ["Finalidad", "El para qué. No confundas el fin con el medio."],
      ["Conceptualización", "Resumí la actitud o idea en UNA palabra precisa."]
    ];
    var vl = el("div", { class: "mat-list" });
    vs.forEach(function (f) {
      var row = el("div", { class: "mat-row" });
      row.appendChild(el("span", { class: "mat-key", text: f[0] }));
      row.appendChild(el("span", { class: "mat-val", text: f[1] }));
      vl.appendChild(row);
    });
    verb.appendChild(vl);
    frag.appendChild(verb);

    var ex = el("div", { class: "card" });
    ex.appendChild(el("div", { class: "card-title", text: "Estrategia para el día del examen" }));
    var tips = [
      "45 ítems en 110 minutos ≈ 2 min por ítem. No te trabes: marcá tu mejor opción y seguí.",
      "NO penaliza adivinar: nunca dejés una en blanco.",
      "Leé TODAS las opciones antes de marcar; la trampa suele parecerse a la correcta.",
      "En mate, hacé un dibujo o una tabla rápida y revisá las unidades.",
      "Si una te traba, pasá y volvé después con la mente fresca. Respirá."
    ];
    var ul = el("ul", { class: "mat-tips" });
    tips.forEach(function (t) { ul.appendChild(el("li", { text: t })); });
    ex.appendChild(ul);
    frag.appendChild(ex);

    return frag;
  }

  /* ============================================================
     VISTA · AJUSTES
     ============================================================ */
  function renderAjustes() {
    var frag = el("div", {});
    frag.appendChild(pageHead("Ajustes", "Configurá tu examen, el sonido y tu sesión."));

    var examCard = el("div", { class: "card settings-card" });
    examCard.appendChild(el("div", { class: "card-title", text: "Tu examen" }));
    examCard.appendChild(el("label", { class: "field-label", text: "Nombre del examen" }));
    var nameInput = el("input", { class: "input", type: "text", value: state.examName || "", id: "set-name" });
    examCard.appendChild(nameInput);
    examCard.appendChild(el("label", { class: "field-label", text: "Fecha del examen" }));
    var dateInput = el("input", { class: "input", type: "date", value: state.examDate || "", id: "set-date" });
    examCard.appendChild(dateInput);
    examCard.appendChild(el("div", { class: "muted set-hint", text: "PAA UCR / UNA 2026: aplicación el 3 y 4 de octubre. 45 ítems · 1 h 50 min · 4 opciones." }));
    examCard.appendChild(el("button", {
      class: "btn btn-primary", style: "margin-top:14px",
      onclick: function () {
        Sound.click();
        Store.setExam(dateInput.value || null, nameInput.value || state.examName);
        refreshTopbar();
        schedulePush();
        toast("Examen actualizado");
      }
    }, "Guardar examen"));
    frag.appendChild(examCard);

    var soundCard = el("div", { class: "card settings-card" });
    soundCard.appendChild(el("div", { class: "card-title", text: "Sonido" }));
    var sw = el("button", {
      class: "switch" + (state.settings.sound ? " on" : ""),
      onclick: function () {
        var v = Store.toggleSound();
        sw.classList.toggle("on", v);
        swLabel.textContent = v ? "Activado" : "Desactivado";
        if (v) Sound.correct();
        schedulePush();
      }
    }, el("span", { class: "switch-knob" }));
    var swLabel = el("span", { class: "switch-text", text: state.settings.sound ? "Activado" : "Desactivado" });
    var swRow = el("div", { class: "switch-row" });
    swRow.appendChild(sw); swRow.appendChild(swLabel);
    soundCard.appendChild(swRow);
    frag.appendChild(soundCard);

    var syncCard = el("div", { class: "card settings-card" });
    syncCard.appendChild(el("div", { class: "card-title", text: "Sincronización" }));
    if (state.isGuest) {
      syncCard.appendChild(el("p", { class: "muted", text: "Estás en modo local: tu progreso se guarda en este dispositivo. Iniciá sesión con tu contraseña para sincronizarlo en la nube entre tus dispositivos." }));
      syncCard.appendChild(el("button", { class: "btn btn-soft", onclick: showLogin }, [icon("sync"), el("span", { text: "Iniciar sesión para sincronizar" })]));
    } else {
      var last = state.lastSync ? new Date(state.lastSync).toLocaleString("es-CR") : "nunca";
      var lastLine = el("p", { class: "muted sync-line", text: "Última sincronización: " + last });
      syncCard.appendChild(lastLine);
      syncCard.appendChild(el("button", {
        class: "btn btn-soft", onclick: function () {
          Sound.click();
          lastLine.textContent = "Sincronizando…";
          Store.push().then(function (pr) {
            return Store.pull().then(function (lr) {
              state = Store.get();
              lastLine.textContent = "Última sincronización: " + (state.lastSync ? new Date(state.lastSync).toLocaleString("es-CR") : "nunca");
              if (pr.ok && lr.ok) { toast("Datos sincronizados en la nube"); }
              else {
                var stc = pr.status || lr.status;
                if (stc === 401 || stc === 403) toast("Sin permiso de escritura (HTTP " + stc + "). Hay que activar Update en la Access Key de JSONBin.");
                else if (stc) toast("Error de sincronización (HTTP " + stc + ")");
                else toast("No se pudo sincronizar. Revisá tu conexión.");
              }
            });
          });
        }
      }, [icon("sync"), el("span", { text: "Sincronizar ahora" })]));
    }
    frag.appendChild(syncCard);

    var sessCard = el("div", { class: "card settings-card" });
    sessCard.appendChild(el("div", { class: "card-title", text: "Sesión" }));
    sessCard.appendChild(el("p", { class: "muted", text: state.isGuest
      ? "Estás en modo local: tenés todo el contenido y tu progreso se guarda en este dispositivo."
      : "Sesión iniciada como " + state.user + ". Tu progreso se sincroniza en la nube." }));
    if (state.isGuest) {
      sessCard.appendChild(el("button", { class: "btn btn-soft", onclick: showLogin }, [icon("sync"), el("span", { text: "Iniciar sesión para sincronizar" })]));
    } else {
      sessCard.appendChild(el("button", { class: "btn btn-ghost", onclick: logout }, [icon("logout"), el("span", { text: "Cerrar sesión" })]));
    }
    frag.appendChild(sessCard);

    var dangerCard = el("div", { class: "card settings-card danger-zone" });
    dangerCard.appendChild(el("div", { class: "card-title", text: "Borrar datos" }));
    dangerCard.appendChild(el("p", { class: "muted", text: "Elimina todo tu progreso de este dispositivo. Si tenés sincronización, los datos en la nube no se borran salvo que sincronices después." }));
    dangerCard.appendChild(el("button", {
      class: "btn btn-danger", onclick: function () {
        if (confirm("¿Seguro que querés borrar todo tu progreso local? No se puede deshacer.")) {
          try { localStorage.removeItem("rutaPaa_state_v1"); } catch (e) {}
          Store.logout();
          state = Store.get();
          showLogin();
        }
      }
    }, "Borrar mi progreso"));
    frag.appendChild(dangerCard);

    frag.appendChild(el("p", { class: "security-note muted", text: "Nota: la contraseña y las llaves de sincronización viven en el código del sitio, así que no son seguridad real. La contraseña solo activa la sincronización de tu progreso, no desbloquea contenido. No guardes información sensible." }));

    return frag;
  }

  /* ============================================================
     COMPONENTES COMUNES
     ============================================================ */
  function pageHead(title, sub) {
    var h = el("div", { class: "page-head" });
    h.appendChild(el("h1", { class: "page-title", text: title }));
    if (sub) h.appendChild(el("p", { class: "page-sub muted", text: sub }));
    return h;
  }
  function backHead(title, onBack) {
    var h = el("div", { class: "back-head" });
    h.appendChild(el("button", { class: "icon-btn", onclick: onBack }, icon("back")));
    h.appendChild(el("h1", { class: "page-title", text: title }));
    return h;
  }

  function toast(msg) {
    var t = el("div", { class: "toast", text: msg });
    document.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.add("show"); });
    setTimeout(function () { t.classList.remove("show"); setTimeout(function () { t.remove(); }, 300); }, 1800);
  }

  /* ============================================================
     SESIÓN Y SINCRONIZACIÓN
     ============================================================ */
  function schedulePush() {
    // El auto-guardado vive en Store.persist(); esto solo lo refuerza.
    Store.scheduleAutoPush();
  }

  function enterApp() {
    state = Store.get();
    document.getElementById("login-screen").hidden = true;
    document.getElementById("app-shell").hidden = false;
    buildNav();
    refreshTopbar();
    current = "inicio";
    mount(renderInicio(), true);

    // El cronómetro de estudio NO corre acá: solo cuenta dentro de práctica/simulacro.

    if (!state.isGuest) {
      Store.pull().then(function () {
        state = Store.get();
        refreshTopbar();
        if (current === "inicio") mount(renderInicio(), true);
        Store.push();   // asegura que la nube quede sembrada con tu progreso tras iniciar sesión
      });
      if (pushTimer) clearTimeout(pushTimer);
      setInterval(function () { if (!state.isGuest) Store.push(); }, 60000);
    }
  }

  function logout() {
    Sound.click();
    if (liveTicker) clearInterval(liveTicker);
    if (!state.isGuest) { Store.push(); }
    Store.logout();
    state = Store.get();
    showLogin();
  }

  function showLogin() {
    document.getElementById("app-shell").hidden = true;
    var ls = document.getElementById("login-screen");
    ls.hidden = false;
    var pass = document.getElementById("login-pass");
    if (pass) pass.value = "";
    var msg = document.getElementById("login-msg");
    if (msg) msg.textContent = "";
  }

  function wireLogin() {
    var passInput = document.getElementById("login-pass");
    var loginBtn = document.getElementById("login-btn");
    var guestBtn = document.getElementById("guest-btn");
    var msg = document.getElementById("login-msg");

    function attempt() {
      Sound.unlock();
      var val = passInput.value;
      if (val === CFG.authPassword) {
        Sound.correct();
        Store.login(CFG.defaultUser);
        state = Store.get();
        enterApp();
      } else {
        Sound.wrong();
        msg.textContent = "Contraseña incorrecta. Probá de nuevo.";
        var card = document.querySelector(".login-card");
        card.classList.remove("shake"); void card.offsetWidth; card.classList.add("shake");
      }
    }
    loginBtn.addEventListener("click", attempt);
    passInput.addEventListener("keydown", function (e) { if (e.key === "Enter") attempt(); });
    guestBtn.addEventListener("click", function () {
      Sound.unlock(); Sound.click();
      Store.guest();
      state = Store.get();
      enterApp();
    });
  }

  /* ============================================================
     CICLO DE VIDA / VISIBILIDAD
     ============================================================ */
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      Store.Timer.stop();
      if (!Store.get().isGuest) Store.push();
    } else if (quizActive && !quizPaused) {
      Store.Timer.start();
    }
  });
  window.addEventListener("beforeunload", function () {
    Store.Timer.stop();
  });

  /* ============================================================
     ARRANQUE
     ============================================================ */
  function boot() {
    var bn = document.getElementById("brand-name");
    if (bn) bn.textContent = CFG.appName;
    var tg = document.getElementById("brand-tagline");
    if (tg) tg.textContent = CFG.tagline;
    var bn2 = document.getElementById("tb-appname");
    if (bn2) bn2.textContent = CFG.appName;

    wireLogin();

    state = Store.get();
    if (state.user) {
      enterApp();
    } else {
      showLogin();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
