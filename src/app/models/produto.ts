export class Produto {
    nome: string;
    imagem: string;
    preco: number;
    id: string;

    constructor(nome: string, imagem: string, preco: number, id: string) {
        this.nome = nome;
        this.imagem = imagem;
        this.preco = preco;
        this.id = id;
    }

    get precoParcelado(): number {
        return this.preco / 12;
    }
}