import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
constructor(private readonly reflector:Reflector){}

  canActivate(
    context: ExecutionContext,
  ): boolean {
    const role = this.reflector.getAllAndOverride(ROLES_KEY,[
      context.getHandler(),
      context.getClass()
    ])
    if (!role) {
      return true;     
    }
   
    
    const {user} = context.switchToHttp().getRequest();
    return role === user.role;
  }
}
