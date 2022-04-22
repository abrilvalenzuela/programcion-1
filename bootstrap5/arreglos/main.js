let factura =['cara sucia' , 'medialunas dulces' , 'cañoncito de dulce de leche' , 'cañones de crema pastelera']

// como saber la longitud de un arreglo 
// es la cantidad de elementos 
const longitud = factura.length
console.log('longitud: '+longitud)

// como acceder a un elemento del array mediante su indice

const primero = factura[0]
console.log('el primer elemento es:'+primero)

//como acceder al ultimo elemento d eun arreglo

const ultimo = factura [longitud-1]
console.log('el ult elemento es:'+ultimo)

//como recorrer un array haciendo uso de un foreach
factura.forEach( (element, index) => {
    console.log(index+'-'+element)
});

//como agrgar un nuevo elemnto al final de un arreglo
factura.push('rosquitas')
console.log(factura)

//como eliminar al ultimo de un arreglo (adios rosquita)
factura.pop()
console.log(factura)

//como agregar un elemento al inicio del arreglo
factura.unshift('rosquitas')
console.log(factura)

//como eliminar el primer elemento de un arreglo
factura.shift()
console.log(factura)

//como obtener el indice de un elemento
const indice = factura.indexOf('cañoncito de dulce de leche')
console.log('el indice de cañoncito es:'+indice)

//como eliminar un elemento del arreglo haciendo uno de su indice
factura.splice(indice,1)
console.log(factura)

//como eliminar mas de un elemento de un arreglo
const indice_ml= factura.indexOf('medialunas dulces')
//ademas de quitar 
const eliminados = factura.splice(indice_ml,2)
console.log('eliminados:'+eliminados)
console.log(factura)

//como generas una copia d eun arreglo
const copiaFactura = factura.slice()
copiaFactura.push('rosquitas','cañoncito del dulce de leche')
console.log('copia:'+copiaFactura)
console.log('original: '+factura)
// como agregar elemento al medio en el medio
copiaFactura.splice(2,0,'biscochictos')
console.log(copiaFactura)