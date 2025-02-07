import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private _httpClient: HttpClient) { }


    getProducts(): Observable<Product[]> {

        return this._httpClient.get<Product[]>('http://localhost:5167/api/Product');
    }

    getProductById(id?: number): Observable<Product> {

        return this._httpClient.get<Product>('http://localhost:5167/api/Product/' + id);
    }

    addProduct(product: Product): Observable<Product> {

        return this._httpClient.post<Product>('http://localhost:5167/api/Product/', product);
    }

    editProduct(id: number, product: Product): Observable<Product> {
        alert();
        return this._httpClient.put<Product>('http://localhost:5167/api/Product/' + id, product);
    }

    deleteProduct(id?: number): Observable<any> {

        return this._httpClient.delete<any>('http://localhost:5167/api/Product/' + id);
    }
}