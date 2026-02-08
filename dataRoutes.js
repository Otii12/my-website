const express = require('express');
const router = express.Router();

// GET endpoint to fetch data
router.get('/', (req, res) => {
  try {
    const data = {
      message: 'Welcome to the API!',
      timestamp: new Date().toISOString(),
      status: 'success'
    };
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
});

// POST endpoint to create data
router.post('/', (req, res) => {
  try {
    const { name, content } = req.body;
    
    if (!name || !content) {
      return res.status(400).json({ message: 'Name and content are required' });
    }

    const newData = {
      id: Date.now(),
      name,
      content,
      createdAt: new Date().toISOString()
    };

    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ message: 'Error creating data', error: error.message });
  }
});

module.exports = router;
