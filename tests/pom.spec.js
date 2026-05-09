import {test,expect} from '@playwright/test';
import {Loginpage} from '../Pages/Loginpage';
import {Homepage} from '../Pages/Homepage'; 
import {Cartpage} from '../Pages/Cartpage';

test('login flow', async({page})=>{   

const login=new Loginpage(page);
await login.gotologinpage();
await login.login('Arifa', 'Password@123');
await page.waitForTimeout(5000);

const home = new Homepage(page);
await home.addproducttocart('Nexus 6');
await home.gotocart();
await page.waitForTimeout(5000);

const cart = new Cartpage(page);
const isProductInCart = await cart.checkProductInCart('Nexus 6');
expect(isProductInCart).toBeTruthy();
})

