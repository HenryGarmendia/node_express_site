let express = require('express');
let router = express.Router();

router.get('/contributors', (req, res) => {
    let data = req.app.get('appData');
    let pagePhotos = [];
    let pageContributors = data.contributors;

    data.contributors.forEach( (item) => {
        pagePhotos = pagePhotos.concat(item.artwork);
    });
    
    res.render('contributors', {
        pageTitle: 'Contributors',
        artwork: pagePhotos,
        contributors: pageContributors,
        pageID: 'contributors'
    });
});

router.get('/contributors/:contributorid', (req, res) => {
    let dataFile = req.app.get('appData');
    let contributor = dataFile.contributors[req.params.contributorid];
    res.send(`
        <link rel="stylesheet" type="text/css" href="/css/app.css"/>
        <h1>${contributor.title}</h1>
        <h2>${contributor.name}</h2>
        <img src="/images/contributors/${contributor.shortname}_tn.png" alt="Contributors" />
        <p>${contributor.summary}</p>
        <script src="/reload/reload.js"></script>
    `);
});

module.exports = router;