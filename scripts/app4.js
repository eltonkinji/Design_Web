let vezes = Number(prompt("digite a numero de vezes: "));
for (let i = 1; i <= vezes; i++) {
    if (vezes > 100){
        break;
    }
    alert(`contei ${i} vezes`);
    if (i%2!=0) {
        continue;
    }
    alert(`Número par: ${i}`);
}