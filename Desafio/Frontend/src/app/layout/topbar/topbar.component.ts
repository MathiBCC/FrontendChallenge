import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';
import { JwtService } from 'src/app/core/services/jwt.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  username: string;
  constructor(private jwtService: JwtService, private alertService: AlertService, private router: Router) { }

  ngOnInit(): void {
    this.username = this.jwtService.decodeToken().name;
  }

  logout(){
    this.jwtService.destroyToken();
    this.alertService.success('Deslogado com Sucesso!', 'você será redirecionado em breve.')
    setTimeout(() => {
      this.router.navigate(['/auth/login']);
    }, 1600);
  }

}
