import React, { useEffect, useState } from 'react';
import { getCourses } from '../services/api';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const token = localStorage.getItem('token');
      const { data } = await getCourses(token);
      setCourses(data);
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
