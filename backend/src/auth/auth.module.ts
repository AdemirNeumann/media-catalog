import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,

    JwtModule.registerAsync({
      inject: [ConfigService],

      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),

        signOptions: {
          expiresIn: '1d',
        },
      }),
    }),
  ],

  controllers: [
    AuthController,
  ],

  providers: [
    AuthService,
    JwtStrategy,
  ],
})
export class AuthModule {}