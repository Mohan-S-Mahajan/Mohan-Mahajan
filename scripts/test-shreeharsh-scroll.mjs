import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 950 });

  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 2000));

  // Get problem-void offset
  const problemVoidInfo = await page.evaluate(() => {
    const el = document.getElementById('problem-void');
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      height: el.offsetHeight,
      windowHeight: window.innerHeight,
    };
  });

  console.log('Problem Void Info:', problemVoidInfo);

  if (!problemVoidInfo) {
    console.error('Could not find problem-void');
    await browser.close();
    return;
  }

  // Helper to scroll to specific y and capture
  const captureAt = async (scrollY, filename) => {
    await page.evaluate((y) => {
      window.scrollTo({ top: y, behavior: 'instant' });
    }, scrollY);
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: `C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots/${filename}` });
    console.log(`Saved ${filename} at scrollY=${scrollY}`);
  };

  const startY = problemVoidInfo.top;
  const maxScroll = problemVoidInfo.height - problemVoidInfo.windowHeight;

  // 1. Initial entry (0%)
  await captureAt(startY, 'scroll-step-00-start.png');

  // 2. 25% scroll runway (Line 1 lights up, switcher & initial pills)
  await captureAt(startY + maxScroll * 0.25, 'scroll-step-01-25pct.png');

  // 3. 50% scroll runway (Line 2 & Line 3 light up, middle pills cascade)
  await captureAt(startY + maxScroll * 0.50, 'scroll-step-02-50pct.png');

  // 4. 80% scroll runway (Everything fully illuminated & dispatch terminal ready)
  await captureAt(startY + maxScroll * 0.80, 'scroll-step-03-80pct.png');

  // 5. Unpinned next section transition
  await captureAt(startY + maxScroll + 300, 'scroll-step-04-next-section.png');

  await browser.close();
  console.log('All scroll captures completed.');
})();
