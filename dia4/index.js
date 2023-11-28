const temFome = prompt("Você esta com fome ? (s/n)")
const temDinheiro = prompt("Você tem dinheiro? (s/n)")
const restauranteAberto = prompt("O restaurante esta aberto? (s/n)")

if (temFome == "n" || temDinheiro == "n" )  {
    console.log("Hoje a janta será em casa")
}else if ( temDinheiro == "s" && restauranteAberto == "s") {
    console.log("Hoje a janta será no seu restaurtante preferido!")
 } else {
    console.log("peça um delivery")
 }

    

