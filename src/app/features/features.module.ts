import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { FeaturesComponent } from './features.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { FeaturesRoutingModule } from './features.routing';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [CommonModule, RouterModule, AuthModule, CoreModule,FeaturesRoutingModule],
})
export class FeaturesModule {}
