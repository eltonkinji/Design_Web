class Animal {
    constructor(nome, cor="sem cor", altura=0.3, peso=0.0, raca="sem raça"){
        this.nome = nome;
        this.cor = cor;
        this.altura = altura;
        this.peso = peso;
        this.raca = raca;
    }
    falar(){
        alert("Au Au!");
    }
    comer(KG){
        this.peso += KG;
        alert(`nham nham, comi ${KG}kg`);
    }
    cagar(KG){
        this.peso -= KG;
        alert(`cagando... ${KG}kg`); 
    }
    saudar(){
        let msg = `Olá, meu nome é ${this.nome}\n`;
        msg = msg + `Cor: ${this.cor}\n`;
        msg = msg + `Raça: ${this.race}\n`;
        msg = msg + `Peso: ${this.peso}kg \n`;
        msg = msg + `Altura: ${this.altura}m`;
        alert(msg);
    }
}   

const balu = new Animal("Balu", "preto", 0.67, 11.5, "vira-lata");
const mel = new Animal("Mel", "marrom", 0.45, 8.5, "vira-lata");