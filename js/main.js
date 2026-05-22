/* ══════════════════════════════════════
   main.js — EmailJS init + contact form
   ══════════════════════════════════════ */

// ── EMAILJS INIT ──
window.addEventListener('load', () => {
  emailjs.init("xkeLA1hqjqr5xmjCb"); // ← replace with your real key
});

// ── CONTACT FORM ──
function sendMsg() {
  const name = document.getElementById('f-name').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const msg = document.getElementById('f-msg').value.trim();
  const btn = document.querySelector('.cmd-submit');
  const out = document.getElementById('form-msg');

  if (!name || !email || !msg) {
    out.style.display = 'block';
    out.style.color = '#ff4444';
    out.textContent = '✗ Please fill all fields.';
    setTimeout(() => out.style.display = 'none', 3000);
    return;
  }

  btn.textContent = 'SENDING...';
  btn.disabled = true;

  emailjs.send(
    "service_vm80x34",   // ← replace
    "template_cqwnsum",  // ← replace
    { from_name: name, from_email: email, message: msg }
  )
    .then(() => {
      out.style.display = 'block';
      out.style.color = '#00e5ff';
      out.textContent = "✓ Message sent! I'll get back to you soon.";
      document.getElementById('f-name').value = '';
      document.getElementById('f-email').value = '';
      document.getElementById('f-msg').value = '';
      btn.textContent = 'SEND_MESSAGE →';
      btn.disabled = false;
      setTimeout(() => out.style.display = 'none', 4000);
    })
    .catch(err => {
      out.style.display = 'block';
      out.style.color = '#ff4444';
      out.textContent = '✗ Failed to send. Try again later.';
      btn.textContent = 'SEND_MESSAGE →';
      btn.disabled = false;
      console.error('EmailJS error:', err);
      setTimeout(() => out.style.display = 'none', 4000);
    });
}

document.querySelector('.cmd-submit').addEventListener('click', sendMsg);
