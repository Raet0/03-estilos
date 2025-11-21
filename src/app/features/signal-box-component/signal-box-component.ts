import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-box-component',
  imports: [],
  templateUrl: './signal-box-component.html',
  styleUrl: './signal-box-component.css',
})
export class SignalBoxComponent {
  valor = signal<number>(0);

  cambiarValor(event: Event) {
    const input = event.target as HTMLInputElement;
    const nuevoValor = Number(input.value);
    this.valor.set(nuevoValor);
  }
}
