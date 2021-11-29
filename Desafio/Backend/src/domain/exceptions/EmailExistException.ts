import { HttpException, HttpStatus } from '@nestjs/common';

export class EmailExistsException extends HttpException {
  constructor() {
    super('Já existe uma conta com esse email!', HttpStatus.CONFLICT);
  }
}
