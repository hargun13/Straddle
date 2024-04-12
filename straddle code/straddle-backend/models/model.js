const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: String,
  url: String,
  duration: String, // Add duration field if not present in your data
});

const topicSchema = new mongoose.Schema({
  name: String,
  videos: [videoSchema],
});

const moduleSchema = new mongoose.Schema({
  name: String,
  topics: [topicSchema],
});

const Module = mongoose.model('Module', moduleSchema);

module.exports = Module;
