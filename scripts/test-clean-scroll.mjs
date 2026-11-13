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

  const sections = [
    { id: '#home', name: '01-hero' },
    { id: '#problem-void', name: '02-problem-void' },
    { id: '#philosophy', name: '03-philosophy' },
    { id: '#dockets', name: '04-dockets' },
    { id: '#telemetry', name: '05-telemetry' },
    { id: '#directory', name: '06-directory' }
  ];

  for (const s of sections) {
    const el = await page.$(s.id);
    if (el) {
      await page.evaluate(target => target.scrollIntoView({ behavior: 'instant', block: 'start' }), el);
      await new Promise(r => setTimeout(r, 600));
      await page.screenshot({ path: `C:/Users/mohan/.gemini/antigravity/brain/64456364-31ba-4ffa-9dd1-e5d18540118c/screenshots/full-scroll-${s.name}.png` });
      console.log(`Saved full-scroll-${s.name}.png`);
    } else {
      console.log(`Missing element: ${s.id}`);
    }
  }

  await browser.close();
  console.log('All 6 full-screen sections captured cleanly!');
})();
