import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentCreateComponent } from './tournament-create/tournament-create.component';
import { TournamentEditComponent } from './tournament-edit/tournament-edit.component';
import { TournamentListComponent } from './tournament-list/tournament-list.component';
import { TournamentManagementMatchesComponent } from './tournament-management-matches/tournament-management-matches.component';




const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:"list" },
  { path:'list', component:TournamentListComponent },
  { path:"create", component:TournamentCreateComponent},
  { path: "edit/:id", component:TournamentEditComponent},
  { path: "management/matches/:id", component:TournamentManagementMatchesComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
  ]
})
export class TournamentRoutingModule { }
