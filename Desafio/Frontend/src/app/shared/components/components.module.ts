import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxSpinnerComponent } from './ngx-spinner/ngx-spinner.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';



@NgModule({
  declarations: [
    NgxSpinnerComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    RouterModule,
  ],
  exports: [
    NgxSpinnerComponent
  ],
  providers:[
    NgxSpinnerService
  ]
})
export class ComponentsModule { }
