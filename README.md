## POST /api/auth/login  
**Description:** Log in with email and password.  

**Request Body:**  
```json
{
  "email": "user@example.com",
  "password": "password123"
}
{
  "message": "Login successful",
  "token": "jwt_token_here"
}
