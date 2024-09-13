import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';

import type { NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';

type Optional<T> = undefined | T;

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  public constructor(private readonly authRepository: AuthRepository) {}

  public async use(request: Request, _: Response, next: NextFunction): Promise<void> {
    const authToken = request.headers['x-auth-token'] as Optional<string>;

    request.user = authToken ? await this.authRepository.getByAuthToken(authToken) : null;

    next();
  }
}
