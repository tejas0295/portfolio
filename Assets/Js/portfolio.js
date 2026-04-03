// ---- Navbar scroll ----
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ---- Active nav link on scroll ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});

// ---- Intersection Observer for fade animations ----
const animEls = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
animEls.forEach(el => observer.observe(el));

// ---- Counter animation ----
const counterEls = document.querySelectorAll('.counter');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target;
      const target = +el.dataset.target;
      const duration = 1200;
      const start = performance.now();
      const ease = t => 1 - Math.pow(1 - t, 3);
      function update(now) {
        const p = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(ease(p) * target);
        if (p < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.4 });
counterEls.forEach(el => counterObserver.observe(el));

// ---- Contact submit ----
function sendContact() {
  const name = document.getElementById('cName').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const msg = document.getElementById('cMessage').value.trim();
  if (!name || !email || !msg) {
    alert('Please fill in all fields.');
    return;
  }
  alert(`Thanks, ${name}! I'll get back to you soon.`);
  document.getElementById('cName').value = '';
  document.getElementById('cEmail').value = '';
  document.getElementById('cMessage').value = '';
}

// ---- Smooth scroll for hero buttons ----
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ---- Hero typing effect ----
const heroRoleEl = document.querySelector(".hero-role");
const roles = JSON.parse(heroRoleEl.dataset.roles || '["Software Developer"]');
let i = 0, j = 0, current = "", deleting = false;

function typeEffect() {
  if (!deleting && j < roles[i].length) {
    current += roles[i][j++];
  } else if (deleting && j > 0) {
    current = current.slice(0, -1);
    j--;
  } else if (j === roles[i].length) {
    deleting = true;
    setTimeout(typeEffect, 1000);
    return;
  } else if (j === 0 && deleting) {
    deleting = false;
    i = (i + 1) % roles.length;
  }
  heroRoleEl.textContent = current;
  setTimeout(typeEffect, deleting ? 50 : 150);
}
typeEffect();
// ---- Hero Particles Effect ----
const canvas = document.getElementById("heroParticles");
const ctx = canvas.getContext("2d");

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2 + 1;
    this.alpha = Math.random() * 0.5 + 0.3;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) this.reset();
  }
  draw() {
    ctx.fillStyle = `rgba(232,80,58,${this.alpha})`; // same color as your glow
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const particles = Array.from({ length: 80 }, () => new Particle());

function animateParticles() {
  ctx.clearRect(0, 0, width, height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateParticles);
}

animateParticles();