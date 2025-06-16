const puppeteer = require('puppeteer');

exports.getENAMMarketRates = async (req, res) => {
  const url = 'https://enam.gov.in/web/dashboard/trade-data';

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 0
    });

    // Wait up to 1.5 seconds for table to load
    await page.waitForSelector('table tbody tr', { timeout: 1500 });

    // DEBUG: Log HTML content for inspection (optional)
    const html = await page.content();
    console.log('Loaded HTML length:', html.length); // Shows page content length

    const rates = await page.$$eval('table tbody tr', rows => {
      return rows.map(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length === 7) {
          return {
            crop: cells[0]?.innerText.trim(),
            state: cells[1]?.innerText.trim(),
            market: cells[2]?.innerText.trim(),
            price: cells[3]?.innerText.trim(),
            quantity: cells[4]?.innerText.trim(),
            unit: cells[5]?.innerText.trim(),
            date: cells[6]?.innerText.trim()
          };
        } else {
          return null;
        }
      }).filter(Boolean); // remove nulls
    });

    await browser.close();

    if (rates.length === 0) {
      console.warn('⚠️ No rows extracted – possibly AJAX-loaded table.');
    }

    res.json(rates);
  } catch (error) {
    console.error('eNAM Puppeteer scrape error:', error.message);
    res.status(500).json({ message: 'Failed to scrape eNAM data' });
  }
};
