import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'forbidden', component: ForbiddenComponent},
  { path: 'notfound', component: NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[
  ]
})
export class HttpCodesRoutingModule {}
