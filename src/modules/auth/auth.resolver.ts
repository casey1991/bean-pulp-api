import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.dto';

import { Token } from './models/token.module';

@Resolver((of) => Token)
export class AuthResolver {
  constructor(private readonly service: AuthService) {}
  @Mutation((returns) => Token)
  async login(@Args('loginInput') args: LoginInput) {
    const result = await this.service.login(args.email, args.password);
    if (!result) {
      throw new UnauthorizedException();
    }
    return result;
  }
  @Mutation((returns) => Token)
  async refreshToken(@Args('token') token: string) {
    return this.service.refreshToken(token);
  }
}
