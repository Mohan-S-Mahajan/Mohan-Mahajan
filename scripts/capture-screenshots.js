import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const SCREENSHOT_DIR = path.resolve('C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots');

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function capture() {
  const profileDir = path.resolve(`temp_chrome_profile_${Date.now()}`);
  const browser = await puppeteer.launch({
    headless: true,
    userDataDir: profileDir,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const viewports = [
    { name: '1440-desktop', width: 1440, height: 900 },
    { name: '820-tablet', width: 820, height: 1180 },
    { name: '390-mobile', width: 390, height: 844, isMobile: true, hasTouch: true },
  ];

  for (const vp of viewports) {
    console.log(`=== Processing Viewport: ${vp.name} ===`);
    const page = await browser.newPage();
    await page.setViewport({
      width: vp.width,
      height: vp.height,
      isMobile: !!vp.isMobile,
      hasTouch: !!vp.hasTouch,
    });

    // 1. Visit fresh page (Gate shows)
    await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 600));

    // Capture Gate
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, `gate-${vp.name}.png`),
    });
    console.log(`  Saved gate-${vp.name}.png`);

    // 2. Click "SKIP INTRO" or "ENTER WEBSITE" to dismiss gate
    await page.evaluate(() => {
      sessionStorage.setItem('has_entered_gate', 'true');
    });

    const skipBtn = await page.$('button ::-p-text(SKIP INTRO)');
    if (skipBtn) {
      await skipBtn.click();
    } else {
      const enterBtn = await page.$('button ::-p-text(ENTER WEBSITE)');
      if (enterBtn) await enterBtn.click();
    }

    // Wait for gate split transition to finish
    await new Promise((r) => setTimeout(r, 1400));

    // Capture Hero
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, `hero-${vp.name}.png`),
    });
    console.log(`  Saved hero-${vp.name}.png`);

    // Temporarily convert fixed elements to absolute so Chromium fullPage tile renderer doesn't ghost them at page bottom
    await page.evaluate(() => {
      if (window.lenis) window.lenis.destroy();
      document.querySelectorAll('header, .fixed').forEach(el => {
        el.style.position = 'absolute';
      });
      window.scrollTo(0, 0);
    });
    await new Promise((r) => setTimeout(r, 400));

    // Capture Full Page cleanly
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, `fullpage-${vp.name}.png`),
      fullPage: true,
    });
    console.log(`  Saved fullpage-${vp.name}.png`);

    // For desktop, capture specific closeups
    if (vp.name === '1440-desktop') {
      const sections = ['about', 'skills', 'work', 'experience', 'services', 'testimonials', 'process', 'contact'];
      for (const sec of sections) {
        const el = await page.$(`#${sec}`);
        if (el) {
          await el.screenshot({
            path: path.join(SCREENSHOT_DIR, `section-${sec}-1440.png`),
          });
          console.log(`  Saved section-${sec}-1440.png`);
        }
      }
    }

    await page.close();
  }

  await browser.close();
  console.log('All screenshots completed successfully!');
}

capture().catch((err) => {
  console.error('Screenshot capture error:', err);
  process.exit(1);
});
