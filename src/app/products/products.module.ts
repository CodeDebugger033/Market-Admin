import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AllProductsComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
