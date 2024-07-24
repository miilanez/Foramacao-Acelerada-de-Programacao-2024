// Escopo de variável global e local

//global
let valor = true;

if (valor) { 
    //local
    let error = false 
    console.log(error) // Output: false
}

console.log(error)