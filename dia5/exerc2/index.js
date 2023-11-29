let valor
let quantidade 
let opcao = prompt("Bem vindo ao posto Recantinho, o que você gostaria: "  + 
"\n1 - abastecer com gasolina; \n2 - abastecer com etanol; \n3 - calibrar os pneus")

//Criando SWITCHCASE
switch (opcao) {
    case "1":
        valor = parseInt(prompt("Digite o valor desejado para abastecer"))
        quantidade = valor / 4
        console.log("Foram abastecidos " + quantidade + "L de gasolina")

        break;
    case "2":
        valor = parseInt(prompt("Digite o valor desejado para abastecer"))
        quantidade =  valor / 3
        console.log("Foram abastecidos " + quantidade + "L de etanol")
        default:
            console.log("Pneus calibrados")
        break;
}