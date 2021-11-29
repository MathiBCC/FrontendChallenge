import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RouterModule } from '@angular/router';
import { HttpCodesRoutingModule } from './http-codes.routing.module';



@NgModule({
  declarations: [
    NotFoundComponent,
    ForbiddenComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpCodesRoutingModule
  ],
  exports: [
    NotFoundComponent,
    ForbiddenComponent,
  ],
})
export class HttpCodesModule { }
