const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config();

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await User.createUser(username, email, password);
    res.status(201).json({ message: 'User created successfully', user: newUser.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findUserByEmail(email);

    if (!user) return res.status(400).json({ message: 'User not found' });
    const isMatch = await require('bcryptjs').compare(password, user.password);

    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
try {
    // Code
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
  
