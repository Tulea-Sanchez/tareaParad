import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareaComponent } from './tarea/tarea.component';
import { HomeComponent } from './home/home.component';
import { DatosComponent } from './datos/datos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'tarea', component: TareaComponent } ,
  { path: 'datos', component: DatosComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
