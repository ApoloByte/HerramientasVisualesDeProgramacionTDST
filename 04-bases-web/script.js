const botones = document.querySelectorAll('.btn-carrito');

console.log(botones)

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        alert('Producto agregado al carrito');
        console.log('Producto agregado');
    });
});


// Capturar buscador
const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Buscaste: ' + input.value);
});


