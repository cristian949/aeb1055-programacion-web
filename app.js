function cambiarMensaje() {
    var p = document.getElementById('mensaje');
    if (p.textContent === '¡Hola, mundo!') {
        p.textContent = 'Mensaje actualizado desde JavaScript.';
    } else {
        p.textContent = '¡Hola, mundo!';
    }
}
