const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const subscriberModel = require('./src/models/subscribers');

const app = express();
const port = 3000;

// Enable CORS for all origins (you can restrict this if needed)
app.use(cors());

// Parse JSON bodie
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to the database
const DATABASE_URL = "mongodb+srv://abhishek:abhi%40123@entertainment-app.xoq6byy.mongodb.net/?retryWrites=true&w=majority&appName=entertainment-app";
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (err) => console.error('Database connection error:', err));
db.once('open', () => console.log('Connected to database'));

// Define routes
app.get('/subscribers', async (req, res) => {
  try {
    const subscribers = await subscriberModel.find({});
    res.json(subscribers); 
  } catch (error) {
    res.status(500).json({ message: 'Error fetching subscribers', error: error.message });
  }
});


app.get('/subscribers/name', async (req, res) => {
  try {
    const name = req.query.name;
    const subscribers = await subscriberModel.find(
      { name: new RegExp(name, 'i') },
      { name: 1, subscribedChannel: 1, _id: 0 } 
    );
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving subscriber names', error: error.message });
  }
});


app.get('/subscribers/:id', async (req, res) => {
  try {
    const subscriberId = req.params.id;
    const subscriberData = await subscriberModel.findById(subscriberId);
    
    if (!subscriberData) {
      return res.status(404).json({ message: 'Subscriber not found' });
    }
    
    res.json(subscriberData);
  } catch (error) {
    res.status(400).json({ message: 'Error retrieving subscriber data', error: error.message });
  }
});

// Start the server
app.listen(port, () => console.log(`App listening on port ${port}!`));
