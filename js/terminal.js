/* ══════════════════════════════════════
   terminal.js — about terminal + cmd bar
   ══════════════════════════════════════ */

// ── HELLO_WORLD.EXE BOOT SEQUENCE ──
let bootDone = false;

function launchExe() {
  if (bootDone) {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    return;
  }

  const btn    = document.getElementById('exe-btn');
  const output = document.getElementById('about-output');

  btn.classList.add('running');
  document.getElementById('exe-label').textContent = '⏳ Running...';
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });

  output.innerHTML = '';

  bootLines.forEach(({ text, cls, delay }) => {
    setTimeout(() => {
      const span = document.createElement('span');
      span.className = 'term-line ' + cls;
      span.textContent = text;
      output.appendChild(span);
      output.scrollTop = output.scrollHeight;
    }, delay);
  });

  setTimeout(() => {
    btn.classList.remove('running');
    document.getElementById('exe-label').textContent = '✓ HELLO_WORLD.exe';
    document.getElementById('about-cmd').focus();
    bootDone = true;
  }, 5700);
}

// ── ABOUT TERMINAL — interactive shell ──
const aboutOutput = document.getElementById('about-output');
const aboutInput  = document.getElementById('about-cmd');
let aboutHistory = [], aboutHistIdx = -1;

function aboutPrint(cmdText, lines) {
  const echo = document.createElement('div');
  echo.className = 't-line';
  echo.innerHTML = `<span class="t-prompt">adib@portfolio:~$</span><span class="t-cmd">&nbsp;${cmdText}</span>`;
  aboutOutput.appendChild(echo);

  lines.forEach(([cls, txt]) => {
    const d = document.createElement('div');
    d.className = cls === 'hi' ? 't-out hi' : cls === 'ok' ? 't-out ok' : cls === 'err' ? 't-out err' : 't-out';
    d.textContent = txt;
    aboutOutput.appendChild(d);
  });

  aboutOutput.scrollTop = aboutOutput.scrollHeight;
}

// Boot message shown on page load
(function bootMsg() {
  [
    ['hi', '// Adib Ben Helal — portfolio.sh v1.0'],
    ['' , '// Type "help" to see available commands.'],
    ['' , ''],
  ].forEach(([cls, txt]) => {
    const d = document.createElement('div');
    d.className = cls === 'hi' ? 't-out hi' : 't-out';
    d.textContent = txt;
    aboutOutput.appendChild(d);
  });
})();

if (aboutInput) {
  aboutInput.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const match = Object.keys(aboutCommands).find(k => k.startsWith(aboutInput.value.toLowerCase()));
      if (match) aboutInput.value = match;
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (aboutHistIdx < aboutHistory.length - 1) { aboutHistIdx++; aboutInput.value = aboutHistory[aboutHistory.length - 1 - aboutHistIdx]; }
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (aboutHistIdx > 0) { aboutHistIdx--; aboutInput.value = aboutHistory[aboutHistory.length - 1 - aboutHistIdx]; }
      else { aboutHistIdx = -1; aboutInput.value = ''; }
      return;
    }
    if (e.key !== 'Enter') return;

    const raw = aboutInput.value.trim();
    aboutInput.value = '';
    if (!raw) return;

    aboutHistory.push(raw);
    aboutHistIdx = -1;

    const cmd    = raw.toLowerCase();
    const action = aboutCommands[cmd];

    if (action === undefined) {
      aboutPrint(raw, [['err', `command not found: ${raw}. Type 'help'.`]]);
      return;
    }
    if (action === null) { aboutOutput.innerHTML = ''; return; } // clear
    const lines = typeof action === 'function' ? action() : action;
    aboutPrint(raw, lines);
  });
}

// ── BOTTOM CMD BAR ──
const cmdInput  = document.getElementById('cmd-input');
const cmdOutput = document.getElementById('cmd-output');
let cmdHistory = [], histIdx = -1;
const TAB_KEYS  = Object.keys(barCommands);

function printOutput(lines) {
  cmdOutput.innerHTML = '';
  lines.forEach(([cls, txt]) => {
    const d = document.createElement('div');
    d.className = 'cmd-out-line ' + cls;
    d.textContent = txt;
    cmdOutput.appendChild(d);
  });
  cmdOutput.style.display = 'block';
}

if (cmdInput) {
  cmdInput.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const match = TAB_KEYS.find(k => k.startsWith(cmdInput.value.toLowerCase()));
      if (match) cmdInput.value = match;
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (histIdx < cmdHistory.length - 1) { histIdx++; cmdInput.value = cmdHistory[cmdHistory.length - 1 - histIdx]; }
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (histIdx > 0) { histIdx--; cmdInput.value = cmdHistory[cmdHistory.length - 1 - histIdx]; }
      else { histIdx = -1; cmdInput.value = ''; }
      return;
    }
    if (e.key === 'Escape') { cmdOutput.style.display = 'none'; cmdInput.value = ''; return; }
    if (e.key !== 'Enter') return;

    const raw = cmdInput.value.trim();
    if (!raw) return;
    cmdHistory.push(raw);
    histIdx = -1;
    cmdInput.value = '';

    const action = barCommands[raw.toLowerCase()];

    if (!action) {
      printOutput([['c', 'visitor@adib:~$ ' + raw], ['d', `command not found: ${raw}. Type 'help'.`]]);
      return;
    }
    if (action === 'clear')           { cmdOutput.style.display = 'none'; return; }
    if (typeof action === 'function') { printOutput([['c', 'visitor@adib:~$ ' + raw], ['w', action()]]); return; }
    if (action.startsWith('nav:'))    { document.getElementById(action.slice(4))?.scrollIntoView({ behavior: 'smooth' }); cmdOutput.style.display = 'none'; return; }
    if (action.startsWith('open:'))   { window.open(action.slice(5), '_blank'); cmdOutput.style.display = 'none'; return; }
    if (action.startsWith('copy:'))   { navigator.clipboard.writeText(action.slice(5)); printOutput([['c', 'visitor@adib:~$ ' + raw], ['w', '✓ Email copied to clipboard!']]); return; }

    printOutput([['c', 'visitor@adib:~$ ' + raw], ...action.split('\n').map(l => ['w', l])]);
  });
}

document.addEventListener('click', e => {
  if (cmdOutput && !document.getElementById('cmdbar').contains(e.target) && !cmdOutput.contains(e.target))
    cmdOutput.style.display = 'none';
});
