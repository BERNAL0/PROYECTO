window.addEventListener("load", () => {
    document.querySelector(".menu-btn").addEventListener("click", () => {
        document.querySelector(".nav-menu").classList.toggle("show");
    });
});
  // Asegurar que el código de JavaScript se ejecute después de que se haya cargado todo el DOM
  document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todos los elementos <li> con submenú
    var itemsConSubMenu = document.querySelectorAll('li');

    // Agregar eventos de mouseover y mouseout a cada elemento <li>
    itemsConSubMenu.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            // Mostrar el submenú al pasar el cursor sobre el elemento
            var subMenu = this.querySelector('ul');
            if (subMenu) {
                subMenu.style.display = 'block';
            }
        });

        item.addEventListener('mouseout', function() {
            // Ocultar el submenú al quitar el cursor del elemento
            var subMenu = this.querySelector('ul');
            if (subMenu) {
                subMenu.style.display = 'none';
            }
        });
    });
});