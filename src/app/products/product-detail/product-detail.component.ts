import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  constructor(private router: ActivatedRoute) {
    const id = this.router.snapshot.paramMap.get('id');
    console.log('===== product details id --- ', id);
  }
}
