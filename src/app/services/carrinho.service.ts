import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private carrinho: Produto[] = [];

  adicionarAoCarrinho(produto: Produto) {
    this.carrinho.push(produto);
  }

  getCarrinho() {
    return this.carrinho;
  }

  removerDoCarrinho(produto:Produto) {
    this.carrinho = this.carrinho.filter(item => item.id !== produto.id);
  }
}