import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';
import { IMatch } from 'src/app/domain/interfaces/match.interface';
import { ITournament } from 'src/app/domain/interfaces/tournament.interface';
import { Team } from 'src/app/domain/models/team';
import { Tournament } from 'src/app/domain/models/tournament';
import { TournamentService } from 'src/app/domain/services/tournament.service';
import Swal from 'sweetalert2';
  /**
 * É Responsável por listar todas as partidas de um torneio especifico e permite que o usuário admin de os resultados das partidas e avançe a etapa do torneio
 */
@Component({
  selector: 'app-tournament-management-matches',
  templateUrl: './tournament-management-matches.component.html',
  styleUrls: ['./tournament-management-matches.component.scss']
})
export class TournamentManagementMatchesComponent implements OnInit {

  tournament: ITournament = new Tournament();
  tournamentId: number = Number(this.route.snapshot.paramMap.get('id'));

  constructor(
    private tournamentService: TournamentService,
     private route: ActivatedRoute,
     private alertService: AlertService) { }

  ngOnInit(): void {
    this.tournamentGetById()
  }

  tournamentGetById(){
    this.tournamentService.getById(this.tournamentId).subscribe(
      (response: ITournament) =>{
        Object.assign(this.tournament, response);
      }
    )
  }

  

  saveResultMatch(match: IMatch, index: number){
    Swal.fire({
      title: 'Vencedor da Partida',
      showDenyButton: true,
      confirmButtonText: match.team_1.name,
      denyButtonText: match.team_2.name,
    }).then((result) => {
      let winner = new Team();
      if (result.isConfirmed) {
        winner.id = match.team_1.id;
        this.tournament.matchs[index].winner = winner;
        
      } else {
        winner.id = match.team_2.id;
        this.tournament.matchs[index].winner = winner;
      }
      
      if(index == this.tournament.matchs.length - 1){
        this.tournament.winner = winner;
      }

      this.tournamentService.update(this.tournament).subscribe(
        (response) =>{
          this.alertService.successSave('Partida');
          this.tournamentGetById();
        }
      )
    })
  }

  generateMatchsTournaments(){
    this.tournamentService.fillMatchs(this.tournament).subscribe(
      (response) =>{
        this.alertService.success('Tudo certo!', 'as partidas foram geradas com sucesso');
      }
    )
  }


}
