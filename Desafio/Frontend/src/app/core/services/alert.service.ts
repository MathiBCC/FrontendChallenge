import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private ngxSpinner: NgxSpinnerService, private router: Router) { }

  async success(title: string, text: string) {
    this.ngxSpinner.hide();
    return await Swal.fire({
      position: 'center',
      icon: 'success',
      title: title,
      text: text,
      showConfirmButton: false,
      timer: 1500
    });
  }

  async successSave(entity: string) {
    this.ngxSpinner.hide();
    return await Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Criação salva!',
      text: `${entity} cadastrado(a) com sucesso!`,
      showConfirmButton: false,
      timer: 1500
    });
  }

  async successUpdate(entity: string) {
    this.ngxSpinner.hide();
    return await Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Alteração salva!',
      text: `${entity} atualizado(a) com Sucesso!`,
      showConfirmButton: false,
      timer: 1500
    });
  }

  async successDelete(entity: string) {
    this.ngxSpinner.hide();
    return await Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Exclusão salva!',
      text: `${entity} deletado(a) com sucesso!`,
    });
  }

  async warning(title: string, text: string) {
    this.ngxSpinner.hide();
    return await Swal.fire({
      position: 'center',
      icon: 'warning',
      title: title,
      text: text,
    });
  }

  async error(title: string, text: string) {
    this.ngxSpinner.hide();
    return await Swal.fire({
      position: 'center',
      icon: 'error',
      title: title,
      text: text,
    });
  }

  async confirm(text: string) {
    return await Swal.fire({
      position: 'center',
      icon: 'question',
      title: 'Você tem certeza?',
      text: text,
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    });
  }


  async httpError(error: HttpErrorResponse) {
    this.ngxSpinner.hide();
    const messageConfig: any = {
      position: 'center',
      icon: 'error',
      title: `Erro: ${error.status}`,
      text: error.error.message || error.message,
    };

    if (error.status === 500) {
      messageConfig.title = 'Ops...';
      messageConfig.text = 'Algo de errado aconteceu durante o processo'
    }

    return await Swal.fire(messageConfig);
  }

}
