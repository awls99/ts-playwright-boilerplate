import { BasePage } from "@pageObjects/basePage";

enum Subjects {
  GeneralInquiry = 'General Inquiry',
  Support = 'Support',
  Feedback = 'Feedback',
  TestingQuestion = 'Testing Question',
  TechnicalSupport = 'Technical Support',
  BusinessPartnership = 'Business Partnership',

}

export class Contact extends BasePage {
  
  importantSelectors(): string[] {
    return ['[test-id="contact-section"]', '[test-id="main-nav"]'];
  }

  async sendMessage(options?: Partial<{first: string, last: string, email: string, message: string, phone: string, subject: Subjects}>) {
    await this.fillFormByNames({
      firstName: options?.first || 'John',
      lastName: options?.last || 'Doe',
      email: options?.email || 'john.doe@example.com',
      message: options?.message || 'Hello, I have a question.',
      phone: options?.phone || '123-456-7890',
    });
    await this.page.selectOption('select[name="subject"]', options?.subject || Subjects.GeneralInquiry);
    await this.page.check('#privacy');
    await this.submit();
    await this.assertText(['Success! Your message has been sent successfully. We\'ll get back to you soon.']);
    return this;
  }
}
