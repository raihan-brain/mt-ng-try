import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { RouterModule } from '@angular/router';
import { heroResolver } from './product-api.service';
import { ProductEditInfoComponent } from './product-edit-info/product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit-tags/product-edit-tags.component';
import { productGuard } from './product.guard';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductEditInfoComponent,
    ProductEditTagsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'products',
        children: [
          {
            path: '',
            component: ProductListComponent,
          },
          {
            path: ':id',
            component: ProductDetailComponent,
            resolve: { hero: heroResolver },
            canActivate: [productGuard],
          },
          {
            path: ':id/edit',
            component: ProductEditComponent,
            children: [
              {
                path: '',
                redirectTo: 'info',
                pathMatch: 'full',
              },
              {
                path: 'info',
                component: ProductEditInfoComponent,
              },
              {
                path: 'tags',
                component: ProductEditTagsComponent,
              },
            ],
          },
        ],
      },
    ]),
  ],
})
export class ProductsModule {}
