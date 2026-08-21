alert("Olá mundo!")

var nasc = 2009;
let nome = "Elton";
const viva = true;
let altura = 1.76;

if (viva) {
    let saudacao = "Olá, " + nome + "!" ;
    let mensagem = `Altura ${altura}m | Idade: ${2026-nasc}`;
    alert(saudacao+'\n'+mensagem);
}
else {
    alert("Você já está morto.")
}