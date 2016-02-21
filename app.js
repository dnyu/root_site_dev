var express = require('express');
var app = express();

$("b1").click(function() {
    $('html,body').animate({
        scrollTop: $("p1").offset().top},
        'slow');
});

$("b2").click(function() {
    $('html,body').animate({
        scrollTop: $("p2").offset().top},
        'slow');
});

$("b3").click(function() {
    $('html,body').animate({
        scrollTop: $("p3").offset().top},
        'slow');
});

$("b4").click(function() {
    $('html,body').animate({
        scrollTop: $("p4").offset().top},
        'slow');
});

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
app.listen(80);
console.log('Server running on port 80. Now open http://localhost:80/ in your browser!');
