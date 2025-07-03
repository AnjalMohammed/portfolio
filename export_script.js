const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Use absolute file path
  const filePath = path.resolve('~/Desktop/code repos/portfolio/index.html'.replace('~', process.env.HOME));
  const fileUrl = `file://${filePath}`;

  await page.goto(fileUrl, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: 'AnjalMohammed_Portfolio.pdf',
    format: 'A4',
    landscape: true, 
    printBackground: true,
  });

  await browser.close();
})();