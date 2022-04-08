
function calcular_area() {
    const base_menor = document.getElementById("base_menor").value
    const base_mayor = document.getElementById("base_mayor").value
    const altura = document.getElementById("altura").value
    const resultado = (  (parseInt(base_mayor)+parseInt(base_menor))*altura)/2
    alert(resultado)
}