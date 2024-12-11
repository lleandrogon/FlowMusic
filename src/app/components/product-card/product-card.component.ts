import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
    @Input() imagem!: string;
    @Input() nome!: string;
    @Input() preco!: number;
    @Input() precoParcelado!: number;

    @Output() addAoCarrinho = new EventEmitter<void>();

    onAddAoCarrinho() {
      this.addAoCarrinho.emit();
    }
}
