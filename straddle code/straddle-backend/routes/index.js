const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.get('/modules', controller.getModules);
router.get('/modules/:module_id/topics', controller.getTopicsByModule);
router.get('/topics/:topic_id/videos', controller.getVideosByTopic);

module.exports = router;
