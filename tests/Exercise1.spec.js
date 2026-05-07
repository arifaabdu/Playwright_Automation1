import{test,expect} from '@playwright/test';
test('login flow', async({page})=>{
    await page.goto('https://practicesoftwaretesting.com/');
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/');
    await page.getByRole('link', {name: 'Sign in'}).click();
    await page.getByRole('link', {name: 'Register your account'}).click();
    await page.fill('#first_name', 'Arifa')
    await page.fill('#last_name', 'A')
    await page.fill('#dob', '2002-11-11')
    await page.locator('#country').selectOption('IN'); 
    await page.fill('#postal_code', '34534');
    await page.fill('#house_number', '546')
    await page.fill('#street', '546')
    await page.getByPlaceholder('Your City *').fill('Bangalore');
    await page.getByPlaceholder('Your State *').fill('Karnataka');
    await page.fill('#phone', '3456789012');
    await page.fill('#email', 'arifaabdul15@gmailcom')
    await page.fill('#password', 'Password@123@123#');
    await page.getByText('Register').scrollIntoViewIfNeeded();
    await page.getByText('Register').click();


    await page.waitForTimeout(5000);

    
}
)
