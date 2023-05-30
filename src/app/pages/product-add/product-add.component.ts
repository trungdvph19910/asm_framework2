import { Component } from '@angular/core';
import { IProduct } from 'src/app/component/interface/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  product: IProduct = {
    name: "",
    price: 0,
    img: ""
  }
  constructor(private productService: ProductService) {

  }
  onHandleSubmit() {
    this.productService.addProduct(this.product).subscribe(product => {
      console.log(this.product)
    })
  }
}
