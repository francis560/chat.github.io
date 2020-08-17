const express = require('express');
const path = require('path');
const morgan = require('morgan');
const SocketIo = require('socket.io');
const app = express();


app.use(express());
// app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './src/public')));


app.set('port', process.env.PORT || 3000);


const Socket = app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});


const io = SocketIo(Socket);

io.on('connection', (socket) => {
    
    socket.on('message', (data) => {
        io.sockets.emit('message', data);
    });

});