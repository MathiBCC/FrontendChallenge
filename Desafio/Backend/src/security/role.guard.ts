import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Token } from 'src/core/models/token';
import { Role } from 'src/Domain/Enums/Role';
import { ROLES_KEY } from './role.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles) {
            return true;
        }
        const user = context.switchToHttp().getRequest();
        var token = new Token(user.headers.authorization)
        
        if(requiredRoles.includes(token.role)) return true;

        return false;
    }
}