const Contact = require('../models/Contact');

// Submit Contact Form
exports.sendMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newContact = new Contact({ name, email, message });
        await newContact.save();

        res.status(201).json({ message: 'Message received successfully!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get All Messages (Admin Access Only)
exports.getAllMessages = async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get Message By ID
exports.getMessageById = async (req, res) => {
    try {
        const message = await Contact.findById(req.params.id);
        if (!message) return res.status(404).json({ message: 'Message not found' });

        res.json(message);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete Message By ID
exports.deleteMessage = async (req, res) => {
    try {
        const message = await Contact.findByIdAndDelete(req.params.id);
        if (!message) return res.status(404).json({ message: 'Message not found' });

        res.json({ message: 'Message deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
