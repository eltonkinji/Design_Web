var nasc = 2009;
let nome = "Elton";
const viva = true;

function calcIdade(ano=2026){
    let idade = ano - nasc;
    alert(`Dentro de Função : Idade: ${idade}`);
    return idade;
}


calcIdade();
/*
alert(`Fora de Função : Idade: ${idade}`)
Erro pois a variável idade não existe fora da função.
*/
alert(`Fora de Função : Chamando CalcIdade: ${calcIdade(2024)}`)