import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { Datetime } from 'src/app/core/helpers/Datetime';
import { Properties } from 'src/app/core/helpers/Properties';
import { AlertService } from 'src/app/core/services/alert.service';
import { ITournament } from 'src/app/domain/interfaces/tournament.interface';
import { Tournament } from 'src/app/domain/models/tournament';
import { EloService } from 'src/app/domain/services/elo.service';
import { TournamentService } from 'src/app/domain/services/tournament.service';
import { TournamentCreateComponent } from '../tournament-create/tournament-create.component';
  /**
 * É Responsável por Editar o torneio pelo ID
 */
@Component({
  selector: 'app-tournament-edit',
  templateUrl: '../tournament-create/tournament-create.component.html',
  styleUrls: ['../tournament-create/tournament-create.component.scss']
})
export class TournamentEditComponent extends TournamentCreateComponent implements OnInit {
  tournamentId: number = Number(this.route.snapshot.paramMap.get('id'));

  titleActionPage: string = 'Edição';
  


  constructor(protected modalService: BsModalService,
    protected tournamentService: TournamentService,
    protected formBuilder: FormBuilder,
    protected eloService: EloService,
    protected ngxSpinner: NgxSpinnerService,
    protected alertService: AlertService,
    private route: ActivatedRoute) {
    super(modalService, tournamentService, formBuilder, eloService, ngxSpinner, alertService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.tournamentGetById();
  }


  saveTournament(){
    this.ngxSpinner.show();
    let tournament = this.formTournamentCreate.value as Tournament;
    Properties.convertArrayNumberInArrayObj(tournament, ['allowedElos']);
    this.tournamentService.update(tournament).subscribe(
      (response) =>{
        this.ngxSpinner.hide();
        this.alertService.successUpdate('Torneio');
      }
    )
  }



  tournamentGetById(){
    this.tournamentService.getById(this.tournamentId).subscribe(
      (response: ITournament) =>{

        Properties.convertArrayObjInArrayNumber(response, ['allowedElos']);

        this.formTournamentCreate.patchValue(response);

        this.formTournamentCreate.get('date').setValue(Datetime.convertToInputDateTime(response.date));
      }
    )
  }

}
