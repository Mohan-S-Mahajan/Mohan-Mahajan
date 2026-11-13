import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

const outDir = 'C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function capture() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1500));

  // Hero Desktop
  await page.screenshot({ path: path.join(outDir, 'whsp-final-hero.png'), fullPage: false });

  // Scroll to Pills area
  await page.evaluate(() => window.scrollTo(0, 720));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, 'whsp-final-pills.png'), fullPage: false });

  // Scroll to Process / Service Flow
  await page.evaluate(() => {
    document.getElementById('process')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, 'whsp-final-flow.png'), fullPage: false });

  // Scroll to Team / About
  await page.evaluate(() => {
    document.getElementById('about')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, 'whsp-final-team.png'), fullPage: false });

  // Scroll to Case Files / Projects
  await page.evaluate(() => {
    document.getElementById('work')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, 'whsp-final-projects.png'), fullPage: false });

  // Scroll to Contact
  await page.evaluate(() => {
    document.getElementById('contact')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, 'whsp-final-contact.png'), fullPage: false });

  // Mobile viewport test (390px iPhone)
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, 'whsp-final-mobile-hero.png'), fullPage: false });

  await page.evaluate(() => window.scrollTo(0, 680));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, 'whsp-final-mobile-pills.png'), fullPage: false });

  await browser.close();
  console.log('All final screenshots captured successfully!');
}

capture().catch(console.error);
