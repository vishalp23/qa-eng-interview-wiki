import { Page, expect } from '@playwright/test';

/**
 * This test was generated using Ranger's test recording tool. The test is supposed to:
 * 1. Navigate to Wikipedia's homepage
 * 2. Assert there are less than 7,000,000 articles in English
 * 3. Assert the page's text gets smaller when the 'Small' text size option is selected
 * 4. Assert the page's text gets larger when the 'Large' text size option is selected
 * 5. Assert the page's text goes back to the default size when the 'Standard' text size option is selected
 *
 * Instructions: Run the test and ensure it performs all steps described above
 *
 * Good luck!
 */
export async function run(page: Page, params: {}) {
    /** STEP: Navigate to URL */
    await page.goto('https://en.wikipedia.org/wiki/Main_Page');// nav to main page

    const totalArticlesLink = page.locator('#articlecount a').filter({
        hasText: /^[0-9,]+$/
    }).nth(1);//locate the second link inside the articlecount div
    const countText=await totalArticlesLink.textContent();
    const countNumber=Number(countText?.replace(/,/g, '')||0);
    expect(countNumber).toBeLessThan(7_000_000);// extract the number of articles and assert it is less than 7,000,000
    
    const smallTextSizeOption = page.getByRole('radio', { name: 'Small' });// locate the small text size option
    const largeTextSizeOption = page.getByRole('radio', { name: 'Large' });// locate the large text size option
    const standardTextSizeButton = page.locator('#skin-client-pref-vector-feature-custom-font-size-value-1');// locate the standard text size option
    
    /** STEP: Select the 'Small' text size option in the appearance settings */
    
    await smallTextSizeOption.waitFor({state:'visible', timeout:10000});
    await smallTextSizeOption.click();// click the small text size option
    console.log("Set font size to Small");

    /** STEP: Click the 'Large' text size option to change the display size */
    await largeTextSizeOption.waitFor({state:'visible', timeout:10000});
    await largeTextSizeOption.click();// click the large text size option
    console.log("Set font size to Large");
    
    /** STEP: Click the 'Standard' text size option in the appearance settings */
    await standardTextSizeButton.waitFor({state:'visible', timeout:10000});
    await standardTextSizeButton.click();// click the standard text size option
    console.log("Set font size to Standard");

    /** STEP: Click the link to view the total number of articles in English */
    await totalArticlesLink.waitFor({state:'visible', timeout:10000});
    await totalArticlesLink.click();// click the total articles link
    console.log("Clicked on Total Articles Link",countNumber);
    
}
