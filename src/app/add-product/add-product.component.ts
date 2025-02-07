import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',  
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  _product: Product = new Product();
  constructor(private _productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveProduct(){
    this._productService.addProduct(this._product).subscribe( data =>{
      console.log(data);
      alert("The product is added successfully !")
      this.goToProductList();
    },
    error => console.log(error));
  }

  goToProductList(){
    this.router.navigate(['/product']);
  }
  
  onSubmit(){
    console.log(this._product);
    this.saveProduct();
  }

}
