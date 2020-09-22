export class Planta {
    public nome: string;
    public descricao: string;
    public imagePath: string;

    constructor(nome: string, desc: string, imagePath: string) {
        this.nome = nome;
        this.descricao = desc;
        this.imagePath = imagePath;
    }
}