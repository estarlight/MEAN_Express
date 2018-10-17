var express = require("express");
var app = express();

var session = require('express-session');
app.use(session({
    secret: 'countmyclicks',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res){
    if (!req.session.count){
        req.session.count = 1;
    }
    else {
        req.session.count += 1;
    }

    var count = req.session.count;
    res.render('index', {count: count});
})

app.post('/add_two', function(req, res){
    req.session.count += 1;
    res.redirect('/');
})

app.post('/reset', function(req, res){
    req.session.destroy();
    res.redirect('/');
})

app.listen(8000, function() {
    console.log("listening on port 8000");
  })