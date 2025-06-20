const mongoose = require('mongoose');

const cropPriceSchema = new mongoose.Schema({
  crop: String,
  state: String,
  market: String,
  price: String,
  quantity: String,
  unit: String,
  date: String
}, { timestamps: true });

module.exports = mongoose.model('CropPrice', cropPriceSchema);
