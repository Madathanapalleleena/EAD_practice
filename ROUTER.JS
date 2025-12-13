const express = require('express');
const router = express.Router();

// Route: GET /user/
router.get('/', (req, res) => {
    res.send('User Home Page');
});

// Route: GET /user/profile
router.get('/profile', (req, res) => {
    res.send('User Profile Page');
});

module.exports = router;


//BACKEND

const express = require('express');
const app = express();

// Import user routes
const userRoutes = require('./routes/user');

// Use user routes for path /user
app.use('/user', userRoutes);

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
