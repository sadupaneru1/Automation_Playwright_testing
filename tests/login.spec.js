const { test, expect } = require('@playwright/test');

test('Login with valid credentials and navigate to OTP page in iSmart', async ({ page }) => {
  // Step 1: Visit the login page
  await page.goto('https://test.ismart.devanasoft.com.np/ng/#/login');

  // Step 2: Fill in username and password (use test credentials)
  await page.fill('input[formcontrolname="username"]', 'sysadmin');
  await page.fill('input[formcontrolname="password"]', 'Nepal@123');

  // Step 3: Click on Login button
  await page.click('button[type="submit"]');

  // Step 4: Wait for the OTP page to appear (you can check for an OTP field or button)
  const otpPageSelector = 'input[type="text"]'; // Modify this if necessary to target the OTP input field or something on the OTP page
  await page.waitForSelector(otpPageSelector, { timeout: 10000 });

  // Step 5: Check that the OTP page (or relevant element) is displayed
  const isOtpPageVisible = await page.isVisible(otpPageSelector);
  expect(isOtpPageVisible).toBe(true);
});
