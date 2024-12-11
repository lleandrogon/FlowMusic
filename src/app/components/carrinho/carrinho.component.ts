import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto';
import { CarrinhoService } from '../../services/carrinho.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.css'
})
export class CarrinhoComponent implements OnInit {
  carrinho: Produto[] = [];

  constructor(private carrinhoService: CarrinhoService, private router: Router) {}

  ngOnInit(): void {
    this.carrinho = this.carrinhoService.getCarrinho();
  }

  removerDoCarrinho(produto: Produto) {
    this.carrinhoService.removerDoCarrinho(produto);
    this.carrinho = this.carrinhoService.getCarrinho();
  }

  calcularTotal(): number {
    return this.carrinho.reduce((total, item) => total + item.preco, 0);
  }

  finalizarCompra(): void {
    this.router.navigate(['/compra-efetuada']);
  }
}
