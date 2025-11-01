import { BasePage } from "@pageObjects/basePage";

export class About extends BasePage {
  importantSelectors(): string[] {
    return ['[test-id="timeline-section"]', '[test-id="main-nav"]', '[test-id="hero-section"]'];
  }
}
