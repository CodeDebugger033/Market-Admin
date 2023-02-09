import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "../../../environment/enviroment"
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProduts(): Observable<any> {
    return this.http.get(environment.baseApi + 'products');
  }

  getAllCategories(): Observable<any> {
    return this.http.get(environment.baseApi + "products/categories")
  }

  getProductByCategory(cat: string): Observable<any> {
    return this.http.get(environment.baseApi + `products/category/${cat}`)
  }

  getProductById(id: string): Observable<any> {
    return this.http.get(environment.baseApi + `products/${id}`)
  }

  addProduct(modal: any) {
    return this.http.post(environment.baseApi + 'products', modal)
  }

}
