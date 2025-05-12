import { Page, expect } from '@playwright/test';

/**
 * This test was generated using Ranger's test recording tool. The test is supposed to:
 * 1. Navigate to Wikipedia
 * 2. Go to the "Artificial intelligence" page
 * 3. Click "View history"
 * 4. Assert that the latest edit was made by the user "Worstbull"
 *
 * Instructions:
 * - Run the test and ensure it performs all steps described above
 * - Add assertions to the test to ensure it validates the expected
 *   behavior:
 *   - If the latest edit was not made by "Worstbull" update the steps above accordingly
 *   - Write your assertion to provide clear diagnostic feedback if it fails
 *
 * Good luck!
 */
export async function run(page: Page, params: {}) {
    /** STEP: Navigate to URL */
    await page.goto('https://www.wikipedia.org/');//navigate to Wikipedia homepage

    /** STEP: Enter text 'artificial' into the search input field */
    const searchInputField = page.getByRole('searchbox', {
        name: 'Search Wikipedia',
    });
    await searchInputField.fill('artificial');//locate search input field and enter text 'artificial'

    const suggestions=page.locator('.suggestion-link').filter({hasText:'Artificial intelligence'}).first();
    await suggestions.waitFor({state:'visible', timeout:5000});
    await suggestions.click();//wait for the suggestion and click on it
    
    /** STEP: Click the 'View history' link */
    const viewHistoryLink = page.getByRole('link', { name: 'View history' }).first();
    await viewHistoryLink.scrollIntoViewIfNeeded();//locate the view history link

    await viewHistoryLink.waitFor({ state: 'visible', timeout: 5000 });
    await Promise.all([
    page.waitForURL(/action=history/),
    viewHistoryLink.click()
    ]);// click the view history link
    
    /** STEP: Assert that the latest edit was made by the user "Worstbull" */
    // Use locator to find the latest edit user link
    const latestEditor = page.locator('#pagehistory .mw-userlink').first();//locate the latest edit user link
    await latestEditor.waitFor({ state: 'visible', timeout: 5000 });
    const editorName = (await latestEditor.textContent())?.trim();//get the latest edit user name
    console.log("Latest editor",editorName);//log the latest edit user name
    
    
    

}
