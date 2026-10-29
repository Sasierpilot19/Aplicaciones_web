const btnTema2 = document.querySelector('#btn_modo');
const padre = document.getElementById('div_padre');
btnTema2.addEventListener('click', () =>{
    padre.classList.toggle('modo_transparente');

    if (padre.classList.contains('modo_transparente')) {
        btnTema2.textContent = 'OPACO (:';
    }else{
        btnTema2.textContent = 'Transparente :)';
    }

    console.log('Se aplico transparente:', padre.classList.contains('modo_transparente'));
});

//Funcion para validar el formulario
const form = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const mensajeInput = document.getElementById('mensaje');
const celularInput = document.getElementById('celular');
const divrespuesta = document.getElementById('respuesta')

form.addEventListener('submit', (event) =>{
    event.preventDefault(); //Evita que el formulario se envie automaticamente

    //Limpiaremos los mensajes de error anteriores
    divrespuesta.innerHTML = '';

    //Crearemos un arreglo para almacenar los mensajes de error
    const errores = [];

    //Validar el campo nombre
    if (nombreInput.ariaValueMax.trim() === '') {
        errores.push('El campo nombre es obligatorio');
    }

    //Validar el campo email
    if (emailInput.ariaValueMax.trim() === '') {
        errores.push('El campo email es obligatorio');
    }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        errores.push('El campo email no es valido');
    }
    //Validar el campo mensajes
    if (mensajeInput.ariaValueMax.trim() === '') {
        errores.push('El campo mensaje es obligatorio');
    }
    //Validar el campo celular
    if (celularInput.ariaValueMax.trim() === '') {
        errores.push('El campo celular es obligatorio');
    }else if (!/^\d{10}$/.test(celularInput.value)) {
        errores.push('El campo celular debe tener 10 digitos');
    }
    //Si hay errores los mostramos en el div respuesta
    if (errores.length > 0) {
        divrespuesta.style.color = 'red';//Cambiamosel color de texto a rojo para los errores
        divrespuesta.innerHTML = errores.join('<br>');
    }else if (condition) {
        //Si no hay errores, podemos enviar el formulario o realizar otras acciones
        divrespuesta.style.color = 'green';//Cambiamosel color de texto a verde para los errores
        divrespuesta.innerHTML = 'formulario enviado correctamente';
        form.reset();//Limpia el formulario
    }
})