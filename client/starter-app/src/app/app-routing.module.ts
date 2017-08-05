import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './pages/project/project.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { AddActivityComponent } from './pages/add-activity/add-activity.component';

import { WeeklyTsComponent } from './pages/weekly-ts/weekly-ts.component';


const routes: Routes = [
  {
    path     : '',
    component: LoginPageComponent
  },
  {
    path: 'weekly-ts/:id',
    component: WeeklyTsComponent
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
