import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  dadosForm = new FormGroup({
    nome: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    sobrenome: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    telefone: new FormControl(null, [Validators.required, Validators.min(10), Validators.max(11)]),
    endereco: new FormControl(null,[Validators.required, Validators.minLength(5)]),
    estado: new FormControl(null, [Validators.required]),
    cidade: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    bairro: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    cep: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(9)]),
    complemento: new FormControl(null),
    metodo: new FormControl(null, [Validators.required]),
    parcelas: new FormControl(null, [Validators.required])
  });

  limparFormulario() {
    this.dadosForm.reset();
  }
}