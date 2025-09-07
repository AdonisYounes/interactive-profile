// DARK MODE TOGGLE
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  const curr = document.documentElement.dataset.theme || 'dark';
  const next = curr === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  themeBtn.setAttribute('aria-pressed', String(next === 'dark'));
  themeBtn.textContent = next === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode';
});

// SKILL BARS
const bars = document.querySelectorAll('.bar > span');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const v = e.target.dataset.value || 0;
      e.target.style.width = v + '%';
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });
bars.forEach(b => io.observe(b));

// CONTACT FORM VALIDATION
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const nameErr = document.getElementById('nameErr');
  const emailErr = document.getElementById('emailErr');
  const messageErr = document.getElementById('messageErr');
  const status = document.getElementById('formStatus');

  let ok = true;
  nameErr.hidden = emailErr.hidden = messageErr.hidden = true;

  if (!name.value || name.value.trim().length < 2) { nameErr.hidden = false; ok = false; }
  if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email.value)) { emailErr.hidden = false; ok = false; }
  if (!message.value || message.value.trim().length < 10) { messageErr.hidden = false; ok = false; }

  if (ok) {
    status.textContent = 'Thanks! This demo validates on the client only.';
    form.reset();
  } else {
    status.textContent = '';
  }
});

// FOOTER YEAR
document.getElementById('year').textContent = new Date().getFullYear();
