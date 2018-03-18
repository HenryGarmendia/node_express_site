let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    let data = req.app.get('appData');
    let pagePhotos = [];

    data.contributors.forEach( (item) => {
        pagePhotos = pagePhotos.concat(item.artwork);
    });
    res.render('index', {
        pageTitle: 'Home',
        artwork: pagePhotos,
        pageID: 'home'
    });
});

module.exports = router;