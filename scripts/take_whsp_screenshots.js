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
  
  // Set localStorage/sessionStorage to bypass entry gate and set whsp mode
  await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => {
    sessionStorage.setItem('has_entered_gate', 'true');
    sessionStorage.setItem('counsel_mode', 'whsp');
  });

  // Reload to apply
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1500));

  // Desktop view
  await page.setViewport({ width: 1440, height: 900 });
  await page.screenshot({ path: path.join(outDir, 'whsp-desktop-hero.png'), fullPage: false });

  // Scroll to Process
  await page.evaluate(() => {
    document.getElementById('process')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, 'whsp-desktop-process.png'), fullPage: false });

  // Scroll to About / Team
  await page.evaluate(() => {
    document.getElementById('about')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, 'whsp-desktop-team.png'), fullPage: false });

  // Scroll to Contact
  await page.evaluate(() => {
    document.getElementById('contact')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, 'whsp-desktop-contact.png'), fullPage: false });

  // Mobile view
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outDir, 'whsp-mobile-hero.png'), fullPage: false });

  await browser.close();
  console.log('All screenshots captured successfully in outDir!');
}

capture().catch(console.error);
