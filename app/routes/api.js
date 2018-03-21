let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let fs = require('fs');
let feedbackData = require('../data/feedback.json');

router.get('/api', (req, res) => {    
   res.json(feedbackData);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/api', (req, res) => {
   feedbackData.unshift(req.body);
   fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', (err) => {
      console.log(err);
   });
   res.json(feedbackData);
});

module.exports = router;