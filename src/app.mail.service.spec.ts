import { EmailService } from './app.mail.service';

describe('EmailService', () => {
  let emailService: EmailService;

  beforeEach(() => {
    emailService = new EmailService();
  });

  it('should send email', async () => {
    const result = await emailService.sendEmail(
      'to@example.com',
      'subject',
      'body',
    );
    expect(result).toBeUndefined();
  });
});
