const mongoose = require('mongoose');

export const eventsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Enter the event name',
        unique: true
    },
    date: {
        type: String,
        required: 'Enter the event date'
    },
    venue: {
        type: String,
        required: 'Enter the event venue'
    },
    time: {
        type: String,
        required: 'Enter the event time'
    }
});