const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  getAllRecords,
  addRecord,
  updateRecord,
  deleteRecord
} = require('../controllers/cropController');

router.get('/', auth, getAllRecords);
router.post('/', auth, addRecord);

router.put('/:id', auth, updateRecord);  
router.delete('/:id', auth, deleteRecord); 

module.exports = router;
