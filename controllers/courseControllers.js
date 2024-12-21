const Course = require('../models/Course');

exports.getCourses = async (req, res) => {
  const { rows } = await Course.getAllCourses();
  res.json(rows);
};

exports.createCourse = async (req, res) => {
  const { title, description } = req.body;
  const { rows } = await Course.createCourse(title, description);
  res.json(rows[0]);
};

exports.updateCourse = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const { rows } = await Course.updateCourse(id, title, description);
  res.json(rows[0]);
};

exports.deleteCourse = async (req, res) => {
  const { id } = req.params;
  const { rows } = await Course.deleteCourse(id);
  res.json(rows[0]);
};
try {
    // Code
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
  
