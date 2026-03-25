function saudacao(nome) {
    if (!nome || nome.trim() === '') {
        throw new Error('Nome nao pode estar vazio');
    }
    return `Ola, ${nome}!`;
}

console.log("OK");
