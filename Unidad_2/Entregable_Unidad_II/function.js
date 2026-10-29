/*const formulario = document.getElementById("formulario-contacto");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const comentario = document.getElementById("comentario");
const mensaje = document.getElementById("mensaje-formulario");

formulario.addEventListener("submit", function(event) {
event.preventDefault(); //Evita que el formulario se envie automaticamente

    //Crearemos un arreglo para almacenar los mensajes de error
    const errores = [];

    //Validar el campo nombre
    if (nombre.ariaValueMax.trim() === '') {
        errores.push('El campo nombre es obligatorio');
    }

    //Validar el campo email
    if (email.ariaValueMax.trim() === '') {
        errores.push('El campo email es obligatorio');
    }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        errores.push('El campo email no es valido');
    }
    //Validar el campo mensajes
    if (mensaje.ariaValueMax.trim() === '') {
        errores.push('El campo mensaje es obligatorio');
    }
    //Validar el campo celular
    if (telefono.ariaValueMax.trim() === '') {
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

});*/