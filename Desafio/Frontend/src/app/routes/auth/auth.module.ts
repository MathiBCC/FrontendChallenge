import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from 'src/app/domain/services/auth.service';
import { RegisterComponent } from './register/register.component';
import { UserService } from 'src/app/domain/services/user.service';



@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AuthRoutingModule,
    ],
    providers: [
        AuthService,
        UserService
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
    ],
    exports: [

    ]
})
export class AuthModule { }
