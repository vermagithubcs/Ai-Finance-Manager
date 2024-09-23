const express = require('express');
const app = express();
const cors = require('cors');

const path = require('path');
const PORT = 3000;

// DB
const connectDB = require('./config/DB');
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.use('/', (req, res) => {
    res.send('API is running...');
});


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});