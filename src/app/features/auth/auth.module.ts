import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { AuthComponent } from './components/auth.component';
import { FormlyModule } from '@ngx-formly/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AuthRoutingModule } from './auth.routing';
import { AuthorizationPageComponent } from './components/authorization-page/authorization-page.component';

const MAT_MODULES = [MatButtonModule, MatCardModule];

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthComponent, AuthorizationPageComponent],
  imports: [
    ...MAT_MODULES,
    CommonModule,
    IvyCarouselModule,
    AuthRoutingModule,
    FormlyModule.forChild(),
  ],
})
export class AuthModule {}
