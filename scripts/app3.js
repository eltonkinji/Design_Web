let n1 = Number(prompt("Digite o primeiro número: "));
let n2 = Number(prompt("Digite o segundo número: "));
let op;
do{
        let msg = "Escolha uma opção:\n"
        msg += "1 - Somar\n";
        msg += "2 - Subtrair\n";
        msg += "3 - Multiplicar\n";
        msg += "4 - Dividir\n";
        msg += "5 - Sair\n";
        op = prompt(msg);
        switch(op){
            case "1":
                alert(`O resultado da soma é: ${n1 + n2}`);
                break;
            case "2":
                alert(`O resultado da subtração é: ${n1 - n2}`);
                break;
            case "3":
                alert(`O resultado da multiplicação é: ${n1 * n2}`);
                break;
            case "4":
                alert(`O resultado da divisão é: ${n1 / n2}`);
                break;
            case "5":
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida!");
        }
}while(op != "5");