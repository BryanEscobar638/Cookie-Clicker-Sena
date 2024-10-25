// CONTADOR
let count = 0;
// MULTIPLICADOR
let multiplicador = 1;
// CONSTANTE PARA ACTUALIZAR LA PUNTUACIÓN
const counterElement = document.getElementById('counter');

function increase() {
    count = count + multiplicador;

    // INCREMENTOS
    if(count >= 50 ) {
        multiplicador = 2;
    }
    if (count >= 100){
        multiplicador = 10000000000000000;
    };

    // ACTUALIZACION DE MULTIPLICADOR
    document.getElementById('numero').textContent = "Tienes un x" + multiplicador;
    function mostrarNumero() {
        updateDisplay();
    }
    mostrarNumero();

    // ACTUALIZACION DE IMAGENES
    if (count == 100) {
        document.getElementById('imagenx1').src = "img/galleta-tradicional-small-new.webp";
    }

    // ACTUALIZACION DE PUNTACIÓN
    function updateDisplay() {
        counterElement.textContent = count;
    }

    updateDisplay();
}

// GUARDAR PUNTUACIÓN

window.onload = function() {
    const miModal = new bootstrap.Modal(document.getElementById('ModalUpdates'));
    miModal.show();
}