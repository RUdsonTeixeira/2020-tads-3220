let header = document.querySelector("header") // selecionando um único elemento
header.style.backgroundColor="gray" // alterando o estilo do elemento selecionado

let links = document.querySelectorAll("a") // selecionando vários elementos - retorna uma NodeList
let link2 = links[1] // acessando o 2 elemento da lista

link2.onmousemove = function(){ // adicionado um evento que ao passar o mouse sobre o elemento executa a função atribuída
    link2.style.color="red"
    link2.style.fontSize="25px"
    console.log("movendo mouse")
}
link2.onclick = mensagem // adicionando o evento que ao clicar com o mouse executa a função Mensagem.

function mensagem(){
    alert("Você clicou no Link!")
}
