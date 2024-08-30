import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel support
import { IonicModule } from '@ionic/angular'; // Import IonicModule to use Ionic components

import { ProductListPageRoutingModule } from './product-list-routing.module'; // Routing module for this page
import { ProductListPage } from './product-list.page'; // Importing our ProductListPage component

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // Necessary for using ngModel
    IonicModule, // Import IonicModule for all Ionic components
    ProductListPageRoutingModule
  ],
  declarations: [ProductListPage], // Declaring our ProductListPage
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Angular needs to know we're using custom elements from Ionic
})
export class ProductListPageModule {}
