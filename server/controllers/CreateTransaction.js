const Transaction = require('../models/TransactionModel');
const User = require('../models/UserModel');

// Create a new transaction
const createTransaction = async (req, res) => {
    const { userId, amount, category, description } = req.body;
    
    try {
        // Create a new transaction
        const transaction = await Transaction.create({ userId, amount, category, description });

        // Find the user by ID and update their transactions array
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Add the transaction ID to the user's transactions array
        user.transactions.push(transaction._id);
        await user.save();  // Save the updated user document

        res.status(201).json({ message: "Transaction created successfully", transaction });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all transactions for a user
const listTransactions = async (req, res) => {
    const { userId } = req.params;
    try {
        const transactions = await Transaction.find({ userId });
        res.status(200).json({ transactions });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a transaction and remove it from the user's transactions array
const deleteTransaction = async (req, res) => {
    const { id } = req.params;
    try {
        // Find the transaction
        const transaction = await Transaction.findById(id);
        if (!transaction) {
            return res.status(404).json({ error: "Transaction not found" });
        }

        // Find the user who owns this transaction
        const user = await User.findById(transaction.userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Remove the transaction ID from the user's transactions array
        user.transactions = user.transactions.filter(
            (transactionId) => transactionId.toString() !== id
        );
        await user.save();  // Save the updated user document

        // Delete the transaction
        await Transaction.findByIdAndDelete(id);

        res.status(200).json({ message: "Transaction deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createTransaction, listTransactions, deleteTransaction };
