const SavingsGoal = require('../models/GoalModel');
const User = require('../models/UserModel');

// Create a new savings goal
const createSavingsGoal = async (req, res) => {
    const { userId, goalName, targetAmount, deadline } = req.body;
    try {
        // Create a new savings goal
        const savingsGoal = await SavingsGoal.create({ userId, goalName, targetAmount, deadline });

        // Find the user and add the savings goal to their goals array
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        user.goals.push(savingsGoal._id);  // Add goal ID to the user's goals array
        await user.save();  // Save the updated user document

        res.status(201).json({ message: "Savings goal created successfully", savingsGoal });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all savings goals for a user
const listSavingsGoals = async (req, res) => {
    const { userId } = req.params;
    try {
        const savingsGoals = await SavingsGoal.find({ userId });
        res.status(200).json({ savingsGoals });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a savings goal
const updateSavingsGoal = async (req, res) => {
    const { id } = req.params;
    const { goalName, targetAmount, deadline } = req.body;
    try {
        const savingsGoal = await SavingsGoal.findByIdAndUpdate(id, { goalName, targetAmount, deadline }, { new: true });
        if (!savingsGoal) {
            return res.status(404).json({ error: "Savings goal not found" });
        }
        res.status(200).json({ message: "Savings goal updated successfully", savingsGoal });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a savings goal and remove it from the user's goals array
const deleteSavingsGoal = async (req, res) => {
    const { id } = req.params;
    try {
        // Find and delete the savings goal
        const savingsGoal = await SavingsGoal.findByIdAndDelete(id);
        if (!savingsGoal) {
            return res.status(404).json({ error: "Savings goal not found" });
        }

        // Find the user and remove the savings goal from their goals array
        const user = await User.findById(savingsGoal.userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Remove the goal ID from the user's goals array
        user.goals = user.goals.filter(goalId => goalId.toString() !== id);
        await user.save();  // Save the updated user document

        res.status(200).json({ message: "Savings goal deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createSavingsGoal, listSavingsGoals, updateSavingsGoal, deleteSavingsGoal };
