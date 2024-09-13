import { Injectable } from '@nestjs/common';

import type { CanActivate, ExecutionContext } from '@nestjs/common';
import type { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  public canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest();

    return Boolean(request.user);
  }
}
