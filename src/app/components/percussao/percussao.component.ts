import { Component } from '@angular/core';
import { Produto } from '../../models/produto';
import { ProductCardComponent } from "../product-card/product-card.component";
import { CommonModule } from '@angular/common';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
  selector: 'app-percussao',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './percussao.component.html',
  styleUrl: './percussao.component.css'
})
export class PercussaoComponent {
  produtos: Produto[] = [
    new Produto("Bateria Odery Equalizer Pure Nat Trees EQ220L", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcScRlBhg6yn0Otw9GNKdyJv2ICbPPDZDGjNZDhFg2LrNssbFgPxrcm93b_33HWz0JBmxjyB0gDO-iRal2IXjMsTJJrF-RcD-K0jjKODQ1UjoiEaxd8NRCdS&usqp=CAE", 9000, ""),

    new Produto("Bateria Nagani Garage Rock 22 BLN Blue Night", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS8n9puoYi-zj5y6EeFGAZOsBXo2u5D1W28TyBGMbr8BuiF-bwpBWCppIyiXxXIE2ojZuz5AO-5ey-W4t-cdZY25Gqh0gaIcgXi-KBtPpoWUd9VA1pECsy5&usqp=CAE", 5200, ""),

    new Produto("Bateria Eletrônica Nagano Tech 7 Pads Pocket Ntp-02", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTWgLI3j35NYmiQIJMtQPCLz4q6BIMnhcq0thFPxucDB1FeJig2jl1ZlllUelus4unJHAEnKmSB2hVKjWAO0m2TrvQuPAy3V_Owjho8he2TLJWN4VfIw181&usqp=CAE", 3600, ""),

    new Produto("Bateria Acústica Tagima Nagano Onix Big Yellow", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRunWwBo6j_w5ozlzplqSgoASV8BSemQzDs95O2hKUT7iOeophTp56iFQJlT4rdQTTaDasZDF-0FmfUwft0iAaRObhaRI0oDWzcwuRh9JAykBIAsbSu6fCC&usqp=CAE", 3300, ""),

    new Produto("Bateria Eletrônica Orange X-Pro Com Banco e Fone", "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSF-bISxpWFUxk_2QHiqyHGxwg2Z6ZRTjedYO5QDLemhNJHofXssa-yjZUxIMReSPhgSl0BgNNph7G3o3mKq0e7uNQbzSWDjlVfvQV_e5c&usqp=CAE", 3000, ""),

    new Produto("Bateria Mxt M-b120 Bumbo 20 Completa", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTONP7Xpg_HJw9536-BqHN1OK-DPNUK0L4w5YfDg1eoANeo2SqUB7nQtBU_IuNIBT4q6rsyJO9MJufM01thWCroreIeerrHE0S7YMQoI7PFf8RqpbTcpq8h&usqp=CAE", 2600, ""),

    new Produto("Bateria Acústica Vogga Pulse Bumbo 20 Mtb", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSkSzjHYxfN5D0LJ0HfYtYKUP_EsQ3aannwTYf4JFoaA_CT3ie54cx66KQdAM0EctWyA5XGkEprD-v-LAz2rFB8av1tqpYRmxKAf_1E8kJnYMgBlznlV8yS&usqp=CAE", 2500, ""),

    new Produto("Bateria Eletrônica Waldman Mesh 9 VM-9", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTH5shTYn4OBSn0dK3Ujx8mO3va_u3H7nGJePuErTPvC30DX3v9u8nM_sVXoe0Jdf2fI8X30FqpuXNDpbXVdbCm0cR3XVFYZzahorAwxO8&usqp=CAE", 1800, ""),

    new Produto("Bateria Rmv Compacta Bumbo 18", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR9D9ymsHNPuUUObiApwgtuZHfF9Tdoy8QQ6b7Gbr_wS257-YSiYghKhf8iwapQlLr18OBZAB-wUlOVL46Xkmv9_yJOVXkpLP1IKshWzkJG-MWZQXXy0X5RsQ&usqp=CAE", 1600, ""),

    new Produto("Surdo Luen Percussion 60x18 Verniz 20155", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRlhYaTTCDLsgTR0nuC34ZiCY_Ji6_R7p_gso9dqL3MDCZC6cIR780roWR8mOMTdjSQOrvuD715CiEh-czjbwkPQMTMnmOCPgrjz4wXHZxkd7o4L0Wjq4xd&usqp=CAE", 450, ""),

    new Produto("Surdo 45x14 Nat 6 Afin Aro Chp Luen 33184", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRDvi4kqkUkfNtI1VpqHnOgrHzSfz_xEuUtamQ4ZoQS1JrA-A3tk_8o0YpcEvd56PbdxTBe7aoe6UFa3LyIJnNBO_jFUXPkXJGh6snuajJs6M34rtNjUkPkVA&usqp=CAE", 260, ""),

    new Produto("Pandeiro Nylon 10,5 - Torelli TP 309 Injetado", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcREN8EiMs5HvklsolKID5_JheLWqM9d94w4HO60y5yWnQPw2Qi_72OOJDzH-udlGZ3Zx3kBJwgqBPdG-KBgRjDdyTKEaK963RSQfTqaRF0tfAeTi_rkBqx81g&usqp=CAE", 80, ""),

    new Produto("Pandeiro 10 Polegadas Pele Leitosa Rmv Pppa15", "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS2bEBAT8OQJFMFtE9SZ-UsZIP-q4UYRVDEoLDk7C7k10FMJHNATByA71GZEBhUlJkvyhsvIjI4aS5bfCnp5VThd3nuNmTHwJzYYnjTZ575QG3ifT_8RoK7&usqp=CAE", 70, ""),

    new Produto("Pandeiro 10 Batuka Pele Leitosa Luen Azul", "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcShFqnHZhhts064dB6zI6VjAG6SzhyVGfyg03ogwkTrb59tkixN6NikwcfmZUcNZAWSqpzZBI7BhnAhbW5aKcixGYKzBHac0aTjfgkZqYCg&usqp=CAE", 60, ""),

    new Produto("Triângulo Tennessee 20 Cm Liverpool TRATN", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQln-yVGK-4TI5NtdJ25dd432eW-cSkeEjz-E2YzvGVM088-MgFmHWuzdI2SlrcQm6itBxKr84VNTVGUQsUGOj0rgOcR8atylCZRhaU4TK3mGkwVMdxlZIb2w&usqp=CAE", 40, ""),
  ]

  showMessage: boolean = false;

  constructor(private carrinhoService: CarrinhoService) {
    this.produtos.forEach((produto, index) => {
      produto.id = `produto-${index + 10000}`;
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