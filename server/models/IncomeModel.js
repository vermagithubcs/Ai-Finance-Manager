// models/IncomeModel.js
const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    source: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        default: ""
    }
});

const Income = mongoose.model('Income', IncomeSchema);
module.exports = Income;
