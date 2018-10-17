var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var session = require('express-session');

app.use(session({
secret: 'keyboardkitteh',
resave: false,
saveUninitialized: true,
cookie: { maxAge: 60000 }
}))

app.get('/', function(req, res){
    res.render('index');
})

app.post('/result', function(req, res){
    req.session.name = req.body.name;
    req.session.location = req.body.location;
    req.session.language = req.body.language;
    req.session.comment = req.body.comment;
    console.log(req.body);

    res.redirect('/result');
})

app.get('/result', function(req, res){
    var info = {name: req.session.name, location: req.session.location, language: req.session.language, comment: req.session.comment};
    res.render('results', {info: info});
})

app.listen(8000, function() {
    console.log("listening on port 8000");
  })