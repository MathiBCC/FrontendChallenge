
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'src/app/core/services/alert.service';
import { JwtService } from 'src/app/core/services/jwt.service';
import { User } from 'src/app/domain/models/user';
import { AuthService } from 'src/app/domain/services/auth.service';
  /**
 * É Responsável pelo login e permite que o usuario vá para a tela de criação de login
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  returnUrl = this.route.snapshot.queryParams['returnUrl'];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private ngxSpinner: NgxSpinnerService,
    private alertService: AlertService,
    private jwtService: JwtService
  ) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: [],
      password: [],
    })
  }

  login() {
    this.ngxSpinner.show();
    let user = this.loginForm.value as User;

    this.authService.login(user).subscribe(
      (response) => {
        this.alertService.success('Logado com Sucesso', 'você será redirecionado em breve!');
        this.jwtService.setToken(response['access_token']);
        if(this.returnUrl == null){
          setTimeout(() => { this.router.navigate(['/user']); }, 1501);
        }
        else{
          setTimeout(() => { this.router.navigate([this.returnUrl]); }, 1501);
        }
      }
    )
  }

}
