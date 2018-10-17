var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const server = app.listen(1337);
const io = require('socket.io')(server);

app.get('/', function (req, res){
    res.render('index');
})

io.on('connection', function (socket) { 

    socket.on('button_click', function(data){
        console.log("server color: ", data.color);
        io.emit('update_color', {color: data.color});
    })

});