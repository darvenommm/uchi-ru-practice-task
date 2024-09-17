import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { EnterDTO } from './dto/enter.dto';

import type { Response } from 'express';

// Можно вынести упростить код с помощью applyDecorators из Nest

@ApiTags('users')
@Controller('users')
export class AuthController {
  public constructor(private readonly authService: AuthService) {}

  @Post()
  @ApiOperation({ summary: 'Enter or register user' })
  @ApiResponse({ status: HttpStatus.OK, description: 'User successfully logged in.' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'New user successfully registered.' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Invalid input.' })
  @ApiBody({ type: EnterDTO })
  public async enter(
    @Res({ passthrough: true }) response: Response,
    @Body() enterDTO: EnterDTO,
  ): Promise<{ authToken: string }> {
    const { authToken, wasRegistered } = await this.authService.enter(enterDTO);

    response.status(wasRegistered ? HttpStatus.OK : HttpStatus.CREATED);

    return { authToken };
  }
}
