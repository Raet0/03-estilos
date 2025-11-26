import { Component, effect, inject, signal } from '@angular/core';
import { SimpsonsService } from '../simpsons/services/simpsons-service';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { PaginationService } from '../simpsons/services/pagination-server';
import { Breadcrumbs } from "../daisyui-page/components/breadcrumbs/breadcrumbs";
import { BackToTop } from "../daisyui-page/components/back-to-top/back-to-top";
import { Pagination } from "../daisyui-page/components/pagination/pagination";
import { HeroSimpsons } from "../simpsons/components/hero-simpsons/hero-simpsons";

@Component({
  selector: 'app-simpsons-page',
  imports: [RouterModule, Breadcrumbs, BackToTop, Pagination, HeroSimpsons],
  templateUrl: './simpsons-page.html',
  styleUrl: './simpsons-page.css',
})
export class SimpsonsPage {
private simpsonsService = inject(SimpsonsService);
  paginationService = inject(PaginationService);

  charactersPerPage = signal(20);

  // Signal que mantiene el número total de páginas
  totalPages = signal(0);

  constructor() {
    // Effect que actualiza el número de páginas cuando hay datos válidos
    effect(() => {
      if (this.simpsonsResource.hasValue()) {
        this.totalPages.set(this.simpsonsResource.value().pages);
      }
    });
  }

  simpsonsResource = rxResource({
    params: () => ({
      page: this.paginationService.currentPage() - 1,
      limit: this.charactersPerPage(),
    }),
    stream: ({ params }) => {
      return this.simpsonsService.getCharactersOptions({
        offset: params.page,
        limit: params.limit,
      });
    },
  });
}
