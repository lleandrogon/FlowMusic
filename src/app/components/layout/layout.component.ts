import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NavComponent } from "../nav/nav.component";
import { HomeComponent } from "../home/home.component";
import { ObservacaoComponent } from "../observacao/observacao.component";
import { EmAltaComponent } from "../em-alta/em-alta.component";
import { VioloesComponent } from "../violoes/violoes.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, NavComponent, HomeComponent, ObservacaoComponent, EmAltaComponent, VioloesComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
