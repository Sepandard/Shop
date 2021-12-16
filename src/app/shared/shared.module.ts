import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';

import { MatIconModule } from '@angular/material/icon';

const MAT_MODULES = [MatIconModule];

@NgModule({
  declarations: [UserNavbarComponent],
  imports: [...MAT_MODULES, CommonModule],
  exports: [UserNavbarComponent],
})
export class SharedModule {}
