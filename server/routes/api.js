const express = require('express');
const router = express.Router();
const DiaryEntry = require('../models/DiaryEntry'); // Adjust path as necessary

// POST /api/diary - Create a new diary entry
router.post('/diary', async (req, res) => {
    try {
        const { foodName, calories, protein, carbs, fat, servingSize, image, date } = req.body;

        // Basic validation
        if (!foodName || !calories || !protein || !carbs || !fat || !date) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const newEntry = new DiaryEntry({
            foodName,
            calories,
            protein,
            carbs,
            fat,
            servingSize,
            image,
            date
            // timestamp will be defaulted by schema
        });

        const savedEntry = await newEntry.save();
        res.status(201).json(savedEntry);
    } catch (error) {
        console.error('Error creating diary entry:', error);
        res.status(500).json({ message: 'Server error while creating diary entry' });
    }
});

// GET /api/diary/:date - Retrieve entries for a specific date
router.get('/diary/:date', async (req, res) => {
    try {
        const { date } = req.params;
        // Validate date format if necessary, though frontend should send YYYY-MM-DD
        const entries = await DiaryEntry.find({ date: date }).sort({ timestamp: 'desc' });
        res.status(200).json(entries);
    } catch (error) {
        console.error('Error fetching diary entries by date:', error);
        res.status(500).json({ message: 'Server error while fetching diary entries' });
    }
});

// DELETE /api/diary/:id - Delete an entry by its _id
router.delete('/diary/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEntry = await DiaryEntry.findByIdAndDelete(id);

        if (!deletedEntry) {
            return res.status(404).json({ message: 'Diary entry not found' });
        }
        res.status(200).json({ message: 'Diary entry deleted successfully', _id: id });
    } catch (error) {
        console.error('Error deleting diary entry:', error);
        // Check for CastError (invalid ID format)
        if (error.name === 'CastError') {
            return res.status(400).json({ message: 'Invalid ID format' });
        }
        res.status(500).json({ message: 'Server error while deleting diary entry' });
    }
});

// GET /api/history - Retrieve all entries, sorted by timestamp descending
router.get('/history', async (req, res) => {
    try {
        const entries = await DiaryEntry.find().sort({ timestamp: 'desc' });
        res.status(200).json(entries);
    } catch (error) {
        console.error('Error fetching history:', error);
        res.status(500).json({ message: 'Server error while fetching history' });
    }
});

module.exports = router;
