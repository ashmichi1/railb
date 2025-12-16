import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS para permitir peticiones desde el frontend
  app.enableCors({
    origin: '*' ,
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
    credentials: true,
  });
  const port = process.env.PORT || 3015;
  await app.listen(port);
}
bootstrap();
