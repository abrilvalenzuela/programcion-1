let numero = 15;


console.log(numero)

/*function mostrar() {
    //declaramos una variable//
    let numero = 15;
    //se imprime en la consola del navegador//
    console.log(numero)
}
function evaluar() {
    let dato = 22;
    //condicion
    if (dato > 10) {
        let dato = 77
        console.log(dato)
    }
    console.log(dato)
}
function validar() {
    const valor = prompt('ingrese un calificacion');

        if (valor >=7) {
            alert ('aprobado')
        }else{
            alert('desaprobado')
        }
        expresion ternaria 
        (valor >= 7) ? alert('estas aprobado') : alert('desaprobado')
}

invocamos la funcion variable
validar()*/

/*function calcular() {
const dato = document.getElementById("inp_dato1").value    
const resultado = dato * 10;
alert (resultado)
}*/

function calcular() {
    const base = document.getElementById("base_1").value
    const altura = document.getElementById("altura_1").value
    const resultado = (base * altura) / 2
    alert(resultado)
}