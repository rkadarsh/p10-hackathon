import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './pages/project/project.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {
    path     : '',
    component: LoginPageComponent
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
