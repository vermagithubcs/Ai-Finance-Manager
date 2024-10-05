const RecurringExpense = require("../models/ReccurringExpensesModel");
const User = require("../models/UserModel");

// Create a new recurring expense
const createRecurringExpense = async (req, res) => {
  const { userId, amount, category, frequency, nextPaymentDate, description } = req.body;
  
  try {
    // Create a new recurring expense
    const recurringExpense = await RecurringExpense.create({
      userId,
      amount,
      category,
      frequency,
      nextPaymentDate,
      description,
    });

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Add the recurring expense ID to the user's expenses array
    user.expenses.push(recurringExpense._id);
    await user.save(); // Save the updated user document

    res.status(201).json({
      message: "Recurring expense created successfully",
      recurringExpense,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all recurring expenses for a user
const listRecurringExpenses = async (req, res) => {
  const { userId } = req.params;
  
  try {
    // Fetch all recurring expenses for the specified user
    const recurringExpenses = await RecurringExpense.find({ userId });

    res.status(200).json({ recurringExpenses });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a recurring expense
const updateRecurringExpense = async (req, res) => {
  const { id } = req.params;
  const { nextPaymentDate, amount, category, frequency, description } = req.body;

  try {
    // Find and update the recurring expense by ID
    const recurringExpense = await RecurringExpense.findByIdAndUpdate(
      id,
      { nextPaymentDate, amount, category, frequency, description },
      { new: true }
    );

    if (!recurringExpense) {
      return res.status(404).json({ error: "Recurring expense not found" });
    }

    // Find the user associated with the recurring expense
    const user = await User.findById(recurringExpense.userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the recurring expense ID is already in the user's expenses array
    if (!user.expenses.includes(recurringExpense._id)) {
      // Add it to the user's expenses array if not present
      user.expenses.push(recurringExpense._id);
      await user.save(); // Save the updated user document
    }

    res.status(200).json({
      message: "Recurring expense updated successfully",
      recurringExpense,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a recurring expense
const deleteRecurringExpense = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  
  try {
    // Find and delete the recurring expense by ID
    const recurringExpense = await RecurringExpense.findByIdAndDelete(id);

    if (!recurringExpense) {
      return res.status(404).json({ error: "Recurring expense not found" });
    }

    // Remove the expense ID from the user's expenses array
    await User.updateOne({ _id: userId }, { $pull: { expenses: id } });

    res.status(200).json({ message: "Recurring expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createRecurringExpense,
  listRecurringExpenses,
  updateRecurringExpense,
  deleteRecurringExpense,
};
