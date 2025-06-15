const MarketRate = require('../models/MarketRate');

// mock data loader - just for first use or reset
exports.loadMockMarketRates = async (req, res) => {
  try {
    await MarketRate.deleteMany();

    const mockRates = [
      { cropName: 'Wheat', price: 2200, market: 'Central Market', trend: 'up', date: new Date() },
      { cropName: 'Rice', price: 3100, market: 'Regional Hub', trend: 'down', date: new Date() },
      { cropName: 'Maize', price: 1800, market: 'Local Market', trend: 'stable', date: new Date() }
    ];

    await MarketRate.insertMany(mockRates);
    res.json({ message: 'Mock market rates loaded.' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to load mock rates', error });
  }
};

// get rates
exports.getMarketRates = async (req, res) => {
  try {
    const rates = await MarketRate.find().sort({ date: -1 });
    res.json(rates);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch market rates', error });
  }
};
