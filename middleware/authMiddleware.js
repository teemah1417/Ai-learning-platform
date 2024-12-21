const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ message: 'No token, access denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Attach user data to the request
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

const authMiddleware = require('./middleware/authMiddleware');
app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});
