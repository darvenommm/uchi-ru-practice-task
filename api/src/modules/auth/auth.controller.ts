import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';

import { AuthService } from './auth.service';
import { EnterDTO } from './dto/enter.dto';

import type { Response } from 'express';

@Controller('users')
export class AuthController {
  public constructor(private readonly authService: AuthService) {}

  @Post()
  public async enter(
    @Res({ passthrough: true }) response: Response,
    @Body() enterDTO: EnterDTO,
  ): Promise<{ authToken: string }> {
    const { authToken, wasRegistered } = await this.authService.enter(enterDTO);

    response.status(wasRegistered ? HttpStatus.OK : HttpStatus.CREATED);

    return { authToken };
  }
}
