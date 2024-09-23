const User = require('../models/UserModel')
const bcrypt = require('bcryptjs')

// Make when updated then also save password in hashed form
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, password } = req.body;
        const user = await User.findByIdAndUpdate(id, { name, password }, { new: true });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const hashedPassword = bcrypt.hashSync(password, 10);
        user.password = hashedPassword;
        await user.save();
        res.status(200).json({ message: "User updated successfully", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { updateUser };
