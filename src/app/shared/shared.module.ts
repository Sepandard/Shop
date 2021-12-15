import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const MAT_MODULES = [MatToolbarModule, MatButtonModule, MatIconModule];

@NgModule({
  declarations: [UserNavbarComponent],
  imports: [...MAT_MODULES, CommonModule],
  exports:[UserNavbarComponent]
})
export class SharedModule {}
