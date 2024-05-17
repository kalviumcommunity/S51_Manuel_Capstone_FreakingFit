const mongoose = require('mongoose');
const { type } = require('os');

const FeedbackSchema = new mongoose.Schema({
    name: {type: String,required: true},
    email:{type: String,required: true},
    category:{type: String,required: true},
    feedback: {type: String,required: true}
},
{
    timestamps: true
})

module.exports = mongoose.model('Feedback', FeedbackSchema);
