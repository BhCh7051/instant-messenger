const { Socket } = require('dgram');

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {cors: {origin: '*',}});

const port = process.env.PORT || 5000

io.on('connection', (socket) => { 
  /* socket object may be used to send specific messages to the new connected client */
  console.log('new client connected');

  let count = 0;

  let interval = setInterval(()=>{
    count++;
    console.log(`sending message: ${count}`);
    socket.emit('message', `Message ${count}`)
  }, 1000);

  socket.on('message', msg => {
    console.log(`message received from client: ${msg}`);
  })

  socket.on('disconnect', (msg)=>{
    clearInterval(interval);

    console.log('Socket disconnected - ',msg)
  })
  
});

http.listen(port, () => {
  console.log(`listening on : ${port}`);
});