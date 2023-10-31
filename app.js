var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        // El usuario se desplaza hacia arriba
        document.querySelector('.navbar').style.top = '0';
    } else {
        // El usuario se desplaza hacia abajo
        document.querySelector('.navbar').style.top = '-100px'; // Puedes ajustar el valor según la altura de tu barra de navegación
    }

    prevScrollPos = currentScrollPos;
}

