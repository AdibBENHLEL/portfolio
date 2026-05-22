/* ══════════════════════════════════════
   data.js — all static content & config
   ══════════════════════════════════════ */

/* ── BOOT SEQUENCE LINES ── */
const bootLines = [
  { text: 'C:\\Users\\visitor> HELLO_WORLD.exe', cls: 'cmd',   delay: 0    },
  { text: '',                                     cls: 'dim',   delay: 300  },
  { text: 'Initializing runtime environment...', cls: 'dim',   delay: 500  },
  { text: 'Loading modules...',                  cls: 'dim',   delay: 900  },
  { text: '[OK] core.js        loaded',          cls: 'ok',    delay: 1200 },
  { text: '[OK] ui.js          loaded',          cls: 'ok',    delay: 1500 },
  { text: '[OK] portfolio.js   loaded',          cls: 'ok',    delay: 1800 },
  { text: '',                                     cls: 'dim',   delay: 2000 },
  { text: 'Checking system...',                  cls: 'dim',   delay: 2100 },
  { text: 'CPU:  Intel Core i7   ████████ OK',   cls: 'ok',    delay: 2400 },
  { text: 'RAM:  8192 MB         ████████ OK',   cls: 'ok',    delay: 2700 },
  { text: 'GPU:  Available       ████████ OK',   cls: 'ok',    delay: 3000 },
  { text: '',                                     cls: 'dim',   delay: 3200 },
  { text: '[OK] All checks passed.',             cls: 'ok',    delay: 3300 },
  { text: '',                                     cls: 'dim',   delay: 3500 },
  { text: '> Launching HELLO_WORLD.exe...',      cls: 'cyan',  delay: 3600 },
  { text: '',                                     cls: 'dim',   delay: 3900 },
  { text: '██╗  ██╗███████╗██╗     ██╗      ██████╗',  cls: 'cyan', delay: 4000 },
  { text: '██║  ██║██╔════╝██║     ██║     ██╔═══██╗', cls: 'cyan', delay: 4100 },
  { text: '███████║█████╗  ██║     ██║     ██║   ██║', cls: 'cyan', delay: 4200 },
  { text: '██╔══██║██╔══╝  ██║     ██║     ██║   ██║', cls: 'cyan', delay: 4300 },
  { text: '██║  ██║███████╗███████╗███████╗╚██████╔╝', cls: 'cyan', delay: 4400 },
  { text: '╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝', cls: 'cyan', delay: 4500 },
  { text: '',                                     cls: 'dim',   delay: 4600 },
  { text: '> Hello, World! 👋',                  cls: 'white', delay: 4700 },
  { text: '> Welcome to Adib\'s portfolio.',     cls: 'white', delay: 5000 },
  { text: '> Type \'help\' to explore.',          cls: 'dim',   delay: 5300 },
  { text: '',                                     cls: 'dim',   delay: 5500 },
];

/* ── ABOUT TERMINAL COMMANDS ── */
const aboutCommands = {
  help: [
    ['hi', '─── Available commands ───────────────'],
    ['ok', '  whoami    →  who is Adib?'],
    ['ok', '  skills    →  list tech stack'],
    ['ok', '  stack     →  same as skills'],
    ['ok', '  contact   →  get contact info'],
    ['ok', '  status    →  current availability'],
    ['ok', '  date      →  current date & time'],
    ['ok', '  clear     →  clear terminal'],
    ['hi', '──────────────────────────────────────'],
  ],
  whoami: [
    ['hi', 'Adib Ben Helal'],
    ['' , 'Role     : Software Engineer / Full-Stack Developer'],
    ['' , 'Location : Tunis, Tunisia'],
    ['' , 'Focus    : MERN · Python · AI/ML · Data Engineering'],
    ['ok', 'Status   : Open to opportunities ✓'],
  ],
  status: [
    ['ok', '● AVAILABLE — open to freelance & full-time roles'],
    ['' , 'Response time : < 24h'],
    ['' , 'Timezone      : UTC+1 (Tunis)'],
  ],
  skills: [
    ['hi', '── Languages ──────────────────────────'],
    ['' , '  C · Python · Java · JS · TS · PHP · SQL'],
    ['hi', '── Frameworks ─────────────────────────'],
    ['' , '  React · MERN · Flask · TensorFlow · D3.js'],
    ['hi', '── Data & DevOps ───────────────────────'],
    ['' , '  Docker · Kafka · Spark · Hadoop · Power BI'],
    ['hi', '── Databases ──────────────────────────'],
    ['' , '  MySQL · PostgreSQL · SQL Server · MinIO'],
  ],
  contact: [
    ['hi', '── Contact ─────────────────────────────'],
    ['' , '  Email    : adibbenhlel30@gmail.com'],
    ['' , '  GitHub   : github.com/AdibBENHLEL'],
    ['' , '  LinkedIn : linkedin.com/in/adib'],
    ['' , '  Location : Tunis, Tunisia'],
  ],
  date:  () => [['' , new Date().toString()]],
  clear: null,
};
aboutCommands.stack = aboutCommands.skills; // alias

/* ── BOTTOM CMD BAR COMMANDS ── */
const barCommands = {
  help:     `Available commands:\n  about · skills · projects · resume · contact · home\n  github · email · whoami · date · clear`,
  about:    'nav:about',
  skills:   'nav:skills',
  projects: 'nav:projects',
  resume:   'nav:resume',
  contact:  'nav:contact',
  demos:    'nav:demos',
  home:     'nav:hero',
  whoami:   `Adib Ben Helal — Software Engineer / Full-Stack Developer\nLocation: Tunisia  |  Status: Open to opportunities\nStack: MERN · Python · Java · Docker · Spark · AI/ML`,
  date:     () => new Date().toString(),
  github:   'open:https://github.com/AdibBENHLEL',
  email:    'copy:adibbenhlel30@gmail.com',
  clear:    'clear',
};
