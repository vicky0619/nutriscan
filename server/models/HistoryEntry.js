const mongoose = require('mongoose');

// HistoryEntry stores an immutable log of every scan / analysis result.
// It is intentionally separate from DiaryEntry so that diary items can be
// edited or deleted without losing the original scan record.
// TODO: hook up authentication and replace `userId` with the proper user
// reference once multi-user is introduced.
const historyEntrySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        index: true
    },
    foodName: {
        type: String,
        required: true,
        index: true
    },
    calories: {
        type: Number,
        required: true
    },
    protein: {
        type: Number,
        required: true
    },
    carbs: {
        type: Number,
        required: true
    },
    fat: {
        type: Number,
        required: true
    },
    servingSize: {
        type: String,
        default: '1 serving'
    },
    image: {
        type: String
    },
    scannedAt: {
        type: Date,
        default: Date.now,
        index: true
    }
});

module.exports = mongoose.model('HistoryEntry', historyEntrySchema);
