console.log("JS conectado...")

/*
Objetivo: Validar entradas antes de procesarlas.

Instrucciones:
Crea un input donde el usuario escriba un número.
Crea una función verificarNumero.
La función debe:
Capturar el valor del input
Verificar si está vacío
Si está vacío → mostrar: "Debes ingresar un número"
Si tiene valor → mostrar: "Número ingresado correctamente"
 */

function verificarNumero() {
    const result = document.getElementById("result1");
    let input = document.getElementById("input1");
    const container = document.getElementById("container1");
    let numero = input.value;

    if (numero === "") {
        result.textContent = "Debes ingresar un número";
    } else {
        result.textContent = "Número ingresado correctamente";
    };

    input.value = "";
    container.classList.remove("d-none");
};


/*
Objetivo: Aplicar lógica con múltiples condiciones.
Instrucciones:
Crea un input para ingresar una nota (1.0 a 7.0).
Crea una función evaluarNota.
La función debe:
Convertir el valor a número
Mostrar en pantalla:
"Reprobado" si es menor a 4.0
"Aprobado" si está entre 4.0 y 5.9
"Sobresaliente" si es 6.0 o más
*/

function evaluarNota() {
    const result = document.getElementById("result2");
    let input = document.getElementById("input2");
    const container = document.getElementById("container2");
    let numero = parseFloat(input.value);

    if (numero >= 6.0 && numero <= 7.0) {
        result.textContent = "Sobresaliente";
    } else if (numero < 6.0 && numero >= 4.0) {
        result.textContent = "Aprobado";
    } else if (numero < 4.0 && numero >= 1.0) {
        result.textContent = "Reprobado";
    } else if (numero < 1.0 && numero > 7.0) {
        result.textContent = "Ingrese una nota valida";
    } else {
        result.textContent = "Ingrese un valor valido";
    }


    input.value = "";
    container.classList.remove("d-none");
};


/*
Objetivo: Integrar varias funciones con roles distintos.

Instrucciones:

Crea dos funciones ayudantes:
function calcularCuadrado(numero) {
    return numero * numero;
}

function calcularTriple(numero) {
    return numero * 3;
}
Crea una función principal procesarNumero que:
Capture un número desde un input
Llame a ambas funciones
Muestre en pantalla:
Cuadrado: X
Triple: Y
*/


