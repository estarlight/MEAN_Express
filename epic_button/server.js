var express = require('express');
var app = express();

app.use(express.static(__dirname + '/views'));

const server = app.listen(6789);
const io = require('socket.io')(server);
var count = 0;

io.on('connection', function (socket) { 
    console.log("connected");
    // socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); 
    // socket.on('thankyou', function (data) { 
    //   console.log(data.msg); 
    // });


    socket.on('update_count', function (data){
        console.log("update request received");
        console.log(data.value);

        if (data.value == 'blue'){
            count++;
            console.log("count: ", count);
        }
        if (data.value == 'red'){
            count = 0;
        }
        socket.emit('set_span', {number: count});
        
        
    })
      
  });