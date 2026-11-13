import puppeteer from 'puppeteer';
import path from 'path';

const SCREENSHOT_DIR = path.resolve('C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots');

async function captureMobileSections() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });

  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
  await page.evaluate(() => sessionStorage.setItem('has_entered_gate', 'true'));
  await page.reload({ waitUntil: 'networkidle0' });

  // 1. Mobile Menu Open View
  const menuBtn = await page.$('button[aria-label="Open Menu"]');
  if (menuBtn) {
    await menuBtn.click();
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'mobile-menu-390.png') });
    const closeBtn = await page.$('button[aria-label="Close Navigation Menu"]');
    if (closeBtn) await closeBtn.click();
    await new Promise(r => setTimeout(r, 400));
  }

  // 2. Capture mobile sections individually
  const sections = ['home', 'about', 'skills', 'work', 'experience', 'services', 'testimonials', 'process', 'contact'];
  for (const s of sections) {
    const el = await page.$(`#${s}`);
    if (el) {
      await el.screenshot({ path: path.join(SCREENSHOT_DIR, `mobile-${s}-390.png`) });
      console.log(`Captured mobile-${s}-390.png`);
    }
  }

  await browser.close();
  console.log('Mobile section screenshots captured successfully!');
}

captureMobileSections().catch(console.error);
