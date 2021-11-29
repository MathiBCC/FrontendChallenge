import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidCredentialException extends HttpException {
  constructor() {
    super('Credenciais Inválidas', HttpStatus.NOT_FOUND);
  }
}
