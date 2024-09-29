const User = require('../models/UserModel');

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully", user });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { deleteUser };
