/* 
    1 - Elaborar um programa que leia um número. 
    Calcule e informe os seus vizinhos, ou seja, o número anterior e o número posterior.

*/
const inputNumero = document.querySelector("input") 
const btnMostrar = document.querySelector("button")

function mostrarVizinhos(){
    let numero = parseInt(inputNumero.value)
    document.write(`Os vizinhos são: ${numero-1} e ${numero+1}`)
}
