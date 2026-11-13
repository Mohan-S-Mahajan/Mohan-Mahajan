import puppeteer from 'puppeteer';
import path from 'path';

const outDir = 'C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots';

async function capture() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => {
    sessionStorage.setItem('has_entered_gate', 'true');
    sessionStorage.setItem('counsel_mode', 'whsp');
  });

  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1200));

  await page.setViewport({ width: 1440, height: 900 });

  // Scroll down 750px to capture the massive { whsp } and pills stack
  await page.evaluate(() => window.scrollTo(0, 750));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, 'whsp-desktop-pills.png'), fullPage: false });

  await browser.close();
  console.log('Pills screenshot captured!');
}

capture().catch(console.error);
