import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './app.mail.service';

export type EmailData = {
  to: string;
  subject: string;
  body: string;
};

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  async sendEmail(@Body() data: EmailData): Promise<void> {
    return this.emailService.sendEmail(data.to, data.subject, data.body);
  }
}
