P5 - Authentication and Authorization Automation

Playwright + TypeScript automation project for testing login, logout, and protected page access in a web application.

Project Overview

This project focuses on authentication and authorization testing.

The automation covers:

- Valid login
- Invalid username
- Invalid password
- Empty credentials
- Logout
- Secure page access after login
- Secure page access without login
- Access after logout
- Authorization checks

Application Under Test

Expand Testing - Practice Login

URL:

https://practice.expandtesting.com/login

Tools & Technologies

- Playwright
- TypeScript
- Node.js
- Git & GitHub
- GitHub Actions
- Jenkins

Project Structure

P5-Authentication-Authorization-Automation/
├── pages/
│   ├── login.page.ts
│   └── secure.page.ts
├── tests/
│   ├── login.spec.ts
│   └── authorization.spec.ts
├── test-data/
│   └── users.ts
├── screenshots/
│   └── jenkins-build.png
├── playwright.config.ts
├── package.json
├── package-lock.json
├── README.md
└── .gitignore

Test Scenarios

Authentication

1. Login with valid user
2. Login with invalid username
3. Login with invalid password
4. Login with empty credentials
5. User can logout

Authorization

6. Authenticated user can access secure page
7. Unauthenticated user cannot access secure page
8. User can logout successfully
9. Logged out user cannot access secure page

The project contains additional test coverage for authentication and authorization validations.

Automation Approach

The project uses the Page Object Model (POM) to keep page locators and actions separate from test cases.

The tests use:

- Role-based locators
- CSS/Test ID locators
- Assertions
- Reusable page methods
- Positive and negative test scenarios
- Authentication validation
- Authorization validation
- Cross-browser testing

Test Execution

Run all tests:

npx playwright test

Run authentication tests:

npx playwright test tests/login.spec.ts

Run authorization tests:

npx playwright test tests/authorization.spec.ts

Run tests on Chromium:

npx playwright test --project=chromium

Test Result

The current test suite contains 33 test scenarios.

All scenarios were executed across:

- Chromium
- Firefox
- WebKit

33/33 test scenarios passed across all configured browsers. ✅

GitHub Actions CI

This project is configured with GitHub Actions for automated test execution.

The workflow:

- Checks out the project from GitHub
- Installs Node.js dependencies
- Installs Playwright browsers
- Runs the Playwright test suite

The GitHub Actions workflow completed successfully with all tests passing.

Jenkins CI

This project was also executed through Jenkins to practice CI pipeline execution.

The Jenkins pipeline:

- Clones the project from GitHub
- Installs Node.js dependencies
- Installs Playwright browsers
- Runs the Playwright test suite
- Reports the build result in Jenkins

The Jenkins build completed successfully with all tests passing.

Jenkins Build Result

"Jenkins Build Result" (screenshots/jenkins-build1.png,jenkins-build2.png)

What I Practiced

Through this project, I practiced:

- UI automation using Playwright
- TypeScript
- Page Object Model
- Authentication testing
- Authorization testing
- Positive and negative testing
- Login validation
- Logout validation
- Protected page validation
- Cross-browser testing
- Git and GitHub
- GitHub Actions
- Jenkins CI

Note

This project was created for QA automation practice and portfolio demonstration.