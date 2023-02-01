import { Module } from '@nestjs/common';
import { EmailController } from './app.mail.controller';
import { EmailService } from './app.mail.service';

@Module({
  imports: [],
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {}
