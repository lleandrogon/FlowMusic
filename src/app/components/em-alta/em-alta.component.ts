import { Component } from '@angular/core';
import { Produto } from '../../models/produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-em-alta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './em-alta.component.html',
  styleUrl: './em-alta.component.css'
})
export class EmAltaComponent {
  produtos: Produto[] = [
    new Produto('Violão Eletroacústico Gibson G15 Studio', 'https://d1z9meo96z0rqn.cloudfront.net/Custom/Content/Products/74/74/7474_violao-gibson-j15-aco-eletroacustico-antique-natural-137881_l1_637685139607451396.webp', 15000, ''),

    new Produto('Guitarra Gibson Les Paul - Slash - Appetite Burst', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQCquEgc8zZelRna-ec6mYaZEGiF7cu0psK9HMYD-txjuOaQvojM12qHXCJX_YWvP7-YMBmPOQhURqfalIPvTczEVhT9w4L4bB1HdnLhEg&usqp=CAE', 35000, ''),

    new Produto('Guitarra Ibañez JEM 7v - Steve Vai - White Pearl', 'https://barramusic.com.br/wp-content/uploads/2023/05/ibanez_jemjr_wh.jpg', 25000, ''),

    new Produto("Baixo Aria Pro II SB - Cliff Burton - Black 'n' Gold", 'https://ariaguitarsglobal.com/wp-content/uploads/2022/09/sb1000_bk_product_1800x1800.jpg', 37000, '')
  ];

  constructor() {
    this.produtos.forEach((produto, index) => {
      produto.id = `produto-${index + 1}`;
    });
  }
}
