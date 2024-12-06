import { Component } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { CommonModule } from '@angular/common';
import { Produto } from '../../models/produto';

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

    new Produto("Teclado Casio Casiotone CT-S200 Preto", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSgVlD-uQD9GhT25b27C9buhaBWSzxINiDsL4SD0Xp7lwLtYbLJdgj82Ad5_U26jzyAATdXfRMS76FyWpFkQB1oNuuAuNNB0BfT5edCk7Y&usqp=CAE", 740, ""),
  ]
}
