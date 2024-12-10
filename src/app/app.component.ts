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

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.checkRoute();
    });
  }

  checkRoute(): void {
    const path = this.router.url; 

    if (path.includes('cordas') || path.includes('percussao') || path.includes('amplificadores') || path.includes('teclas') || path.includes('sopro') || path.includes('acessorios')) {
      this.botaoVoltar = true;
    } else {
      this.botaoVoltar = false;
    }
  }

  voltar(): void {
    this.router.navigate(['/']);
  }

  @HostListener('window:scroll', ['$event']) 
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY;
    const carrinho = document.querySelector('.carrinho') as HTMLElement;
    
    if (scrollPosition > 50) { // Ajuste esse valor conforme necessário
      carrinho.classList.add('aparecer');
    } else {
      carrinho.classList.remove('aparecer');
    }
  }
}