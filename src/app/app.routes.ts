import { Routes } from '@angular/router';

//Aquí se importan los componentes de la aplicación
import { HomeComponent } from './pages/home/home.component';
import { LabsComponent } from './pages/labs/labs.component'

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'labs',
    component: LabsComponent
  }
];
