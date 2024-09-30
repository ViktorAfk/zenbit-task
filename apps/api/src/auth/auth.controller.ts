import {
  Body,
  Controller,
  Header,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('/login')
  signIn(
    @Body() signInDto: Pick<Prisma.UserCreateInput, 'email' | 'password'>,
  ) {
    console.log(signInDto.email);
    return this.authService.signIn(signInDto.email, signInDto.password);
  }
  @HttpCode(HttpStatus.OK)
  @Post('/signup')
  signUp(@Body() signUpDto: Prisma.UserCreateInput) {
    return this.authService.signUp(signUpDto);
  }
}
