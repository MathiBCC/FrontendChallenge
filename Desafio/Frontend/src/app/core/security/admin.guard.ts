import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Role } from "src/app/domain/enums/role";
import { JwtService } from "../services/jwt.service";

@Injectable()
export class AdminGuard implements CanLoad {

  constructor(protected router: Router, protected jwtService: JwtService) {
  }
  canLoad(route: Route): boolean{
    if(this.jwtService.getToken() == null){
      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: route.path } });
      return false;
    }
    if(this.jwtService.decodeToken().role != Role.ADMIN){
      this.router.navigate(['/error/forbidden']);
      return false;
    }
    return true;
  }

}

