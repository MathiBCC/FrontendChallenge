import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { DatatableService } from 'src/app/core/jquery/datatable.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { IElo } from 'src/app/domain/interfaces/elo.interface';
import { ITeam } from 'src/app/domain/interfaces/team.interface';
import { ITournament } from 'src/app/domain/interfaces/tournament.interface';
import { IUser } from 'src/app/domain/interfaces/user.interface';
import { InfoGeneralUser } from 'src/app/domain/model-to-view/info-general-user';
import { Elo } from 'src/app/domain/models/elo';
import { Team } from 'src/app/domain/models/team';
import { User } from 'src/app/domain/models/user';
import { EloService } from 'src/app/domain/services/elo.service';
import { TeamService } from 'src/app/domain/services/team.service';
import { TournamentService } from 'src/app/domain/services/tournament.service';
import { UserService } from 'src/app/domain/services/user.service';
  /**
 * É Responsável por permitir que o usuario crie ou deixe o time, entre em um torneio, mude seu elo.
 */
@Component({
  selector: 'app-user-general',
  templateUrl: './user-general.component.html',
  styleUrls: ['./user-general.component.scss']
})
export class UserGeneralComponent implements OnInit {

  wonTournaments: number = 0;
  openTournaments: number = 0;
  onGoingTournaments: number = 0;

  user: IUser = new User();
  teams: ITeam[] = [];
  tournaments: ITournament[] = [];
  elos: IElo[] = [];

  elo: number;


  @ViewChild('modalCreateTeam', { static: false }) modalCreateTeam: TemplateRef<any>;
  modalCreateTeamRef: BsModalRef;

  formCreateTeam: FormGroup;

  @ViewChild('modalEnterTeam', { static: false }) modalEnterTeam: TemplateRef<any>;
  modalEnterTeamRef: BsModalRef;

  formEnterTeam: FormGroup;


  constructor(private userService: UserService,
    private tournamentService: TournamentService,
    private formBuilder: FormBuilder,
    private modalService: BsModalService,
    private teamService: TeamService,
    private ngxSpinner: NgxSpinnerService,
    private alertService: AlertService,
    private datatableService: DatatableService,
    private eloService: EloService) { }

  ngOnInit(): void {
    this.getUserByLogged();
    this.getTournaments();
    this.getElos();
    this.getInfoGeneralForUser();
  }

  initFormCreateTeam() {
    this.formCreateTeam = this.formBuilder.group({
      name: [],
    })
  }
  initFormEnterTeam() {
    this.formEnterTeam = this.formBuilder.group({
      id: [null, Validators.required],
    })
  }

  getUserByLogged() {
    this.userService.getByLogged().subscribe(
      (response: IUser) => {
        Object.assign(this.user, response)
      }
    )
  }

  getTeams() {
    this.ngxSpinner.show();
    this.teamService.get().subscribe(
      (response: ITeam[]) => {
        Object.assign(this.teams, response);
      }
    )
  }

  saveTeam() {
    this.ngxSpinner.show();
    let team = this.formCreateTeam.value as Team;
    this.teamService.create(team).subscribe(
      (response) => {
        this.closeModal(this.modalCreateTeamRef);
        this.formCreateTeam.reset();
        this.ngxSpinner.hide();
        this.alertService.successSave('Equipe');
        this.getUserByLogged();
      }
    )
  }

  getTournaments() {
    this.ngxSpinner.show();
    this.tournamentService.get().subscribe(
      (response: ITournament[]) => {
        Object.assign(this.tournaments, response);
        this.datatableService.init();
      }
    )
  }

  enterTeam() {
    this.ngxSpinner.show();
    let team = this.formEnterTeam.value as Team;
    this.teamService.enter(team).subscribe(
      (response) => {
        this.alertService.success('Bem vindo ao time', '');
        this.formEnterTeam.reset();
        this.closeModal(this.modalEnterTeamRef);
        this.ngxSpinner.hide();
        this.getUserByLogged();
      }
    )
  }

  leaveTeam() {
    this.ngxSpinner.show();
    this.alertService.confirm('deseja sair da equipe?').then(
      (value) => {
        this.userService.leaveTeam().subscribe(
          (response) => {
            this.alertService.success('Saida Realizada com Sucesso!', 'te desejamos boa sorte na sua futura nova equipe!');
            this.getUserByLogged();
          }
        )
      }
    )

  }

  enterTournament(tournament: ITournament) {
    this.ngxSpinner.show();
    this.alertService.confirm('deseja entrar no torneio cujo nome é ' + tournament.name + '?').then(
      (value) => {
        if (value.isConfirmed) {
          this.tournamentService.enter(tournament).subscribe(
            (response) => {
              this.alertService.success('Inscrição Realizada', 'Boa sorte!!!');
              this.datatableService.destroy();
              this.getTournaments();
            }
          )
        }
      }
    )
  }

  getInfoGeneralForUser(){
    this.userService.getGeneral().subscribe(
      (response: InfoGeneralUser) =>{
        this.wonTournaments = response.wonTournaments;
        this.onGoingTournaments = response.onGoingTournaments;
        this.openTournaments = response.openTournaments;
      }
    )
  }

  editElo(event: number) {
    this.ngxSpinner.show();
    let elo = new Elo();
    elo.id = event;
    this.userService.updateElo(elo).subscribe(
      (response) => {
        this.ngxSpinner.hide();
      }
    )


  }

  getElos() {
    this.ngxSpinner.show();
    this.eloService.read().subscribe(
      (response: IElo[]) => {
        Object.assign(this.elos, response);
        this.ngxSpinner.hide();
      }
    )
  }


  openModalEnterTeam() {
    this.initFormEnterTeam();
    this.getTeams();
    this.modalEnterTeamRef = this.modalService.show(this.modalEnterTeam);
  }


  openModalCreateTeam() {
    this.initFormCreateTeam();

    this.modalCreateTeamRef = this.modalService.show(this.modalCreateTeam);
  }

  closeModal(modalRef: BsModalRef) {
    modalRef.hide();
  }


}
