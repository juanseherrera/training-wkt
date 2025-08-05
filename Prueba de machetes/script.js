/*AUDIO-efecto de reproduccion en el cursor por encima*/
function reproducirAudio() {
    document.getElementById("NOMBREdelAUDIO1").play();
}
function pausarAudio() {
    document.getElementById("NOMBREdelAUDIO1").pause();
}




/*AUDIO-centrado en la pagina  (grid)*/
---NADA ESPECIFICADO---




/*AUDIO-al medio y a la izquierda  (grid)*/
????????????
/*AUDIO-a la derecha  (grid)*/
????????????
/*AUDIO-centrado en la pagina (flexbox)*/
????????????
/*AUDIO-arriba en el medio (flexbox)*/
????????????
/*AUDIO-abajo en el medio (flexbox)*/
????????????
/*AUDIO-a la izquierda (flexbox)*/
????????????
/*AUDIO-a la derecha (flexbox)*/
????????????
/*AUDIO-iconos interactivos*/
????????????




/*AUDIO-reproduccion automatica*/
const audio = document.getElementById('miAudio');
const playPauseBtn = document.getElementById('playPauseBtn');
const barraProgreso = document.getElementById('barraProgreso');
// Reproducción automática al cargar la página
audio.autoplay = true;
audio.play(); // Es buena práctica llamar a play() explícitamente para asegurar la reproducción
// Controles personalizados (opcional)
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pausar';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Reproducir';
    }
});
// Actualizar barra de progreso
audio.addEventListener('timeupdate', () => {
    const porcentaje = (audio.currentTime / audio.duration) * 100;
    barraProgreso.value = porcentaje;
});
barraProgreso.addEventListener('input', () => {
    const tiempo = (barraProgreso.value / 100) * audio.duration;
    audio.currentTime = tiempo;
});



/*AUDIO-reproduccion repetitiva*/
/*BOTON-Boton de llamada a la accion*/
/*BOTON-Animaciones*/
/*BOTON-buscador*/
/*BOTON-Campo de búsqueda*/
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
// --- Búsqueda al hacer clic en el botón ---
searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue al enviar el formulario
    const searchTerm = searchInput.value;
    if (searchTerm.trim() !== "") {
        console.log("Buscando:", searchTerm);
        // Aquí puedes implementar la lógica de búsqueda real
        // Por ejemplo, redirigir a una página de resultados o mostrar resultados dinámicamente
    } else {
        console.log("Por favor, ingresa un término de búsqueda.");
    }
});
// --- Búsqueda "automática" al escribir (ejemplo) ---
// Si "reproducirse automáticamente" se refiere a buscar mientras se escribe:
// searchInput.addEventListener('input', function() {
//     const searchTerm = searchInput.value;
//     if (searchTerm.trim() !== "") {
//         console.log("Buscando (mientras escribes):", searchTerm);
//         // Implementa la lógica de búsqueda en tiempo real aquí
//     }
// });
// --- Búsqueda al presionar Enter en el input ---
// searchInput.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         event.preventDefault(); // Evita el comportamiento por defecto del Enter en un input
//         searchButton.click(); // Simula un clic en el botón de búsqueda
//     }
// });




/*BOTON-efecto al clieckear*/
/*BOTON-efecto de cursor por encima*/
/*BOTON-encuadres*/
/*BOTON-Enlaces*/
/*BOTON-Enlaces internos*/
/*BOTON-entrada de un usuario*/
/*BOTON-Formulario de contacto*/
/*BOTON-Formulario de pago*/
/*BOTON-Formulario de registro*/
/*BOTON-en diversas posiciones*/
/*BOTON-iconos interactivos*/
/*BOTON-listas*/
/*BOTON-Logotipo*/
/*BOTON-Menu de navegación superior (completo)*/
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});




/*BOTON-notificador*/
/*BOTON-vinculacion con pagos*/
/*BOTON-carrito de compra*/
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    let cart = []; // Array para almacenar los productos del carrito
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
    function addToCart(event) {
        const productId = event.target.dataset.id;
        const productName = event.target.closest('.product-card').querySelector('.product-name').textContent;
        const productPrice = parseFloat(event.target.closest('.product-card').querySelector('.product-price').textContent.replace('$', ''));
        const existingProductIndex = cart.findIndex(item => item.id === productId);
        if (existingProductIndex > -1) {
            // Si el producto ya está en el carrito, incrementa la cantidad
            cart[existingProductIndex].quantity += 1;
        } else {
            // Si no, agrega el producto al carrito
            cart.push({
                id: productId,
                name: productName,
                price: productPrice,
                quantity: 1
            });
        }
        updateCartDisplay(); // Función para actualizar la visualización del carrito (no incluida aquí)
        console.log("Carrito:", cart);
    }
    function updateCartDisplay() {
        // Aquí iría la lógica para actualizar la interfaz del carrito
        // Por ejemplo, mostrar el número de artículos, el total, etc.
        console.log("Visualización del carrito actualizada");
    }
});




/*BOTON-Titulo*/
/*BOTON-Boton de llamada a la accion (enviar)*/
/*CABEZA DE PAGINA-nombre de la pestaña*/
/*CAMPO DE TEXTO-vinculacion con pagos*/
/*CAMPO DE TEXTO-Animaciones*/
/*CAMPO DE TEXTO-buscador*/
/*CAMPO DE TEXTO-efecto al clieckear*/
/*CAMPO DE TEXTO-entrada de un usuario*/
/*CAMPO DE TEXTO-Formulario de contacto*/
/*CAMPO DE TEXTO-Formulario de pago*/
/*CAMPO DE TEXTO-Formulario de registro*/
/*CAMPO DE TEXTO-efecto de cursor por encima*/
/*CAMPO DE TEXTO-Enlaces externos*/
/*CAMPO DE TEXTO-Enlaces internos*/
/*CAMPO DE TEXTO-diversas posiciones*/
/*CAMPO DE TEXTO-iconos interactivos*/
/*CAMPO DE TEXTO-listas*/
/*CAMPO DE TEXTO-Logotipo*/
/*CAMPO DE TEXTO-Menu de navegación*/
/*CITA-Muestra miniatura de otra pagina*/
/*CITA-Muestra miniatura de otra pagina*/
/*CITA-copyright*/
/*CITA-Vinculacion de los lenguajes*/
/*ELEMENTO-encuadres*/
/*ELEMENTO-cajas*/
/*ELEMENTO-diseñar imagen en el lugar*/
/*ELEMENTO-Animaciones*/
/*ELEMENTO-listas*/
/*ELEMENTO-Logotipo*/
/*ELEMENTO-notificador*/
/*ELEMENTO-Posicionamiento del elemento en la pagina*/
/*ELEMENTO-formas circulares*/
/*ELEMENTO-formas triangulares*/
/*ELEMENTO-iconos interactivos*/
/*ELEMENTO-formas rectangulas*/
/*HIPERVINCULO-Vinculacion de los lenguajes*/
/*HIPERVINCULO-Enlaces*/
/*HIPERVINCULO-Enlaces internos*/
/*HIPERVINCULO-Vincular con CSS*/
/*HIPERVINCULO-Vincular con Java Script*/
/*IMAGEN-efecto al clieckear*/
/*IMAGEN-Animaciones*/
/*IMAGEN-efecto de cursor por encima*/
/*IMAGEN-enlace externo*/
/*IMAGEN-Enlaces internos*/
/*IMAGEN-espacio publicitario*/
/*IMAGEN-diversas posiciones*/
/*IMAGEN-imagen de fondo de pagina*/
/*IMAGEN-Logotipo*/
/*ITEMS-listas*/
/*ITEMS-Menu de navegación*/
/*ITEMS-Barra lateral de navegacion*/
---SIN INFORMACION---




/*PIE DE PAGINA-copyright*/
/*SECCION-espacio publicitario*/
/*SECCION-Menu de navegación*/
/*SECCION-carrito de compra*/
/*VIDEO-efecto de cursor por encima*/
/*VIDEO-efecto de reproduccion en el cursor por encima*/
/*VIDEO-Enlaces externos*/
/*VIDEO-Enlaces internos*/
/*VIDEO-espacio publicitario*/
/*VIDEO-posiciones diversas*/
/*VIDEO-iconos interactivos*/