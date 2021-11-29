import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'src/app/core/services/alert.service';
import { UserService } from 'src/app/domain/services/user.service';
import { UserForRegister } from 'src/app/domain/view-to-model/models/user-for-register';
  /**
 * É Responsável por fazer um registro de um novo usuario
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formRegisterUser: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private ngxSpinner: NgxSpinnerService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initFormRegisterUser();
  }


  initFormRegisterUser() {
    this.formRegisterUser = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  registerUser() {
    let newUser = this.formRegisterUser.value as UserForRegister;
    this.userService.create(newUser).subscribe(
      (response) => {
        this.alertService.successSave('Usuário');
        setTimeout(() => {
          this.router.navigate(['/auth/login']);
        }, 1501);
      }
    )
  }

}
