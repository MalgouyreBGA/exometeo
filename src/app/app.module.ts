import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// added module meteo à la main

//import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'

import {MeteoService} from './composant/meteo.service';
import { FormsModule } from '@angular/forms';
//

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoComponent } from './composant/meteo/meteo.component';

@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* added */
    HttpClientModule, FormsModule
  ],
  providers: [/*add*/MeteoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
