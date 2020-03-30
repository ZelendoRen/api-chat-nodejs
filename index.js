let express = require('express');
let http = require('http');
let app = express();
let bodyParser = require('body-parser');
let crypto = require('crypto-js');
let config = require('./config/config.json');
let query = require('./module/chat');

console.log('Working...');
app.use(bodyParser.json());
app.post('/registration', query.registration);
app.post('/send', query.sendMessage);
app.get('/dialog',query.getMessages);
app.put('/edit',query.updateMessage);
app.listen(config.port);
