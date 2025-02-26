// Lógica de toggle para el botón hamburguesa (móvil)
const hamburger = document.getElementById("hamburger-button");
const nav = document.getElementById("menu-mobile");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("expanded");
  });
}

// Agregar evento a cada menú con submenú
document.querySelectorAll(".menu-item").forEach((menuItem) => {
  const submenu = menuItem.querySelector(".submenu");

  menuItem.addEventListener("click", (event) => {
    event.preventDefault(); // Evita que el enlace navegue a "#"

    if (submenu) {
      submenu.classList.toggle("expanded");
    }
  });

  // 🔥 Detener la propagación en los enlaces del submenú
  submenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.stopPropagation(); // Permite que los enlaces sean clickeables
    });
  });
});
