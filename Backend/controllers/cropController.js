const CropRecord = require('../models/CropRecord');

exports.getAllRecords = async (req, res) => {
  try {
    const records = await CropRecord.find({ user: req.user.id });
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch records", error });
  }
};

exports.addRecord = async (req, res) => {
  try {
    const { name, plantingDate, harvestDate, area, status, notes } = req.body;

    const newRecord = new CropRecord({
      user: req.user.id,
      name,
      plantingDate,
      harvestDate,
      area,
      status,
      notes
    });

    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(500).json({ message: "Failed to add record", error });
  }
};
