import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { LoginComponent } from './page/login/login.component';
import { AuthGuard } from './guard/auth.guard';

import { CiudadIndexComponent } from './page/ciudad-index/ciudad-index.component';
import { CiudadCreateComponent } from './page/ciudad-create/ciudad-create.component';
import { CiudadUpdateComponent } from './page/ciudad-update/ciudad-update.component';

import { SedeIndexComponent } from './page/sede-index/sede-index.component';
import { SedeCreateComponent } from './page/sede-create/sede-create.component';
import { SedeUpdateComponent } from './page/sede-update/sede-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  
  { path: 'ciudades', component: CiudadIndexComponent, canActivate: [AuthGuard] },
  { path: 'ciudades/create', component: CiudadCreateComponent, canActivate: [AuthGuard] },
  { path: 'ciudades/update/:id', component: CiudadUpdateComponent, canActivate: [AuthGuard] },

  { path: 'sedes', component: SedeIndexComponent, canActivate: [AuthGuard] },
  { path: 'sedes/create', component: SedeCreateComponent, canActivate: [AuthGuard] },
  { path: 'sedes/update/:id', component: SedeUpdateComponent, canActivate: [AuthGuard] },

  { path: 'tutorials', component: TutorialsListComponent, canActivate:[AuthGuard] },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
