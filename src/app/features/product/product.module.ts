import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product.routing';
import { ProductComponent } from './components/product.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [ProductComponent,
  
    ProductListComponent,
    ProductCardComponent],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
  