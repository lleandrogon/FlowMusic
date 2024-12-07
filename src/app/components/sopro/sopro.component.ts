import { Component } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Produto } from '../../models/produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sopro',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './sopro.component.html',
  styleUrl: './sopro.component.css'
})
export class SoproComponent {
  produtos: Produto[] = [
    new Produto("Saxofone Alto Eb Brass E Flat Sax 802 Chave Woodwind", "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQRfHpNqK6KIqRU2HwUUA4fhwKmTcMdK8frH-XJFg4eGHaKDvcej6DNhuy9YjcC7AdBV0jH2fTNTADweJ1JXpxYCFssKiQ2f4UmdxW7ZwyY1xGK6Mb0inqrJA&usqp=CAE", 1600, ""),

    new Produto("Clarinete Bb Ycl 255 - Yamaha", "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTpWXG5vxEBgw5OYUb43_iiszoyYIHwB0kkXVZm2jlS_o1139WeOJTErPMPIkCEZd0HEy-zBF8Ii0qi0B7OfRdLAuepbb24jrnzdqHeA9Ehp0mNZD4ma2G-tg&usqp=CAE", 900, ""),
    
    new Produto("Rowtter bb clarinete laca ouro 17 chaves", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRlm4K-fo5A0Z9yMfoA5Y-tzwPTcawjIZZjfQgUSdKX-9Vz2c-dfwXpDMSfuABZNBMXU6WXcvrtVVa9ftUFPXA-q5MT1JBoSvPK0ugxNszL2A4LDxReBGGVYA&usqp=CAE", 340, ""),

    new Produto("Flauta Doce Yamaha Soprano Germanica Yrs23", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRmoJYcv0i5YPLqvX8bw8t3bcpqpyvZqg9-d2gIEpyrJzqVAC2Jsoyi-rf-Nzb9XXKrkyzCRiG2b5aD60JFJGzUYqLKBFGkmPdkmq7ctxIAtEJWR4impoYs&usqp=CAE", 40, ""),

    new Produto	("Flauta Barroca Abs Bege Myth", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTflZSDMcQkM5ZY3C6Udh6EUQtDzyk0wQRIUBR3MnKUczNBX9kPq_c_QfObRq1m7VHW7JS2Knl8wELLdcKUQ1EKudd7mWTpL0IpK0e7qNWkjAheYlj2uk7W&usqp=CAE", 30, ""),
  ]
}
