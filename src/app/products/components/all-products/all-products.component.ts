import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { products } from './../../model/model';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  product: products[] = [];
  allCategory: string[] = [];
  base64: any;
  form!: FormGroup;

  constructor(private _ProductsService: ProductsService, private build: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.build.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category: ['', [Validators.required]]
    })
    this.getProducts();
    this.getAllCategories();
  }

  getProducts() {
    this._ProductsService.getAllProduts().subscribe((res: any) => {
      this.product = res;
    }, (error) => {
      alert(error.message);
    })
  }

  getAllCategories() {
    this._ProductsService.getAllCategories().subscribe((res: any) => {
      this.allCategory = res;
    }, (error) => {
      alert(error.message)
    })
  }

  setSelectedCategory(event: any) {
    this.form.get('category')?.setValue(event.target.value);
  }

  getImagePath(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.form.get('image')?.setValue("this.base64");
    }
  }

  addProduct() {
    const modal = this.form.value;
    this._ProductsService.addProduct(modal).subscribe(res => {
      alert('Product Added Successfully')
    })
  }

  update(item: any) {
    this.base64 = item.image;
    this.form.patchValue({
      title: item.title,
      price: item.price,
      description: item.description,
      image: item.image,
      category: item.category
    })
  }
  
}
