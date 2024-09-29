const Budget = require('../models/BudgetModel');

// Create a new budget
const createBudget = async (req, res) => {
    const { userId, currentAmount, category, limit, startDate, endDate } = req.body;
    try {
        const budget = await Budget.create({ userId, currentAmount, category, limit, startDate, endDate });
        res.status(201).json({ message: "Budget created successfully", budget });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all budgets for a user
const listBudgets = async (req, res) => {
    const { userId } = req.params;
    try {
        const budgets = await Budget.find({ userId });
        res.status(200).json({ budgets });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a budget
const updateBudget = async (req, res) => {
    const { id } = req.params;
    const { limit } = req.body;
    try {
        const budget = await Budget.findByIdAndUpdate(id, { limit }, { new: true });
        if (!budget) {
            return res.status(404).json({ error: "Budget not found" });
        }
        res.status(200).json({ message: "Budget updated successfully", budget });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a budget
const deleteBudget = async (req, res) => {
    const { id } = req.params;
    try {
        const budget = await Budget.findByIdAndDelete(id);
        if (!budget) {
            return res.status(404).json({ error: "Budget not found" });
        }
        res.status(200).json({ message: "Budget deleted successfully", budget });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createBudget, listBudgets, updateBudget, deleteBudget };
