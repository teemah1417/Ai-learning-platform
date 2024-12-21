import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const signup = async (userData) => {
  return axios.post(`${API_URL}/auth/signup`, userData);
};

export const login = async (userData) => {
  return axios.post(`${API_URL}/auth/login`, userData);
};

export const getCourses = async (token) => {
  return axios.get(`${API_URL}/courses`, {
    headers: { Authorization: token },
  });
};

export const addCourse = async (courseData, token) => {
  return axios.post(`${API_URL}/courses`, courseData, {
    headers: { Authorization: token },
  });
};
