import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from 'src/app/domain/services/auth.service';
import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentListComponent } from './tournament-list/tournament-list.component';
import { TournamentCreateComponent } from './tournament-create/tournament-create.component';
import { TournamentEditComponent } from './tournament-edit/tournament-edit.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { EloService } from 'src/app/domain/services/elo.service';
import { TournamentService } from 'src/app/domain/services/tournament.service';
import { TournamentManagementMatchesComponent } from './tournament-management-matches/tournament-management-matches.component';



@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        TournamentRoutingModule,
        NgSelectModule,
        ModalModule.forRoot(),
    ],
    providers: [
        AuthService,
        BsModalService,
        EloService,
        TournamentService
    ],
    declarations: [
        TournamentListComponent,
        TournamentCreateComponent,
        TournamentEditComponent,
        TournamentManagementMatchesComponent,
    ],
    exports: [
        TournamentListComponent,
        TournamentCreateComponent,
        TournamentEditComponent
    ],
    schemas:[
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class TournamentModule { }
