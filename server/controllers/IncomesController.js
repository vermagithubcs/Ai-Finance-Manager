// controllers/IncomeController.js
const Income = require('../models/IncomeModel');
const User = require('../models/UserModel');

// Create a new income
const createIncome = async (req, res) => {
    const { userId, source, amount, description } = req.body;
    try {
        const income = await Income.create({ userId, source, amount, description });

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        user.incomes.push(income._id);
        await user.save();

        res.status(201).json({ message: "Income created successfully", income });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all incomes for a user
const listIncomes = async (req, res) => {
    const { userId } = req.params;
    try {
        const incomes = await Income.find({ userId });
        res.status(200).json({ incomes });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an income
const updateIncome = async (req, res) => {
    const { id } = req.params;
    const { source, amount, description } = req.body;
    try {
        const income = await Income.findByIdAndUpdate(
            id,
            { source, amount, description },
            { new: true }
        );
        if (!income) {
            return res.status(404).json({ error: "Income not found" });
        }

        res.status(200).json({ message: "Income updated successfully", income });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete an income
const deleteIncome = async (req, res) => {
    const { id } = req.params;
    try {
        const income = await Income.findByIdAndDelete(id);
        if (!income) {
            return res.status(404).json({ error: "Income not found" });
        }

        res.status(200).json({ message: "Income deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createIncome, listIncomes, updateIncome, deleteIncome };
