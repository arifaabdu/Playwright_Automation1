const {test,expect}=require('@playwright/test');
test('Locators', async({page}) => {
    await page.goto('https://lacps--qa1.sandbox.my.site.com/s/');
    await page.getByText('Close', { exact: true }).click()
    await page.click("//button[normalize-space()='Log In']");
    await page.fill('#username', 'arifa.a@unisys.com');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.fill("input[id='password']",'Password@123');
    await page.click("//button[normalize-space()='Continue']");
    page.close();


} )

