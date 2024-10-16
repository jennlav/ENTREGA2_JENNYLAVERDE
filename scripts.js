// Cambiar imagen del banner activamente cada 3 segundos
let currentIndex = 0;
const images = document.querySelectorAll('.banner img');
setInterval(() => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}, 3000);

// Función para el menú hamburguesa
function toggleMenu(menu) {
    menu.classList.toggle("active");
    document.querySelector("nav").classList.toggle("active");
}
