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

  // 1. Initial State (at top, scrollY = 0)
  await page.screenshot({ path: 'C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots/hero-only-name-and-bg.png' });
  console.log('Saved hero-only-name-and-bg.png');

  // Check navbar visibility in initial state
  const headerVisibleInitial = await page.evaluate(() => {
    const header = document.querySelector('header');
    if (!header) return null;
    const style = window.getComputedStyle(header);
    return {
      opacity: style.opacity,
      transform: style.transform,
      pointerEvents: style.pointerEvents,
      classes: header.className
    };
  });
  console.log('Initial header state:', headerVisibleInitial);

  // 2. Scroll 150px down
  await page.evaluate(() => window.scrollTo(0, 150));
  await new Promise(r => setTimeout(r, 800));

  await page.screenshot({ path: 'C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots/navbar-revealed-on-scroll.png' });
  console.log('Saved navbar-revealed-on-scroll.png');

  const headerVisibleScrolled = await page.evaluate(() => {
    const header = document.querySelector('header');
    if (!header) return null;
    const style = window.getComputedStyle(header);
    return {
      opacity: style.opacity,
      transform: style.transform,
      pointerEvents: style.pointerEvents
    };
  });
  console.log('Scrolled header state:', headerVisibleScrolled);

  await browser.close();
  console.log('Verification done');
})();
