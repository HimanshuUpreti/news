import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ServiceService } from './service.service';
// import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

import { AngularFireModule } from '@angular/fire';
import {  AngularFireDatabaseModule } from '@angular/fire/database';
import {  AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { ChatComponent } from './chat/chat.component';
import { ViralNewsComponent } from './viral-news/viral-news.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    PathNotFoundComponent,
    HomeComponent,
    ChatComponent,
    ViralNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    // AngularMultiSelectModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
