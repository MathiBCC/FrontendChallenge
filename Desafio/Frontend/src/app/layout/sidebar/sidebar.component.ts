import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/core/services/jwt.service';
import { Role } from 'src/app/domain/enums/role';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  role: Role = this.jwtService.decodeToken().role;
  constructor(private jwtService: JwtService) { }

  ngOnInit(): void {
  }

}
