// Solicitar al usuario que ingrese un número
let numero = prompt("ingresa un número para calcular la suma de sus dígitos:");

// Convertir el input del usuario a una cadena de texto
let numeroString = numero.toString();

// Inicializar la suma de los dígitos
let sumaDigitos = 0;

// Iterar sobre cada dígito del número ingresado y sumarlo
let i = 0;
while (i < numeroString.length) {
    let digito = parseInt(numeroString[i]);
    sumaDigitos += digito;
    i++;
}

// Mostrar el resultado 
document.write("La suma de los dígitos de " + numero + " es: " + sumaDigitos);
