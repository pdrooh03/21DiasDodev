//criando variaveis

let nome 
let idade 
let temCarta = false 
let temCarro =  false

nome = prompt("Digite seu nome")
idade = parseInt(prompt("Digite sua idade"))
let opcaoCarta = prompt("Você tem carta de motorista ? (s/n")
if (opcaoCarta == "s") {
    temCarro = true 
}
let opcaoCarro = prompt("Você tem Carro? s/n")
if (opcaoCarro == "s") {
    temCarta == true 
}


//Mens console;;

if (idade < 18 || !temCarta ) {
console.log(nome + ", você não pode dirigir") 
} else if (idade >= 18  &&  temCarta && !temCarro ) {
    console.log(nome + ", você pode dirigir mas não tem carro")
} else {
    console.log(nome + ", você será motorista")
}