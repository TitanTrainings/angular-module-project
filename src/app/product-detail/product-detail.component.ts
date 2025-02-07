import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail', 
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
 
  id: number = 0;
  public product: Product = new Product();

  constructor(private route: ActivatedRoute,private _productService: ProductService){    
  }

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
        
    this._productService.getProductById(this.id).subscribe( data => {
      this.product = data;
    });

  }

}
