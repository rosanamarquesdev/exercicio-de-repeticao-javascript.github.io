// ler a altura de 15 pessoas
// mostrar a maior altura do grupo
// mostrar a menor altura do grupo

let alturaPessoas = [1.50, 1.42, 1.82, 1.75, 1.33, 1.98, 1.59, 1.40, 1.89, 1.90, 1.95, 1.99, 1.55, 1.48, 1.77];

    let maior = alturaPessoas[0]; // a variavel maior assume o 1º valor que esta na primeira posicao do array 

    for (let i = 0; i < alturaPessoas.length; i++){ // estrutura de repeticao feita para que todos os elementos do array sejam percorrido
        if (maior < alturaPessoas[i + 1]){ // verifica se o valor que esta na variavel maior é menor que o valor que esta na proxima posicao do array
            maior = alturaPessoas[i + 1]; // a variavel maior assume um novo valor que é MAIOR do que o anterior
        }
    }
document.write(`A pessoa mais alta tem: ${maior}<br>`); // Dessa forma o ultimo valor dessa variavel sera o MAIOR que foi encontrado dentro dos valores do array


let menor = alturaPessoas[0]; // a variavel menor assume o 1º valor do array - 1.50

for (let i = 0; i < alturaPessoas.length; i++){ // estrutura de repeticao feita para que todos os elementos do array sejam percorrido
    if (menor > alturaPessoas[i + 1]){ // verifica se o valor que esta na variavel menor é maior que o valor que esta na proxima posicao do array
        menor = alturaPessoas[i + 1]; // a variavel maior assume um novo valor que é MENOR do que o anterior.

    }
}
document.write(`A pessoa mais baixa tem: ${menor}`); // Dessa forma o ultimo valor dessa variavel sera o menor que foi encontrado dentro dos valores do array