import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesComponent } from './features.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { FeaturesRoutingModule } from './features.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    FeaturesRoutingModule,
    SharedModule,
  ],
})
export class FeaturesModule {}
