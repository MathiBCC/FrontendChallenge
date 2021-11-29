import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Elo } from 'src/domain/models/elo';
import { Inscription } from 'src/domain/models/inscription';
import { Match } from 'src/domain/models/match';
import { Team } from 'src/domain/models/team';
import { Tournament } from 'src/domain/models/tournament';
import { User } from 'src/domain/models/user';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      entities: [
        User,
        Elo,
        Match,
        User,
        Tournament,
        Team,
        Inscription
      ],
      synchronize:true
    }),
  ],
})
export class DatabaseModule { }
