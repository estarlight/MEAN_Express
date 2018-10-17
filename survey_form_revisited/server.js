const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views'));

const server = app.listen(1337);
const io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log("connected!");

    socket.on('posting_data', function (data){
        console.log(data);
        var dict = JSON.stringify(data);
        var message = "You emitted the following information to the server: " + dict;
        console.log(message);

        socket.emit('updated_message', {msg: message});
    });



});



    // socket.on('posting_data', function (data){
    //     console.log("posting data worked");
    // });



  

 




    // socket.on('posting_form', function(data) {
    //     console.log(data);
    // })



