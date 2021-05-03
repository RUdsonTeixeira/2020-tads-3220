
const inputDescricao = document.querySelector('input[name=descricao]')
const inputValor = document.querySelector('input[name=valor]')
const btnAdicionar = document.querySelector('button')
const ulDespesas = document.querySelector('.listaDespesas')

let despesas = []
function adicionarDespesa(){
    let despesa = {
    descricao:inputDescricao.value,
    valor:inputValor.value
  }
  ulDespesas.innerHTML=''
  inputDescricao.value=''
  inputValor.value=''
  inputDescricao.focus()
  despesas.push(despesa) /* adicionando no vetor */

  for(let i=0;i<despesas.length;i++){
    let li = `<li>${despesas[i].descricao} - R$${despesas[i].valor}</li>`
   ulDespesas.innerHTML+=li
  }
}
btnAdicionar.addEventListener('click',adicionarDespesa)


