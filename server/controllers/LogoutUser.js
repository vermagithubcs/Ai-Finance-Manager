const User = require('../models/UserModel');

const logoutUser = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the user and clear the token
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Check if user.data exists and is an array before filtering
        if (Array.isArray(user.data)) {
            user.data = user.data.filter(entry => entry.token !== req.token);
        } else {
            user.data = []; // Initialize as an empty array if it doesn't exist
        }

        await user.save();
        res.status(200).json({ message: "User logged out successfully" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { logoutUser };
