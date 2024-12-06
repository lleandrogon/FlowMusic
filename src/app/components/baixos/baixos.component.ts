import { Component } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Produto } from '../../models/produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-baixos',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './baixos.component.html',
  styleUrl: './baixos.component.css'
})
export class BaixosComponent {
  produtos: Produto[] = [
    new Produto("Baixo Aria Pro II SB - Cliff Burton - Black 'n' Gold", 'https://ariaguitarsglobal.com/wp-content/uploads/2022/09/sb1000_bk_product_1800x1800.jpg', 37000, ''),

    new Produto("Baixo Rickenbacker Standard 4003 FG Sunburst", 'https://sc1.musik-produktiv.com/pic-003121041l/rickenbacker-standard-4003-fg.jpg', 14000, ''),

    new Produto("Baixo Fender MEX 4C Player Series Jazz Bass Plus Top Blue Burst", 'https://static.wixstatic.com/media/21feb7_8d9778a32e344963ad6f327668aadd3b~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/21feb7_8d9778a32e344963ad6f327668aadd3b~mv2.jpg', 8000, ''),

    new Produto("Baixo Sterling Music Man Sub 5 cordas Ruby Red Satin", 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR-Uv7pXcL9l6sBffGAc5Lk5OuL_a4RN55zWemsS0QhpNPNaJngZmjTUGm_1n-pMTYg4upYZKRUB1MQAsGNumq43KWixyk6LrWePM4L37JFlvF3KRYh0Sbh&usqp=CAE', 7000, ''),

    new Produto("Baixo Fender Vintera Precision Bass 50s - Dakota Red", 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR_6jnLO11C_epLLT_woFNqMPtioybF3ijW9seM_vEGALHBuTieIGGIR2qf2o1x1eMFt1oeErrEEVIE1IW_VMzScoiMIyNEpg0P-noDX58&usqp=CAE', 4600, ''),

    new Produto("Baixo elétrico Sr Red SR300EB-CA Ibanez", 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSOI70h_kXMN3a8Y7IbGRE_NoasTkMF7O3UCVV407zzffr5dTbA89HhQKUdRUsfba-9ETxq7Ry9cfk0XMs8XLj0OCX09Btr1yrzdP3_gevbTno9gAcwxKo2zg&usqp=CAE', 3500, ''),

    new Produto("Baixo Ibanez Gsr 205B WNF 5 Cordas Ativo Walnut Fosco", 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSN1vGlEjtAh-JN04zHcr41XrAgofy5YwZIMLt6zGeaLe5zpzD_VdEoomBgA3MAG3V3K2zj_vZCLlVtRUpDe7oawocZB2SCX5RolX9mtp8jwRs_bbV2Ut5v&usqp=CAE', 2700, ''),

    new Produto("Baixo Natural Brilhante Wb400a-nat Waldman", 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTV28ixPinOsN4RWFhsCCwBSvhZTV-pM1rkulcMo16gDbwQvue1zKeHsaR-caXZ_F4Xleu7Rm1ec8if2EdgkAU0dZ1YaMSKZasCVISkxb5GFi7A1qoGpCwOug&usqp=CAE', 2200, ''),

    new Produto("Baixo Elétrico Cort Action Act Bass Plus Preto 4 Corda Ativo", 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT-G2YVSDNEm3rXw997PiAXiEauYRS-m4z6j-ovtpoJ2iGaLFjHF84t2qdR7KlcAsRP6sPOL9fTNgj5alCW3j6pj2Fh3Z7pEkBe9tHZrzRq9mEcmjS7-P7i&usqp=CAE', 1700, ''),
  
    new Produto("Baixo Jazz Bass Tagima TJB-4 Sunburst", 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQFewgbcnq380Tp5O10GVNY1p7E0cIppMmgriEGONh4cjUbvzYr45Qi2SfJkm98z7KqdPnHgOoZj4bxu8iXicIw8GDfIrvV9bJPX_zdVVeEkCFN_ZnlFARAtg&usqp=CAE', 1600, ''),

    new Produto("Baixo Passivo 4 Cordas Sunset BS-4 S GN - PHX", 'https://ninjasom.vtexassets.com/arquivos/ids/177603/contrabaixo-bs-4-s-gn-phx.jpg?v=637744905359900000', 1300, ''),

    new Produto("Baixo Tagima Woodstock Tw-65 Bk PJ Preto", 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQgUYVsFiPe4n0ePPj5QKX3xp7AP5M4RHa2RQK1TW6HbQ4fQirD0MJ0JWZO0z4xNGOaSIWc7hXTvu-F8DnmKTnW7Jy2JWzH_vgtVmzPC9Lr9ArWrpHZYwhO&usqp=CAE', 1200, ''),

    new Produto("Baixo Tagima Tw-66 Lf/Bk Bs Woodstock", 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcThz18Cc6f1wXZ6Pv6CYpgRJJZlMJjroK1-P5ttHexfZvYar06k4si8gxcHx_-qHzNuKfh7Q3yO7XWSzv9tlICjenv2w9AEMr3NJhg56tgRxeX3Z1w0j83wSw&usqp=CAE', 1100, ''),

    new Produto("Baixo Passivo Phx Precision Bass Sunburst", 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQCrvwjBE44gy5Ns3B0IPqyBq0uNQkv2zMQPBuiqdKqIi9nD0DF0s_m-cxIhyKKxHgnyIbWyZyoFvmbMfJGYmSkDpYNLKPyiukKxAOY-C-D9arAQQCgFwA3pA&usqp=CAE', 1000, ''),

    new Produto("Baixo Tagima Memphis Mb50 Branco Olympic White Ows", 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTvY9R_gT2OQ_LcWijAMi0a_xugTSeg6oJ7LzWn96-vCFEoYu-J8fpfyjggOT_9Nh5hRH2PR_N2UXmOzk1maiXXQnS8QeVby6_EVKeTzlc&usqp=CAE', 950, ''),
  ]
}