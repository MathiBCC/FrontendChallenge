import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { EloModule } from './elo/elo.module';
import { TeamModule } from './team/team.module';
import { TournamentModule } from './tournament/tournament.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AuthModule,
    EloModule,
    TournamentModule,
    UserModule,
    TeamModule
  ],
  controllers: [],
  providers: [],
  exports: [RoutesModule]
})
export class RoutesModule { }
