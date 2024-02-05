let listaDeNumerosSorteados = []
let numeroLimite = 100
let numeroAleatorio = gerarNumeroAleatorio()
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

function exibirTextoInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto')
    exibirTextoNaTela('p', 'Escolha um número de 1 a 100')
}
exibirTextoInicial()

function verificarChute() {
    let chute = document.querySelector('input').value
    if (chute == numeroAleatorio) {
        exibirTextoNaTela('h1', 'Acertou!')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativa = `Parabéns, você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p', mensagemTentativa)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else if (chute > numeroAleatorio) {
        exibirTextoNaTela('h1', 'Errou!')
        exibirTextoNaTela('p', 'O número secreto é menor que seu chute')
    } else {
        exibirTextoNaTela('h1', 'Errou!')
        exibirTextoNaTela('p', 'O número secreto é maior que seu chute')
    }
    tentativas++
    limparInput()
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let elementosDaLista = listaDeNumerosSorteados.length
    if (elementosDaLista == numeroLimite) {
        listaDeNumerosSorteados = []
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido
    }
}

function limparInput() {
    chute = document.querySelector('input')
    chute.value = ''
}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio()
    limparInput()
    tentativas = 1
    exibirTextoInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}