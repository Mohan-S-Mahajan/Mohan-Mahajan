import puppeteer from 'puppeteer';
import path from 'path';

const SCREENSHOT_DIR = path.resolve('C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots');

async function run() {
  const profileDir = path.resolve(`temp_chrome_profile_${Date.now()}`);
  const browser = await puppeteer.launch({
    headless: true,
    userDataDir: profileDir,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });

  // Dismiss gate
  await page.evaluate(() => {
    sessionStorage.setItem('has_entered_gate', 'true');
  });
  const skip = await page.$('button ::-p-text(SKIP INTRO)');
  if (skip) await skip.click();

  await new Promise(r => setTimeout(r, 1200));

  // Measure actual document height
  const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log('Measured bodyHeight:', bodyHeight);

  // Resize viewport to full body height
  await page.setViewport({ width: 390, height: bodyHeight });
  await new Promise(r => setTimeout(r, 600));

  await page.screenshot({
    path: path.join(SCREENSHOT_DIR, 'fullpage-390-mobile.png'),
    fullPage: false,
  });

  console.log('Clean mobile screenshot taken!');
  await browser.close();
}

run().catch(console.error);
