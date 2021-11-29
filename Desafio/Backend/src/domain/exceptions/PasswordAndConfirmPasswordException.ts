import { HttpException, HttpStatus } from '@nestjs/common';

export class PasswordAndConfirmPasswordException extends HttpException {
  constructor() {
    super('senha e confirmação não são iguais', HttpStatus.AMBIGUOUS);
  }
}
