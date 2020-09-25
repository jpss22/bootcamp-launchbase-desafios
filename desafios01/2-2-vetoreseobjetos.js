const programador = {
    nome: "Jessica Silva",
    idade: 29,
    tecnologias: [
        {
            nome: "JavaScript",
            especialidade: "We/Mobile"
        }
    ]
};

console.log(`A ${programador.nome} tem ${programador.idade} e usa a técnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}.`);