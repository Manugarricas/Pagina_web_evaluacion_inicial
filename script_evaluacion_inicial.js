//JAVASCRIPT PARA LA CALCULADORA
let numero1 = "";
let numero2;
let operacion;
let primeraOperacion = false;

//Aqui encontramos las variables necesarias
function elegirNumero(numero) {
    if (operacion === null) {//Si el primer numero es nulo, le damos el valor del número que escogemos,
        if (numero1 === null) {//si no lo és, le añadimos números paar poder poner cosas como
            numero1 = numero;// por ejemplo 12 o 33.
        }
        else {
            numero1 += '' + numero;
        }
    }
    else if (numero1 != null & operacion != null) {
        if (numero2 === null) {//cuando tengamos el número 1 y la operación a hacer, le metemos
            numero2 = numero;// el número dos, pudiendo meter numeros como 23 o 44 hasta que pulsemos
        }                     // el signo de igual
        else {
            numero2 += '' + numero;
        }
    }
}

function elegirOperacion(operacionARealizar) {
    if (numero1 != null & operacion === null) {
        operacion = operacionARealizar;
    } //cuando el primer número no sea nulo pero el signo de operacion si, nos dejara seleccionar
}     //el que deseemos

function sumar(numero1, numero2) {
    resultado = parseInt(numero1)+parseInt(numero2);
    document.getElementById("resultado").innerHTML = "Resultado: " + numero1 + " + " + numero2 + " = " + resultado;
    return resultado;
} //simplemente suma y saca el resultado por pantalla modificando el 0 que está por defecto

function restar(numero1, numero2) {
    resultado = parseInt(numero1)-parseInt(numero2);
    document.getElementById("resultado").innerHTML = "Resultado: " + numero1 + " - " + numero2 + " = " + resultado;
    return resultado;
}//simplemente resta y saca el resultado por pantalla modificando el 0 que está por defecto

function multiplicar(numero1, numero2) {
    resultado = parseInt(numero1)*parseInt(numero2);
    document.getElementById("resultado").innerHTML = "Resultado: " + numero1 + " * " + numero2 + " = " + resultado;
    return resultado;
}//simplemente multiplica y saca el resultado por pantalla modificando el 0 que está por defecto

function dividir(numero1, numero2) {
    resultado = parseInt(numero1)/parseInt(numero2);
    document.getElementById("resultado").innerHTML = "Resultado: " + numero1 + " ÷ " + numero2 + " = " + resultado;
    return resultado;
}//simplemente divide y saca el resultado por pantalla modificando el 0 que está por defecto

function encenderCalculadora() {
    document.getElementById("foto").src = "./Imagenes/encendido.png";
    document.getElementById("foto").classList = "botonEncendido";
    document.getElementById("explicacion").classList = "esconder";
}//cuando hagamos una operacion cambiamos la imagen de apagado por la de encendido, le cambiamos
//la clase para el css puesto que tiene distinto tamaño y, por último, escondemos el texto

function hacerOperacion() {
    if (operacion == '+') {
        sumar(numero1, numero2);
    }//llamamos la función de sumar con los números de las variables y el signo elegido
    else if (operacion == '-') {
        restar(numero1, numero2);
    }//llamamos la función de restar con los números de las variables y el signo elegido
    else if (operacion == 'X') {
        multiplicar(numero1, numero2);
    }//llamamos la función de multiplicar con los números de las variables y el signo elegido
    else if (operacion == '÷') {
        dividir(numero1, numero2);
    }//llamamos la función de dividir con los números de las variables y el signo elegido
    numero1 = null;
    numero2 = null;//reiniciamos las variables para hacer bien el siguiente cálculo
    operacion = null;
    encenderCalculadora();//llamamos a la función de encender la calculadora
}

//JAVASCRIPT PARA EL FORMULARIO
let pulsado = false;

function enviar() {
    document.getElementById("input_nombre").value = "";
    document.getElementById("input_apellido").value = "";
    document.getElementById("input_fecha").value = "";
    document.getElementById("input_opinion").value = "";
    document.getElementById("datos").value = "";

    if (!pulsado) {
        pulsado = true;
        document.getElementById("mensaje").classList = "enviado";
    }
    else {

        document.getElementById("mensaje").innerHTML = "¡OYE QUE YA ME HAS PULSADO!";
    }
}

//JAVASCRIPT PARA EL VIDEO

function cambiarVideo() {//cogemos el video por el id y le cambiamos el src para modificar el enlace
    document.getElementById("video_original").src = "https://www.youtube.com/embed/kqmfWMvyRDE?si=wQOHVhiFNf9FyHlU";
}
