// Sistema de testes automatizados

const { saudacao, calcular } = require('./app.js');

// Contador de testes

let testesExecutados = 0;

let testesPassaram = 0;

let testesFalharam = 0;

// FunÃ§Ã£o auxiliar para executar testes

function executarTeste(nome, funcaoTeste) {

    testesExecutados++;

    try {

        funcaoTeste();

        console.log(`PASSOU: ${nome}`);

        testesPassaram++;

    } catch (error) {

        console.log(`FALHOU: ${nome}`);

        console.log(`   Erro: ${error.message}`);

        testesFalharam++;

    }

}

// FunÃ§Ã£o auxiliar para verificar igualdade

function assertEqual(atual, esperado, mensagem = '') {

    if (atual !== esperado) {

        throw new Error(`${mensagem} - Esperado: ${esperado}, Atual: ${atual}`);

    }

}

// FunÃ§Ã£o auxiliar para verificar se uma funÃ§Ã£o lanÃ§a erro

function assertThrows(funcao, mensagemEsperada = '') {

    try {

        funcao();

        throw new Error('Esperava que a funÃ§Ã£o lanÃ§asse um erro, mas nÃ£o lanÃ§ou');

    } catch (error) {

        if (mensagemEsperada && !error.message.includes(mensagemEsperada)) {

            throw new Error(`Erro lanÃ§ado, mas mensagem incorreta. Esperado: "${mensagemEsperada}", Atual: "${error.message}"`);

        }

    }

}

console.log('Iniciando bateria de testes automatizados...\n');

// === TESTES DA FUNÃ‡ÃƒO SAUDACAO ===

console.log('Testando funÃ§Ã£o saudacao():');

executarTeste('SaudaÃ§Ã£o com nome vÃ¡lido', () => {

    const resultado = saudacao('JoÃ£o');

    assertEqual(resultado, 'OlÃ¡, JoÃ£o! Bem-vindo ao nosso sistema CI/CD!');

});

executarTeste('SaudaÃ§Ã£o com nome vazio deve falhar', () => {

    assertThrows(() => saudacao(''), 'Nome nÃ£o pode estar vazio');

});

executarTeste('SaudaÃ§Ã£o com null deve falhar', () => {

    assertThrows(() => saudacao(null), 'Nome nÃ£o pode estar vazio');

});

// === TESTES DA FUNÃ‡ÃƒO CALCULAR ===

console.log('\n Testando funÃ§Ã£o calcular():');

executarTeste('Soma: 2 + 3 = 5', () => {

    assertEqual(calcular(2, 3, 'soma'), 5);

});

executarTeste('DivisÃ£o por zero deve falhar', () => {

    assertThrows(() => calcular(10, 0, 'divisao'), 'DivisÃ£o por zero nÃ£o Ã© permitida');

});

// === RELATÃ“RIO FINAL ===

console.log('\n RELATÃ“RIO FINAL DOS TESTES:');

console.log(` Total de testes: ${testesExecutados}`);

console.log(` Passaram: ${testesPassaram}`);

console.log(`Falharam: ${testesFalharam}`);

if (testesFalharam > 0) {

    console.log('\n ATENÃ‡ÃƒO: Alguns testes falharam! O cÃ³digo precisa ser corrigido.');

    process.exit(1); // Sair com cÃ³digo de erro

} else {

    console.log('\n SUCESSO: Todos os testes passaram! O cÃ³digo estÃ¡ funcionando corretamente.');

    process.exit(0); // Sair com cÃ³digo de sucesso

}
