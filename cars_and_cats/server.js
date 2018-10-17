// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
// invoke express and store the result in the variable app
var app = express();

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/cars', function (request, response){
    response.render('cars.ejs');
})

app.get('/cats', function(request, response){
    response.render('cats.ejs');
})

app.get('/cars/new', function(request, response){
    response.render('form.ejs');
});

// var cats = [
//     {name: "Grumpy Cat", likes: ["none", "hating everyone"], age: "old"},
//     {name: "Cookie Monster", likes: ["cookies", "friends", "Sesame Street"], age: "20"}
// ];

app.get('/grumpycat', function(request, response){
    var grumpy_array = {name: "Grumpy Cat", likes: ["none", "hating everyone"], age: "old"};
    response.render('details', {cat: grumpy_array});
});

app.get('/cookiemonster', function(request, response){
    var cookie_array = {name: "Cookie Monster", likes: ["cookies", "friends", "Sesame Street"], age: "20"};
    response.render('details', {cat: cookie_array});
});



// app.get('/cars.html', function(request, response) {
//    response.sendfile("cars.html");
// })

// app.get('/cats.html', function(request, response){
//     response.sendfile('cats.html');
// })

// app.get('/form.html', function(request, response){
//     response.sendfile('form.html');
// })



app.listen(8000, function() {
  console.log("listening on port 8000");
})
