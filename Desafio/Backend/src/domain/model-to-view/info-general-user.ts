export class InfoGeneralUser{
  wonTournaments: number;
  openTournaments: number;
  onGoingTournaments: number;

  constructor(won,open,onGoing){
    this.wonTournaments = won;
    this.openTournaments = open;
    this.onGoingTournaments = onGoing;
  }
}