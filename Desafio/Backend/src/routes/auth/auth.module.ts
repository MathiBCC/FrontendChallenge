import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from 'src/Security/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/domain/models/user';


@Module({
  controllers: [AuthController],
  imports: [
    JwtModule.register({
      secret: process.env.SECRET_JWT,
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forFeature([User])
  ],
  providers: [AuthService],
})
export class AuthModule {}
