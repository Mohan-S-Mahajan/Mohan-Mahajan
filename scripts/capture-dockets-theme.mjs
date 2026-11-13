import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // Try connecting with retry
  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      await page.goto('http://localhost:5173', { waitUntil: 'domcontentloaded', timeout: 15000 });
      break;
    } catch (e) {
      console.log(`Attempt ${attempt} failed, waiting 1s...`);
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  // Wait for React to mount and hydrate
  await new Promise(r => setTimeout(r, 2000));

  // Scroll to #dockets
  const docketEl = await page.$('#dockets');
  if (docketEl) {
    await page.evaluate(el => el.scrollIntoView({ behavior: 'instant', block: 'center' }), docketEl);
    await new Promise(r => setTimeout(r, 1200));

    // Screenshot 1: Desktop Initial (Card 01 Active)
    await page.screenshot({
      path: 'C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots/dockets-theme-card01.png'
    });
    console.log('Saved dockets-theme-card01.png');

    // Click on Tab 02 (SANDPIPER)
    const buttons = await page.$$('button');
    for (const b of buttons) {
      const text = await page.evaluate(el => el.textContent, b);
      if (text && text.includes('SANDPIPER')) {
        await b.click();
        break;
      }
    }
    await new Promise(r => setTimeout(r, 1000));

    // Screenshot 2: Desktop Card 02 Active
    await page.screenshot({
      path: 'C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots/dockets-theme-card02.png'
    });
    console.log('Saved dockets-theme-card02.png');
  } else {
    console.log('Could not find #dockets');
  }

  // Mobile screenshot
  await page.setViewport({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 500));
  const docketElMobile = await page.$('#dockets');
  if (docketElMobile) {
    await page.evaluate(el => el.scrollIntoView({ behavior: 'instant', block: 'center' }), docketElMobile);
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({
      path: 'C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots/dockets-theme-mobile.png'
    });
    console.log('Saved dockets-theme-mobile.png');
  }

  await browser.close();
  console.log('All captures done.');
})();
