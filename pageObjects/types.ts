
import { Locator } from "@playwright/test";

export enum NavLinks {
  Home = 'Home',
  About = 'About',
  Contact = 'Contact',
}
export type NavLinkMap = {
  [key in NavLinks]: Locator;
}
