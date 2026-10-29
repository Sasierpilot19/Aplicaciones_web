const btnModo = document.querySelector('#btnmodo');
const body1212 = document.body;
btnModo.addEventListener('click', () => {
    body1212.classList.toggle('modo_oscuro');

    if (body1212.classList.contains('modo_oscuro')) {
        btnModo.textContent = 'Modo claro';
    } else {
        btnModo.textContent = 'Modo oscuro';
    }
});
