import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { JsonToObject } from './core/helpers/json-to-object';
import { Elo } from './domain/models/elo';

async function bootstrap() {

  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*'
    }
  });

  app.setGlobalPrefix('api/v1');
  const config = new DocumentBuilder()
    .setTitle('Torneio API')
    .setDescription('Documentação Torneio API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
}
bootstrap();
