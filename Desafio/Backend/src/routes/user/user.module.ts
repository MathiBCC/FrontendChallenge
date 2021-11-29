import { Module } from '@nestjs/common';
import { JwtStrategy } from 'src/Security/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/domain/models/user';
import { Elo } from 'src/domain/models/elo';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Tournament } from 'src/domain/models/tournament';


@Module({
  controllers: [UserController],
  imports: [
    TypeOrmModule.forFeature([User, Tournament])
  ],
  providers: [UserService],
})
export class UserModule {}
