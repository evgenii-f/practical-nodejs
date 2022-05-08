const express = require('express');
const http = require('http');
const path = require('path')

const port = 3001;

let app = express();
app.set('appName', 'hello-advanced');
app.set('port', process.env.PORT || port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.all('*', (req, res) => {
    res.render('index', {'msg' : "Welcome to hello-advanced from Node.js "});
});

http.createServer(app).listen(app.get('port'), () => {
    console.log(`Server is listening to the port ${app.get('port')}`);
});