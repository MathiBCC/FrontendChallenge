import { HttpException, HttpStatus } from '@nestjs/common';

export class DisabledUserException extends HttpException {
  constructor() {
    super('Usuário Desativado', HttpStatus.NOT_ACCEPTABLE);
  }
}
