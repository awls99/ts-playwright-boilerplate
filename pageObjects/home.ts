import { BasePage } from "@pageObjects/basePage";

export class Home extends BasePage {
  importantSelectors(): string[] {
    return ['[test-id="features-grid"]', '[test-id="main-nav"]', '[test-id="hero-section"]'];
  }
}
