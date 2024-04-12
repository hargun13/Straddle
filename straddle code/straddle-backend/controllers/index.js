const Module = require('../models/model');
const mongoose = require('mongoose');

exports.getModules = async (req, res) => {
  try {
    const modules = await Module.find({}, 'name');
    res.json(modules);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getTopicsByModule = async (req, res) => {
  const { module_id } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(module_id)) {
    return res.status(400).json({ error: 'Invalid module ID' });
  }

  try {
    const module = await Module.findById(module_id, 'topics');
    res.json(module.topics);
  } catch (error) {
    console.error('Error in getTopicsByModule:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getVideosByTopic = async (req, res) => {
  const { topic_id } = req.params;
  try {
    // Convert the topic_id to a Mongoose ObjectId
    const topicId = mongoose.Types.ObjectId(topic_id);

    // Use the converted topicId in the query
    const module = await Module.findOne({ 'topics._id': topicId }, 'topics.$');
    res.json(module.topics[0].videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
