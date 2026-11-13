import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 950 });

  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1500));

  // Get #dockets geometry
  const docketsInfo = await page.evaluate(() => {
    const el = document.getElementById('dockets');
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      height: el.offsetHeight,
      windowHeight: window.innerHeight,
    };
  });

  console.log('Dockets Info:', docketsInfo);

  if (!docketsInfo) {
    console.error('Could not find #dockets');
    await browser.close();
    return;
  }

  const startY = docketsInfo.top;
  const maxScroll = docketsInfo.height - docketsInfo.windowHeight;

  // Capture helper
  const captureAt = async (scrollY, filename) => {
    await page.evaluate((y) => {
      window.scrollTo({ top: y, behavior: 'instant' });
    }, scrollY);
    await new Promise(r => setTimeout(r, 900));

    const activeTitle = await page.evaluate(() => {
      const el = document.querySelector('.docket-card-slot.is-active-slot .docket-card-title');
      return el ? el.textContent.trim() : 'Unknown';
    });

    await page.screenshot({
      path: `C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots/${filename}`,
    });
    console.log(`Saved ${filename} at scrollY=${scrollY.toFixed(0)} (Active Case: ${activeTitle})`);
  };

  // Case 01: 5%
  await captureAt(startY + maxScroll * 0.05, 'dockets-scroll-case-01.png');

  // Case 02: 22%
  await captureAt(startY + maxScroll * 0.22, 'dockets-scroll-case-02.png');

  // Case 03: 40%
  await captureAt(startY + maxScroll * 0.40, 'dockets-scroll-case-03.png');

  // Case 04: 58%
  await captureAt(startY + maxScroll * 0.58, 'dockets-scroll-case-04.png');

  // Case 05: 75%
  await captureAt(startY + maxScroll * 0.75, 'dockets-scroll-case-05.png');

  // Case 06: 92%
  await captureAt(startY + maxScroll * 0.92, 'dockets-scroll-case-06.png');

  // Unpinned transition to directory
  await captureAt(startY + maxScroll + 350, 'dockets-scroll-unpinned-directory.png');

  await browser.close();
  console.log('All docket scroll captures completed successfully.');
})();
