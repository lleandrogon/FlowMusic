import { Component } from '@angular/core';
import { GuitarrasComponent } from "../guitarras/guitarras.component";
import { VioloesComponent } from "../violoes/violoes.component";
import { BaixosComponent } from "../baixos/baixos.component";

@Component({
  selector: 'app-cordas',
  standalone: true,
  imports: [GuitarrasComponent, VioloesComponent, BaixosComponent],
  templateUrl: './cordas.component.html',
  styleUrl: './cordas.component.css'
})
export class CordasComponent {

}
