import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Import IonicModule to use Ionic components

import { AboutPageRoutingModule } from './about-routing.module';
import { AboutPage } from './about.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // Import IonicModule here to recognize Ionic components
    AboutPageRoutingModule
  ],
  declarations: [AboutPage], // Declare the AboutPage component here
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Let Angular know we use Ionic's custom elements
})
export class AboutPageModule {}
