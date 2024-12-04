import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-violoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './violoes.component.html',
  styleUrl: './violoes.component.css'
})
export class VioloesComponent {
  produtos: Produto[] = [
    new Produto('Violão Eletroacústico Gibson G15 Studio', 'https://d1z9meo96z0rqn.cloudfront.net/Custom/Content/Products/74/74/7474_violao-gibson-j15-aco-eletroacustico-antique-natural-137881_l1_637685139607451396.webp', 15000, ''),

    new Produto('Violão Fender FA 345CE Auditorium Cutaway', 'https://harmoniamusical.com.br/media/catalog/product/cache/7c65d8a16c1a9fa15447e0ab5eeb833b/v/i/viol_o_fender_fa-345ce_auditorium_cutaway_097_1343_021_natural.jpg', 6000, ''),

    new Produto('Violão Takamine Gd11mce Mgs Folk', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRwq_sY7LeFJgYgfB1EjCNIVoq6ezMxPgetN5E5DBWZZqe0G_p6E4V_r-4M2YHBPaCySnC_7BPBCEwRyul6TybCPGRfYgzRyGRp6uY7xjf1&usqp=CAE', 2500, ''),

    new Produto('Violão Tagima Folk Aço Kansas Sb Sunburst', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSnY5jBKc5MMVRn-XIEc7GRghxT6b1xLbm9abqF-LtPmE1HEAksNPPZkLguYlEXfJ-su8DfB4CKcUNdDXL2tljjONlbRlFl0rv1p65X56Lgb4Oj2lGHae9x&usqp=CAE', 1000, ''),

    new Produto('Violão J White Elétrico Western Preto AH-50T Bk - Phx', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQDmMZbNtllAfAguLF1bFRTEqAfcCUjOxNhcCkz7hVfuv5ou9kXzvEsCrlA6WN_iezjpiQddXb15sAd0b0DaDBXWKk6KwtnFH-WfnEb7rtU&usqp=CAE', 950, ''),

    new Produto('Violão Strinberg BE30C Berlin Branco', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ4kjQjH8ZoOGniY3w6sQWiLd2mPV8ztn0542M_HBCvXJVAeHr1OFjyy-tk9oNHs0L1egtu2BX7ro8zjyJMlQxqMPDCaLr6MI91JGwEP0XVhtJzgMKWKF0CgA&usqp=CAE', 850, ''),

    new Produto('Violão Eletroacústico Flat Nylon Giannini Nf-14 Ceq Bk Preto', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRUPD3KlXlM-r0OyoR5x2MSGo99GqOBt-jZaxmggJiw5s4hf4dQcL_Kpl6dhWafQfhptwDYdNYEIIluwNzie6t2C2ufjgZc_J9ahppViao&usqp=CAE', 650, ''),
    
    new Produto('Violão Nylon Acústico VCA106N Yellow Sunburst Vogga', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSBScaDPxwcMUA49XNViX3sAVO28iHSy7hcuI2JHFx306KWGjXzwvhKG3j4JS7J1w9eesNMYZ-9pvPHqBmDBgmQL1Tgbq2Ct4rm1fdH0ouqDqQt2Xmz7ywr&usqp=CAE', 300, ''),
  ]
}
