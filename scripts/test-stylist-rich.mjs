import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });

  // 1. Desktop 1440x950
  const page1440 = await browser.newPage();
  await page1440.setViewport({ width: 1440, height: 950 });
  await page1440.goto('http://127.0.0.1:5173/', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 2000));

  const info1440 = await page1440.evaluate(() => {
    const el = document.getElementById('problem-void');
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, height: el.offsetHeight, windowHeight: window.innerHeight };
  });

  const scroll80 = info1440.top + (info1440.height - info1440.windowHeight) * 0.82;
  await page1440.evaluate((y) => {
    window.scrollTo({ top: y, behavior: 'instant' });
  }, scroll80);
  await new Promise(r => setTimeout(r, 900));

  await page1440.screenshot({ path: 'C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots/stylist-rich-quote-1440.png' });
  console.log('Saved stylist-rich-quote-1440.png');

  // Closeup of left column
  const leftColClip = await page1440.evaluate(() => {
    const el = document.querySelector('#problem-void h2');
    if (!el) return null;
    const parent = el.closest('.lg\\:col-span-7') || el.parentElement;
    const rect = parent.getBoundingClientRect();
    return {
      x: Math.max(0, rect.left - 30),
      y: Math.max(0, rect.top - 50),
      width: rect.width + 60,
      height: rect.height + 100,
    };
  });

  if (leftColClip) {
    await page1440.screenshot({
      path: 'C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots/stylist-rich-quote-closeup.png',
      clip: leftColClip,
    });
    console.log('Saved stylist-rich-quote-closeup.png');
  }

  // 2. Laptop 1280x800
  const page1280 = await browser.newPage();
  await page1280.setViewport({ width: 1280, height: 800 });
  await page1280.goto('http://127.0.0.1:5173/', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1500));
  const info1280 = await page1280.evaluate(() => {
    const el = document.getElementById('problem-void');
    const rect = el.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, height: el.offsetHeight, windowHeight: window.innerHeight };
  });
  await page1280.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), info1280.top + (info1280.height - info1280.windowHeight) * 0.82);
  await new Promise(r => setTimeout(r, 800));
  await page1280.screenshot({ path: 'C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots/stylist-rich-quote-1280.png' });
  console.log('Saved stylist-rich-quote-1280.png');

  // 3. Mobile 390x844
  const page390 = await browser.newPage();
  await page390.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page390.goto('http://127.0.0.1:5173/', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 1500));
  await page390.evaluate(() => {
    const el = document.getElementById('problem-void');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 800));
  await page390.screenshot({ path: 'C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots/stylist-rich-mobile-390.png' });
  console.log('Saved stylist-rich-mobile-390.png');

  await browser.close();
  console.log('Done captures');
})();
