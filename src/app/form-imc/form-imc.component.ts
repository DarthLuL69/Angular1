import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface IMCMessage {
  min: number;
  max: number;
  message: string;
}

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
  editandoPeso = false;
  editandoAltura = false;

  private readonly imcMessages: IMCMessage[] = [
    { min: 0, max: 18.5, message: 'Actualmente eres una rama de un árbol, come.' },
    { min: 18.5, max: 24.9, message: 'Eres un Mastodonte, sigue así.' },
    { min: 25, max: 29.9, message: 'Broski deja de comer comida basura y vete a entrenar.' },
    { min: 30, max: Infinity, message: 'Actualmente eres un Pumuki, toma Ozempic.' }
  ];

  calcularIMC(): void {
    const alturaEnMetros = this.altura / 100;
    const imc = this.peso / (alturaEnMetros * alturaEnMetros);
    const genero = this.sexo === 'masculino' ? 'hombre' : 'mujer';
    const mensaje = this.getMensajeIMC(imc);

    this.resultado = `IMC de ${this.nombre} (${genero}): ${imc.toFixed(2)}. ${mensaje}`;
    this.imcCalculado.emit(this.resultado);
  }

  private getMensajeIMC(imc: number): string {
    const mensaje = this.imcMessages.find(m => imc >= m.min && imc < m.max);
    return mensaje ? mensaje.message : this.imcMessages[0].message;
  }

  resetFormulario(): void {
    Object.assign(this, {
      nombre: '',
      sexo: '',
      peso: 0,
      altura: 0,
      resultado: '',
      editandoPeso: false,
      editandoAltura: false
    });
  }
}
