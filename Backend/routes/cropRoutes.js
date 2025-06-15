const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getAllRecords, addRecord } = require('../controllers/cropController');

router.get('/', auth, getAllRecords);
router.post('/', auth, addRecord);

module.exports = router;
