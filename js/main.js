// Mobile menu
const burger = document.querySelector('[data-burger]');
const mobile = document.querySelector('[data-mobile]');
if (burger && mobile){
  burger.addEventListener('click', () => mobile.classList.toggle('open'));
}

// Simple slider
const slides = Array.from(document.querySelectorAll('[data-slide]'));
const dotsWrap = document.querySelector('[data-dots]');
const prevBtn = document.querySelector('[data-prev]');
const nextBtn = document.querySelector('[data-next]');
let idx = 0;
let timer = null;

function setActive(i){
  if(!slides.length) return;
  idx = (i + slides.length) % slides.length;
  slides.forEach((s, k) => s.classList.toggle('active', k === idx));
  if(dotsWrap){
    Array.from(dotsWrap.children).forEach((d,k) => d.classList.toggle('active', k === idx));
  }
}

function buildDots(){
  if(!dotsWrap || !slides.length) return;
  dotsWrap.innerHTML = '';
  slides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'dot' + (i===0 ? ' active':'');
    d.type = 'button';
    d.addEventListener('click', () => { setActive(i); restart(); });
    dotsWrap.appendChild(d);
  });
}

function restart(){
  if(timer) clearInterval(timer);
  timer = setInterval(() => setActive(idx + 1), 5200);
}

if(slides.length){
  buildDots();
  setActive(0);
  restart();
  if(prevBtn) prevBtn.addEventListener('click', () => { setActive(idx - 1); restart(); });
  if(nextBtn) nextBtn.addEventListener('click', () => { setActive(idx + 1); restart(); });
}

// Contact form (demo)
const form = document.querySelector('[data-contact-form]');
if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks! Your message is ready to send. Connect this form to your email/CRM next.');
    form.reset();
  });
}