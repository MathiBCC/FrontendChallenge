import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { Properties } from 'src/app/core/helpers/Properties';
import { AlertService } from 'src/app/core/services/alert.service';
import { Elo } from 'src/app/domain/models/elo';
import { Tournament } from 'src/app/domain/models/tournament';
import { EloService } from 'src/app/domain/services/elo.service';
import { TournamentService } from 'src/app/domain/services/tournament.service';
  /**
 * É Responsável por Criar o torneio
 */
@Component({
  selector: 'app-tournament-create',
  templateUrl: './tournament-create.component.html',
  styleUrls: ['./tournament-create.component.scss'],
})

export class TournamentCreateComponent implements OnInit {

  formTournamentCreate: FormGroup;
  formEloCreate: FormGroup;

  titleActionPage: string = 'Cadastro';

  @ViewChild('modalEloCreate', { static: false }) modalEloCreate: TemplateRef<any>;
  modalEloCreateRef: BsModalRef;

  elos: Elo[] = [];

  constructor(protected modalService: BsModalService,
    protected tournamentService: TournamentService,
    protected formBuilder: FormBuilder,
    protected eloService: EloService,
    protected ngxSpinner: NgxSpinnerService,
    protected alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.initFormTournamentCreate();
    this.getElos();
  }

  initFormTournamentCreate() {
    this.formTournamentCreate = this.formBuilder.group({
      id: [],
      name: [],
      date: [],
      maxNumberTeams: [],
      allowedElos: [[], Validators.required],
    })
  }

  initFormEloCreate() {
    this.formEloCreate = this.formBuilder.group({
      name: []
    })
  }

  saveTournament() {
    this.ngxSpinner.show();

    let tournament = this.formTournamentCreate.value as Tournament;

    Properties.convertArrayNumberInArrayObj(tournament, ['allowedElos']);

    this.tournamentService.create(tournament).subscribe(
      (response) => {
        this.alertService.successSave('Torneio');
        this.ngxSpinner.hide();
      }
    )
  }

  saveElo() {
    this.ngxSpinner.show();
    let elo = this.formEloCreate.value as Elo;

    this.eloService.create(elo).subscribe(
      (response) => {
        this.getElos();
        this.ngxSpinner.hide();
        this.formEloCreate.reset();
        this.closeModal(this.modalEloCreateRef);
      }
    )
  }

  getElos() {
    this.eloService.read().subscribe(
      (response: Elo[]) => {
        Object.assign(this.elos, response)
      }
    )
  }

  openModalEloCreate() {
    this.initFormEloCreate();
    this.modalEloCreateRef = this.modalService.show(this.modalEloCreate);
  }

  closeModal(modalRef: BsModalRef) {
    modalRef.hide();
  }


}
