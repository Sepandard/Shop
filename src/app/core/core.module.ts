import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ErrorHandlingService } from './error-handler/error-handling.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot()
  ],
  providers: [
    ErrorHandlingService
  ]
})
export class CoreModule { }
