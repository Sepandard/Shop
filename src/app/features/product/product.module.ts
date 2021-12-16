import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product.routing';
import { ProductComponent } from './product.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';

const MAT_MODULES = [MatIconModule];
@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductCardComponent],
  imports: [CommonModule, ProductRoutingModule, ...MAT_MODULES],
})
export class ProductModule {}
