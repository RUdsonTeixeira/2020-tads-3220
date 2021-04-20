/* 
  10.	 Crie um programa para controle das despesas onde ele deve receber como entrada do usuário a descrição e o valor da despesa que devem ser armazenados em um vetor.
   O programa deve, cada inclusão de conta, listar para o usuário as contas já cadastradas e exibir um totalizador.
*/
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


