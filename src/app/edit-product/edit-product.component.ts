import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',  
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit{

  prodid: number = 0;

  product: Product = new Product();
  constructor(private _productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.prodid = this.route.snapshot.params['id'];

    this._productService.getProductById(this.prodid).subscribe(data => {
      this.product = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this._productService.editProduct(this.prodid, this.product).subscribe( data =>{
      alert("The product is update successfully !")
      this.goToProductList();
    }
    , error => console.log(error));
  }

  goToProductList(){
    this.router.navigate(['/product']);
  }

}
