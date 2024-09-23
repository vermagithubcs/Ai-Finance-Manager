const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists, Login from that' });
        }

        // Hash password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        // Create user
        const user = await User.create({ name, email, password: hashedPassword });

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Save token to user data
        user.data = [{ token: token, date: Date.now() }];
        await user.save();

        res.status(201).json({ user, token });

    } catch (error) {
        // Handle validation and other errors
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: 'Invalid input data' });
        }
        res.status(500).json({ error: error.message });
    }
};

module.exports = { registerUser };
