import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MainComponent } from "./main/main.component";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ProductService } from "./service/product.service";
import { ProductComponent } from "./product/product.component";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [MainComponent,
        ProductComponent,
        EditProductComponent,
        AddProductComponent],
    imports: [BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes)],
    providers: [HttpClient, ProductService],
    bootstrap: [MainComponent]
})

export class AppModule { }