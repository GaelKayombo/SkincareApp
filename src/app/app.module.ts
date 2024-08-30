import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular'; // Got to bring in IonicRouteStrategy to handle routing the Ionic way
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Correct import path


@NgModule({
  declarations: [AppComponent], // Declaring the main app component here
  imports: [
    BrowserModule,
    IonicModule.forRoot(), // Setting up IonicModule for all the cool stuff!
    AppRoutingModule // Make sure routing works properly by importing the AppRoutingModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }], // This is where we tell Angular to use Ionic's route strategy
  bootstrap: [AppComponent], // Bootstrapping our main app component
})
export class AppModule {}
