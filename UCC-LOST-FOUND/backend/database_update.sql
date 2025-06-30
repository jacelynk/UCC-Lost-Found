-- Option 1: If you want to modify the existing table (be careful, this might lose data)
ALTER TABLE users 
DROP COLUMN name,
ADD COLUMN first_name VARCHAR(100) NOT NULL AFTER id,
ADD COLUMN last_name VARCHAR(100) NOT NULL AFTER first_name,
ADD COLUMN gender ENUM('Male', 'Female', 'Other') NOT NULL AFTER password,
MODIFY COLUMN program VARCHAR(200) NOT NULL,
ADD COLUMN year_section VARCHAR(50) NOT NULL AFTER program,
MODIFY COLUMN campus VARCHAR(100) NOT NULL,
DROP COLUMN email,
ADD COLUMN username VARCHAR(255) UNIQUE NOT NULL AFTER last_name;

-- Option 2: If you want to create a fresh table (recommended for development)
-- First drop the existing table if you don't need the data
-- DROP TABLE IF EXISTS users;

-- Create the new users table with updated structure
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    gender ENUM('Male', 'Female', 'Other') NOT NULL,
    program VARCHAR(200) NOT NULL,
    year_section VARCHAR(50) NOT NULL,
    campus VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Sample data for testing (optional)
-- The username will be auto-generated as firstname.lastname
-- The password will be the default: YOUCEEC_defaultpass
INSERT INTO users (first_name, last_name, username, password, gender, program, year_section, campus) VALUES
('John', 'Doe', 'john.doe', '$2b$10$sample_hashed_password_here', 'Male', 'Computer Science', '4A', 'Main Campus'),
('Jane', 'Smith', 'jane.smith', '$2b$10$sample_hashed_password_here', 'Female', 'Information Technology', '3B', 'Extension Campus');

-- Index for better performance
CREATE INDEX idx_username ON users(username);
CREATE INDEX idx_campus ON users(campus);
CREATE INDEX idx_program ON users(program);
