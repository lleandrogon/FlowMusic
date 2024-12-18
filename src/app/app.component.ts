import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  botaoVoltar = false;
  mostrarCarrinho = true;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.checkRoute();
    });
  }

  checkRoute(): void {
    const path = this.router.url; 

    if (path.includes('cordas') || path.includes('percussao') || path.includes('amplificadores') || path.includes('teclas') || path.includes('sopro') || path.includes('acessorios') || path.includes('carrinho')) {
      this.botaoVoltar = true;
    } else {
      this.botaoVoltar = false;
    }

    if (path.includes('compra-efetuada')) {
      this.mostrarCarrinho = false;
    } else {
      this.mostrarCarrinho = true;
    }
  }

  voltar(): void {
    this.router.navigate(['/']);
  }

  @HostListener('window:scroll', ['$event']) 
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY;
    const carrinho = document.querySelector('.carrinho') as HTMLElement;
    
    if (this.mostrarCarrinho) {
      if (scrollPosition > 50) {
        carrinho.classList.add('aparecer');
      } else {
        carrinho.classList.remove('aparecer');
      }
    } else {
      carrinho?.classList.remove('aparecer');
    }
  }
}