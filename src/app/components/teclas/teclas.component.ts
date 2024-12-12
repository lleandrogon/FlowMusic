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
    new Produto("Piano Digital Elétrico Spring Pd-88", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQxDGbigquFt4y7UZE4gtAU9ym5xZZjk7Zrg0VhcSVFEB2fUFtfk3Pinbo3gi5Q57YnKzonU5-rUzPVLTWBTTuu1G-QS34N3DOosVazust8MckgputcFtmVww&usqp=CAE", 3500, ""),

    new Produto("Piano Digital 88 Teclas Waldman Kg-8800 Preto", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRFIZ3cf4wVxAkC7CT6ZWsUF1h3IDBhFeLlBp_n9qhIkxAMkxb5Q8vDfib6A5vXIx6-Bif59Ogc5ERelKvzOnorWWHbI9z6nq1ZFMcyailCWBTseVtiL2Jd&usqp=CAE", 2800, ""),

    new Produto("Teclado Elétrico Yamaha Psr E473 Preto", "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRbkZqq1lnBR__MF-3X0WIKTxzcirQrdQWG7klcSDWzzTu3MK2cSDIUe95AdrJrCHWwL0x6tfzT95-w2SiOKYnmoomZyz4myqUkvF7UZgYWhVESa-IHJm6iiQ&usqp=CAE", 2200, ""),

    new Produto("Teclado Elétrico Controlador Alesis VI61", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR4IQbAvt9OrYkx-uQrIDpDHidk_yqq3ZfvkZ4G_6JZjvPJqyiwzjVFeJOElKnaz6hjXKuhJfiU8omRNGDmZBdZArlxNpj2Iq9r8Pag-k8&usqp=CAE", 1100, ""),

    new Produto("Keypower Teclado Elétrico Musical Kp500", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTcYAJ9scd2jPsb-WZoi2Vbli77zivfFYtvRpqB3mP8_h5PJZE8bFSpu5m10Gnu8bOBJtN6rBGF8-IfyGZSiJSp1Ny8vbvS2rda7h-7Zs8vC3_yN-MdSX-epA&usqp=CAE", 850, ""),

    new Produto("Teclado Casio Casiotone CT-S200 Preto", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSgVlD-uQD9GhT25b27C9buhaBWSzxINiDsL4SD0Xp7lwLtYbLJdgj82Ad5_U26jzyAATdXfRMS76FyWpFkQB1oNuuAuNNB0BfT5edCk7Y&usqp=CAE", 740, ""),

    new Produto("Teclado Musical Profissional 61 Teclas Usb - Mxt", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTBMYDTTK7stOw2jp9tln1ZoFuACKZ7lEZBJUo3NaGI2VvTo1P432A9SZH_OLN1VRRUXv3LD9fhPhpIawA54SMh_vzQpl5hzej6vaacZwa-03SMwGB6h00n&usqp=CAE", 550, ""),

    new Produto("Teclado Eletrônico Kadosh Keypower Kp-100", "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRTZk-LuIlCu0ccke8dMizIciwgXqZAogMUmPBJPf3VEgH20e6B2RCfGu0rZfrEG7IVq61oy49QVqn7rS4oZHLo9rIWe14ODGxsv_nyyUGbtOSCmx3ubH_v&usqp=CAE", 500, ""),

    new Produto("Teclado Eletrônico Kadosh Keypower Kp-100", "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRTZk-LuIlCu0ccke8dMizIciwgXqZAogMUmPBJPf3VEgH20e6B2RCfGu0rZfrEG7IVq61oy49QVqn7rS4oZHLo9rIWe14ODGxsv_nyyUGbtOSCmx3ubH_v&usqp=CAE", 500, ""),

    new Produto("61 Teclas Teclado Piano Eletrônico Musical Em", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSRApv_XQ0exJv6PPiw4jRBVFcDFJuEiNdfVoQ6yAea2Pieg8UFVZoeD9VRjx8z0HyDTS2koQq5od5JoCnQ9jDPIRByRergKG029HW2kBxfEEkzsT5xbO5rWQ&usqp=CAE", 450, ""),
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
