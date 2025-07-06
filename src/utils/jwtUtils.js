const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  const secret = process.env.JWT_SECRET || 'your_jwt_secret'; // Fallback to 'your_jwt_secret' if JWT_SECRET is not set
  return jwt.sign({ id: userId }, secret, { expiresIn: '1h' });
};

module.exports = { generateToken };
