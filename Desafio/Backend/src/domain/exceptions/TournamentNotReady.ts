import { HttpException, HttpStatus } from '@nestjs/common';

export class TournamentNotReady extends HttpException {
  constructor() {
    super('é necessário que a quantidade minima de participantes seja preenchida', HttpStatus.BAD_REQUEST);
  }
}
