/* ══════════════════════════════════════
   animations.js — page loader + misc
   ══════════════════════════════════════ */

// ── PAGE LOADER ──
setTimeout(() => {
  document.getElementById('page-loader').classList.add('hidden');
}, 2500);

window.addEventListener('load', () => {
  document.getElementById('page-loader').classList.add('hidden');
});

// ── YEAR ──
document.getElementById('yr').textContent = new Date().getFullYear();
