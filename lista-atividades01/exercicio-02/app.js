/* 
   2.Elaborar um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. 
   Calcule e informe o valor a ser pago por cada cliente.
*/
const form = document.querySelector('form')
const btnFecharConta = form.querySelector('button')

function fecharConta(){
   let valorDaConta = parseFloat(form.valorDaConta.value)
   let qtdeClientes = parseFloat(form.qtdeClientes.value)
   let valorPorCLiente = valorDaConta/qtdeClientes

   form.valorPorCliente.value = valorPorCLiente.toFixed(2)
}

btnFecharConta.addEventListener('click',fecharConta)




