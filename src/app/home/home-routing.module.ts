import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'paquetes',
    loadChildren: () => import('./paquetes/paquetes.module').then( m => m.PaquetesPageModule)
  },
  {
    path: 'transporte',
    loadChildren: () => import('./transporte/transporte.module').then( m => m.TransportePageModule)
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./ofertas/ofertas.module').then( m => m.OfertasPageModule)
  },
  {
    path: 'guia',
    loadChildren: () => import('./guia/guia.module').then( m => m.GuiaPageModule)
  },
  {
    path: 'experiencia',
    loadChildren: () => import('./experiencia/experiencia.module').then( m => m.ExperienciaPageModule)
  },
  {
    path: 'edit-perfil',
    loadChildren: () => import('./edit-perfil/edit-perfil.module').then( m => m.EditPerfilPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
