const mongoose = require('mongoose');

// dG1t0vZEXqcZwf2r

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://codewithom405:dG1t0vZEXqcZwf2r@cluster0.hxe0f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;
