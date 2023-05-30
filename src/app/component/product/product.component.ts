import { Component } from '@angular/core';
import { IProduct } from '../interface/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products: IProduct[] = []
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    }, error => console.log(error))
  }
  removeItem(id: any) {
    this.productService.deleteProduct(id).subscribe(() => {
      console.log("Ban da xoa thanh cong")
      this.products = this.products.filter(item => item.id != id)
    })
  }
}
