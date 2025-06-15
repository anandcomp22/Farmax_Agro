const mongoose = require('mongoose');

const cropRecordSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: String,
  plantingDate: Date,
  harvestDate: Date,
  area: Number,  // in acres
  status: {
    type: String,
    enum: ['growing', 'harvested', 'failed'],
    default: 'growing'
  },
  notes: String
}, { timestamps: true });

module.exports = mongoose.model('CropRecord', cropRecordSchema);
