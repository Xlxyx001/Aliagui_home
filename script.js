const sidebarOpenBtn = document.getElementById('sidebarOpenBtn');
const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
const mobileSidebar = document.getElementById('mobileSidebar');
const sidebarBackdrop = document.getElementById('sidebarBackdrop');

function openSidebar() {
  mobileSidebar.classList.remove('-translate-x-full');
  mobileSidebar.setAttribute('aria-hidden', 'false');
  sidebarOpenBtn.setAttribute('aria-expanded', 'true');

  sidebarBackdrop.classList.remove('pointer-events-none', 'opacity-0');
  sidebarBackdrop.classList.add('opacity-100');

  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  mobileSidebar.classList.add('-translate-x-full');
  mobileSidebar.setAttribute('aria-hidden', 'true');
  sidebarOpenBtn.setAttribute('aria-expanded', 'false');

  sidebarBackdrop.classList.remove('opacity-100');
  sidebarBackdrop.classList.add('opacity-0');
  sidebarBackdrop.classList.add('pointer-events-none');

  document.body.style.overflow = '';
}

sidebarOpenBtn.addEventListener('click', openSidebar);
sidebarCloseBtn.addEventListener('click', closeSidebar);
sidebarBackdrop.addEventListener('click', closeSidebar);

// Fermer avec la touche Échap
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !mobileSidebar.classList.contains('-translate-x-full')) {
    closeSidebar();
  }
});