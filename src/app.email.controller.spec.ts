import { EmailController } from './app.mail.controller';
import { EmailService } from './app.mail.service';

describe('EmailController', () => {
  let emailController: EmailController;
  let emailService: EmailService;

  beforeEach(() => {
    emailService = new EmailService();
    emailController = new EmailController(emailService);
  });

  it('should send email', async () => {
    const spy = jest.spyOn(emailService, 'sendEmail');
    await emailController.sendEmail({
      to: 'to@example.com',
      subject: 'subject',
      body: 'body',
    });
    expect(spy).toHaveBeenCalledWith('to@example.com', 'subject', 'body');
  });
});
