function calcular_raices(a1,b1,c1)
{
    const parte1= Math.pow(b1,2)
    const parte2= parte1 - (4*a1*c1)
    const parte3= Math.sqrt(parte2)
    const resultado1 = (-b1+parte3)/(2*a1)
    const resultado2 = (-b1-parte3)/(2*a1)
    return 'Raiz 1 = '+resultado1.toFixed(2) +' / Raiz 2 = '+ resultado2.toFixed(2) // una cadena de texto con una constante o variable
    // to fixed lo convierte en decimal
}


function mostrar_raiz()
{
    const a= document.getElementById("a").value
    const b= document.getElementById("b").value
    const c= document.getElementById("c").value

    const resultado= calcular_raices(a,b,c)

    alert (resultado)
}