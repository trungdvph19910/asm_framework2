import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/component/interface/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  product: IProduct = {
    name: "",
    price: 0,
    img: ""
  }
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.productService.getProductsbyId(id).subscribe(product => {
        this.product = product
      }, error => console.log(error.message))
    })
  }
  onHandleSubmit() {
    this.productService.editProduct(this.product).subscribe(product => {
      console.log(product)
    })
  }
}
