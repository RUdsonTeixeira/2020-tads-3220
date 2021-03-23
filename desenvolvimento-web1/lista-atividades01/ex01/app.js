let inputNumero = document.querySelector("input") 
let btnMostrar = document.querySelector("button")

function mostrarVizinhos(){
    let numero = parseInt(inputNumero.value)
    document.write(`Os vizinhos são: ${numero-1} e ${numero+1}`)
}
