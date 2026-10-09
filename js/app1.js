const balu = {
    nome: "Balu",
    cor: "preto",
    altura:0.67,
    peso: 11.5,
    race: "vira-garrafa",
    latir(){
        alert("Au Au!");
    },
    comer(KG){
        this.peso += KG;
        alert(`nham nham, comi ${KG}kg`);
    },
    cagar(KG){
        this.peso -= KG;
        alert(`cagando ${KG}kg`);
    },
    saudar(){
        let msg = `Olá, meu nome é ${this.nome}\n`;
        msg = msg + `Cor: ${this.cor}\n`;
        msg = msg + `Raça: ${this.race}\n`;
        msg = msg + `Peso: ${this.peso}kg \n`;
        msg = msg + `Altura: ${this.altura}m`;
        alert(msg);
    }
}