import { Component } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Produto } from '../../models/produto';
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-acessorios',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './acessorios.component.html',
  styleUrl: './acessorios.component.css'
})
export class AcessoriosComponent {
  produtos: Produto[] = [
    new Produto("Pedaleira de Efeitos para Baixo Zoom B1Xon", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTb_Nubq8fNn342Wu7IcEdJbAyWCnZvfBQP0nRB-4dRMTttNQvGV5PtDPxl4j-MTqUBxIsH8K4yxlc7_b3eY_Wos4PRpIeQjub3S-pQwUnoJTCXhPuHu5fKBA&usqp=CAE", 750, ""),

    new Produto("Pedal de Efeito Boss Ds 1 Distortion", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSIr0UhtwmgRVztqVBCLwmBJsSNrO3NOs9q8AxIweP5ta71IBKa3fkEZdXVYGtqqcnKgltjfirnuWtnLojeFPQRUPLrEREUFDpIzoXuYjh1NqQJgiUIikk8&usqp=CAE", 500, ""),

    new Produto("Pedal Yuer Rf-10 Series Analog Chorus", "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSkAfepIJ6rSKoA1KW-XITBMaDm9jcPjfhxNPnpqo6mypQhV22cmy1ikYzYQQTi_pOEZRmWgKkjRdEDFCvHfglDfDNDrqpPQN8WYQywt7gYlAOxSv6uDlD6&usqp=CAE", 250, ""),

    new Produto("Encordoamento de Baixo 5 Cordas Nig N750 045 / 130", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ7zlRwYUtxXYqs-edeyVQY75Lggi_C4i7Cw1S5T-1MtSjm9jTjGDHsBSktl5MdYCRuk8w67xoTIsIvflmuGEodFTINEER2M077tv_E39au1-_1xmZwA5qgiw&usqp=CAE", 140, ""),

    new Produto("Transmissor Sem Fio Wireless P10 Pronta", "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQu1qko-kuLY5FcER6jnKgagkC419f61CCJe6teR-ETa99dj8Er0z6S0Mi0NZAh1ON0dntqAYjVUorVL1y36n8EwZvyaKWL8E29MWCQb_g29b6KQrCgickx&usqp=CAE", 130, ""),

    new Produto("Encordoamento Baixo 040 Tagima Tcb-440 Nickel", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTd11m5WCUugSd3hhFBnD4QttG45iI9q_OUP_YWtU38BQsniLS817bhmUtSma1j751R3q2Nn4lx-sd2CW8FznXKtvGQGXO0bJVMlWgKvGf4P-ZSoVnwiJOg&usqp=CAE", 120, ""),

    new Produto("Prato De Ataque New York 16 Para Bateria", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTfi_ghWWVP1fo_5TVRKny_4HQaQTySq7P1P61s1W7tgbGEML9kZHPx6HTqyMWbRUXaQop7UFaS8mOOeyWzecCtpMKLXPPO5HALPDhM5mM&usqp=CAE", 110, ""),

    new Produto("Encordoamento Guitarra 011 Daddario EXP115", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTvfINPHwjIR6pqdCR5qse7671VoNqblaQtf_kdp-tfHeSirFro7cRuJPUGRiqfKcEejvsw36ICtYWaEp6lBiQj6m0XgZVa0QDgJQ3vG8lZqVEmIIocS3vG&usqp=CAE", 90, ""),

    new Produto("Encordoamento Nig NH66 Guitarra 009 Hibrida", "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRWW9-cVgwjAQP1kKrq13Va57PLA_SEiMJvkuRWQmejggxEUNd0O3ERYkWSjuAc5Ca5eHk3zKTcOcos_O08RtqbvohWtuGle6ug4xK1rHnW1PD62EY6ABPTqw&usqp=CAE", 50, ""),

    new Produto("Encordoamento Para Guitarra GEEGST10 Giannini", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTx6FF1_48hp7PayEZcRjlD1LZw0euLkabEOE2JNG8Xm8P_zeX1COg9rotCyQZf9rmfo7aWfpkvXEqYogi4SLD6NiayyL1eo1uH0000jixhM8kQHZkBvJasYA&usqp=CAE", 45, ""),

    new Produto("Cabo P10 X P10 3 Metros Instrumentos It-Blue", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRDscFalJSUr-L6S4Qwo_LyASZsNHmCbNcaeqILahZf2A8FbW03so-JUDEY3XyYH87oGENyyx2nWlKDbVxC5rsghJX1-d2EzYXhcCZbGY5dWaYqaFchqLmQEwif&usqp=CAE", 40, ""),

    new Produto("Correia Instrumental Alça Basso Courino Preto", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTHp8_o_zbhKzUHuSHkGw8KiUrCG0BEHN-mBFmHI5Tc5sMu80o5gu27MEotOZBpCxtkBlHob_1vqks9OAZ7GT5unnO7l-QNH-Zc-kSTuXH2dMcZNCDNtQk&usqp=CAE", 35, ""),

    new Produto("Kit 10 Palhetas Fender Diversos Sortidos Nf", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQKHvi2fib5obLF7QIx796TPQqvTyqpaRd4IDsPhWn0H4DATSf2A-0VYBdwodDlZl0afoyo6bvhPiJUEia1LGQSiup6pjI0RWkU_QpbZaz03PcGgPf9FT_vEg&usqp=CAE", 30, ""),

    new Produto("Capotraste Em Alumínio - Preto - Cpt10", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRyzZitvfZ57qglJ5nEl91qwa-Fxm7cSewDwsafUPQ0T4d-91hkuowzp0KV1zqzKRijioQ0X_S_kTG1J_760z22CQr0XCcJifEj7Al6qZk&usqp=CAE", 25, ""),

    new Produto("Baqueta 7A Nirvana Liverpool Madeira (par)", "https://m.media-amazon.com/images/I/41PSRzrnKfL._AC_SX569_.jpg", 20, ""),
  ]

  showMessage: boolean = false;

  constructor(private carrinhoService: CarrinhoService) {
    this.produtos.forEach((produto, index) => {
      produto.id = `produto-${index + 100000000}`;
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
