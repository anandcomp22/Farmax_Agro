const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  getAllRecords,
  addRecord,
  updateRecord,
  deleteRecord
} = require('../controllers/cropController');

// Existing
router.get('/', auth, getAllRecords);
router.post('/', auth, addRecord);

// ✅ New
router.put('/:id', auth, updateRecord);   // PUT /api/crops/:id
router.delete('/:id', auth, deleteRecord); // DELETE /api/crops/:id

module.exports = router;
