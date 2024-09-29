const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");

// Update user and hash password if updated
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, password, profilePic } = req.body;

    // Find the user
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update fields
    if (name) user.name = name;
    if (profilePic) user.profilePic = profilePic;
    if (password) {
      const hashedPassword = bcrypt.hashSync(password, 10);
      user.password = hashedPassword;
    }

    // Save updated user
    await user.save();
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { updateUser };
