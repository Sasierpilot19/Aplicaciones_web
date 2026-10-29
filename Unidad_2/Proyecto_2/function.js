const btnTheme = document.querySelector('#btn_cambio');
const body = document.body;
btnTheme.addEventListener('click', () => {

    body.classList.toggle('modo_oscuro');

    if (body.classList.contains('modo_oscuro')) {
        btnTheme.textContent = 'Modo claro';
    }else{
        btnTheme.textContent = 'Modo oscuro';
    }
    console.log('Modo oscuro activo: ', body.classList.contains('modo_oscuro'));
});
