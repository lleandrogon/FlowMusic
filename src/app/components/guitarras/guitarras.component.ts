import { Component } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { Produto } from '../../models/produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guitarras',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './guitarras.component.html',
  styleUrl: './guitarras.component.css'
})
export class GuitarrasComponent {
  produtos: Produto[] = [
    new Produto('Guitarra Gibson Les Paul - Slash - Appetite Burst', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQCquEgc8zZelRna-ec6mYaZEGiF7cu0psK9HMYD-txjuOaQvojM12qHXCJX_YWvP7-YMBmPOQhURqfalIPvTczEVhT9w4L4bB1HdnLhEg&usqp=CAE', 35000, ''),

    new Produto('Guitarra Ibañez JEM 7v - Steve Vai - White Pearl', 'https://barramusic.com.br/wp-content/uploads/2023/05/ibanez_jemjr_wh.jpg', 25000, ''),

    new Produto('Guitarra Ibanez Rg Rgrt421 Weathered Black', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTz0XuQrqvpEvux9VxG6c-yBg0CLpga8G4MWPB4qkG3xDZw9e8JMsEH-uWx5gdyR1sqPrtWcJv0maWY0v2GozXqAT4MHIro0xNM-kFwxFYt&usqp=CAE', 5800, ''),

    new Produto('Guitarra Jackson JS Series King V JS32T Ferrari Red', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQC-k_v0KMxXJAq0XHeANIcethxmODYOExezdDRv00VN68C93XXzHLHw_Rn-lblJUA8Rh2sxRt_zRjuRE0hr0yZXhXJ4KEPKKuusNiqeTPBRRvzaRrzTrq_dw&usqp=CAE', 5200, ''),

    new Produto ('Guitarra Tagima Les Paul Mirach FL TRD', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRoCgft_-KKmq2gzi-fUOzmmaWjYNlk1Znnd9nQYQlC8E5zZFhqaWR2gRbGZflzKIVXjUucHColUOypSYP5R_lFxZXlPZ46cq4OfdDqoMY7LQz38qr8q9Vp&usqp=CAE', 3400, ''),

    new Produto('Guitarra Squier Affinity Series Thinline Sunburst', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS04_Qud2l9ac9BNn-jgee7f0WqGXT5X2Pv-ko6CXYReVl6q-79UiMWnxYXN_db90LrSzhNmHEnQZEWhqyIMhwE4mS9yYlfRkhBNG3Uu0f1&usqp=CAE', 3300, ''),

    new Produto('Guitarra Tagima Stella Mahogany - NTS', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQNo85XlyugoePEJM7uVxLZgX4ZsyDQbMlCJL1Txrko4LDrC8z6H91RuSMl3rxaTfPJzbfZukj91n4nBSCjiL1W-YIC7-4jzYA7gsnp0KozEDBtJ-WXTistsA&usqp=CAE', 2200, ''),

    new Produto('Guitarra Sg Michael Hammer GM850N Bk', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSYHRWFrACM0utXKkmQy3YJnetWYVfoSYPTSDs3aZfebDnZiCBnCPqaFqY8cAmVoEMnYKdqr_cSgZLKg4m6_QL0PIeeV7ovf4RPECJ9qgAQJx_n79xNvmuI&usqp=CAE', 2100, ''),

    new Produto('Guitarra Waldman SuperStrato WST 180 WS', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTp1ea86ziMuBxQgTzcZ-jZU2cRLByRJNY2yeE6aTfQZ9mU8o7OESvvIAx-yG1zSjdX5FldhUIWcIbg8RlKDyRVpsQSFyvaTBzhWpd95jCwvm5hRWUvxLA9hQ&usqp=CAE', 1600, ''),

    new Produto('Guitarra Tagima Jazz Master Tw-60 Mdsvs E/BK', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSvnT2-p8K-kwCXvgUQOUHKj1NXtHWSwVh-2XxFKccquiYS__FxLdvmGen1bzJlNlq8FQZYvAc_6wr2BNW-CQwmoxTw5yhMMk8fZJrhZ48j-Zbixm0NBihN&usqp=CAE', 1200, ''),

    new Produto('Guitarra Tagima TG-530 Sunburst Woodstock', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ2ghE3h1clmJ8D3qywi_5yXFuOs-i9ehaRBjG8H1SmGT_4ZZ4qtBSPANpOC1lzdd_qB3hkfh4CHNX8ZHCfH_3uhEbezFtTA4_CC-KbIlU&usqp=CAE', 900, ''),

    new Produto('Guitarra Memphis MG-30 Owh Olympic White', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQfD8GC7n-Wus1pluwmpBIiAPmeuYo61i0-mEXhPji42SgQsJGOiKaFCOU6h94IsNbsyflp_MTWoWLWeWz0UmIML8CuwwE54ylCQsESBP0hryZebfDqW5micw&usqp=CAE', 800, ''),

    new Produto('Guitarra Telecaster Gte-100 Waldman - Gte-100 Bk', 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTLImC6uEX-UcuejM6P9AA6yqaq8pYnAJu6mZdjcqGaQugwshZI42eetB5hxvcN0MJUKT0iG2me-EtzgWLsOEXM7p1FjXxt70JaHVStUbW09-Mc91Oi2egDyA&usqp=CAE', 750, ''),

    new Produto('	Guitarra Giannini G-101 Standard Stratocaster 1H2S', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQcOae4yQAJm-MJrhNUimv9bgnVI8Wm_5QeyKuHNJbXOmEgvwkOXW36kz4r4AgWkYusQZeg_ttRQs45WDd4EdPrTD75ybNb8iJr4cTCzt5gH1c2HQTFfaJv5Q&usqp=CAE', 700, ''),

    new Produto('Guitarra Tonante Valentine’s Preta Corpo Em Alder', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSaza0MklS1axM0OxYXw7_wyg6Wfc3DLEq1mkUtXJsNlMmYqSPTJ9WEhATMZW0Kn2J-BbwZsqkkTFUkb4IIL-1Ggl1h6UandfjVTvY4Y5OL2H3aH4ptMEVVDw&usqp=CAE', 500, ''),
  ]
}
