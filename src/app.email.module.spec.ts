import { Test, TestingModule } from '@nestjs/testing';
import { EmailController } from './app.mail.controller';
import { EmailService } from './app.mail.service';
import { EmailModule } from './app.email.module';

describe('EmailModule', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [EmailModule],
    }).compile();
  });

  it('should have the EmailService provider', () => {
    const emailService = module.get<EmailService>(EmailService);
    expect(emailService).toBeDefined();
  });

  it('should have the EmailController controller', () => {
    const emailController = module.get<EmailController>(EmailController);
    expect(emailController).toBeDefined();
  });
});
