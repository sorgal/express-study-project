const express = require('express');
const mongoose= require('mongoose');
const http = require('http');
const socketIO = require('socket.io');
const Comment = require('./models/comment')

mongoose.connect('mongodb://localhost:27017/mydb')

const errorMiddleware = require('./middleware/error');

const indexRouter = require('./routes/index');
const booksRouter = require('./routes/books');
const usersRouter = require('./routes/users');

const app = express();
const server = http.Server(app);
const io = socketIO(server, {
    allowEIO3: true // false by default
});

app.use(express.urlencoded());
app.set("view engine", "ejs");

app.use('/', indexRouter);
app.use('/books', booksRouter);
app.use('/api/users', usersRouter);

app.use(errorMiddleware);

io.on('connection', (socket) => {
    const {id} = socket;
    console.log(`Socket connected: ${id}`);

    const {roomName} = socket.handshake.query;
    console.log(`Socket roomName: ${roomName}`);
    socket.on('message-to-room', async (msg) => {
        const {text, username} = msg

        const newComment = new Comment({ text, username })
        newComment.roomName = roomName

        try {
            await newComment.save()
            socket.to(roomName).emit('message-to-room', msg);
            socket.in(roomName).emit('message-to-room', msg);
            socket.emit('message-to-room', msg);
        } catch(e) {
            console.log(e)            
        }
    });

    socket.on('disconnect', () => {
        console.log(`Socket disconnected: ${id}`);
    });
});

async function start(PORT, UrlDB) {
    try {
        await mongoose.connect(UrlDB)
        server.listen(PORT)
    } catch(e) {
        console.log(e)
    }
}

const UrlDB = process.env.UrlDB || 'mongodb://localhost:27017/mydb';
const PORT = process.env.PORT || 3000;
start(PORT, UrlDB)
