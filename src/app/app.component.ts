import { Component } from '@angular/core';
import { FormImcComponent } from './form-imc/form-imc.component';
import { HistoryComponent } from './history/history.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormImcComponent, HistoryComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular1';
  historial: string[] = [];

  agregarAlHistorial(imc: string) {
    this.historial.push(imc);
  }
}
