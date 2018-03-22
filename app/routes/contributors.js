const express = require('express');
const router = express.Router();

router.get('/contributors', (req, res) => {
    const data = req.app.get('appData');
    let pagePhotos = [];
    let pageContributors = data.contributors;

    data.contributors.forEach( (item) => {
        pagePhotos = pagePhotos.concat(item.artwork);
    });
    
    res.render('contributors', {
        pageTitle: 'Contributors',
        artwork: pagePhotos,
        contributors: pageContributors,
        pageID: 'contributorList'
    });
});

router.get('/contributors/:contributorid', (req, res) => {
    let data = req.app.get('appData');
    let pagePhotos = [];
    let pageContributors = [];

    data.contributors.forEach( (item) => {
        if (item.shortname === req.params.contributorid) {
            pageContributors.push(item);
            pagePhotos = pagePhotos.concat(item.artwork);
        }
    });
    
    res.render('contributors', {
        pageTitle: 'Contributors Info',
        artwork: pagePhotos,
        contributors: pageContributors,
        pageID: 'contributorDetail'
    });
});

module.exports = router;