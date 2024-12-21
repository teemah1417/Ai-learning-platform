const pool = require('../database/db');

class Course {
  static async getAllCourses() {
    const query = 'SELECT * FROM courses';
    return pool.query(query);
  }

  static async createCourse(title, description) {
    const query = 'INSERT INTO courses (title, description) VALUES ($1, $2) RETURNING *';
    return pool.query(query, [title, description]);
  }

  static async updateCourse(id, title, description) {
    const query = 'UPDATE courses SET title = $1, description = $2 WHERE id = $3 RETURNING *';
    return pool.query(query, [title, description, id]);
  }

  static async deleteCourse(id) {
    const query = 'DELETE FROM courses WHERE id = $1 RETURNING *';
    return pool.query(query, [id]);
  }
}

module.exports = Course;
