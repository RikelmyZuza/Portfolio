const copy = {
  pt: {
    kicker: 'DESENVOLVEDOR JUNIOR',
    hw: ['Rikelmy', 'Zuza'],
    introLabel: 'me chamo',
    introTagline: 'desenvolvo desde o zero até o deploy',
    heroDesc: 'Apaixonado por construir soluções funcionais e aprender novas tecnologias. Trabalhando com Python, JavaScript, Node.js e muito mais.',
    cta1: 'ver projetos →', cta2: 'contato',
    projTitle: 'Projetos', skTitle: 'Habilidades', ctTitle: 'Contato',
    pn1: 'Black Hornet — App de Receitas de Café',
    pd1: 'Aplicação web para explorar e aprender receitas de café. Interface completa com front-end, back-end Node.js e banco de dados MySQL.',
    pn2: 'Sistema de Cadastro de Alunos',
    pd2: 'Sistema desktop com interface gráfica Tkinter para cadastro, edição e exclusão de alunos. Utiliza SQLite para persistência de dados e autenticação por email e senha.',
    status: 'disponível para oportunidades',
    metaLoc: 'Brasil',
    metaProjects: '2 projetos públicos',
    metaStack: 'Python · JS · Node',
    nav: ['início', 'projetos', 'skills', 'contato']
  },
  en: {
    kicker: 'JUNIOR DEVELOPER',
    hw: ['Rikelmy', 'Zuza'],
    introLabel: 'my name is',
    introTagline: 'building from zero to deploy',
    heroDesc: 'Passionate about building functional solutions and learning new technologies. Working with Python, JavaScript, Node.js and more.',
    cta1: 'view projects →', cta2: 'contact',
    projTitle: 'Projects', skTitle: 'Skills', ctTitle: 'Contact',
    pn1: 'Black Hornet — Coffee Recipe App',
    pd1: 'Web application to explore and learn coffee recipes. Full-stack with front-end, Node.js back-end and MySQL database.',
    pn2: 'Student Registration System',
    pd2: 'Desktop app with Tkinter GUI for student registration, editing and deletion. Uses SQLite for data persistence and email/password authentication.',
    status: 'open to opportunities',
    metaLoc: 'Brazil',
    metaProjects: '2 public projects',
    metaStack: 'Python · JS · Node',
    nav: ['home', 'projects', 'skills', 'contact']
  }
};

let lang = localStorage.getItem('portfolio-lang') || 'pt';
let dark = localStorage.getItem('portfolio-theme') === 'dark';

function applyLang(l) {
  const c = copy[l];
  document.getElementById('kicker-txt').textContent = c.kicker;
  document.getElementById('hw0').textContent = c.hw[0];
  document.getElementById('hw1').textContent = c.hw[1];
  document.getElementById('intro-label').textContent = c.introLabel;
  document.getElementById('intro-tagline').textContent = c.introTagline;
  document.getElementById('hero-desc').textContent = c.heroDesc;
  document.getElementById('cta1').textContent = c.cta1;
  document.getElementById('cta2').textContent = c.cta2;
  document.getElementById('proj-title').textContent = c.projTitle;
  document.getElementById('sk-title').textContent = c.skTitle;
  document.getElementById('ct-title').textContent = c.ctTitle;
  document.getElementById('pn1').textContent = c.pn1;
  document.getElementById('pd1').textContent = c.pd1;
  document.getElementById('pn2').textContent = c.pn2;
  document.getElementById('pd2').textContent = c.pd2;
  document.getElementById('status-txt').textContent = c.status;
  document.getElementById('meta-loc').textContent = c.metaLoc;
  const projCount = document.querySelectorAll('.proj-item').length;
  document.getElementById('meta-projects').textContent =
    l === 'pt' ? `${projCount} projetos públicos` : `${projCount} public projects`;
  document.getElementById('meta-stack').textContent = c.metaStack;
  document.querySelectorAll('.nav-links a').forEach((a, i) => { a.textContent = c.nav[i]; });
  document.getElementById('lang-btn').textContent = l === 'pt' ? 'EN' : 'PT';
  document.documentElement.lang = l === 'pt' ? 'pt-BR' : 'en';
}

document.getElementById('lang-btn').addEventListener('click', () => {
  lang = lang === 'pt' ? 'en' : 'pt';
  localStorage.setItem('portfolio-lang', lang);
  applyLang(lang);
});

function applyTheme() {
  if (dark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  const btn = document.getElementById('theme-btn');
  btn.textContent = dark ? '○' : '◐';
  btn.setAttribute('aria-pressed', String(dark));
}

document.getElementById('theme-btn').addEventListener('click', () => {
  dark = !dark;
  localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
  applyTheme();
});

// Aplica idioma e tema salvos (ou padrão) assim que a página carrega
applyLang(lang);
applyTheme();

// Scroll reveal + skill bars
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('on');
      e.target.querySelectorAll('.sk-fill').forEach(b => { b.style.width = b.dataset.w + '%'; });
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Active nav link on scroll (com throttle via requestAnimationFrame para reduzir custo de reflow)
let scrollTicking = false;
function updateActiveNav() {
  const secs = document.querySelectorAll('section[id]');
  let cur = '';
  secs.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
  });
  scrollTicking = false;
}
window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    window.requestAnimationFrame(updateActiveNav);
    scrollTicking = true;
  }
}, { passive: true });