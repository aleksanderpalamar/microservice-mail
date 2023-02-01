/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as z from 'zod';
import { SentMessageInfo } from 'nodemailer/lib/smtp-transport';

const EmailSchema = z.object({
  to: z.string().email(),
  subject: z.string().min(5),
  body: z.string().min(5).max(1000),
});

@Injectable()
export class EmailService {
  private readonly transporter: nodemailer.Transporter<SentMessageInfo>;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    const validaData = EmailSchema.safeParse({ to, subject, body });

    if (!validaData.success) {
      console.log(`Erro ao enviar email: ${validaData.success}`);
      return;
    }

    try {
      await this.transporter.sendMail({
        from: `"PalamarDev" ${process.env.EMAIL_USER}`,
        to,
        subject,
        text: body,
      });
    } catch (error) {
      console.log(`Error sending email: ${error}`);
    }
  }
}
