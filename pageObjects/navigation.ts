// import { BasePage } from "@pageObjects/basePage";
// import { NavLinkMap, NavLinks } from "@pageObjects/types";
// import { Page } from "playwright/test";

// export class Navigation extends BasePage {

//   map: NavLinkMap;

//   constructor(page: Page) {
//     super(page);
//     this.map = {
//       [NavLinks.Home]: page.locator('[href="index.html"]'),
//       [NavLinks.About]: page.locator('[href="about.html"]'),
//       [NavLinks.Contact]: page.locator('[href="contact.html"]'),
//     };
//   }

//   importantSelectors(): string[] {
//     return ['[test-id="main-nav"]'];
//   }

//   static async navigateTo<T extends BasePage>(page: Page, link: NavLinks, nextPage: new (page: Page) => T) {
//     const navigation = new Navigation(page);
//     return await navigation.goToLink(link, nextPage);
//   }

//   async goToLink<T extends BasePage>(link: NavLinks, nextPage: new (page: Page) => T) {
//     this.map[link].click();
//     const next = new nextPage(this.page);  
//     await next.waitForReady();
//     return next;
//   }

// }
