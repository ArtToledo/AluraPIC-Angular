import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { HomeModule } from './home/home.module';
import { AuthGuard } from './core/auth/auth.guard';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  { 
    path: 'home', loadChildren: './home/home.module#HomeModule'
  }, 
  { 
    path: 'user/:userName', 
    component: PhotoListComponent, 
    resolve: { photos: PhotoListResolver } 
  },
  { 
    path: 'p/add', 
    component: PhotoFormComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'p/:photoId', 
    component: PhotoDetailsComponent,
  },
  { 
    path: 'not-found', 
    component: NotFoundComponent 
  },
  { 
    path: '**', 
    redirectTo: 'not-found' 
  }
];


//Caso queira que as rotas sejam compativeis independente da configuração do servidor
//ativar o useHas como true para colocar o # nas rotas
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}