// Faça um programa que solicite que o usuário informe um valor e informe se o valor informado é maior ou igual a 10

const prompt = require('prompt-sync')();

const input = prompt("Informe um valor")

valor = parseInt(input)

if (valor >= 10) {
    console.log("O valor informado é maior ou igual a 10")
} else {
    console.log("O valor informado não é maior ou igual a 10")
}