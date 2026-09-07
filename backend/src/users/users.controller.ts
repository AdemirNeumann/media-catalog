import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {

  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Post()
  create(@Body() data: CreateUserDto) {
    return this.usersService.create(data);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  me(@Req() req: any) {
    return req.user;
  }

}