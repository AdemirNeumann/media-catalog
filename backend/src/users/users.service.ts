import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async create(data: CreateUserDto) {

    const existingUser = await this.findByEmail(data.email);

    if (existingUser) {
      throw new ConflictException('Email already in use');
    }

    const hashedPassword = await bcrypt.hash(data.password, 12);

    const user = await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
    });

    const { password, ...safeUser } = user;

    return safeUser;
  }
}