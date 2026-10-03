import { Page, Locator } from '@playwright/test';

export class SecurePage {
  readonly page: Page;
  readonly successMessage: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.successMessage = page.locator('#flash-message');
    this.logoutButton = page.getByRole('link', {
      name: 'Logout'
    });
  }

  async open() {
    await this.page.goto(
      'https://practice.expandtesting.com/secure',
      {
        waitUntil: 'domcontentloaded',
        timeout: 30000
      }
    );
  }

  async logout() {
    await this.logoutButton.click();
  }
}