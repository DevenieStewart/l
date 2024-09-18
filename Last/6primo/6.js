// Solicitar al usuario que ingrese un número
let numero = prompt(" ingresa un numero para verificar si es primo:");

// Convirtiendo en número entero
numero = parseInt(numero);

// Verificar si el número ingresado es primo
let esPrimo = true;

if (numero <= 1) {
    esPrimo = false;
} else {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

// Mostrar el resultado 
if (esPrimo) {
    document.write(numero + " es un numero primo.");
} else {
    document.write(numero + " no es un numero primo.");
}
