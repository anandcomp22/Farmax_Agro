const express = require('express');
const router = express.Router();
const { getMarketRates, loadMockMarketRates } = require('../controllers/marketController');
const auth = require('../middleware/authMiddleware');

router.get('/', auth, getMarketRates);

router.post('/mock', loadMockMarketRates);

module.exports = router;
