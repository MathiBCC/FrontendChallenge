import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserService } from 'src/app/domain/services/user.service';
import { UserRoutingModule } from './user-routing.module';
import { UserGeneralComponent } from './user-general/user-general.component';
import { CountUpModule } from 'ngx-countup';
import { TournamentService } from 'src/app/domain/services/tournament.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TeamService } from 'src/app/domain/services/team.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { EloService } from 'src/app/domain/services/elo.service';



@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        UserRoutingModule,
        CountUpModule,
        NgSelectModule
    ],
    providers: [
        UserService,
        TournamentService,
        BsModalService,
        TeamService,
        EloService
    ],
    declarations: [

    
    UserGeneralComponent
  ],
    exports: [

    ]
})
export class UserModule { }
