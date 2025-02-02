import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-imc',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-imc.component.html',
  styleUrls: ['./form-imc.component.scss']
})
export class FormImcComponent {
  @Output() imcCalculado = new EventEmitter<string>();

  nombre = '';
  sexo = '';
  peso = 0;
  altura = 0;
  resultado = '';

  calcularIMC() {
    const alturaEnMetros = this.altura / 100;
    const imc = this.peso / (alturaEnMetros * alturaEnMetros);
    const genero = this.sexo === 'masculino' ? 'hombre' : 'mujer';
    let mensaje = '';

    if (imc < 18.5) {
      mensaje = 'Actualmente eres una rama de un árbol, come.';
    } else if (imc >= 18.5 && imc < 24.9) {
      mensaje = 'Eres un Mastodonte, sigue así.';
    } else if (imc >= 25 && imc < 29.9) {
      mensaje = 'Broski deja de comer comida basura y vete a entrenar.';
    } else {
      mensaje = 'Actualmente eres un Pumuki, toma Ozempic.';
    }

    this.resultado = `IMC de ${this.nombre} (${genero}): ${imc.toFixed(2)}. ${mensaje}`;
    this.imcCalculado.emit(this.resultado);
  }

  resetFormulario() {
    this.nombre = '';
    this.sexo = '';
    this.peso = 0;
    this.altura = 0;
    this.resultado = '';
  }
}
