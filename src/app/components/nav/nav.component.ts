import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
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