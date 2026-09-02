let dia = prompt("Digite o dia da semana (1 a 7)\n (1: Domingo - 7: Sábado): ");
dia = Number(dia);
switch(dia){
    case 1:
        alert("você escolheu Domingo");
        break;
    case 2:
        alert("você escolheu Segunda-feira");
        break;
    case 3:
        alert("você escolheu Terça-feira");
        break;
    case 4:
        alert("você escolheu Quarta-feira");
        break;
    case 5:
        alert("você escolheu Quinta-feira");
        break;
    case 6:
        alert("você escolheu Sexta-feira");
        break;
    case 7:
        alert("você escolheu Sábado");
        break;
    default:
        alert("Dia inválido!");
}
