import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './page/login/login.component';
import { CiudadUpdateComponent } from './page/ciudad-update/ciudad-update.component';
import { CiudadIndexComponent } from './page/ciudad-index/ciudad-index.component';
import { CiudadCreateComponent } from './page/ciudad-create/ciudad-create.component';
import { SedeCreateComponent } from './page/sede-create/sede-create.component';
import { SedeUpdateComponent } from './page/sede-update/sede-update.component';
import { SedeIndexComponent } from './page/sede-index/sede-index.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    LoginComponent,
    CiudadUpdateComponent,
    CiudadIndexComponent,
    CiudadCreateComponent,
    SedeCreateComponent,
    SedeUpdateComponent,
    SedeIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
