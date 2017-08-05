import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './providers/material.module';
import { WeeklyTsService } from './providers/weekly-ts.service'
import { NavbarComponent } from './components/navbar/navbar.component';
import { WeeklyTsComponent } from './pages/weekly-ts/weekly-ts.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProjectComponent } from './pages/project/project.component';
import { AddActivityComponent } from './pages/add-activity/add-activity.component';


@NgModule({
  declarations: [
    AppComponent,
    WeeklyTsComponent,    
    NavbarComponent,
    LoginPageComponent,
    ProjectComponent,
    AddActivityComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,

    MaterialModule,
    AppRoutingModule,
   
  ],
  providers: [WeeklyTsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
