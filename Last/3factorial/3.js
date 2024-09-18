//ingrese un número
let numero = prompt("ingresa un número para calcular su factorial:");

numero = parseInt(numero);

// Verificar si el número ingresado es válido
if (numero < 0) {
    document.write("El factorial de un numero negativo no esta definido");
} else {
    let factorial = 1;
    let contador = 1;

    // Calcular el factorial 
    do {
        factorial *= contador;
        contador++;
    } while (contador <= numero);

    // Mostrar el resultado 
    document.write("El factorial de " + numero + " es " + factorial + ".");
}
