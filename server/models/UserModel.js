const mongoose = require('mongoose');

// Define User Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    transactions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Transaction' 
        }
    ],
    expenses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'RecurringExpense'
        }
    ],
    Incomes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Income'
        }
    ],
    budgets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Budget'  // This will reference the Budget model
        }
    ],
    // Optional profile fields
    profilePic: {
        type: String, // Can be a URL to a profile image
        default: ''
    },
    phoneNumber: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
}, { timestamps: true });

// Create User Model
const User = mongoose.model('User', UserSchema);

module.exports = User;
