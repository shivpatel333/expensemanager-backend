const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {v4: uuidv4} = require('uuid');
const app = express();
const PORT = 5000;

// connecting to db
var db = mongoose.connect("mongodb://127.0.0.1:27017/expensemanager");
db.then(() => {
  console.log("connected to mongodb");
}).catch((err) => {
  console.log(err);
});

app.use(cors());
app.use(express.json());

// requiring all routes
const accountRoutes = require("./routes/AccountRoutes");
const userRoutes = require("./routes/UserRoutes");
const rolesRoutes = require("./routes/RoleRoutes");
const categoryRoutes = require("./routes/CategoryRoutes");
const subcategoryRoutes = require("./routes/SubCategoryRoutes");
const payeeRoutes = require("./routes/PayeeRoutes");
const transcationRoutes = require("./routes/TransactionRoutes");

// providing to server all routes
app.use("/accounts", accountRoutes);
app.use("/users", userRoutes);
app.use("/roles", rolesRoutes);
app.use("/categories", categoryRoutes);
app.use("/subcategories", subcategoryRoutes);
app.use("/payees", payeeRoutes);
app.use("/transactions", transcationRoutes);

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Dummy database for storing users (replace with your database logic)
const users = [];
const secretKey = '3&NZViG(z!G-[j,EhdCQDo]XVwr/TG'; // Replace with a long random string

// Signup endpoint
app.post('/signup', async (req, res) => {
    try {
        // Extract user data from request body
        const { username, email, password } = req.body;

        // Check if user already exists
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Generate unique user ID
        const userId = uuidv4();

        // Save user to database (replace with your database logic)
        const newUser = {
            id: userId,
            username,
            email,
            password: hashedPassword
        };
        users.push(newUser);

        // Return success response
        res.status(201).json({ message: 'User signed up successfully' });
    } catch (error) {
        // Handle errors
        console.error('Error signing up user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Login endpoint
app.post('/login', async (req, res) => {
    try {
        // Extract user credentials from request body
        const { email, password } = req.body;

        // Find user by email
        const user = users.find(user => user.email === email);
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Verify password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });

        // Return success response with token
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        // Handle errors
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});