import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './guards/usuario.guard';
import { LoginPageModule } from './pages/login/login.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
    
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'temas',
    loadChildren: () => import('./pages/temas/temas.module').then( m => m.TemasPageModule)
  },
  {
    path: 'hermanos',
    loadChildren: () => import('./pages/hermanos/hermanos.module').then( m => m.HermanosPageModule)
  },
  {
    path: 'cumples',
    loadChildren: () => import('./pages/cumples/cumples.module').then( m => m.CumplesPageModule)
  },
  {
    path: 'zoom',
    loadChildren: () => import('./pages/zoom/zoom.module').then( m => m.ZoomPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./pages/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'reuniones',
    loadChildren: () => import('./pages/reuniones/reuniones.module').then( m => m.ReunionesPageModule)
  },
  {
    path: 'caja',
    loadChildren: () => import('./pages/caja/caja.module').then( m => m.CajaPageModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {
    path: 'tema/:titulo/:idyoutube',
    loadChildren: () => import('./pages/tema/tema.module').then( m => m.TemaPageModule)
  },
  {
    path: 'evento',
    loadChildren: () => import('./pages/evento/evento.module').then( m => m.EventoPageModule)
  },
  {
    path: 'emanuel',
    loadChildren: () => import('./pages/emanuel/emanuel.module').then( m => m.EmanuelPageModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('./pages/servicios/servicios.module').then( m => m.ServiciosPageModule)
  },
  {
    path: 'organizacion',
    loadChildren: () => import('./pages/organizacion/organizacion.module').then( m => m.OrganizacionPageModule)
  },
  {
    path: 'historia',
    loadChildren: () => import('./pages/historia/historia.module').then( m => m.HistoriaPageModule)
  },
  {
    path: 'nuestrosservicios',
    loadChildren: () => import('./pages/nuestrosservicios/nuestrosservicios.module').then( m => m.NuestrosserviciosPageModule)
  },
  {
    path: 'hacemos',
    loadChildren: () => import('./pages/hacemos/hacemos.module').then( m => m.HacemosPageModule)
  },
  {
    path: 'comunidad',
    loadChildren: () => import('./pages/comunidad/comunidad.module').then( m => m.ComunidadPageModule)
  },
  {
    path: 'formacion',
    loadChildren: () => import('./pages/formacion/formacion.module').then( m => m.FormacionPageModule)
  },
  {
    path: 'espiritualidad',
    loadChildren: () => import('./pages/espiritualidad/espiritualidad.module').then( m => m.EspiritualidadPageModule)
  },
  {
    path: 'recursos',
    loadChildren: () => import('./pages/recursos/recursos.module').then( m => m.RecursosPageModule)
  },
  {
    path: 'donaciones',
    loadChildren: () => import('./pages/donaciones/donaciones.module').then( m => m.DonacionesPageModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./pages/inbox/inbox.module').then( m => m.InboxPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
