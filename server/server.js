const http = require('node:http').createServer();
const { Socket } = require('socket.io');
const app = require('./app');

const PORT = process.env.PORT || 3001;

const io = require('socket.io')(http, {
  cors: { origin: '*' },
});

io.on('connection', (socket) => {
  console.log(`USER ID: ${socket.id}`);

  socket.on('park', (data) => {
    // console.log(data);
    if (data) {
      return socket.local.emit('return_signal', {
        message: 'Occupé',
      });
    }
  });
});

http.listen(PORT, '192.168.1.67', () => {
  console.log(
    `Server is running well on http://localhost:${PORT} ✅`
  );
});
// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: 'http://127.0.0.1:3000',
//     methods: ['GET', 'POST'],
//   },
// });

// let carSignal = [false, false, false, false, false];

// io.on('connection', (socket) => {
//   console.log(socket.id);
//   // PARK
//   socket.on('park', (data) => {
//     carSignal[data] = true;
//     console.log(carSignal);
//   });
//   // UNPARK
//   socket.on('unpark', (data) => {
//     carSignal[data] = false;
//     console.log(carSignal);
//   });
// });

// server.listen(PORT, () => console.log(`server is running...✅`));
