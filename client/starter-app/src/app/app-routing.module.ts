import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './pages/project/project.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { WeeklyTsComponent } from './pages/weekly-ts/weekly-ts.component';
import { FormPageComponent } from './pages/form-page/form-page.component';

const routes: Routes = [
  {
    path     : '',
    component: LoginPageComponent
  },
  {
    path: 'weekly-ts',
    component: WeeklyTsComponent
  },
  {
     path     : 'project',
     component: ProjectComponent
   }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 })
 export class AppRoutingModule { }
