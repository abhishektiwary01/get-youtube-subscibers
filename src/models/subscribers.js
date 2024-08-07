const mongoose = require('mongoose');

// Define the schema for the Subscriber model
const subscriberSchema = new mongoose.Schema({
    // Define the 'name' field as a required string
    name: {
        type: String,
        required: true,
    },
    // Define the 'subscribedChannel' field as a required string
    subscribedChannel: {
        type: String,
        required: true,
    },
    // Define the 'subscribedDate' field as a Date, required, with a default value of the current date and time
    subscribedDate: {
        type: Date,
        required: true,
        default: Date.now
    }
});

// Export the model with the name 'Subscriber'
module.exports = mongoose.model('Subscriber', subscriberSchema);
