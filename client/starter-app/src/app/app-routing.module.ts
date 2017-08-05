import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './pages/project/project.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AddActivityComponent } from './pages/add-activity/add-activity.component';

const routes: Routes = [
  {
    path     : '',
    component: LoginPageComponent
  },
  {
     path     : 'project',
     component: ProjectComponent
   },
     {
     path     : 'addActivity',
     component: AddActivityComponent
   }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 })
 export class AppRoutingModule { }
