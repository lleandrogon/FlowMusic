import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NavComponent } from "../nav/nav.component";
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, NavComponent, HomeComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
