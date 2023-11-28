let nome = ""
let idade = 0
let altura = 0
let peso = 0

//Informações para o usuario
nome = prompt("Digite seu nome: ")
idade = parseInt(prompt("Digite sua idade: "))
altura = parseFloat(prompt("Digite sua altura: "))
peso = parseInt(prompt("Digite seu peso: "))

//Calculando o ano que a pessoa nasceu e IMC

let anoNasc = 0 
anoNasc = 2023 - idade

let imc = 0
imc = peso / (altura * peso)

//Exibindo inf no console

console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoNasc + ", tem "  + altura + " de altura, pesa " 
  + peso + " kg seu Imc é " + imc + " Kg/m2 ")