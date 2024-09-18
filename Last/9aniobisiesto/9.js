//ingrese un año
let year = prompt("ingresa un año para verificar si es bisiesto:");

year = parseInt(year);

// Verificar si el año ingresado es bisiesto
let esBisiesto = false;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    esBisiesto = true;
}

// Mostrar el resultado 
if (esBisiesto) {
    document.write(year + " es un año bisiesto.");
} else {
    document.write(year + " no es un año bisiesto.");
}
