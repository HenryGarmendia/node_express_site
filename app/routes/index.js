const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const data = req.app.get('appData');
    let pagePhotos = [];
    let pageContributors = data.contributors;

    data.contributors.forEach( (item) => {
        pagePhotos = pagePhotos.concat(item.artwork);
    });
    
    res.render('index', {
        pageTitle: 'Home',
        artwork: pagePhotos,
        contributors: pageContributors,
        pageID: 'home'
    });
});

module.exports = router;