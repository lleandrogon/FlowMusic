import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NavComponent } from "../nav/nav.component";
import { HomeComponent } from "../home/home.component";
import { ObservacaoComponent } from "../observacao/observacao.component";
import { EmAltaComponent } from "../em-alta/em-alta.component";
import { VioloesComponent } from "../violoes/violoes.component";
import { GuitarrasComponent } from "../guitarras/guitarras.component";
import { BaixosComponent } from "../baixos/baixos.component";
import { PercussaoComponent } from "../percussao/percussao.component";
import { TeclasComponent } from "../teclas/teclas.component";
import { SoproComponent } from "../sopro/sopro.component";
import { AmplificadoresComponent } from "../amplificadores/amplificadores.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, NavComponent, HomeComponent, ObservacaoComponent, EmAltaComponent, VioloesComponent, GuitarrasComponent, BaixosComponent, PercussaoComponent, TeclasComponent, SoproComponent, AmplificadoresComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
