//Use um switch para exibir mensagens diferentes com base em uma condição.

let numero = 6;

switch (true) {
    case (numero > 0):
        console.log(`O número é positivo.`)
        break;

    case (numero < 0):
        console.log(`O número é negativo.`)
        break;

    default:
        console.log(`o número é zero`)
}