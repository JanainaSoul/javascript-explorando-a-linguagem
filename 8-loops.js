console.log(`Trabalhando com loops`);


const listaDeDestinos = new Array( //sempre começa na contagem do zero
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,

);

const idadeComprador = 18;
const estaAcompanhada = false; // tipo booleano - true ou false
let temPassagemComprada = false;
const destino = "Curitiba";

console.log("\n Destinos possíveis");
console.log(listaDeDestinos);



const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;     

let contador = 0;
let destinoExiste = false;
while(contador<3){
    
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem!");
}else{
    console.log("Desculpe, tivemo um erro");
}


for(let cont = 0; cont<3; cont++){ // geralmente usa o i let i = 0; i<3; i++
    
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        
    }

}


// O que aprendi nessa aula:

// While;

// Break;

// Usando o Debbuger do VS Code;

// Entendendo o fluxo de execução do código;

// configurando o debbuger do VSCode;

// For Loop;