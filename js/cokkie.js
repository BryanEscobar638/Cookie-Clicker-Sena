// CONTADOR
let count = 0;
// MULTIPLICADOR
let multiplicador = 1;
// CONSTANTE PARA ACTUALIZAR LA PUNTUACIÓN
const counterElement = document.getElementById('counter');


function clicked() {
    count = count + multiplicador;

    // INCREMENTOS
    if(count >= 100 ) {
        multiplicador = 2;
    }
    if (count >= 200){
        multiplicador = 4;
    }
    if (count >= 400){
        multiplicador = 6;
    }
    if (count >= 800){
        multiplicador = 8;
    }

    // ACTUALIZACION DE MULTIPLICADOR
    document.getElementById('numero').textContent = "Tienes un x" + multiplicador;

    // ACTUALIZACIÓN DE FASE
    if (count >= 1 && count <100){
        document.getElementById('fase').textContent = "MINI";
    }else if (count >= 100 && count <200){
        document.getElementById('fase').textContent = "BASE";
    }else if (count >= 200 && count <350){
        document.getElementById('fase').textContent = "KAIOKEN";
    }else if (count >= 350){
        document.getElementById('fase').textContent = "FALSE SUPER COOKIE";
    }
    
    // ACTUALIZACION DE IMAGENES
    if (count >= 100 && count <200) {
        document.getElementById('imagen').src = "img/galleta-base.png";
    }else if (count >= 200 && count <350) {
        document.getElementById('imagen').src = "img/galleta-kaioken.png";
    }else if (count >= 350) {
        document.getElementById('imagen').src = "img/galleta-falsesupercookie.png";
    }
    
    // ACTUALIZACION DE PUNTACIÓN
    function updateDisplay() {
        counterElement.textContent = count;
    }

    updateDisplay();
}

// MODAL DE UPDATES
window.onload = function() {
    const miModal = new bootstrap.Modal(document.getElementById('ModalUpdates'));
    miModal.show();
}