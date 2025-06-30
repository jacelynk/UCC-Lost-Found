# UCC Lost & Found - Backend API

## Overview
This is the backend API for the UCC Lost & Found application built with Node.js, Express, and MySQL.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Database Setup
1. Create a MySQL database named `lost-found`
2. Run the SQL script in `database_update.sql` to create the users table with the new structure
3. Update the database connection settings in `server.js` if needed

### 3. Start the Server
```bash
node server.js
```

The server will run on `http://localhost:3001`

## API Endpoints

### Authentication Routes

#### POST /api/signup
Creates a new user account with auto-generated email and default password.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "gender": "Male",
  "program": "Computer Science",
  "yearAndSection": "4A",
  "campus": "Main Campus"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "email": "john.doe",
  "defaultPassword": "YOUCEEC_defaultpass"
}
```

**Notes:**
- Email is auto-generated as `firstname.lastname`
- Password is automatically set to `YOUCEEC_defaultpass`
- All fields are required

#### POST /api/login
Authenticates a user with email and password.

**Request Body:**
```json
{
  "email": "john.doe",
  "password": "YOUCEEC_defaultpass"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe",
    "gender": "Male",
    "program": "Computer Science",
    "yearAndSection": "4A",
    "campus": "Main Campus"
  }
}
```

### Test Routes

#### GET /api/test
Test endpoint to verify API is working.

**Response:**
```json
{
  "message": "API routes are working!"
}
```

## Database Schema

### Users Table
```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    gender ENUM('Male', 'Female', 'Other') NOT NULL,
    program VARCHAR(200) NOT NULL,
    year_section VARCHAR(50) NOT NULL,
    campus VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## File Structure
```
backend/
├── server.js          # Main server file
├── auth.js            # Authentication service
├── routes.js          # API routes
├── database_update.sql # Database schema
├── package.json       # Dependencies
└── README.md          # This file
```

## Error Handling
The API returns appropriate HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request (missing fields)
- 401: Unauthorized (invalid credentials)
- 409: Conflict (user already exists)
- 500: Internal Server Error

## Next Steps
1. Add password change functionality
2. Implement JWT tokens for session management
3. Add user profile update endpoints
4. Add lost/found item endpoints
5. Add file upload for item images
