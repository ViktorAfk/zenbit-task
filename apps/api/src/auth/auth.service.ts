import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(email);

    if (!user || user?.password !== password) {
      throw new UnauthorizedException(
        'No user found for email or invalid password',
      );
    }

    const payload = { sub: user.id, username: user.name };

    return { access_token: await this.jwtService.signAsync(payload) };
  }

  async signUp(
    user: Prisma.UserCreateInput,
  ): Promise<{ access_token: string }> {
    const isCurrentUserExist = await this.usersService.findOne(user.email);

    if (isCurrentUserExist) {
      throw new UnauthorizedException(
        'Sorry, user with a current email already exist',
      );
    }

    const newUser = await this.usersService.create(user);
    const payload = { sub: newUser.id, username: newUser.name };

    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
