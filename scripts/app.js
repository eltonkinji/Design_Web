let nasc = prompt("Digite o ano de nascimento: ");
nasc = parseInt(nasc);

let viva = confirm("Você está vivo? Clique em ok.");

if (viva) {
    alert(`Você tem ${2026 - nasc} anos e está vivo.`);
} else {
    alert("Você não está vivo.");
}