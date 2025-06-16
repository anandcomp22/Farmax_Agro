const express = require('express');
const router = express.Router();
const { getENAMMarketRates } = require('../controllers/enamController');
const auth = require('../middleware/authMiddleware');

router.get('/enam', auth, getENAMMarketRates);

module.exports = router;
