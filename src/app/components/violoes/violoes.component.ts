import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../../models/produto';
import { ProductCardComponent } from "../product-card/product-card.component";
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-violoes',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './violoes.component.html',
  styleUrl: './violoes.component.css'
})
export class VioloesComponent {
  produtos: Produto[] = [
    new Produto('Violão Eletroacústico Gibson G15 Studio', 'https://d1z9meo96z0rqn.cloudfront.net/Custom/Content/Products/74/74/7474_violao-gibson-j15-aco-eletroacustico-antique-natural-137881_l1_637685139607451396.webp', 15000, ''),

    new Produto('Violão Fender Folk 096 1573 CF60 Eletroacústico', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS3wVZGrsHwkAKWc8b48I0amxDI2vJ-spEDI1GsUme_uzOeNUO5x9L59LkxooUkau4R1NcsEx-nfmK6gt31QdFRq0R7otuVktZ0118xfVj-RmHV3NYCEyPI&usqp=CAE', 3700, ''),

    new Produto('Violão Fender FA 345CE Auditorium Cutaway', 'https://harmoniamusical.com.br/media/catalog/product/cache/7c65d8a16c1a9fa15447e0ab5eeb833b/v/i/viol_o_fender_fa-345ce_auditorium_cutaway_097_1343_021_natural.jpg', 3500, ''),

    new Produto('Violão Epiphone PRO-1 Ultra Wine Red', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTMn2Mnjg-SVk-GBy5FPgWjJ1g37eo8PvunwPfqpLRI2BKkQQrYexdVl1XQOXJOl8_imlNFra7bFHzymOmUyKyS-emx2b6HXv2kMiZAiIHZb7yL_QFVBduV&usqp=CAE', 3100, ''),

    new Produto('Violão Fender Eletroacústico Player Natural', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS0hzQEjjEKP4NzT8u_MBJsmxeRVf9AMylrzVyLxGrCVHBswIxNNoKcK6BGFwtB8c4S3nfcMCk1RX44kyZF7vZyoZJAzDTDDBToFNhyhbVKcwopcUTdMnuv&usqp=CAE', 3000, ''),

    new Produto('Violão Eletroacústico Takamine Gd11mce', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRwq_sY7LeFJgYgfB1EjCNIVoq6ezMxPgetN5E5DBWZZqe0G_p6E4V_r-4M2YHBPaCySnC_7BPBCEwRyul6TybCPGRfYgzRyGRp6uY7xjf1&usqp=CAE', 2500, ''),

    new Produto('Violão Tagima Modena Nylon Eletrico Cherryburst', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQHC72gOn2-B3UBkG-n5cR3mPZSXjfQAqpZagMqosTgJZkf-vlWMaaKI8bMPIuOoRXRAFLx_OZjOrx2am1XAcB77NyzHan_o_4ycwUfrZbH&usqp=CAE', 2300, ''),

    new Produto('Violão Ibanez Eletrico Mogno Pc12Mhce Opn', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTDDnlEu2rIdoDfRB-moYSZscl0i0DRnM4ZeQ8EEVwEVfuQkxm6kLF8iY5VTGqBPO760GjUQGGrmSa9O_zzMwKjU98e7AI-cfHkscb6d0J5IZ1oD0sXpA6x&usqp=CAE', 1700, ''),

    new Produto('Violão Eletroacústico Strinberg AF65C', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQCxrfA12nYdPPUy788QBzO809o9AUYesJ9y86VoP2JMwySDNsoGbuBgZAUVVJ0RzpR3IU_TjzwsvUtSBjoopEGMs-d9RBtDsT9YEDunaom_qb2VzmDSKNrxw&usqp=CAE', 1050, ''),

    new Produto('Violão Tagima Folk Aço Kansas Sb Sunburst', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSnY5jBKc5MMVRn-XIEc7GRghxT6b1xLbm9abqF-LtPmE1HEAksNPPZkLguYlEXfJ-su8DfB4CKcUNdDXL2tljjONlbRlFl0rv1p65X56Lgb4Oj2lGHae9x&usqp=CAE', 1000, ''),

    new Produto('Violão Eletroacústico Nylon Tagima Vegas', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRfjT81FL5h37TMGFwXpLBdnYjKybUcqMEFwmKIiefuJMSgho00qUfHgOs1PKWJv_AnN5_qDWyiWUsjUgdgKgDdN2HjKZ72-zb369DyQ90&usqp=CAE', 950, ''),

    new Produto('Violão J White Elétrico Western AH-50T - Phx', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQDmMZbNtllAfAguLF1bFRTEqAfcCUjOxNhcCkz7hVfuv5ou9kXzvEsCrlA6WN_iezjpiQddXb15sAd0b0DaDBXWKk6KwtnFH-WfnEb7rtU&usqp=CAE', 900, ''),

    new Produto('Violão Eletroacústico Strinberg BE30C', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ4kjQjH8ZoOGniY3w6sQWiLd2mPV8ztn0542M_HBCvXJVAeHr1OFjyy-tk9oNHs0L1egtu2BX7ro8zjyJMlQxqMPDCaLr6MI91JGwEP0XVhtJzgMKWKF0CgA&usqp=CAE', 850, ''),

    new Produto('Violão Eletroacústico Giannini Nf-14', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRUPD3KlXlM-r0OyoR5x2MSGo99GqOBt-jZaxmggJiw5s4hf4dQcL_Kpl6dhWafQfhptwDYdNYEIIluwNzie6t2C2ufjgZc_J9ahppViao&usqp=CAE', 650, ''),
    
    new Produto('Violão Nylon Acústico VCA106N Sunburst Vogga', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSBScaDPxwcMUA49XNViX3sAVO28iHSy7hcuI2JHFx306KWGjXzwvhKG3j4JS7J1w9eesNMYZ-9pvPHqBmDBgmQL1Tgbq2Ct4rm1fdH0ouqDqQt2Xmz7ywr&usqp=CAE', 300, ''),
  ]

  showMessage: boolean = false;

  constructor(private carrinhoService: CarrinhoService) {
    this.produtos.forEach((produto, index) => {
      produto.id = `produto-${index + 10}`;
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
