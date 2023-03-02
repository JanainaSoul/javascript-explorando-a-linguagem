console.log(`Trabalhando com listas`);

// const salvador = `Salvador`; ctrl k c 
// const saoPaulo = `São Paulo`;
// const rioDejaneiro = `Rio de Janeiro`;

const listasDeDestinos = new Array( //sempre começa na contagem do zero
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    
);

listasDeDestinos.push(`Curitiba`); // push adiciona elementos na lista

console.log("Destinos possíveis");
//console.log(salvador, saoPaulo, rioDejaneiro);

console.log(listasDeDestinos);

listasDeDestinos.splice(1,1); // splice remove um elemento passando a posição dele
console.log(listasDeDestinos);

console.log(listasDeDestinos[1], listasDeDestinos[0]);

//O que aprendi nessa aula:

//Criação de Arrays;

//Inserção de itens em um array;

//Array splice;

//Palavras reservadas;

//Indices do array;
