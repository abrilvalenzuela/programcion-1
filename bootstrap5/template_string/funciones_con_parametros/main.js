function calcular_division(d1,d2)
{
    const resultado = d1 / d2
    return resultado
}

function mostrar_resultado()
{
    //forma 1
    const dato1=document.getElementById("inpd1").value
    //forma 2
    const dato2=document.querySelector("#inpd2").value
    //ejecutamos a la funcion calcular_divison pero ademas le enviamos dos parametros datos
    //ademas recibimos una respuesta por parte de calcular_division
    const respuesta = calcular_division(dato1,dato2)

    alert (respuesta)
}