import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    Router,
    RouterStateSnapshot,
    CanLoad,
    Route,
    UrlSegment,
    UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { JwtService } from '../services/jwt.service';


@Injectable()
export class BaseGuard implements CanLoad {

    constructor(protected router: Router, protected jwtService: JwtService) {
    }
    canLoad(route: Route): boolean{
        if(this.jwtService.getToken() == null){
            this.router.navigate(['/auth/login'], { queryParams: { returnUrl: route.path } });
            return false;
        }
        return true;
    }
}
