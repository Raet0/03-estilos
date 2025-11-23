import { Component, signal } from '@angular/core';

@Component({
  selector: 'progress-bar',
  imports: [],
  templateUrl: './progress-bar.html',
})
export class ProgressBar {
  progreso = signal<number>(0);

  actualizarProgreso(event: Event) {
    const input = event.target as HTMLInputElement;
    const nuevoValor = Number(input.value);
    this.progreso.set(nuevoValor);
  }


}
