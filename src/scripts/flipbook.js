// flipbook.js
document.addEventListener('DOMContentLoaded', function () {
    const totalPages = document.querySelectorAll('.flipbook-page').length;
    let currentPage = 0;  // Empezamos desde la primera página
  
    const flipbook = document.getElementById('flipbook');
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');
    const expandButton = document.getElementById('expandBtn');
    const reduceButton = document.getElementById('reduceBtn');
  
    // Función para mostrar la página actual
    function showPage(pageIndex) {
      if (pageIndex < 0) pageIndex = 0;
      if (pageIndex >= totalPages) pageIndex = totalPages - 1;
  
      const pages = document.querySelectorAll('.flipbook-page');
      pages.forEach((page, index) => {
        if (index === pageIndex) {
          page.style.transform = 'translateX(0)';
        } else {
          page.style.transform = 'translateX(100%)';
        }
      });
  
      currentPage = pageIndex;
    }
  
    // Función para ampliar la página
    function expandPage() {
      const page = document.querySelector(`#page-${currentPage}`);
      page.style.transition = 'transform 0.6s ease';
      page.style.transform = 'scale(1.5)';  // Aumentamos el tamaño de la página
      page.style.zIndex = 100;  // Aseguramos que la página esté encima de otras
  
      expandButton.style.display = 'none';  // Ocultar el botón de ampliar
      reduceButton.style.display = 'inline-block';  // Mostrar el botón de reducir
    }
  
    // Función para reducir la página
    function reducePage() {
      const page = document.querySelector(`#page-${currentPage}`);
      page.style.transition = 'transform 0.6s ease';
      page.style.transform = 'scale(1)';  // Reducimos el tamaño de la página a su valor original
  
      expandButton.style.display = 'inline-block';  // Mostrar el botón de ampliar
      reduceButton.style.display = 'none';  // Ocultar el botón de reducir
    }
  
    // Eventos de clic para las flechas de navegación
    prevButton.addEventListener('click', () => {
      showPage(currentPage - 1);
    });
  
    nextButton.addEventListener('click', () => {
      showPage(currentPage + 1);
    });
  
    // Eventos de clic para ampliar y reducir la página
    expandButton.addEventListener('click', expandPage);
    reduceButton.addEventListener('click', reducePage);
  
    // Mostrar la primera página al inicio
    showPage(currentPage);
  });
  