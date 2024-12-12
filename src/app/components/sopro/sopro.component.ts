import { Component } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Produto } from '../../models/produto';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-sopro',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './sopro.component.html',
  styleUrl: './sopro.component.css'
})
export class SoproComponent {
  produtos: Produto[] = [
    new Produto("Saxofone Eb Brass E Flat Sax 802 Chave Woodwind", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQRfHpNqK6KIqRU2HwUUA4fhwKmTcMdK8frH-XJFg4eGHaKDvcej6DNhuy9YjcC7AdBV0jH2fTNTADweJ1JXpxYCFssKiQ2f4UmdxW7ZwyY1xGK6Mb0inqrJA&usqp=CAE", 1600, ""),

    new Produto("Trompete Bb HTR-300L Laqueado - Harmonics", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR_Yv-X4Thxo_7O17g8FYpFQlHpncW8ELqHA2X_vpHNIHk40Oq5IGF1uIvV9zsnabD2cYegR5I4DVhwyfHKW0vDcEk5GkoSBOaR9yzO1S0&usqp=CAE", 1000, ""),

    new Produto("Clarinete Bb Ycl 255 Prateado - Yamaha", "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTpWXG5vxEBgw5OYUb43_iiszoyYIHwB0kkXVZm2jlS_o1139WeOJTErPMPIkCEZd0HEy-zBF8Ii0qi0B7OfRdLAuepbb24jrnzdqHeA9Ehp0mNZD4ma2G-tg&usqp=CAE", 900, ""),

    new Produto("Trompete Prince Niquelado Tru19 Prateado", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRaPj6t9YpYIXn9ZKHbWzn_6S1SWluJI_P6lgCtWwkACGC1J26BmkVzZF5R47htk2mQq3qXeFAgG0b6euVt5YKBYuFvYcpmPzkVh8ylBvBSZfFe8S0y-F5g&usqp=CAE", 750, ""),
    
    new Produto("Rowtter bb clarinete laca ouro 17 chaves", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRlm4K-fo5A0Z9yMfoA5Y-tzwPTcawjIZZjfQgUSdKX-9Vz2c-dfwXpDMSfuABZNBMXU6WXcvrtVVa9ftUFPXA-q5MT1JBoSvPK0ugxNszL2A4LDxReBGGVYA&usqp=CAE", 340, ""),

    new Produto("Flauta Doce Yamaha Soprano Germanica Yrs20 GB Azul", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQyhgBxlb6Wfmur88LT-mrmKCLwVQCY_xdaSeJ3v-_WKDMJJcdYqYoCYIOj7G8e3pDc67frrTpHvANZhjaePf-45J-N554kx7Bu4dv_HlnUmhsDtNPGMlY31w&usqp=CAE", 80, ""),

    new Produto("Flauta Doce Yamaha Soprano Germanica Yrs23", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQuFHjLhRakqtklEGosK4pMSjCxvEfrLb7OBT639zdxpdtQlExli8jzERJAydTa3ylcxayhqEnpM-rIbDKFFce3S7Ic57tglc3_b0kf3DGMWpr48LycAX7B7Q&usqp=CAE", 40, ""),

    new Produto("Flauta Doce Germanica Phx Azul P8", "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRQnbd-h7C1zExKg-BohMbakYC1jY7YSyw3ogZ9pX_FmW2j6OvnQ39h7egw2Pz5Po_tfYmEjYrlz913odJa1x9QR7NVFv5960eIWu4G5wMvXcr70NbwvsZMGyo&usqp=CAE", 35, ""),

    new Produto	("Flauta Barroca Abs Branco Bege Myth", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTflZSDMcQkM5ZY3C6Udh6EUQtDzyk0wQRIUBR3MnKUczNBX9kPq_c_QfObRq1m7VHW7JS2Knl8wELLdcKUQ1EKudd7mWTpL0IpK0e7qNWkjAheYlj2uk7W&usqp=CAE", 30, ""),

    new Produto	("Gaita 24 Furos Em Dó C Diatônica Profissional", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS8KyjIGlXL0kqyGUYzrB5k2BAuEV9I6j16DGAN2oymnl2z8qGBASCXivJmx-1sMkbXXfE3wSHkTsW_-GKg9qakdtclIbbHFwglOeW3nSH5voPhR5SR6xwf4w&usqp=CAE", 25, ""),
  ]

  showMessage = false;

  constructor(private carrinhoService: CarrinhoService) {
    this.produtos.forEach((produto, index) => {
      produto.id = `produto-${index + 10000000}`;
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
