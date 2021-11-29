import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGeneralComponent } from './user-general/user-general.component';




const routes: Routes = [
   { path: '', component: UserGeneralComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
  ]
})
export class UserRoutingModule { }
