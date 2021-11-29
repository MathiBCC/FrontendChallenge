import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { RoutesModule } from './routes/routes.module';
import { JwtStrategy } from './Security/jwt.strategy';
import { RolesGuard } from './security/role.guard';

@Module({
  imports: [
    DatabaseModule,
    RoutesModule,
    ConfigModule.forRoot({'isGlobal':true})
  ],
  controllers: [AppController],
  providers: [
    AppService,
    JwtStrategy,
    {
      provide:APP_GUARD,
      useClass:RolesGuard
    }
  ],
})
export class AppModule { }
