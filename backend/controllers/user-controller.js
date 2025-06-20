// user-controller.js
const bcrypt = require("bcryptjs");
const User = require("../model/user");
const crypto = require("crypto");
const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user with given email already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: "User already exists" });
        }

        // Create new user
        user = new User({ name, email, password });

        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Save user to database
        await user.save();

        res.status(201).json({ msg: "User registered successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        // If credentials are valid, send token (JWT can be used for this purpose)
        res.json({ msg: "Login successful" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
};



module.exports = { register, login }; 