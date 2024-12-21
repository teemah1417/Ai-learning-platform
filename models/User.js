const pool = require('../database/db');
const bcrypt = require('bcryptjs');

class User {
  static async createUser(username, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email';
    const values = [username, email, hashedPassword];
    return pool.query(query, values);
  }

  static async findUserByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
}

module.exports = User;
