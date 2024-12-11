import { Component } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { CommonModule } from '@angular/common';
import { Produto } from '../../models/produto';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-teclas',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './teclas.component.html',
  styleUrl: './teclas.component.css'
})
export class TeclasComponent {
  produtos: Produto[] = [
    new Produto("Piano Digital 88 Teclas Waldman Kg-8800 Preto", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRFIZ3cf4wVxAkC7CT6ZWsUF1h3IDBhFeLlBp_n9qhIkxAMkxb5Q8vDfib6A5vXIx6-Bif59Ogc5ERelKvzOnorWWHbI9z6nq1ZFMcyailCWBTseVtiL2Jd&usqp=CAE", 2800, ""),

    new Produto("Teclado Controlador Alesis VI61 61 Teclas", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR4IQbAvt9OrYkx-uQrIDpDHidk_yqq3ZfvkZ4G_6JZjvPJqyiwzjVFeJOElKnaz6hjXKuhJfiU8omRNGDmZBdZArlxNpj2Iq9r8Pag-k8&usqp=CAE", 1100, ""),

    new Produto("Keypower Teclado Elétrico Musical Kp500", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTcYAJ9scd2jPsb-WZoi2Vbli77zivfFYtvRpqB3mP8_h5PJZE8bFSpu5m10Gnu8bOBJtN6rBGF8-IfyGZSiJSp1Ny8vbvS2rda7h-7Zs8vC3_yN-MdSX-epA&usqp=CAE", 850, ""),

    new Produto("Teclado Casio Casiotone CT-S200 Preto", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSgVlD-uQD9GhT25b27C9buhaBWSzxINiDsL4SD0Xp7lwLtYbLJdgj82Ad5_U26jzyAATdXfRMS76FyWpFkQB1oNuuAuNNB0BfT5edCk7Y&usqp=CAE", 740, ""),

    new Produto("Teclado Estudante 61 Teclas Cst 300 Custom Sound", "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQT8zewBXHE0yKldB-SFbXvcBWVdvOrNOiLwEjJz6lBoTD2lJV8BxB8elcS4NMAK9yZI4A6IN4_uRXRDROKpzsA8dlCHPLEy4LduwbHeFnB_MUacoDUcMvU&usqp=CAE", 600, ""),
  ]

  showMessage: boolean = false;

  constructor(private carrinhoService: CarrinhoService) {
    this.produtos.forEach((produto, index) => {
      produto.id = `produto-${index + 1000000}`;
    });
  }

  adicionarAoCarrinho(produto: Produto) {
    this.carrinhoService.adicionarAoCarrinho(produto);
    this.exibirMensagemTemporaria();
  }

  private exibirMensagemTemporaria() {
    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  }
}
