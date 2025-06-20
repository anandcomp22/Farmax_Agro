const mongoose = require('mongoose');

const cropRecordSchema = new mongoose.Schema({
  farmerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  crop: String,
  area: Number,
  plantingDate: Date,
  harvestDate: Date,
  status: String, 
  notes: String
}, { timestamps: true });

module.exports = mongoose.model('CropRecord', cropRecordSchema);
