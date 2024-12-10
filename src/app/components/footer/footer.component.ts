import { Component } from '@angular/core';
import { Pagamento } from '../../models/pagamento';
import { Contato } from '../../models/contato';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  linkedin: string = "https://www.linkedin.com/in/leandro-gon%C3%A7alves-cris%C3%B3stomo-9936422b0/";

  pagamentos: Pagamento[] = [
    {
      nome: "Cartão de Crédito",
      imagem: "fa-solid fa-credit-card fs-2"
    },
    {
      nome: "Cartão Visa",
      imagem: "fa-brands fa-cc-visa fs-2"
    },
    {
      nome: "pix",
      imagem: "fa-brands fa-pix fs-2"
    },
    {
      nome: "Check",
      imagem: "fa-solid fa-money-check-dollar fs-2"
    },
    {
      nome: "Dinheiro",
      imagem: "fa-solid fa-money-bill fs-2"
    }
  ]

  contatos: Contato[] = [
    {
      nome: "Telefone",
      icon: "fa-solid fa-phone",
      descricao: "+55 99 99999-9999"
    },
    {
      nome: "Endereço",
      icon: "fa-solid fa-house",
      descricao: "Rua CSS Souza, Salvador, Bahia"
    },
    {
      nome: "E-mail",
      icon: "fa-solid fa-envelope",
      descricao: "flowmusic@gmail.com"
    },
    {
      nome: "Horário",
      icon: "fa-solid fa-clock",
      descricao: "De segunda à sexta, das 09:00 as 21:00"
    }
  ]

  redesSociais: Contato[] = [
    {
      nome: "Instagram",
      icon: "fa-brands fa-instagram",
      descricao: "@flowmusic",
      link: "https://www.instagram.com/"
    },
    {
      nome: "Youtube",
      icon: "fa-brands fa-youtube",
      descricao: "FlowMusic",
      link: "https://www.youtube.com/"
    },
    {
      nome: "Facebook",
      icon: "fa-brands fa-facebook",
      descricao: "FlowMusic",
      link: "https://www.facebook.com/"
    },
    {
      nome: "TikTok",
      icon: "fa-brands fa-tiktok",
      descricao: "@flowmusic",
      link: "https://www.tiktok.com/"
    }
  ]
}