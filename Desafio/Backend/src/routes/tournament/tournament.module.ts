import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Inscription } from 'src/domain/models/inscription';
import { Tournament } from 'src/domain/models/tournament';
import { User } from 'src/domain/models/user';
import { TournamentController } from './tournament.controller';
import { TournamentService } from './tournament.service';


@Module({
  controllers: [TournamentController],
  imports: [
    TypeOrmModule.forFeature([Tournament, Inscription, User])
  ],
  providers: [TournamentService],
})
export class TournamentModule {}
