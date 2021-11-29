import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';

import { HttpCodesModule } from './http-codes/http-codes.module';



@NgModule({
  declarations: [
  ],
  imports: [
    HttpCodesModule,
    ComponentsModule
  ],
  exports: [
    HttpCodesModule,
    ComponentsModule
  ],
})
export class SharedModule { }
