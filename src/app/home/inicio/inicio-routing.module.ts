import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/inicio',
    pathMatch: 'full'
  },
  {
    path: '',
    component: InicioPage,
    children: [
      {
        path: 'paquetes',
        loadChildren: () => import ('../paquetes/paquetes.module').then( m=> m.PaquetesPageModule)
      },
      {
        path: 'transporte',
        loadChildren: () => import ('../transporte/transporte.module').then( m=> m.TransportePageModule)
      },
      {
        path: 'ofertas',
        loadChildren: () => import ('../ofertas/ofertas.module').then( m=> m.OfertasPageModule)
      },
      {
        path: 'guia',
        loadChildren: () => import ('../guia/guia.module').then( m=> m.GuiaPageModule)
      },
      {
        path: 'experiencia',
        loadChildren: () => import ('../experiencia/experiencia.module').then( m=> m.ExperienciaPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
