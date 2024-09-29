const mongoose = require('mongoose');

const RecurringExpenseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    frequency: {
        type: String,
        required: true // e.g., 'monthly', 'weekly'
    },
    nextPaymentDate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: false
    }
}, { timestamps: true });

const RecurringExpense = mongoose.model('RecurringExpense', RecurringExpenseSchema);

module.exports = RecurringExpense;
