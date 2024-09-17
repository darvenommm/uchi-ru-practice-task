import { Injectable, UnauthorizedException } from '@nestjs/common';

import type { CanActivate, ExecutionContext } from '@nestjs/common';
import type { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  public canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest();

    if (!request.user) throw new UnauthorizedException('You are not a unauthorized');

    return Boolean(request.user);
  }
}
