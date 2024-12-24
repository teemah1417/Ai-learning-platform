import api from "./AxiosInstance"


export const login = async (email, password) => {
  const response = await api.post("/login",  {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
  });
  return response.data;
};

export const register = async (email, password) => {
  const response = await api.post("/signup", {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return response.data;
};

// Add other API functions here
