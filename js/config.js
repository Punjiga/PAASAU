/* ============================================================
   PAASAU - Configuracion central
   Edita este archivo para cambiar acceso, examen y sincronizacion.
   ============================================================ */
window.PAA_CONFIG = {
  appName: "PAASAU",
  tagline: "Tu camino a la UCR y la UNA, un día a la vez.",

  /* ---- Acceso / sincronizacion ----
     La app es de acceso ABIERTO: cualquiera entra y tiene TODO el contenido
     (practica, simulacros, temas, progreso local).
     El login con contrasena solo activa la SINCRONIZACION de tu progreso en
     la nube (JSONBin). Sin login, todo se guarda solo en este dispositivo.
     OJO: esto NO es seguridad real. Cualquiera que abra el codigo del sitio
     puede leer esta contrasena y las llaves. No guardes nada sensible. */
  authPassword: "Tivencito182@",
  defaultUser: "Punjiga",

  /* ---- Sincronizacion en la nube (JSONBin) ----
     RECOMENDACION: crea un bin NUEVO solo para PAASAU y pega su ID aqui.
     Tus datos se guardan bajo la llave "namespace". */
  sync: {
    enabled: true,
    binId: "6a356300f5f4af5e290fde79",
    accessKey: "$2a$10$Lj/Wg1sTimodtr9aWGa5a.luSsFrleSePFVYN0Bf8kRfiBFGG.wPS",
    namespace: "rutaPaa",
    base: "https://api.jsonbin.io/v3/b"
  },

  /* ---- Examen (PAA UCR / UNA, proceso 2026-2027) ----
     Formato oficial vigente (fuente: paa.iip.ucr.ac.cr):
     45 items, 1 h 50 min (110 min), 4 opciones (A-D), una correcta.
     Mezcla integrada: cerca de 59% verbal y 41% matematico. */
  defaultExamName: "PAA - Admisión UCR / UNA 2026",
  examTotalItems: 45,
  examMinutes: 110,
  examVerbalItems: 27,
  examDateOfficial: "2026-10-03",

  /* ---- Reglas de practica ---- */
  practiceCounts: [5, 10, 25, 30],
  practiceCountMax: 60,
  guestQuestionRatio: 0.12,  // invitados ven solo una muestra pequeña
  dailyQuizSize: 8,
  secondsPerItem: 147,
  minMinutesForStreak: 0
};
