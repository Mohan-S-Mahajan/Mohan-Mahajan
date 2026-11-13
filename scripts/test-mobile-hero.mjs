import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });

  await page.goto('http://localhost:5173', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1200));

  await page.screenshot({ path: 'C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots/hero-mobile-only-name.png' });

  // Scroll down 150px
  await page.evaluate(() => window.scrollTo(0, 150));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots/navbar-mobile-scrolled.png' });

  await browser.close();
  console.log('Mobile screenshots captured');
})();
