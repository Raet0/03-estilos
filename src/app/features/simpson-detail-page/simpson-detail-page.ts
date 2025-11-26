import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs';
import { SimpsonsService } from '../simpsons/services/simpsons-service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-simpson-detail-page',
  imports: [],
  templateUrl: './simpson-detail-page.html',
  styleUrl: './simpson-detail-page.css',
})
export class SimpsonDetailPageComponent {
  private route = inject(ActivatedRoute);
  private service = inject(SimpsonsService);

  personaje = toSignal(
    this.route.paramMap.pipe(
      map((params) => +params.get('id')!),
      switchMap((id) => this.service.getCharacterById(id))
    ),
    { initialValue: null }
  );
}