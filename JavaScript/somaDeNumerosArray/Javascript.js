function funcao1() {
    let array = [1, 2, 3, 4, 5];

    let resultado = 0;
    for (let i = 0; i < array.length; i++) {
        resultado += array[i];
    }

    //soma dos valores
    console.log(resultado);
    //media dos valores
    media = resultado / array.length;
    console.log(media);

}