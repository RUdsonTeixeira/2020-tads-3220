let valorDaConta = parseFloat(prompt('Digite o Valor da conta:'))
let qtdeClientes = parseInt(prompt('qtde de clientes:'))

let valorPorCliente = valorDaConta/qtdeClientes
document.write(`O valor por cliente é: ${valorPorCliente}`)