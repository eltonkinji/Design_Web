var nasc = 2009;
let nome = "Elton";
const viva = true;

function calcIdade(ano=2026){
    let idade = ano - nasc;
    let menor;
    if(idade < 18){
        menor = true;
        var podebeber = false;
    }else{
        menor = false;
        var podebeber = true;
    }
    alert(`${nome} é menor de idade? ${menor}\nIdade: ${idade}\nPode beber? ${podebeber}`);
    return idade;
}


calcIdade();
/* var vaza a variavel dentro do escopo da mesma função
alert(`Pode beber? ${podebeber}`);
*/