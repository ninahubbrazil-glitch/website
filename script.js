/* CONFIGURAÇÃO DA NINA
 * Antes de publicar, substitua appStoreUrl pelo link público da Nina na App Store.
 * Instagram confirmado. O link do TikTok ainda precisa ser confirmado: não foi duplicado.
 */
const NINA_CONFIG = {
  appStoreUrl: "", // Ex.: https://apps.apple.com/br/app/nome-do-app/idXXXXXXXXXX
  instagramUrl: "https://www.instagram.com/ninahub_/",
  tiktokUrl: "", // Preencha quando tiver o endereço correto
  contactEmail: "ninahubbrazil@gmail.com"
};

const isConfiguredAppStore = /^https:\/\/(apps\.apple\.com|itunes\.apple\.com)\//i.test(NINA_CONFIG.appStoreUrl);
document.querySelectorAll('[data-app-link]').forEach((link) => {
  if (isConfiguredAppStore) {
    link.href = NINA_CONFIG.appStoreUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  } else {
    link.href = '#download';
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      document.querySelector('#download')?.scrollIntoView({behavior: reduced ? 'auto' : 'smooth'});
      const old = document.querySelector('.setup-notice');
      if (old) old.remove();
      const notice = document.createElement('div');
      notice.className = 'setup-notice';
      notice.setAttribute('role', 'status');
      notice.textContent = 'O link da App Store precisa ser configurado em script.js antes da publicação final.';
      document.body.appendChild(notice);
      window.setTimeout(() => notice.remove(), 5500);
    });
  }
});
const insta = document.querySelector('.socials a[aria-label="Instagram da Nina"]');
if (insta) insta.href = NINA_CONFIG.instagramUrl;
const tiktok = document.querySelector('[data-tiktok-link]');
if (tiktok && NINA_CONFIG.tiktokUrl) { tiktok.href = NINA_CONFIG.tiktokUrl; tiktok.target = '_blank'; tiktok.rel = 'noopener noreferrer'; tiktok.hidden = false; }
document.querySelectorAll('a[href^="mailto:ninahubbrazil@gmail.com"]').forEach(a => a.href = `mailto:${NINA_CONFIG.contactEmail}`);
document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
function closeMenu(){ if(!menuButton||!nav)return; menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menu');nav.classList.remove('open');document.body.classList.remove('menu-open'); }
menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');nav.classList.toggle('open',open);document.body.classList.toggle('menu-open',open);});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if ('IntersectionObserver' in window && !reduceMotion) {
  const observer = new IntersectionObserver((entries, obs)=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');obs.unobserve(entry.target);}}),{threshold:.12,rootMargin:'0px 0px -35px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
} else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible'));
document.querySelectorAll('.faq-list details').forEach(detail=>{const summary=detail.querySelector('summary');if(summary&&!summary.querySelector('span')){const plus=document.createElement('span');plus.textContent='＋';plus.setAttribute('aria-hidden','true');summary.appendChild(plus);}});
