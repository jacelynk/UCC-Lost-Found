const bcrypt = require('bcrypt');

class AuthService {
  constructor(db) {
    this.db = db;
  }

  // Generate username from first and last name
  generateUsername(firstName, lastName) {
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}`;
  }

  // Default password
  getDefaultPassword() {
    return 'YOUCEEC_defaultpass';
  }

  // Signup with new fields
  async signup(req, res) {
    const { 
      firstName, 
      lastName, 
      gender, 
      program, 
      yearAndSection, 
      campus 
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !gender || !program || !yearAndSection || !campus) {
      return res.status(400).json({ 
        message: 'Missing required fields',
        required: ['firstName', 'lastName', 'gender', 'program', 'yearAndSection', 'campus']
      });
    }

    try {
      // Generate username and use default password
      const username = this.generateUsername(firstName, lastName);
      const password = this.getDefaultPassword();
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert user into database
      this.db.query(
        'INSERT INTO users (first_name, last_name, username, password, gender, program, year_section, campus) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [firstName, lastName, username, hashedPassword, gender, program, yearAndSection, campus],
        (err, result) => {
          if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
              return res.status(409).json({ 
                message: 'User already exists',
                username: username
              });
            }
            return res.status(500).json({ 
              message: 'Database error', 
              error: err.message 
            });
          }
          
          res.status(201).json({ 
            message: 'User registered successfully',
            username: username,
            defaultPassword: password
          });
        }
      );
    } catch (error) {
      res.status(500).json({ 
        message: 'Server error', 
        error: error.message 
      });
    }
  }

  // Login endpoint
  async login(req, res) {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ 
        message: 'Username and password are required' 
      });
    }

    this.db.query(
      'SELECT * FROM users WHERE username = ?', 
      [username], 
      async (err, results) => {
        if (err) {
          return res.status(500).json({ 
            message: 'Database error', 
            error: err.message 
          });
        }
        
        if (results.length === 0) {
          return res.status(401).json({ 
            message: 'Invalid credentials' 
          });
        }

        const user = results[0];
        
        try {
          const match = await bcrypt.compare(password, user.password);
          if (!match) {
            return res.status(401).json({ 
              message: 'Invalid credentials' 
            });
          }

          res.json({ 
            message: 'Login successful', 
            user: { 
              id: user.id, 
              firstName: user.first_name,
              lastName: user.last_name,
              username: user.username,
              gender: user.gender,
              program: user.program,
              yearAndSection: user.year_section,
              campus: user.campus
            } 
          });
        } catch (error) {
          res.status(500).json({ 
            message: 'Server error', 
            error: error.message 
          });
        }
      }
    );
  }
}

module.exports = AuthService;
