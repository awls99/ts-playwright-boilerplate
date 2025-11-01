import { About } from "@pageObjects/about";
import { Contact } from "@pageObjects/contact";
import { Home } from "@pageObjects/home";
import { NavLinks } from "@pageObjects/types";
import test from "@playwright/test";

let homePage: Home
test.beforeEach(async ({ page }) => {
  const filePath = 'file://' + __dirname + '/../sample-pages/index.html';
  await page.goto(filePath);
  homePage = new Home(page);
  await homePage.waitForReady();
});

test('example test', async ({ page }) => {
  await homePage.assertText(['Welcome to Our Sample Website']);
  const about = await homePage.goToLink(NavLinks.About, About);
  await about.assertText(['Our Journey', 'Our Mission']);
  const contacts = await about.goToLink(NavLinks.Contact, Contact);
  await contacts.sendMessage();
});
