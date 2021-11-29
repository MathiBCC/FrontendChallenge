import { HttpException, HttpStatus } from '@nestjs/common';

export class EloNotAllowedException extends HttpException {
  constructor() {
    super('Algum membro da sua equipe não possui o elo permitido para esse torneio', HttpStatus.BAD_REQUEST);
  }
}
