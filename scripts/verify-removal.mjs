import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto('http://localhost:5173', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1200));

  // Check that #telemetry is gone
  const telEl = await page.$('#telemetry');
  console.log('Telemetry element present?', !!telEl);

  // Scroll to #dockets and then #directory
  const docketEl = await page.$('#dockets');
  if (docketEl) {
    await page.evaluate(el => el.scrollIntoView({ behavior: 'instant', block: 'start' }), docketEl);
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: 'C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots/after-removal-dockets.png' });
  }

  const dirEl = await page.$('#directory');
  if (dirEl) {
    await page.evaluate(el => el.scrollIntoView({ behavior: 'instant', block: 'start' }), dirEl);
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: 'C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots/after-removal-directory.png' });
  }

  await browser.close();
  console.log('Verified removal.');
})();
