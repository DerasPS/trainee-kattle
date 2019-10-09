var endereco = {  rua: "Rua dos pinheiros",  numero: 1293,  bairro: "Centro",  cidade: "São Paulo",  uf: "SP" };

endereco.info = function () {
    return `O usuário mora em ${this.cidade} / ${this.uf}, no bairro ${this.bairro}, na rua ${this.rua} com nº ${this.numero}.`
}
console.log(endereco.info())