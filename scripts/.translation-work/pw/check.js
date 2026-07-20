const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8000/hero.html?hero=achlys-alice', { waitUntil: 'networkidle' });
  await page.evaluate(() => localStorage.setItem('mla-lang', 'fr'));
  await page.reload({ waitUntil: 'networkidle' });
  const text = await page.evaluate(() => document.body.innerText);
  console.log(text.slice(0, 3000));
  await browser.close();
})();
