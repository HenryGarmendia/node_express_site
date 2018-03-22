let express = require('express');
let reload = require('reload');
let app = express();
let dataFile = require('./data/data.json');
let io = require('socket.io')();

// flexible application Node PORT
app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Pro Meetup';
app.locals.allContributors = dataFile.contributors;

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/contributors'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));

let server = app.listen(app.set('port'), () => {
    console.log('Server is listening on port ' + app.get('port'));
});

io.attach(server);
io.on('connection', (socket) => {
	socket.on('postMessage', (data) => {
		io.emit('updateMessages', data);
	});
});

reload(app);