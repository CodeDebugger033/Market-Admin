import { products } from './../../model/model';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() data!: products
  @Output() item = new EventEmitter();
  cartButton: boolean = false;
  amount: number = 0
  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.item.emit({ item: this.data, quantity: this.amount })
  }

}
