// ─── SIDEBAR MOBILE ───
// Ouvre/ferme le menu latéral mobile (remplace l'ancien menu déroulant).
document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("sidebarOpenBtn");
  const closeBtn = document.getElementById("sidebarCloseBtn");
  const sidebar = document.getElementById("mobileSidebar");
  const backdrop = document.getElementById("sidebarBackdrop");

  if (!openBtn || !sidebar || !backdrop) return;

  const sidebarLinks = sidebar.querySelectorAll("a");
  let isOpen = false;

  function openSidebar() {
    isOpen = true;
    sidebar.classList.remove("-translate-x-full");
    backdrop.classList.remove("opacity-0", "pointer-events-none");
    sidebar.setAttribute("aria-hidden", "false");
    openBtn.setAttribute("aria-expanded", "true");
    document.documentElement.classList.add("overflow-hidden");
    document.body.classList.add("overflow-hidden");
    if (closeBtn) closeBtn.focus();
  }

  function closeSidebar() {
    isOpen = false;
    sidebar.classList.add("-translate-x-full");
    backdrop.classList.add("opacity-0", "pointer-events-none");
    sidebar.setAttribute("aria-hidden", "true");
    openBtn.setAttribute("aria-expanded", "false");
    document.documentElement.classList.remove("overflow-hidden");
    document.body.classList.remove("overflow-hidden");
    openBtn.focus();
  }

  openBtn.addEventListener("click", openSidebar);
  if (closeBtn) closeBtn.addEventListener("click", closeSidebar);
  backdrop.addEventListener("click", closeSidebar);
  sidebarLinks.forEach(function (link) {
    link.addEventListener("click", closeSidebar);
  });

  // Ferme avec la touche Échap
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isOpen) closeSidebar();
  });

  // Si la fenêtre est agrandie au-delà du breakpoint desktop (lg = 1024px)
  // pendant que la sidebar est ouverte, on la referme (elle est cachée en
  // CSS de toute façon, ceci remet juste le scroll et les attributs aria
  // en ordre).
  window.addEventListener("resize", function () {
    if (isOpen && window.innerWidth >= 1024) closeSidebar();
  });
});
