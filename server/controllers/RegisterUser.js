const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');

const registerUser = async (req, res) => {
    const { name, email, password, profilePic } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists. Please log in.' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const user = new User({
            name,
            email,
            profilePic,
            password: hashedPassword,
            transactions: [],
            budgets: [],
            expenses: [],
            goals: []
        });

        // Save the user in the database
        await user.save();

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Send response with user info and token
        res.status(201).json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },
            token
        });

    } catch (error) {
        // Error handling for validation or server errors
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: 'Invalid input data' });
        }
        res.status(500).json({ error: error.message });
    }
};

module.exports = { registerUser };
