const RecurringExpense = require('../models/ReccurringExpensesModel');

// Create a new recurring expense
const createRecurringExpense = async (req, res) => {
    const { userId, amount, category, frequency, nextPaymentDate, description } = req.body;
    try {
        const recurringExpense = await RecurringExpense.create({ userId, amount, category, frequency, nextPaymentDate, description });
        res.status(201).json({ message: "Recurring expense created successfully", recurringExpense });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all recurring expenses for a user
const listRecurringExpenses = async (req, res) => {
    const { userId } = req.params;
    try {
        const recurringExpenses = await RecurringExpense.find({ userId });
        res.status(200).json({ recurringExpenses });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a recurring expense
const updateRecurringExpense = async (req, res) => {
    const { id } = req.params;
    const { nextPaymentDate } = req.body;
    try {
        const recurringExpense = await RecurringExpense.findByIdAndUpdate(id, { nextPaymentDate }, { new: true });
        if (!recurringExpense) {
            return res.status(404).json({ error: "Recurring expense not found" });
        }
        res.status(200).json({ message: "Recurring expense updated successfully", recurringExpense });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a recurring expense
const deleteRecurringExpense = async (req, res) => {
    const { id } = req.params;
    try {
        const recurringExpense = await RecurringExpense.findByIdAndDelete(id);
        if (!recurringExpense) {
            return res.status(404).json({ error: "Recurring expense not found" });
        }
        res.status(200).json({ message: "Recurring expense deleted successfully", recurringExpense });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createRecurringExpense, listRecurringExpenses, updateRecurringExpense, deleteRecurringExpense };
