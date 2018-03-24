const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');


router.get('/', controller.homePage);


router.get('/hello', (req, res) => {
  res.send('hello');
});


module.exports = router;

