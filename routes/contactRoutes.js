const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Public Routes
router.post('/', contactController.sendMessage);

// Admin Routes (Assuming authentication middleware will be added later)
router.get('/', contactController.getAllMessages);
router.get('/:id', contactController.getMessageById);
router.delete('/:id', contactController.deleteMessage);

module.exports = router;
