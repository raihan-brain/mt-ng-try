import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { RouterModule } from '@angular/router';
import { heroResolver } from './product-api.service';
import { ProductEditInfoComponent } from './product-edit-info/product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit-tags/product-edit-tags.component';

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
        component: ProductListComponent,
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent,
      },
      {
        path: 'products/:id/edit',
        component: ProductEditComponent,
        resolve: { hero: heroResolver },
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
    ]),
  ],
})
export class ProductsModule {}
