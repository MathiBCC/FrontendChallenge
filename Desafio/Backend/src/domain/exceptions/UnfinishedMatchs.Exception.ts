import { HttpException, HttpStatus } from '@nestjs/common';

export class UnfinishedMatchsException extends HttpException {
  constructor() {
    super('Existem partidas dessa etapa que ainda não foram finalizadas!', HttpStatus.BAD_REQUEST);
  }
}
