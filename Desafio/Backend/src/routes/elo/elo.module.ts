import { Module } from '@nestjs/common';
import { EloService } from './elo.service';
import { EloController } from './elo.controller';
import { JwtStrategy } from 'src/Security/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/domain/models/user';
import { Elo } from 'src/domain/models/elo';


@Module({
  controllers: [EloController],
  imports: [
    TypeOrmModule.forFeature([Elo])
  ],
  providers: [EloService],
})
export class EloModule {}
