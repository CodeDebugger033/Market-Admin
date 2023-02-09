import { ProductsService } from './../../../products/services/products.service';

import { CartsService } from './../../services/carts.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  carts: any[] = [];
  products: any[] = [];
  total = 0;
  form!: FormGroup;
  details: any
  constructor(private service: CartsService, private build: FormBuilder, private productService: ProductsService) { }

  ngOnInit(): void {
    this.form = this.build.group({
      start: ['', [Validators.required]],
      end: ['', [Validators.required]]
    })
    this.getAllCarts()
  }


  getAllCarts() {
    this.service.getAllCarts().subscribe((res: any) => {
      this.carts = res;

    })
  }

  ApplyFilter() {
    let date = this.form.value
    this.service.getAllCarts(date).subscribe((res: any) => {
      this.carts = res;

    })
  }

  deleteCart(id: number) {
    this.service.deleteCart(id).subscribe((res: any) => {
      this.getAllCarts();
      alert("Cart Deleted Success")
    })
  }

  view(index: number) {
    this.products = [];
    this.details = this.carts[index];
    for (let x in this.details.products) {
      this.productService.getProductById(this.details.products[x].productId).subscribe(res => {
        this.products.push({ item: res, quantity: this.details.products[x].quantity });
      })
    }

  }

}