import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './providers/material.module';
import { WeeklyTsService } from './providers/weekly-ts.service';
import { LoginService } from './providers/login.service'
import { NavbarComponent } from './components/navbar/navbar.component';
import { WeeklyTsComponent } from './pages/weekly-ts/weekly-ts.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProjectComponent } from './pages/project/project.component';
import { AddActivityComponent } from './pages/add-activity/add-activity.component';
import {ProjectService} from './pages/project/project.component.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';

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
    FlashMessagesModule
  ],

  providers: [WeeklyTsService,ProjectService,FlashMessagesService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
