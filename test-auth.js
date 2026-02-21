const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/login');
  
  // Fill login
  await page.fill('input[name="email"]', 'abdullah.saeed1724@gmail.com');
  await page.fill('input[name="password"]', 'wrongpasswordfornow'); // Replace if I know it, or just use Supabase API
  
  await browser.close();
})();
