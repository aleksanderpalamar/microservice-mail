import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { EmailModule } from './app.email.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    EmailModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.HOST || 'localhost',
        port: 3000,
      },
    },
  );
  await app.listen();
  console.log('Email microservice is listening');
}
bootstrap();
