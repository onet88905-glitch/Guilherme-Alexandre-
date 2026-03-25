function saudacao(nome) {

    if (!nome || nome.trim() === '') {

        throw new Error('Nome nao pode estar vazio');

    }

    return Ola ${nome}! Bem-vindo ao nosso sistema CI/CD!`;

}

function calcular(a, b, operacao) {

    switch(operacao) {

        case 'soma':

            return a + b;

        case 'subtracao':

            return a - b;

        case 'multiplicacao':

            return a * b;

        case 'divisao':

            if (b === 0) throw new Error("Divisao por zero nao sao permitidas");

            return a / b;

        default:

            throw new Error("Operacao nao suportada");

    }

}

// Exportar funcoes para testes (em ambiente Node.js)

if (typeof module !== 'undefined' && module.exports) {

    module.exports = { saudacao, calcular };

}

console.log('Aplicacao carregada com sucesso!');
