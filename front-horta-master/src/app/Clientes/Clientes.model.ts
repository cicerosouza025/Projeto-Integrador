export class Cliente {
    public nome: string;
    public sobrenome: string;
    public usuario: string;

    constructor(nome: string, sNome: string, user: string) {
        this.nome = nome;
        this.sobrenome = sNome;
        this.usuario = user;
    }
}