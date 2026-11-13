import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const SCREENSHOT_DIR = path.resolve('C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots');

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function captureThemes() {
  const profileDir = path.resolve(`temp_chrome_profile_${Date.now()}`);
  const browser = await puppeteer.launch({
    headless: true,
    userDataDir: profileDir,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    // 1. Desktop Viewport
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    // Directly set sessionStorage so gate is skipped
    await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' });
    await page.evaluate(() => {
      sessionStorage.setItem('has_entered_gate', 'true');
      sessionStorage.setItem('counsel_mode', 'saul');
      document.documentElement.setAttribute('data-mode', 'saul');
    });
    await page.reload({ waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 800));

    // A. Saul Mode Hero
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, 'theme-saul-hero-1440.png'),
    });
    console.log('Saved theme-saul-hero-1440.png');

    // B. Click Heisenberg Toggle Button
    const heisenbergBtn = await page.$('button ::-p-text(HEISENBERG)');
    if (heisenbergBtn) {
      await heisenbergBtn.click();
      console.log('Clicked HEISENBERG toggle button');
    } else {
      await page.evaluate(() => {
        document.documentElement.setAttribute('data-mode', 'heisenberg');
        sessionStorage.setItem('counsel_mode', 'heisenberg');
      });
    }
    await new Promise((r) => setTimeout(r, 600));

    // Capture Heisenberg Mode Hero
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, 'theme-heisenberg-hero-1440.png'),
    });
    console.log('Saved theme-heisenberg-hero-1440.png');

    // C. Scroll to Skills (Lab) in Heisenberg Mode
    await page.evaluate(() => {
      const el = document.getElementById('skills');
      if (el) el.scrollIntoView();
    });
    await new Promise((r) => setTimeout(r, 600));
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, 'theme-heisenberg-lab-1440.png'),
    });
    console.log('Saved theme-heisenberg-lab-1440.png');

    // D. Scroll to Contact in Heisenberg Mode
    await page.evaluate(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView();
    });
    await new Promise((r) => setTimeout(r, 600));
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, 'theme-heisenberg-contact-1440.png'),
    });
    console.log('Saved theme-heisenberg-contact-1440.png');

    // 2. Mobile Viewport
    const mobilePage = await browser.newPage();
    await mobilePage.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
    await mobilePage.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' });
    await mobilePage.evaluate(() => {
      sessionStorage.setItem('has_entered_gate', 'true');
      sessionStorage.setItem('counsel_mode', 'heisenberg');
      document.documentElement.setAttribute('data-mode', 'heisenberg');
    });
    await mobilePage.reload({ waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 800));

    // Capture Heisenberg Mobile View
    await mobilePage.screenshot({
      path: path.join(SCREENSHOT_DIR, 'theme-heisenberg-mobile-390.png'),
    });
    console.log('Saved theme-heisenberg-mobile-390.png');

  } catch (err) {
    console.error('Error during capture:', err);
  } finally {
    await browser.close();
    try {
      fs.rmSync(profileDir, { recursive: true, force: true });
    } catch {
      // safe ignore
    }
  }
}

captureThemes();
