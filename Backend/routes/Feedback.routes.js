const express = require('express');
const Feedback = require('../model/Feedback.model');
const FeedbackRouter = express.Router();
const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    category: Joi.string().required(),
    feedback: Joi.string().required()
});

// POST API to submit feedback
FeedbackRouter.post('/api/feedback', async (req, res) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    try {
        if (!error) {
            const { name, email, category, feedback } = req.body;
            const formData = await Feedback.create({ name, email, category, feedback });
            res.status(201).json(formData);
        } else {
            return res.status(400).json({ message: `Bad request, error: ${error.details.map(err => err.message).join(', ')}` });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
});

// GET API to retrieve all feedback
FeedbackRouter.get('/api/feedback', async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.status(200).json(feedbacks);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
});

// PUT API to update feedback
FeedbackRouter.put('/api/feedback/:id', async (req, res) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
        return res.status(400).json({ message: `Validation error: ${error.details.map(err => err.message).join(', ')}` });
    }

    try {
        const updatedFeedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedFeedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }

        res.status(200).json(updatedFeedback);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

// DELETE API to remove feedback
FeedbackRouter.delete('/api/feedback/:id', async (req, res) => {
    try {
        const deletedFeedback = await Feedback.findByIdAndDelete(req.params.id);

        if (!deletedFeedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }

        res.status(200).json({ message: 'Feedback deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = FeedbackRouter;
