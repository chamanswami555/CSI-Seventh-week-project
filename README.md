Overview
The JWT Authentication API provides a robust and secure way to handle user authentication, including user registration, login, logout, and placeholder support for password recovery. It uses JWT tokens for session management and MongoDB for user data storage.
Base URL
http://<your-domain>:<port>/api/auth
Endpoints
1. Register User
•	URL: /register
•	Method: POST
•	Description: Registers a new user in the system.
•	Request Body:
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123"
}
•	Response:
o	201 Created: User successfully registered.
{
  "user": {
    "_id": "64dbf91d8f8b9c001f0e2c88",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "createdAt": "2025-01-22T08:00:00Z",
    "updatedAt": "2025-01-22T08:00:00Z"
  },
  "token": "your_jwt_token" }
•	400 Bad Request: User already exists.
   { "message": "User already exists" }
•	500 Internal Server Error: Any unexpected error.
{ "message": "Error message" }

2. Login User
•	URL: /login
•	Method: POST
•	Description: Authenticates an existing user.
•	Request Body:
{
  "email": "johndoe@example.com",
  "password": "password123"
}
•	Response:
-	200 OK: Successful login.
{
  "user": {
    "_id": "64dbf91d8f8b9c001f0e2c88",
    "name": "John Doe",
    "email": "johndoe@example.com"
  },
  "token": "your_jwt_token"
}
-	401 Unauthorized: Invalid credentials.
{ "message": "Invalid email or password" }

3. Logout User
•	URL: /logout
•	Method: POST
•	Description: Logs the user out.
•	Response:
{ "message": "Logout successful" }

4. Forgot Password (Stub)
•	URL: /forgot-password
•	Method: POST
•	Description: Placeholder for password recovery functionality.
•	Response:
{ "message": "Forgot password functionality not implemented yet" }

Data Model
User Schema
{
  "name": "string",
  "email": "string",
  "password": "string (hashed)",
  "createdAt": "date",
  "updatedAt": "date"
}

Authentication Middleware
Protect Route
The protect middleware checks for a valid JWT in the Authorization header. If valid, the user object is added to req.user. Otherwise, it returns:
•	401 Unauthorized: Missing or invalid token.
{ "message": "Not authorized, token failed" }

JWT Token Utility
Generate Token
The generateToken function creates a JWT token for authenticated users. Tokens expire in 1 hour by default.

Setup Instructions
Prerequisites
•	Node.js
•	MongoDB (ensure MONGO_URI and JWT_SECRET are set in .env)
Steps
1.	Clone the repository:
git clone <repository-url>
2.	Install dependencies:
npm install
3.	Create a .env file and add the following:
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
4.	Start the server:
npm start
5.	Access the API at:
http://localhost:5000/api/auth
