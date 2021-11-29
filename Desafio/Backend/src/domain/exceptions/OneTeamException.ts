import { HttpException, HttpStatus } from '@nestjs/common';

export class OneTeamException extends HttpException {
  constructor() {
    super('Você já possui um time', HttpStatus.BAD_REQUEST);
  }
}
