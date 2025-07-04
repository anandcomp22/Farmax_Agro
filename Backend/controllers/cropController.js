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

exports.updateRecord = async (req, res) => {
  try {
    const updated = await CropRecord.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Record not found" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Failed to update record", error });
  }
};

exports.deleteRecord = async (req, res) => {
  try {
    const deleted = await CropRecord.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    });
    if (!deleted) return res.status(404).json({ message: "Record not found" });
    res.json({ message: "Record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete record", error });
  }
};

