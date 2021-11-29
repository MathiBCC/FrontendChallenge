import { HttpException, HttpStatus } from '@nestjs/common';

export class MaxNumberTeamsInTournamentException extends HttpException {
  constructor() {
    super('Esse Torneio já Atingiu o numero máximo de participantes', HttpStatus.BAD_REQUEST);
  }
}
