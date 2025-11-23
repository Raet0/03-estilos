import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignalBoxComponent } from '../signal-box-component/signal-box-component';
import { ProgressBar } from "../progress-bar/progress-bar";
@Component({
  selector: 'app-estilos-page',
  imports: [SignalBoxComponent, ProgressBar],
  standalone: true,
  templateUrl: './estilos-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstilosPage {}