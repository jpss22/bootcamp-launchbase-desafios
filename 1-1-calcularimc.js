const nome = "Jessica";
const peso = 85.100;
const altura = 1.67;

const imc = peso / (altura*altura);

if(imc >= 30){
    console.log(`${nome}, seu imc é: ${imc}, você está acima do peso!`);
}else if(imc< 29.9){
    console.log(`${nome} seu imc é: ${imc}, você não está acima do peso!`);
}