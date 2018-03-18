let express = require('express');
let reload = require('reload');
let app = express();
let dataFile = require('./data/data.json');

// flexible application Node PORT
app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Pro Meetups';

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/contributors'));

let server = app.listen(app.set('port'), () => {
    console.log('Server is listening on port ' + app.get('port'));
});

reload(app);