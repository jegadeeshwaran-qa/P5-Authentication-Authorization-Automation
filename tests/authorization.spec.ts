import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { SecurePage } from '../pages/secure.page';
import { validUser } from '../test-data/users';

test.describe('Authorization Tests', () => {

  test('Authenticated user can access secure page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const securePage = new SecurePage(page);

    await loginPage.open();

    await loginPage.login(
      validUser.username,
      validUser.password
    );

    await expect(page).toHaveURL(/\/secure/);

    await expect(securePage.successMessage)
      .toBeVisible();

    await expect(securePage.successMessage)
      .toContainText('You logged into a secure area!');
  });

  test('Unauthenticated user cannot access secure page', async ({ page }) => {
    const securePage = new SecurePage(page);

    await securePage.open();

    await expect(page).toHaveURL(/\/login/);
  });

  test('User can logout successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const securePage = new SecurePage(page);

    await loginPage.open();

    await loginPage.login(
      validUser.username,
      validUser.password
    );

    await expect(page).toHaveURL(/\/secure/);

    await securePage.logout();

    await expect(page).toHaveURL(/\/login/);
  });

  test('Logged out user cannot access secure page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const securePage = new SecurePage(page);

    await loginPage.open();

    await loginPage.login(
      validUser.username,
      validUser.password
    );

    await expect(page).toHaveURL(/\/secure/);

    await securePage.logout();

    await expect(page).toHaveURL(/\/login/);

    await securePage.open();

    await expect(page).toHaveURL(/\/login/);
  });

});