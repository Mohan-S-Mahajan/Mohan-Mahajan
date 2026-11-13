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

  const el = await page.$('#problem-void');
  if (el) {
    await page.evaluate(target => target.scrollIntoView({ behavior: 'instant', block: 'center' }), el);
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: 'C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots/current-problem-void-1440.png' });
    console.log('Saved current-problem-void-1440.png');
  }

  await browser.close();
  console.log('Done');
})();
