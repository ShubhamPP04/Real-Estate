const config = require('./config');

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect(config.databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Use the JWT secret key
const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId: 'exampleUserId' }, config.jwtSecretKey);

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});