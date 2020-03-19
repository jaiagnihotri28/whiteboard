const express = require('express')
const app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)
app.use(express.static("clientDir"))

io.on('connection',function(socket){
    socket.on("message",function(message){
        socket.broadcast.emit("broadcast",message);
        console.log(message);
    })

    socket.on("mousedown",function(){

    })
})

server.listen(2000,function(req,res){
    console.log("server is listening 2000")
})