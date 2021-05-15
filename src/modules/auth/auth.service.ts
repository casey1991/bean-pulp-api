import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/schemas/user.schema';
import { UsersService } from '../users/users.service';
import { Token } from './models/token.module';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userId: string): Promise<User> {
    return this.usersService.findById(userId);
  }
  async login(email: string, password: string): Promise<Token> {
    const user = await this.usersService.findOne({ email: email });
    if (!user) {
      throw new NotFoundException();
    }
    return this.generateToken({ userId: user._id });
  }
  generateToken(payload: { userId: string }): Token {
    const access_token = this.jwtService.sign(payload);
    return { access_token };
  }
  refreshToken(token: string) {
    try {
      const { userId } = this.jwtService.verify(token);
      return this.generateToken({ userId });
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
