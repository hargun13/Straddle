const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/index');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Replace the connection string with your MongoDB Atlas connection string
const mongoUri = 'mongodb+srv://chandhokhargun:kaJ39GHrMHTZ5WP2@straddle.yee8mpb.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB Atlas');
});

app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
