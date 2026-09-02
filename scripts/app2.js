let dia = prompt("Digite o dia da semana (1 a 7)\n (1: Domingo - 7: Sábado): ");
dia = Number(dia);

if (dia <=0 || dia > 8){
    alert("Dia inválido!");
}else if(dia == 1){
    alert("você escolheu Domingo"); 
}else if(dia == 2){
    alert("você escolheu Segunda-feira"); 
}else if(dia == 3){
    alert("você escolheu Terça-feira"); 
}else if(dia == 4){
    alert("você escolheu Quarta-feira"); 
}else if(dia == 5){
    alert("você escolheu Quinta-feira"); 
}else if(dia == 6){
    alert("você escolheu Sexta-feira"); 
}else{
    alert("você escolheu Sábado"); 
}