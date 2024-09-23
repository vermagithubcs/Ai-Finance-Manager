const User = require('../models/UserModel')

const logoutUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, { token: null }, { new: true });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User logged out successfully", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { logoutUser };
