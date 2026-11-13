import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 15000 });
  await new Promise(r => setTimeout(r, 600));

  // Scroll to Screen 3: Operating Philosophy
  await page.evaluate(() => window.scrollTo(0, 1850));
  
  // 1. Capture during initial matrix decrypt
  await new Promise(r => setTimeout(r, 300));
  await page.screenshot({ path: 'C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots/philosophy-decrypting.png' });

  // 2. Capture when fully decrypted with luminous spotlight
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: 'C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots/philosophy-luminous-resolved.png' });

  // 3. Move mouse over the quote to test cursor spotlight & hover re-encrypt
  await page.mouse.move(500, 480);
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: 'C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots/philosophy-cursor-spotlight.png' });

  await browser.close();
  console.log('Operating Philosophy animation screenshots captured');
})();
