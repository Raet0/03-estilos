import { Routes } from '@angular/router';
import { EstilosPage } from './features/estilos-page/estilos-page';
import { DaisyuiPage } from './features/daisyui-page/daisyui-page';
import { SimpsonsPage } from './features/simpsons-page/simpsons-page';
import { SimpsonDetailPageComponent } from './features/simpson-detail-page/simpson-detail-page';

export const routes: Routes = [
  // {
  // path:"",
  // component: EstilosPage
  // }, 
  {
    path:"",
    component: DaisyuiPage
  },
  {
    path:"estilos",
    component: EstilosPage
  },
  {
    path:"simpsons-page",
    component: SimpsonsPage
  },
  {
    path:"simpsons-page/:id",
    component: SimpsonDetailPageComponent
  },
];
