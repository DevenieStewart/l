//ingrese un número del 1 al 7
let numero = prompt("ingresa un numero del 1 al 7:");

// definiendo valores
numero = parseInt(numero);

// mostrando valor del dia
switch (numero) {
    case 1:
        document.write("El numero corresponde al día domingo");
        break;
    case 2:
        document.write("El numero corresponde al día lunes");
        break;
    case 3:
        document.write("El numero corresponde al día martes");
        break;
    case 4:
        document.write("El numero corresponde al día miércoles");
        break;
    case 5:
        document.write("El numero corresponde al día jueves");
        break;
    case 6:
        document.write("El numero corresponde al día viernes");
        break;
    case 7:
        document.write("El numero corresponde al día sábado");
        break;
    default:
        document.write("El numero ingresado no está dentro del rango válido");
}
