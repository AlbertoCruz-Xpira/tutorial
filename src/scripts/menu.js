// @author: Alberto Cruz
// @desc: Lógica de toogle con clase .expanded sobre menu navegación móvil al hacer click en botón hamburguesa

const hamburger = document.getElementById("hamburger-button");
const nav = document.getElementById("menu-mobile");

if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("expanded");
    });
}

// Agregar evento a cada menú con submenú
document.querySelectorAll(".menu-item").forEach((menuItem) => {
  menuItem.addEventListener("click", (event) => {
    event.preventDefault(); // Evita que el enlace navegue a "#"

    const submenu = menuItem.querySelector(".submenu");

    if (submenu) {
      submenu.classList.toggle("expanded");
    }
  });
});
