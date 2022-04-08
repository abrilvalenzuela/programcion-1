
function calcular(){
    const num1 = 2;
    const num2 = 3;
    const resultado = Math.pow(num2,num1) //pow es potencia
    return resultado // da una respuesta cuando alguien da un uso
}

function mostrar_resultado(){
    //invocamos a la funcion y recibimos una respuesta
   const respuesta = calcular()
   alert (respuesta)
}