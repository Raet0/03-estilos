import { Component, inject, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { SimpsonsService } from '../../../simpsons/services/simpsons-service';
import { PaginationService } from '../../../simpsons/services/pagination-server';
@Component({
  selector: 'app-simpsons-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './SimpsonsPage-Component.html',

})

export class SimpsonsPageComponent {
  private simpsonsService = inject(SimpsonsService);
  paginationService = inject(PaginationService);

  charactersPerPage = signal(10);

  totalPages = signal(0);



  simpsonsResource = toSignal(
    this.simpsonsService.getCharacters(this.paginationService.currentPage()).pipe(
      map(res => res)
    ),
    { initialValue: null }
  );
}