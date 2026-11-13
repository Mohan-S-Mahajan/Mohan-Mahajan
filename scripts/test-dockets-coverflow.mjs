import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1000));

  // Find #dockets element and scroll to it
  const docketElement = await page.$('#dockets');
  if (docketElement) {
    await page.evaluate(el => el.scrollIntoView({ behavior: 'instant', block: 'center' }), docketElement);
    await new Promise(r => setTimeout(r, 1000));
    
    // Screenshot 1: Desktop Initial (Card 01 Active)
    await page.screenshot({
      path: 'C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots/dockets-coverflow-card01.png'
    });
    console.log('Saved dockets-coverflow-card01.png');

    // Click on Tab 02 (SANDPIPER)
    const tabs = await page.$$('button');
    for (const b of tabs) {
      const text = await page.evaluate(el => el.textContent, b);
      if (text && text.includes('SANDPIPER')) {
        await b.click();
        break;
      }
    }
    await new Promise(r => setTimeout(r, 1000));

    // Screenshot 2: Desktop Card 02 Active (Sandpiper)
    await page.screenshot({
      path: 'C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots/dockets-coverflow-card02.png'
    });
    console.log('Saved dockets-coverflow-card02.png');
  }

  // Mobile test
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 800));
  const docketMobile = await page.$('#dockets');
  if (docketMobile) {
    await page.evaluate(el => el.scrollIntoView({ behavior: 'instant', block: 'center' }), docketMobile);
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({
      path: 'C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots/dockets-coverflow-mobile.png'
    });
    console.log('Saved dockets-coverflow-mobile.png');
  }

  await browser.close();
  console.log('All screenshots complete');
})();
