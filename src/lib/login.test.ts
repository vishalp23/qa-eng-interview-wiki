import { expect, test } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const wikipediaUsername = process.env.WIKIPEDIA_USERNAME;
const wikipediaPassword = process.env.WIKIPEDIA_PASSWORD;

const authFile = 'src/auth/login.json';

/**
 * Manually create a Wikipedia account and then finish this test
 * so that it signs into Wikipedia and captures the logged-in
 * session to src/auth/login.json, so that the tests in all.test.ts
 * run as a signed in user.
 */

test('Sign in to Wikipedia', async ({ page }) => {
    if (!wikipediaUsername || !wikipediaPassword) {
        throw new Error(`Need a username and password to sign in!`);
    }

    // await page.context().storageState({ path: authFile });
    await page.goto('https://en.wikipedia.org/w/index.php?title=Special:UserLogin');// Go to Wikipedia Login Page
    
    await page.fill('#wpName1', wikipediaUsername);// Enter username
    await page.fill('#wpPassword1', wikipediaPassword);// Enter password
    await page.click('#wpLoginAttempt');// Click login button

    await expect(page).toHaveURL(/.*wikipedia\.org\/wiki.*/);// Redirect to Wikipedia Main Page
    await expect(page.locator('#pt-userpage a')).toHaveText(wikipediaUsername);// Assert user is logged in from by matching the user name int he top nav bar
    await page.context().storageState({ path: authFile });// Save the logged in session to src/auth/login.json for future reuse so need to login
    console.log("Login completed"); // Log message to indicate that login is completed
});
