(() => {
  'use strict';
  const menu = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  const closeMenu = () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); };
  menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
  const progress = document.querySelector('.reading-progress');
  const updateProgress = () => { const max = document.documentElement.scrollHeight - innerHeight; progress.style.width = `${max > 0 ? scrollY / max * 100 : 0}%`; };
  addEventListener('scroll', updateProgress, { passive: true }); addEventListener('resize', updateProgress); updateProgress();
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) nav.querySelectorAll('a').forEach(a => a.classList.toggle('active', a.hash === '#' + entry.target.id)); }); }, { rootMargin: '-15% 0px -65% 0px' });
    document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
  }
  const phones = document.querySelector('.phones');
  const controls = document.createElement('div'); controls.className = 'gallery-controls';
  controls.innerHTML = '<span>INSIDE THE PROTOTYPE <span aria-hidden="true">/</span> <span id="gallery-count">01</span> — 05</span><div><button type="button" aria-label="Previous app screen">←</button> <button type="button" aria-label="Next app screen">→</button></div>';
  phones.before(controls);
  const figures = [...phones.querySelectorAll('figure')];
  const move = direction => { const step = figures[0].getBoundingClientRect().width + 24; phones.scrollBy({ left: direction * step, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); };
  controls.querySelectorAll('button').forEach((button, i) => button.addEventListener('click', () => move(i === 0 ? -1 : 1)));
  phones.addEventListener('scroll', () => { const step = figures[0].getBoundingClientRect().width + 24; document.getElementById('gallery-count').textContent = String(Math.min(5, Math.round(phones.scrollLeft / step) + 1)).padStart(2, '0'); }, { passive: true });
  phones.addEventListener('keydown', e => { if (e.target === phones && ['ArrowLeft','ArrowRight'].includes(e.key)) { e.preventDefault(); move(e.key === 'ArrowLeft' ? -1 : 1); } });
  document.querySelectorAll('#download pre').forEach(pre => {
    const button = document.createElement('button'); button.type = 'button'; button.className = 'copy-code'; button.textContent = 'Copy setup commands';
    button.addEventListener('click', async () => { try { await navigator.clipboard.writeText(pre.textContent); button.textContent = 'Commands copied ✓'; } catch { button.textContent = 'Select the commands above to copy'; } }); pre.after(button);
  });
  const tabs = [...document.querySelectorAll('.tab')];
  tabs.forEach((tab, i) => { tab.tabIndex = i === 0 ? 0 : -1; tab.addEventListener('click', () => tabs.forEach(t => t.tabIndex = t === tab ? 0 : -1)); tab.addEventListener('keydown', e => { const delta = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (delta) { e.preventDefault(); const next = tabs[(i + delta + tabs.length) % tabs.length]; next.click(); next.focus(); } }); });
  // Keep a single keyboard entry point in the existing roadmap tablist.
  const roadmap = [...document.querySelectorAll('.stg')];
  const syncRoadmap = () => roadmap.forEach(t => t.tabIndex = t.getAttribute('aria-selected') === 'true' ? 0 : -1);
  roadmap.forEach(t => { t.addEventListener('click', syncRoadmap); t.addEventListener('keydown', syncRoadmap); }); syncRoadmap();
})();
