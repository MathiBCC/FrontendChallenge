import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DatatableService } from 'src/app/core/jquery/datatable.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { ITournament } from 'src/app/domain/interfaces/tournament.interface';
import { TournamentService } from 'src/app/domain/services/tournament.service';
  /**
 * É Responsável por listar todas os torneios e permitir que o usuário admin, gere as Partidas, gerencie as partidas, edite o torneio e exclua o torneio!
 */
@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss']
})
export class TournamentListComponent implements OnInit {

  tournaments: ITournament[] = [];

  constructor(
    private tournamentService: TournamentService,
    private datatableService: DatatableService,
    private ngxSpinner: NgxSpinnerService,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.getTournaments();
  }


  generateMatchsTournaments(tournament: ITournament){
    this.tournamentService.fillMatchs(tournament).subscribe(
      (response) =>{
        this.alertService.success('Tudo certo!', 'as partidas foram geradas com sucesso');
      }
    )
  }


  getTournaments() {
    this.ngxSpinner.show();
    this.tournamentService.get().subscribe(
      (response: ITournament[]) =>{
        Object.assign(this.tournaments, response);
        this.datatableService.init();
      }
    )
  }


  deleteTournament(id: number, index: number){
    this.alertService.confirm('Deseja prosseguir com a exclusão?').then(
      value => {
        if(value.isConfirmed == true){
          this.tournamentService.delete(id).subscribe(
            (response) =>{
              this.tournaments.splice(index, 1);
              this.alertService.successDelete('Torneio');
            }
          )
        }
      }
    );
  }

}
