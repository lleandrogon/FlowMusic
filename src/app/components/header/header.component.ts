import { Component } from '@angular/core';
import { ImagensService } from '../../services/imagens.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public imagemService: ImagensService, public menuService: MenuService) {}

  toggleMenu() {
    console.log("Botão clicacdo");
    this.menuService.toggleMenu();
  }
}
