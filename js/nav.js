/* ══════════════════════════════════════
   nav.js — active link + theme toggle
   ══════════════════════════════════════ */

// ── ACTIVE NAV ON SCROLL ──
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 80) current = s.id; });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});

// ── THEME TOGGLE ──
let light = false;
function toggleTheme() {
  light = !light;
  document.body.classList.toggle('light-mode', light);
  document.querySelector('.nav-theme').textContent = light ? '🌙' : '☀';
}
