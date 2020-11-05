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
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canLoad:[UsuarioGuard]
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
