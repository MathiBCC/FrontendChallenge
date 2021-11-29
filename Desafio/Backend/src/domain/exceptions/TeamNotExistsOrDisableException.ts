import { HttpException, HttpStatus } from '@nestjs/common';

export class TeamNotExistsOrDisableException extends HttpException {
  constructor() {
    super('Você não possui Time', HttpStatus.BAD_REQUEST);
  }
}
