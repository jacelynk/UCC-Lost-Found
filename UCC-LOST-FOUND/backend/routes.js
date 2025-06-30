const express = require('express');
const AuthService = require('./auth');

const router = express.Router();

// Initialize routes with auth service
function initializeRoutes(db) {
  const authService = new AuthService(db);

  // Authentication routes
  router.post('/signup', (req, res) => {
    authService.signup(req, res);
  });

  router.post('/login', (req, res) => {
    authService.login(req, res);
  });

  // Test route
  router.get('/test', (req, res) => {
    res.json({ message: 'API routes are working!' });
  });

  return router;
}

module.exports = initializeRoutes;
