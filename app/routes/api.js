let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let feedback = require('../data/feedback.json');

router.get('/api', (req, res) => {    
   res.json(feedback);
});

module.exports = router;