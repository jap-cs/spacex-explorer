import { test, expect } from '@playwright/test';

test('should navigate to the rockets page', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.click('text=rockets');
    await expect(page).toHaveURL('http://localhost:3000/rockets');
    await expect(page.locator('h1')).toHaveText('Rockets');
});

test('should navigate from rockets page to home', async ({ page }) => {
    await page.goto('http://localhost:3000/rockets');
    await page.click('text=Home');
    await expect(page).toHaveURL('http://localhost:3000/');
    await expect(page.locator('h1')).toHaveText('Welcome to SpaceX Explorer');
});

test('should navigate to the rockets detail page', async ({ page }) => {
    await page.goto('http://localhost:3000/rockets');
    await page.getByRole('link', { name: 'Falcon 1' }).click()
    await expect(page).toHaveURL(new RegExp('http://localhost:3000/rockets/+'));
    await expect(page.locator('h1')).toHaveText('Rocket Falcon 1 Details');
});