import { Component } from '@angular/core';
import { Produto } from '../../models/produto';
import { ProductCardComponent } from "../product-card/product-card.component";
import { CommonModule } from '@angular/common';

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

    new Produto("Bateria Eletrônica Orange X-Pro Kit Com Banco e Fone", "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSF-bISxpWFUxk_2QHiqyHGxwg2Z6ZRTjedYO5QDLemhNJHofXssa-yjZUxIMReSPhgSl0BgNNph7G3o3mKq0e7uNQbzSWDjlVfvQV_e5c&usqp=CAE", 3000, ""),

    new Produto("Bateria Mxt M-b120 Bumbo 20 Completa", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTONP7Xpg_HJw9536-BqHN1OK-DPNUK0L4w5YfDg1eoANeo2SqUB7nQtBU_IuNIBT4q6rsyJO9MJufM01thWCroreIeerrHE0S7YMQoI7PFf8RqpbTcpq8h&usqp=CAE", 2600, ""),

    new Produto("Bateria Eletrônica Waldman Virtual Mesh 9 VM-9", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTH5shTYn4OBSn0dK3Ujx8mO3va_u3H7nGJePuErTPvC30DX3v9u8nM_sVXoe0Jdf2fI8X30FqpuXNDpbXVdbCm0cR3XVFYZzahorAwxO8&usqp=CAE", 1800, ""),

    new Produto("Surdo Luen Percussion 60x18 Verniz 20155", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRlhYaTTCDLsgTR0nuC34ZiCY_Ji6_R7p_gso9dqL3MDCZC6cIR780roWR8mOMTdjSQOrvuD715CiEh-czjbwkPQMTMnmOCPgrjz4wXHZxkd7o4L0Wjq4xd&usqp=CAE", 450, ""),

    new Produto("Surdo 45x14 Inox Nat 6 Afin Aro Chp Preto Luen 33184", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRDvi4kqkUkfNtI1VpqHnOgrHzSfz_xEuUtamQ4ZoQS1JrA-A3tk_8o0YpcEvd56PbdxTBe7aoe6UFa3LyIJnNBO_jFUXPkXJGh6snuajJs6M34rtNjUkPkVA&usqp=CAE", 260, ""),

    new Produto("Pandeiro Nylon 10,5 - Torelli TP 309 Injetado", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcREN8EiMs5HvklsolKID5_JheLWqM9d94w4HO60y5yWnQPw2Qi_72OOJDzH-udlGZ3Zx3kBJwgqBPdG-KBgRjDdyTKEaK963RSQfTqaRF0tfAeTi_rkBqx81g&usqp=CAE", 80, ""),

    new Produto("Pandeiro 10 Polegadas Com Pele Leitosa Rmv Pppa00015", "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS2bEBAT8OQJFMFtE9SZ-UsZIP-q4UYRVDEoLDk7C7k10FMJHNATByA71GZEBhUlJkvyhsvIjI4aS5bfCnp5VThd3nuNmTHwJzYYnjTZ575QG3ifT_8RoK7&usqp=CAE", 70, ""),

    new Produto("Pandeiro 10 Batuka Pele Leitosa Luen Azul", "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcShFqnHZhhts064dB6zI6VjAG6SzhyVGfyg03ogwkTrb59tkixN6NikwcfmZUcNZAWSqpzZBI7BhnAhbW5aKcixGYKzBHac0aTjfgkZqYCg&usqp=CAE", 60, ""),
  ]
}