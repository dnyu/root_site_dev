var express = require('express');
var app = express();

app.use(express.bodyParser());
app.use(express.logger("default"));

app.use(express.cookieParser());
app.use(express.session({secret: 'n/a'}));

app.use(express.static(__dirname + '/pages'));
app.set('views', 'pages');
app.set('view engine', 'html');

// app.get('/*', function(req, res){
//   res.render('pages/index.html');
// });

/* Run the server */

console.log('Root');
app.listen(8080);
console.log('Server running on port 8080. Now open http://localhost:80/ in your browser!');
