import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(public menuService: MenuService) { }

  menuVisivel: boolean = false;

  ngOnInit(): void {
    this.menuService.menuVisivel$.subscribe(visivel => {
      this.menuVisivel = visivel;
    });
  }
}
