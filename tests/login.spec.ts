import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import {
  validUser,
  invalidUsername,
  invalidPassword,
  emptyUser
} from '../test-data/users';

test.describe('Authentication Tests', () => {

  test('Login with valid user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
      validUser.username,
      validUser.password
    );

    await expect(page).toHaveURL(/\/secure/);
  });

  test('Login with invalid username', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
      invalidUsername.username,
      invalidUsername.password
    );

    await expect(page).toHaveURL(/\/login/);

    await expect(loginPage.errorMessage)
      .toBeVisible();
  });

  test('Login with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
      invalidPassword.username,
      invalidPassword.password
    );

    await expect(page).toHaveURL(/\/login/);

    await expect(loginPage.errorMessage)
      .toContainText(/password is invalid/i);
  });

  test('Login with empty credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
      emptyUser.username,
      emptyUser.password
    );

    await expect(page).toHaveURL(/\/login/);
  });

  test('User can logout', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
      validUser.username,
      validUser.password
    );

    await expect(page).toHaveURL(/\/secure/);

    const logoutButton = page.getByRole('link', {
      name: 'Logout'
    });

    await Promise.all([
      page.waitForURL(/\/login/),
      logoutButton.click()
    ]);
  });

});