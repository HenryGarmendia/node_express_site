let express = require('express');
let router = express.Router();

router.get('/contributors', (req, res) => {
    let info = '';
    let dataFile = req.app.get('appData');
    dataFile.contributors.forEach( (item) => {
        info += `
            <li>
                <h2>${item.name}</h2>
                <img src="/images/contributors/${item.shortname}_tn.png" alt="Contributors" />
                <p>${item.summary}</p>
            </li>
        `;
    });
    res.send(`
        <link rel="stylesheet" type="text/css" href="/css/app.css"/>
        <h1>Contributors</h1>
        ${info}
        <script src="/reload/reload.js"></script>
    `);
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