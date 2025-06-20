const puppeteer = require('puppeteer');
const CropPrice = require('../models/CropPrice');

exports.getENAMMarketRates = async (req, res) => {
  const cropQuery = req.query.crop?.toLowerCase();
  const stateQuery = req.query.state?.toLowerCase();

  try {
    // 1. Check if recent data exists (last 6 hours)
    const sixHoursAgo = new Date(Date.now() - 6 * 60 * 60 * 1000);
    const cached = await CropPrice.find({ updatedAt: { $gte: sixHoursAgo } });

    if (cached.length > 0) {
      console.log('✅ Using cached market data');
      const filtered = cached.filter(entry =>
        (!cropQuery || entry.crop.toLowerCase().includes(cropQuery)) &&
        (!stateQuery || entry.state.toLowerCase().includes(stateQuery))
      );
      return res.json(filtered);
    }

    // 2. Scrape fresh data if not cached
    console.log('🌐 Scraping fresh market data...');
    const browser = await puppeteer.launch({ headless: "new", args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto('https://enam.gov.in/web/dashboard/trade-data', { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('table tbody tr', { timeout: 15000 });

    const data = await page.$$eval('table tbody tr', rows => {
      return rows.map(row => {
        const cols = row.querySelectorAll('td');
        if (cols.length === 7) {
          return {
            crop: cols[0].innerText.trim(),
            state: cols[1].innerText.trim(),
            market: cols[2].innerText.trim(),
            price: cols[3].innerText.trim(),
            quantity: cols[4].innerText.trim(),
            unit: cols[5].innerText.trim(),
            date: cols[6].innerText.trim()
          };
        }
        return null;
      }).filter(Boolean);
    });

    await browser.close();

    // 3. Replace old data with new
    await CropPrice.deleteMany({});
    await CropPrice.insertMany(data);

    // 4. Filter if query given
    const filtered = data.filter(entry =>
      (!cropQuery || entry.crop.toLowerCase().includes(cropQuery)) &&
      (!stateQuery || entry.state.toLowerCase().includes(stateQuery))
    );

    res.json(filtered);
  } catch (err) {
    console.error('eNAM scraping error:', err.message);
    res.status(500).json({ message: 'Failed to get market data' });
  }
};
