const { test, expect } = require('@playwright/test');

test('OTP Mode Selection - SMS Button is visible and functional', async ({ page }) => {
  // Step 1: Visit login page
  await page.goto('https://test.ismart.devanasoft.com.np/ng/#/login');

  // Step 2: Fill login details
  await page.fill('input[formcontrolname="username"]', 'sysadmin');
  await page.fill('input[formcontrolname="password"]', 'Nepal@123');
  await page.click('button[type="submit"]');

  // Step 3: Wait for navigation to OTP Mode selection page
  await page.waitForURL('**/#/confirm', { timeout: 10000 });

  // Step 4: Check for SMS button (ignore Google Auth if it doesn't work)
  const smsButton = page.locator('button', { hasText: 'SMS' });
  await expect(smsButton).toBeVisible({ timeout: 10000 });

  // Step 5: Click on the SMS button (optional)
  await smsButton.click();

  // Step 6: Verify we navigated to the SMS OTP input page
  await page.waitForURL('**/#/verification/SMS', { timeout: 10000 });
  const otpInput = page.locator('input[type="text"]');
  await expect(otpInput.first()).toBeVisible();
});
