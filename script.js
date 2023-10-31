function validarNumero(input) {
    var valor = input.value; // Obtiene el valor del elemento de entrada
    var numeros = /^[0-9]+$/; // Expresión regular que coincide con números enteros

    if (!valor.match(numeros) && valor !== '') {
        // Si el valor no coincide con números enteros y no está vacío
        alert('Por favor, ingrese solo números enteros. Los puntos decimales no están permitidos.'); // Muestra una alerta de advertencia
    }
}

function calcularIMC() {
    var seleccion = document.getElementById('seleccion').value; // Obtiene el valor seleccionado en el menú desplegable
    var peso = parseFloat(document.getElementById('peso').value); // Obtiene el valor del peso como número decimal
    var altura = parseFloat(document.getElementById('altura').value) / 100; // Obtiene el valor de la altura como número decimal y lo convierte a metros
    var resultado = peso / (altura * altura); // Calcula el IMC
    var mensaje = ''; // Inicializa una variable para el mensaje de resultado

    if (seleccion === 'adulto') { // Si se selecciona "adulto"
        if (resultado < 18.5) {
            mensaje = 'Desnutrición'; // Establece el mensaje como "Desnutrición" si el IMC es menor a 18.5
        } else if (resultado < 24.9) {
            mensaje = 'Peso Normal'; // Establece el mensaje como "Peso Normal" si el IMC está entre 18.5 y 24.9
        } else if (resultado < 29.9) {
            mensaje = 'Sobrepeso'; // Establece el mensaje como "Sobrepeso" si el IMC está entre 24.9 y 29.9
        } else {
            mensaje = 'Obesidad'; // Establece el mensaje como "Obesidad" si el IMC es igual o mayor a 29.9
        }
    } else if (seleccion === 'niño') { // Si se selecciona "niño"
        if (resultado < 5) {
            mensaje = 'Desnutrición'; // Establece el mensaje como "Desnutrición" si el IMC es menor a 5
        } else if (resultado < 85) {
            mensaje = 'Peso Normal'; // Establece el mensaje como "Peso Normal" si el IMC está entre 5 y 85
        } else if (resultado < 95) {
            mensaje = 'Sobrepeso'; // Establece el mensaje como "Sobrepeso" si el IMC está entre 85 y 95
        } else {
            mensaje = 'Obesidad'; // Establece el mensaje como "Obesidad" si el IMC es igual o mayor a 95
        }
    }

    // Muestra el resultado en el elemento con el ID "mensaje"
    document.getElementById('mensaje').innerHTML = 'Tu IMC es: ' + resultado.toFixed(2) + ' - ' + mensaje;
    // Muestra el resultado estableciendo el estilo "display" en "block"
    document.getElementById('resultado').style.display = 'block';
}

function mostrarInformacion() {
    alert('Es una medida utilizada para evaluar la relación entre el peso y la altura de una persona. Se calcula dividiendo el peso en kilogramos por la altura en metros al cuadrado. El resultado del cálculo del IMC proporciona una estimación de la cantidad de grasa corporal que tiene una persona y se utiliza comúnmente como una herramienta de screening para evaluar si una persona tiene un peso saludable en relación con su altura.');
    // Muestra una alerta con información sobre el IMC
}

function borrarTodo() {
    // Restablece los valores y oculta el resultado
    document.getElementById('seleccion').value = 'adulto';
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('mensaje').innerHTML = '';
}
