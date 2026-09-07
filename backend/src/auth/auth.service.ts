import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(data: LoginDto) {

    const user = await this.usersService.findByEmail(data.email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const passwordMatch = await bcrypt.compare(
      data.password,
      user.password,
    );

    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = this.jwtService.sign({
      sub: user.id,
      email: user.email,
    });

    return {
      access_token: token,
    };
  }
}