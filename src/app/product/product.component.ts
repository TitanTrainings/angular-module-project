import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(private _productService: ProductService,
    private router: Router) { }

  products: Product[] = [];

  ngOnInit() {
    this._productService.getProducts().subscribe((data) => {
      this.products = data;
    }, (error) => {
      console.log('There is an error.');
      console.log(error);
    })
  }

  private getProducts(){
    this._productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  ProductDetails(id?: number){
    this.router.navigate(['/productDetail', id]);
  }

  updateProduct(id?: number){
    this.router.navigate(['/edit-product', id]);
  }

  deleteProduct(id?: number){
    if(confirm("Are you sure to delete ?"))
    this._productService.deleteProduct(id).subscribe( data => {
      alert("The product is deleted successfully !")
      console.log(data);
      this.getProducts();
    })
  }

}
