import { expect, type Page } from "@playwright/test";
import { NavLinkMap, NavLinks } from "./types";

export abstract class BasePage {
  protected page: Page;
  protected map: NavLinkMap;


  constructor(page: Page) {
    this.page = page;
    this.map = {
      [NavLinks.Home]: page.locator('[href="index.html"]'),
      [NavLinks.About]: page.locator('[href="about.html"]'),
      [NavLinks.Contact]: page.locator('[href="contact.html"]'),
    };
  }

  abstract importantSelectors(): string[];

  async waitForReady(): Promise<void> {
    const selectors = this.importantSelectors();
    await Promise.all(selectors.map(async selector => {
      return expect(this.page.locator(selector).first()).toBeVisible();
    }));
  }

  protected async initiateAndReady<T extends BasePage>(NextPage: new (page: Page, args?: any) => T, args?: any): Promise<T> {
    const next = new NextPage(this.page, args);
    await next.waitForReady();
    return next;
  }

  async assertText(texts: string[], options?: { timeoutInSeconds?: number, exact?: boolean }): Promise<void> {
    const timeout = options?.timeoutInSeconds ? options.timeoutInSeconds : 5;
    const exact = options?.exact !== undefined ? options.exact : true;
    await Promise.all(texts.map(async text => {
      return expect(this.page.getByText(text, { exact }).first()).toBeVisible({ timeout: timeout * 1000 });
    }));
  }

  async clipboardText(): Promise<string> {
    return this.page.evaluate(() => navigator.clipboard.readText());
  }

  async fillFormByNames(form: Record<string, string>) {
    for (const [name, value] of Object.entries(form)) {
      await this.page.locator(`[name="${name}"]`).fill(value);
    }
  }

  async submit() {
    await this.page.locator('button[type="submit"]').click();
  }


  async goToLink<T extends BasePage>(link: NavLinks, nextPage: new (page: Page) => T) {
    this.map[link].click();
    const next = new nextPage(this.page);
    await next.waitForReady();
    return next;
  }

}
